'use client';

import { PDFViewer } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';
import type { InvoiceData } from './invoice';

const InvoicePreview = ({ invoice }: { invoice: InvoiceData }) => (
  <PDFViewer
    showToolbar={false}
    style={{
      width: '100%',
      height: '100%',
      border: 0,
      backgroundColor: '#f8fafc',
    }}
  >
    <InvoiceDocument invoice={invoice} />
  </PDFViewer>
);

export default InvoicePreview;
