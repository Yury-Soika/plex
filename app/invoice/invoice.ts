export type InvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  unit: InvoiceItemUnit;
  rate: number;
};

export type InvoiceItemUnit = 'quantity' | 'hours';

export type InvoiceParty = {
  name: string;
  registrationNo: string;
  address: string;
  vatNo: string;
};

export type PaymentInfo = {
  bankName: string;
  bankAddress: string;
  iban: string;
  bic: string;
};

export type TaxMode = 'included' | 'excluded';

export type InvoiceData = {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  taxRate: number;
  taxMode: TaxMode;
  sender: InvoiceParty;
  client: InvoiceParty;
  items: InvoiceItem[];
  payment: PaymentInfo;
};

export const emptyInvoiceParty: InvoiceParty = {
  name: '',
  registrationNo: '',
  address: '',
  vatNo: '',
};

export const plexInvoiceClient: InvoiceParty = {
  name: 'Plexrs OÜ',
  registrationNo: '17380248',
  address:
    'Vesivärava tn 50-201, Kesklinna linnaosa, Tallinn, Harju maakond, 10152, EE',
  vatNo: 'EE102929490',
};

export const plexInvoiceItems: InvoiceItem[] = [
  {
    id: 'item-1',
    description: 'Software Development Services',
    quantity: 1,
    unit: 'quantity',
    rate: 200,
  },
];

export const calculateDueDate = (issueDate: string, days = 5) => {
  const date = new Date(`${issueDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);

  return date.toISOString().slice(0, 10);
};

export const getTodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const defaultInvoice: InvoiceData = {
  invoiceNumber: 'INV-2026-001',
  issueDate: getTodayDate(),
  dueDate: calculateDueDate(getTodayDate()),
  currency: 'EUR',
  taxRate: 24,
  taxMode: 'included',
  sender: {
    name: 'GEARSEVEN OÜ',
    registrationNo: '17256264',
    address:
      'Vesivärava tn 50-201, Kesklinna linnaosa, Tallinn, Harju maakond, 10152, EE',
    vatNo: 'EE102975143',
  },
  client: emptyInvoiceParty,
  items: [
    {
      id: 'item-1',
      description: '',
      quantity: 1,
      unit: 'quantity',
      rate: 0,
    },
  ],
  payment: {
    bankName: 'UAB TRAVEL UNION',
    bankAddress: 'VERKIU STR 31B-2',
    iban: 'LT273480021430611400',
    bic: 'UATULT22XXX',
  },
};

export const currencies = ['EUR', 'USD', 'PLN', 'GBP'];

export const createInvoiceItem = (): InvoiceItem => ({
  id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  description: '',
  quantity: 1,
  unit: 'quantity',
  rate: 0,
});

export const formatMoney = (value: number, currency: string) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

export const calculateInvoice = (invoice: InvoiceData) => {
  const itemsTotal = invoice.items.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0,
  );

  if (invoice.taxMode === 'excluded') {
    const subtotal = itemsTotal;
    const tax = subtotal * (invoice.taxRate / 100);
    const total = subtotal + tax;

    return { subtotal, tax, total };
  }

  const total = itemsTotal;
  const subtotal = total / (1 + invoice.taxRate / 100);
  const tax = total - subtotal;

  return { subtotal, tax, total };
};

const coerceNumber = (value: unknown, fallback = 0) => {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : fallback;
};

const coerceText = (value: unknown, fallback = '') =>
  typeof value === 'string' ? value : fallback;

const normalizeTaxMode = (value: unknown): TaxMode =>
  value === 'excluded' ? 'excluded' : defaultInvoice.taxMode;

const normalizeItemUnit = (value: unknown): InvoiceItemUnit =>
  value === 'hours' ? 'hours' : 'quantity';

const normalizeParty = (party: Partial<InvoiceParty> | undefined) => {
  const legacyParty = party as Partial<InvoiceParty> & {
    taxId?: string;
  };

  return {
    name: coerceText(party?.name),
    registrationNo: coerceText(party?.registrationNo),
    address: coerceText(party?.address),
    vatNo: coerceText(party?.vatNo, legacyParty?.taxId),
  };
};

const normalizePayment = (
  payment: Partial<PaymentInfo> | undefined,
): PaymentInfo => ({
  bankName: coerceText(payment?.bankName, defaultInvoice.payment.bankName),
  bankAddress: coerceText(
    payment?.bankAddress,
    defaultInvoice.payment.bankAddress,
  ),
  iban: coerceText(payment?.iban, defaultInvoice.payment.iban),
  bic: coerceText(payment?.bic, defaultInvoice.payment.bic),
});

export const normalizeInvoice = (input: Partial<InvoiceData>): InvoiceData => {
  const items = Array.isArray(input.items)
    ? input.items
        .filter(Boolean)
        .map((item, index) => ({
          id: coerceText(item?.id, `item-${index + 1}`),
          description: coerceText(item?.description),
          quantity: Math.max(coerceNumber(item?.quantity, 1), 0),
          unit: normalizeItemUnit(item?.unit),
          rate: Math.max(coerceNumber(item?.rate), 0),
        }))
    : defaultInvoice.items;

  return {
    invoiceNumber: coerceText(input.invoiceNumber, defaultInvoice.invoiceNumber),
    issueDate: coerceText(input.issueDate, defaultInvoice.issueDate),
    dueDate: coerceText(input.dueDate, defaultInvoice.dueDate),
    currency: currencies.includes(coerceText(input.currency))
      ? coerceText(input.currency)
      : defaultInvoice.currency,
    taxRate: Math.max(coerceNumber(input.taxRate, defaultInvoice.taxRate), 0),
    taxMode: normalizeTaxMode(input.taxMode),
    sender: normalizeParty(input.sender),
    client: normalizeParty(input.client),
    items,
    payment: normalizePayment(input.payment),
  };
};
