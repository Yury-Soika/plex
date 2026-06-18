'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Download, FileText, Plus, Trash2 } from 'lucide-react';
import {
  calculateDueDate,
  createInvoiceItem,
  currencies,
  defaultInvoice,
  plexInvoiceClient,
  plexInvoiceItems,
  type InvoiceData,
  type InvoiceItem,
  type InvoiceItemUnit,
  type InvoiceParty,
  type PaymentInfo,
  type TaxMode,
} from './invoice';

type PartyKey = 'sender' | 'client';
type PartyField = keyof InvoiceParty;

const InvoicePreview = dynamic(() => import('./InvoicePreview'), {
  ssr: false,
  loading: () => (
    <div className='flex h-full items-center justify-center text-sm font-medium text-slate-500'>
      Preparing preview...
    </div>
  ),
});

const partyFields: Record<
  PartyKey,
  { key: PartyField; label: string; multiline?: boolean }[]
> = {
  sender: [
    { key: 'name', label: 'Company name' },
    { key: 'registrationNo', label: 'Registration No.' },
    { key: 'address', label: 'Address', multiline: true },
    { key: 'vatNo', label: 'VAT No.' },
  ],
  client: [
    { key: 'name', label: 'Company name' },
    { key: 'registrationNo', label: 'Registration No.' },
    { key: 'address', label: 'Address', multiline: true },
    { key: 'vatNo', label: 'VAT No.' },
  ],
};

const fieldClass =
  'w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-slate-950 focus:ring-2 focus:ring-slate-200';

const labelClass =
  'mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500';

const updateItem = (
  items: InvoiceItem[],
  id: string,
  patch: Partial<InvoiceItem>,
) => items.map((item) => (item.id === id ? { ...item, ...patch } : item));

const parseNumberInput = (value: string) => {
  const numberValue = Number(value);

  return Number.isFinite(numberValue) ? numberValue : 0;
};

