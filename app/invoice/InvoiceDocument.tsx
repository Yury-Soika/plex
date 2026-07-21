import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import {
  calculateInvoice,
  type InvoiceData,
  type InvoiceItem,
} from './invoice';

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    fontFamily: 'Helvetica',
    color: '#111111',
    backgroundColor: '#ffffff',
    fontSize: 9.5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 31,
    fontWeight: 700,
    color: '#000000',
  },
  headerMeta: {
    flexDirection: 'row',
    gap: 26,
  },
  metaLabel: {
    color: '#444444',
    fontSize: 9.5,
    marginBottom: 5,
  },
  metaValue: {
    color: '#111111',
    fontSize: 9.5,
  },
  divider: {
    borderBottom: '1px solid #e0e0e0',
    marginBottom: 18,
  },
  partyGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  partyBlock: {
    width: '44%',
  },
  sectionLabel: {
    fontSize: 9.5,
    fontWeight: 700,
    color: '#111111',
    marginBottom: 6,
  },
  partyName: {
    color: '#333333',
    fontSize: 9.5,
    marginBottom: 2,
  },
  partyLine: {
    color: '#444444',
    lineHeight: 1.22,
  },
  amountDue: {
    fontSize: 18,
    fontWeight: 700,
    color: '#111111',
    marginBottom: 15,
  },
  table: {
    marginBottom: 12,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #eeeeee',
  },
  tableHeader: {
    borderBottom: '1px solid #555555',
  },
  tableCell: {
    paddingVertical: 8,
    paddingRight: 6,
  },
  headerCell: {
    fontWeight: 700,
    color: '#111111',
  },
  descriptionCell: {
    width: '45%',
  },
  qtyCell: {
    width: '12%',
    textAlign: 'right',
  },
  unitCell: {
    width: '17%',
    textAlign: 'right',
  },
  taxCell: {
    width: '13%',
    textAlign: 'right',
  },
  totalCell: {
    width: '13%',
    textAlign: 'right',
  },
  totals: {
    marginLeft: 'auto',
    width: 250,
    marginBottom: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  totalLabel: {
    color: '#444444',
  },
  totalValue: {
    color: '#111111',
    textAlign: 'right',
  },
  amountDueRow: {
    borderTop: '1px solid #eeeeee',
    marginTop: 4,
    paddingTop: 10,
  },
  amountDueLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: '#111111',
  },
  amountDueValue: {
    fontSize: 12,
    fontWeight: 700,
    color: '#111111',
  },
  paymentSection: {
    marginTop: 6,
  },
  paymentDivider: {
    borderBottom: '1px solid #eeeeee',
    marginTop: 8,
    marginBottom: 10,
  },
  paymentGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentIntro: {
    width: '30%',
    color: '#444444',
    lineHeight: 1.25,
  },
  paymentDetails: {
    width: '58%',
  },
  paymentHeading: {
    fontWeight: 700,
    color: '#111111',
    marginBottom: 7,
  },
  bankRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bankLabel: {
    width: 98,
    color: '#555555',
  },
  bankValue: {
    flex: 1,
    color: '#111111',
    lineHeight: 1.15,
  },
});

const formatInvoiceMoney = (value: number, currency: string) =>
  `${(Number.isFinite(value) ? value : 0).toFixed(2)} ${currency}`;

const formatPlainNumber = (value: number) =>
  (Number.isFinite(value) ? value : 0).toFixed(2);

const formatHeadlineMoney = (value: number, currency: string) => {
  const safeValue = Number.isFinite(value) ? value : 0;
  const formatted = Number.isInteger(safeValue)
    ? safeValue.toFixed(0)
    : safeValue.toFixed(2);

  return `${formatted} ${currency}`;
};

const formatDate = (value: string) => {
  const date = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const formatPercent = (value: number) => {
  const safeValue = Number.isFinite(value) ? value : 0;

  return Number.isInteger(safeValue)
    ? safeValue.toFixed(0)
    : safeValue.toFixed(2);
};

const calculateItemAmounts = (item: InvoiceItem, invoice: InvoiceData) => {
  const quantity = item.quantity || 1;
  const rowInput = item.quantity * item.rate;

  if (invoice.taxMode === 'excluded') {
    const netAmount = rowInput;
    const taxAmount = netAmount * (invoice.taxRate / 100);
    const grossAmount = netAmount + taxAmount;

    return {
      unitPrice: netAmount / quantity,
      grossAmount,
    };
  }

  const grossAmount = rowInput;
  const netAmount = grossAmount / (1 + invoice.taxRate / 100);

  return {
    unitPrice: netAmount / quantity,
    grossAmount,
  };
};

const PartyBlock = ({
  label,
  party,
}: {
  label: string;
  party: InvoiceData['sender'];
}) => (
  <View style={styles.partyBlock}>
    <Text style={styles.sectionLabel}>{label}</Text>
    <Text style={styles.partyName}>{party.name}</Text>
    {party.registrationNo ? (
      <Text style={styles.partyLine}>Reg. No.: {party.registrationNo}</Text>
    ) : null}
    <Text style={styles.partyLine}>{party.address}</Text>
    {party.vatNo ? (
      <Text style={styles.partyLine}>VAT No.: {party.vatNo}</Text>
    ) : null}
  </View>
);

const ItemRow = ({
  item,
  invoice,
}: {
  item: InvoiceItem;
  invoice: InvoiceData;
}) => {
  const amounts = calculateItemAmounts(item, invoice);

  return (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.descriptionCell]}>
        {item.description || 'Invoice item'}
      </Text>
      <Text style={[styles.tableCell, styles.qtyCell]}>{item.quantity}</Text>
      <Text style={[styles.tableCell, styles.unitCell]}>
        {formatPlainNumber(amounts.unitPrice)}
      </Text>
      <Text style={[styles.tableCell, styles.taxCell]}>
        {invoice.taxRate}%
      </Text>
      <Text style={[styles.tableCell, styles.totalCell]}>
        {formatPlainNumber(amounts.grossAmount)}
      </Text>
    </View>
  );
};

