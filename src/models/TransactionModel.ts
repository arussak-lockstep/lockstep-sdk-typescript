/**
 * Lockstep Platform SDK for TypeScript
 *
 * (c) 2021-2023 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Lockstep Network <support@lockstep.io>
 * @copyright  2021-2023 Lockstep, Inc.
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */


/**
 * Represents detailed transaction information which represents either Invoices, Credit Memos or Payments
 * within the group account.
 */
export type TransactionModel = {

  /**
   * Group account transaction is associated with.
   */
  groupKey: string;

  /**
   * The base currency code of the group.
   */
  baseCurrencyCode: string | null;

  /**
   * An additional reference number that is sometimes used to identify a transaction.
   * The meaning of this field is specific to the ERP or accounting system used by the user.
   */
  referenceNumber: string | null;

  /**
   * The unique ID of the transaction record.
   */
  transactionId: string;

  /**
   * The status of the transaction record.
   *
   * Recognized Invoice status codes are:
   * * `Open` - Represents an invoice that is considered open and needs more work to complete
   * * `Closed` - Represents an invoice that is considered closed and resolved
   *
   * Recognized Payment status codes are:
   * * `Open` - Represents an payment that includes some unassigned amount that has not yet been applied to an invoice
   * * `Closed` - Represents an payment where `UnappliedAmount` will be zero
   */
  transactionStatus: string | null;

  /**
   * The type of the transaction record.
   *
   * Recognized Invoice types are:
   * * `AR Invoice` - Represents an invoice sent by Company to the Customer
   * * `AP Invoice` - Represents an invoice sent by Vendor to the Company
   * * `AR Credit Memo` - Represents a credit memo generated by Company given to Customer
   * * `AP Credit Memo` - Represents a credit memo generated by Vendor given to Company
   *
   * Recognized PaymentType values are:
   * * `AR Payment` - A payment made by a Customer to the Company
   * * `AP Payment` - A payment made by the Company to a Vendor
   */
  transactionType: string | null;

  /**
   * Additional type categorization of the transaction.
   */
  transactionSubType: string | null;

  /**
   * The date when a transaction record was reported.
   */
  transactionDate: string | null;

  /**
   * The date when a transaction record is due for payment or completion.
   */
  dueDate: string | null;

  /**
   * The amount of days past the due date the transaction is left un-closed.
   */
  daysPastDue: number;

  /**
   * The currency code of the transaction.
   */
  currencyCode: string | null;

  /**
   * The total value of this transaction, inclusive or all taxes and line items.
   */
  transactionAmount: number;

  /**
   * The remaining balance of this transaction.
   */
  outstandingAmount: number | null;

  /**
   * The total value of this transaction, inclusive or all taxes and line items in the group's base currency.
   */
  baseCurrencyTransactionAmount: number;

  /**
   * The remaining balance of this transaction in the group's base currency.
   */
  baseCurrencyOutstandingAmount: number | null;

  /**
   * The count of items associated to the transaction.
   *
   * Examples:
   * * Number of payments for an invoice.
   * * Number of invoices a payment or credit memo is applied to.
   */
  transactionDetailCount: number;

  /**
   * Specific transactions have support for pdf retrieval from their respective erp. When this flag is true, an additional
   * call to Invoices/{id}/pdf or Payments/{id}/pdf can be made to retrieve a pdf directly from the erp.
   */
  supportsErpPdfRetrieval: boolean;

  /**
   * The customer associated with this transaction
   */
  transactionCustomerId: string;
};
