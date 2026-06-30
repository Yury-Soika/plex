import { renderToBuffer } from '@react-pdf/renderer';
import InvoiceDocument from '../InvoiceDocument';
import { normalizeInvoice } from '../invoice';

export const runtime = 'nodejs';

export const POST = async (request: Request) => {
  try {
    const invoice = normalizeInvoice(await request.json());
    const buffer = await renderToBuffer(<InvoiceDocument invoice={invoice} />);
    const filename = invoice.invoiceNumber.replace(/[^a-z0-9-]/gi, '_');

    return new Response(new Uint8Array(buffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}.pdf"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Invoice PDF generation failed:', error);

    const message =
      error instanceof Error ? error.message : 'Unknown PDF generation error';

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