const InvoicePage = () => {
  const [invoice, setInvoice] = useState<InvoiceData>(defaultInvoice);
  const [isGenerating, setIsGenerating] = useState(false);

  const setField = <Key extends keyof InvoiceData>(
    key: Key,
    value: InvoiceData[Key],
  ) => {
    setInvoice((current) => ({ ...current, [key]: value }));
  };

  const setPartyField = (
    party: PartyKey,
    key: keyof InvoiceParty,
    value: string,
  ) => {
    setInvoice((current) => ({
      ...current,
      [party]: { ...current[party], [key]: value },
    }));
  };

  const setPaymentField = (key: keyof PaymentInfo, value: string) => {
    setInvoice((current) => ({
      ...current,
      payment: { ...current.payment, [key]: value },
    }));
  };

  const setIssueDate = (issueDate: string) => {
    setInvoice((current) => ({
      ...current,
      issueDate,
      dueDate: calculateDueDate(issueDate),
    }));
  };

  const applyPlexPreset = () => {
    setInvoice((current) => ({
      ...current,
      client: plexInvoiceClient,
      items: plexInvoiceItems,
    }));
  };

  const downloadPdf = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('/invoice/pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invoice),
      });

      if (!response.ok) {
        throw new Error('PDF generation failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${invoice.invoiceNumber || 'invoice'}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className='min-h-screen bg-slate-50 text-slate-950'>
      <div
        className='mx-auto grid w-full max-w-[108rem] justify-around gap-6 px-4 py-6 sm:px-6 xl:grid-cols-[minmax(40rem,56rem)_auto] lg:px-8'
      >
        <section className='min-w-0'>
          <div className='mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <div className='mb-2 flex items-center gap-2 text-sm font-medium text-slate-500'>
                <FileText className='h-4 w-4' />
                PDF invoice generator
              </div>
              <h1 className='text-2xl font-semibold tracking-normal text-slate-950'>
                Invoice template
              </h1>
            </div>
            <button
              type='button'
              onClick={downloadPdf}
              disabled={isGenerating}
              className='inline-flex h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60'
            >
              <Download className='h-4 w-4' />
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </button>
          </div>

          <div className='grid gap-6 lg:grid-cols-4'>
            <section className='rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-4'>
              <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500'>
                Invoice details
              </h2>
              <div className='grid gap-4 sm:grid-cols-2 2xl:grid-cols-[minmax(0,1fr)_9.5rem_9.5rem_5rem]'>
                <label>
                  <span className={labelClass}>Number</span>
                  <input
                    id='invoice-number'
                    name='invoiceNumber'
                    className={fieldClass}
                    value={invoice.invoiceNumber}
                    onChange={(event) =>
                      setField('invoiceNumber', event.target.value)
                    }
                  />
                </label>
                <label>
                  <span className={labelClass}>Issue date</span>
                  <input
                    id='invoice-issue-date'
                    name='issueDate'
                    type='date'
                    className={fieldClass}
                    value={invoice.issueDate}
                    onChange={(event) => setIssueDate(event.target.value)}
                  />
                </label>
                <label>
                  <span className={labelClass}>Due date</span>
                  <input
                    id='invoice-due-date'
                    name='dueDate'
                    type='date'
                    className={fieldClass}
                    value={invoice.dueDate}
                    onChange={(event) =>
                      setField('dueDate', event.target.value)
                    }
                  />
                </label>
                <label>
                  <span className={labelClass}>Currency</span>
                  <select
                    id='invoice-currency'
                    name='currency'
                    className={fieldClass}
                    value={invoice.currency}
                    onChange={(event) => setField('currency', event.target.value)}
                  >
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </section>

            <section className='grid gap-6 lg:col-span-4 lg:grid-cols-2 2xl:grid-cols-4'>
              {(['sender', 'client'] as PartyKey[]).map((party) => (
                <div
                  key={party}
                  className='rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-2'
                >
                  <div className='mb-4 flex items-center justify-between gap-3'>
                    <h2 className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
                      {party === 'sender' ? 'From' : 'Bill to'}
                    </h2>
                    {party === 'client' ? (
                      <button
                        type='button'
                        onClick={applyPlexPreset}
                        className='inline-flex h-7 items-center justify-center rounded-md border border-slate-300 px-2.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100'
                      >
                        Plex
                      </button>
                    ) : null}
                  </div>
                  <div className='grid gap-4'>
                    {partyFields[party].map((field) => (
                      <label key={field.key}>
                        <span className={labelClass}>{field.label}</span>
                        {field.multiline ? (
                          <textarea
                            id={`${party}-${field.key}`}
                            name={`${party}.${field.key}`}
                            className={`${fieldClass} min-h-24 resize-y`}
                            value={invoice[party][field.key]}
                            onChange={(event) =>
                              setPartyField(
                                party,
                                field.key,
                                event.target.value,
                              )
                            }
                          />
                        ) : (
                          <input
                            id={`${party}-${field.key}`}
                            name={`${party}.${field.key}`}
                            className={fieldClass}
                            value={invoice[party][field.key]}
                            onChange={(event) =>
                              setPartyField(
                                party,
                                field.key,
                                event.target.value,
                              )
                            }
                          />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className='rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-4'>
              <div className='mb-4 flex items-center justify-between gap-3'>
                <h2 className='text-sm font-semibold uppercase tracking-wide text-slate-500'>
                  Line items
                </h2>
                <button
                  type='button'
                  onClick={() =>
                    setField('items', [...invoice.items, createInvoiceItem()])
                  }
                  className='inline-flex h-9 items-center justify-center gap-2 rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100'
                >
                  <Plus className='h-4 w-4' />
                  Add item
                </button>
              </div>

              <div className='grid gap-3'>
                {invoice.items.map((item) => (
                  <div
                    key={item.id}
                    className='grid gap-3 rounded-md border border-slate-200 p-3 lg:grid-cols-[minmax(12rem,1fr)_9rem_5.75rem_2.5rem]'
                  >
                    <label>
                      <span className={labelClass}>Description</span>
                      <input
                        id={`item-${item.id}-description`}
                        name={`items.${item.id}.description`}
                        className={fieldClass}
                        value={item.description}
                        onChange={(event) =>
                          setField(
                            'items',
                            updateItem(invoice.items, item.id, {
                              description: event.target.value,
                            }),
                          )
                        }
                      />
                    </label>
                    <div>
                      <span className={labelClass}>Amount</span>
                      <div className='grid grid-cols-[minmax(0,1fr)_4.25rem] gap-2'>
                        <input
                          id={`item-${item.id}-quantity`}
                          name={`items.${item.id}.quantity`}
                          type='number'
                          min='0'
                          step='0.01'
                          className={fieldClass}
                          value={item.quantity}
                          onChange={(event) =>
                            setField(
                              'items',
                              updateItem(invoice.items, item.id, {
                                quantity: parseNumberInput(event.target.value),
                              }),
                            )
                          }
                        />
                        <select
                          id={`item-${item.id}-unit`}
                          name={`items.${item.id}.unit`}
                          aria-label='Line item unit'
                          className={fieldClass}
                          value={item.unit}
                          onChange={(event) =>
                            setField(
                              'items',
                              updateItem(invoice.items, item.id, {
                                unit: event.target.value as InvoiceItemUnit,
                              }),
                            )
                          }
                        >
                          <option value='quantity'>Qty</option>
                          <option value='hours'>Hrs</option>
                        </select>
                      </div>
                    </div>
                    <label>
                      <span className={labelClass}>Price</span>
                      <input
                        id={`item-${item.id}-rate`}
                        name={`items.${item.id}.rate`}
                        type='number'
                        min='0'
                        step='0.01'
                        className={fieldClass}
                        value={item.rate}
                        onChange={(event) =>
                          setField(
                            'items',
                            updateItem(invoice.items, item.id, {
                              rate: parseNumberInput(event.target.value),
                            }),
                          )
                        }
                      />
                    </label>
                    <button
                      type='button'
                      aria-label='Remove item'
                      title='Remove item'
                      onClick={() =>
                        setField(
                          'items',
                          invoice.items.filter(
                            (currentItem) => currentItem.id !== item.id,
                          ),
                        )
                      }
                      className='inline-flex h-10 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition hover:bg-slate-100 lg:mt-5'
                    >
                      <Trash2 className='h-4 w-4' />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className='rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-4'>
              <div className='grid gap-4 lg:grid-cols-[12.5rem_minmax(0,1fr)]'>
                <div className='grid gap-4'>
                  <label>
                    <span className={labelClass}>Tax rate</span>
                    <input
                      id='invoice-tax-rate'
                      name='taxRate'
                      type='number'
                      min='0'
                      step='0.01'
                      className={fieldClass}
                      value={invoice.taxRate}
                      onChange={(event) =>
                        setField('taxRate', parseNumberInput(event.target.value))
                      }
                    />
                  </label>
                  <div>
                    <span className={labelClass}>Tax mode</span>
                    <div className='grid grid-cols-2 rounded-md border border-slate-300 bg-slate-100 p-1'>
                      {(['included', 'excluded'] as TaxMode[]).map((mode) => (
                        <button
                          key={mode}
                          type='button'
                          aria-pressed={invoice.taxMode === mode}
                          onClick={() => setField('taxMode', mode)}
                          className={`h-8 rounded px-2 text-xs font-semibold capitalize transition ${
                            invoice.taxMode === mode
                              ? 'bg-white text-slate-950 shadow-sm'
                              : 'text-slate-500 hover:text-slate-950'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='grid gap-4 sm:grid-cols-2 2xl:grid-cols-[minmax(0,1fr)_12rem]'>
                  <label>
                    <span className={labelClass}>Bank name</span>
                    <input
                      id='payment-bank-name'
                      name='payment.bankName'
                      className={fieldClass}
                      value={invoice.payment.bankName}
                      onChange={(event) =>
                        setPaymentField('bankName', event.target.value)
                      }
                    />
                  </label>
                  <label>
                    <span className={labelClass}>Bank address</span>
                    <input
                      id='payment-bank-address'
                      name='payment.bankAddress'
                      className={fieldClass}
                      value={invoice.payment.bankAddress}
                      onChange={(event) =>
                        setPaymentField('bankAddress', event.target.value)
                      }
                    />
                  </label>
                  <label>
                    <span className={labelClass}>IBAN</span>
                    <input
                      id='payment-iban'
                      name='payment.iban'
                      className={fieldClass}
                      value={invoice.payment.iban}
                      onChange={(event) =>
                        setPaymentField('iban', event.target.value)
                      }
                    />
                  </label>
                  <label>
                    <span className={labelClass}>BIC</span>
                    <input
                      id='payment-bic'
                      name='payment.bic'
                      className={fieldClass}
                      value={invoice.payment.bic}
                      onChange={(event) =>
                        setPaymentField('bic', event.target.value)
                      }
                    />
                  </label>
                </div>
              </div>
            </section>
          </div>
        </section>

        <aside className='min-w-0 xl:h-full xl:justify-self-center'>
          <div className='aspect-[210/297] w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm xl:h-full xl:w-auto'>
            <div className='h-full w-full bg-slate-100'>
              <InvoicePreview invoice={invoice} />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default InvoicePage;