const getQuantityHeader = (items: InvoiceItem[]) => {
  const hasHours = items.some((item) => item.unit === 'hours');
  const hasQuantity = items.some((item) => item.unit !== 'hours');

  if (hasHours && hasQuantity) {
    return 'Qty / Hours';
  }

  return hasHours ? 'Hours' : 'Quantity';
};

const InvoiceDocument = ({ invoice }: { invoice: InvoiceData }) => {
  const totals = calculateInvoice(invoice);
  const quantityHeader = getQuantityHeader(invoice.items);

  return (
    <Document
      title={`Invoice ${invoice.invoiceNumber}`}
      author={invoice.sender.name}
    >
      <Page size='A4' style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Invoice</Text>
          <View style={styles.headerMeta}>
            <View>
              <Text style={styles.metaLabel}>Invoice number</Text>
              <Text style={styles.metaValue}>{invoice.invoiceNumber}</Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>Issue date</Text>
              <Text style={styles.metaValue}>
                {formatDate(invoice.issueDate)}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.partyGrid}>
          <PartyBlock label='Billed to' party={invoice.client} />
          <PartyBlock label='Issued by' party={invoice.sender} />
        </View>

        <Text style={styles.amountDue}>
          {formatHeadlineMoney(totals.total, invoice.currency)} due by{' '}
          {formatDate(invoice.dueDate)}
        </Text>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text
              style={[
                styles.tableCell,
                styles.headerCell,
                styles.descriptionCell,
              ]}
            >
              Product or service
            </Text>
            <Text style={[styles.tableCell, styles.headerCell, styles.qtyCell]}>
              {quantityHeader}
            </Text>
            <Text
              style={[styles.tableCell, styles.headerCell, styles.unitCell]}
            >
              Unit price
            </Text>
            <Text style={[styles.tableCell, styles.headerCell, styles.taxCell]}>
              Tax
            </Text>
            <Text
              style={[styles.tableCell, styles.headerCell, styles.totalCell]}
            >
              Total
            </Text>
          </View>
          {invoice.items.map((item) => (
            <ItemRow key={item.id} item={item} invoice={invoice} />
          ))}
        </View>

        <View style={styles.totals}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Amount Before Taxes</Text>
            <Text style={styles.totalValue}>
              {formatInvoiceMoney(totals.subtotal, invoice.currency)}
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              KM {formatPercent(invoice.taxRate)}%
            </Text>
            <Text style={styles.totalValue}>
              {formatInvoiceMoney(totals.tax, invoice.currency)}
            </Text>
          </View>
          <View style={[styles.totalRow, styles.amountDueRow]}>
            <Text style={styles.amountDueLabel}>Amount Due</Text>
            <Text style={styles.amountDueValue}>
              {formatInvoiceMoney(totals.total, invoice.currency)}
            </Text>
          </View>
        </View>

        <View style={styles.paymentSection}>
          <Text style={styles.sectionLabel}>Ways to pay</Text>
          <View style={styles.paymentDivider} />
          <View style={styles.paymentGrid}>
            <Text style={styles.paymentIntro}>
              Use these details to pay {invoice.currency} by bank transfer.
            </Text>
            <View style={styles.paymentDetails}>
              <Text style={styles.paymentHeading}>Bank details</Text>
              <View style={styles.bankRow}>
                <Text style={styles.bankLabel}>Reference</Text>
                <Text style={styles.bankValue}>{invoice.invoiceNumber}</Text>
              </View>
              <View style={styles.bankRow}>
                <Text style={styles.bankLabel}>Account holder</Text>
                <Text style={styles.bankValue}>{invoice.sender.name}</Text>
              </View>
              {invoice.payment.iban ? (
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>IBAN</Text>
                  <Text style={styles.bankValue}>{invoice.payment.iban}</Text>
                </View>
              ) : null}
              {invoice.payment.bic ? (
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>BIC</Text>
                  <Text style={styles.bankValue}>{invoice.payment.bic}</Text>
                </View>
              ) : null}
              {invoice.payment.bankName || invoice.payment.bankAddress ? (
                <View style={styles.bankRow}>
                  <Text style={styles.bankLabel}>Bank name and address</Text>
                  <Text style={styles.bankValue}>
                    {[invoice.payment.bankName, invoice.payment.bankAddress]
                      .filter(Boolean)
                      .join('\n')}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;
