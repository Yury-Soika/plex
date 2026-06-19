'use client';

import { PDFViewer } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';
import type { InvoiceData } from './invoice';

const InvoicePreview = ({ invoice }: { invoice: InvoiceData }) => (
  <div className='relative h-full w-full overflow-hidden bg-white'>
    <PDFViewer
      showToolbar={false}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        // Oversize the iframe so the PDF plugin's native scrollbar and its
        // sub-pixel fit-to-width overflow fall below the clipped (A4) frame.
        height: 'calc(100% + 48px)',
        border: 0,
        backgroundColor: '#ffffff',
      }}
    >
      <InvoiceDocument invoice={invoice} />
    </PDFViewer>
  </div>
);

export default InvoicePreview;
