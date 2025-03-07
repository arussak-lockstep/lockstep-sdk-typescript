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

import { PaymentAppliedModel } from "..";
import { NoteModel } from "..";
import { AttachmentModel } from "..";
import { CustomFieldDefinitionModel } from "..";
import { CustomFieldValueModel } from "..";

/**
 * A Payment represents money sent from one company to another.  A single payment may contain payments for
 * one or more invoices; it is also possible for payments to be made in advance of an invoice, for example,
 * as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of
 * the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a
 * Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated
 * the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which
 * represents a deposit that has been paid and not yet applied to an Invoice.
 */
export type PaymentModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The unique ID of this record, automatically assigned by Lockstep when this record is
   * added to the Lockstep platform.
   *
   * For the ID of this record in its originating financial system, see `ErpKey`.
   */
  paymentId: string;

  /**
   * The ID of the company to which this payment belongs.
   */
  companyId: string;

  /**
   * The unique ID of this record as it was known in its originating financial system.
   *
   * If this company record was imported from a financial system, it will have the value `ErpKey`
   * set to the original primary key number of the record as it was known in the originating financial
   * system.  If this record was not imported, this value will be `null`.
   *
   * For more information, see [Identity Columns](https://developer.lockstep.io/docs/identity-columns).
   */
  erpKey: string | null;

  /**
   * Possible statuses for a record that supports ERP Update.
   */
  erpUpdateStatus: number;

  /**
   * Possible actions for a record that supports ERP Update.
   */
  erpUpdateAction: number;

  /**
   * The type of payment, AR Payment or AP Payment.
   *
   * Recognized PaymentType values are:
   * * `AR Payment` - A payment made by a Customer to the Company
   * * `AP Payment` - A payment made by the Company to a Vendor
   */
  paymentType: string;

  /**
   * Cash, check, credit card, wire transfer.
   *
   * Recognized TenderType values are:
   * * `Cash` - A cash payment or other direct transfer.
   * * `Check` - A check payment.
   * * `Credit Card` - A payment made via a credit card.
   * * `Wire Transfer` - A payment made via wire transfer from another financial institution.
   * * `Other` - A payment made via another method not listed above.
   */
  tenderType: string;

  /**
   * True if this payment includes some unassigned amount that has not yet been applied to an invoice.  If this
   * value is true, the field `UnappliedAmount` will be nonzero.
   */
  isOpen: boolean;

  /**
   * Memo or reference text (ex. memo field on a check).
   */
  memoText: string | null;

  /**
   * The date when this payment was received.  This typically is the date when an accounting employee recorded
   * that they received notification that the payment had occurred, whether they were notified by email, postal
   * mail, or financial transaction notification.
   */
  paymentDate: string;

  /**
   * The date when a payment was posted to a ledger.  This date is often determined by a company's accounting
   * practices and may be different than the date when the payment was received.  This date may be affected by
   * issues such as temporary holds on funds transferred, bank holidays, or other actions.
   */
  postDate: string;

  /**
   * Total amount of this payment in it's received currency.
   */
  paymentAmount: number;

  /**
   * Unapplied balance of this payment in it's received currency.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  unappliedAmount: number;

  /**
   * The ISO 4217 currency code for this payment.
   *
   * For a list of ISO 4217 currency codes, see [Query Currencies](https://developer.lockstep.io/reference/get_api-v1-definitions-currencies).
   */
  currencyCode: string | null;

  /**
   * The Bank account id for the company to which this payment belongs.
   */
  bankAccountId: string | null;

  /**
   * Reference code for the payment for the given Erp system.
   */
  referenceCode: string | null;

  /**
   * The date on which this record was created.
   */
  created: string;

  /**
   * The ID of the user who created this payment.
   */
  createdUserId: string;

  /**
   * The date on which this record was last modified.
   */
  modified: string;

  /**
   * The ID of the user who last modified this payment.
   */
  modifiedUserId: string;

  /**
   * The AppEnrollmentId of the application that imported this record.  For accounts
   * with more than one financial system connected, this field identifies the originating
   * financial system that produced this record.  This value is null if this record
   * was not loaded from an external ERP or financial system.
   */
  appEnrollmentId: string | null;

  /**
   * Is the payment voided?
   */
  isVoided: boolean;

  /**
   * Is the payment in dispute?
   */
  inDispute: boolean;

  /**
   * The Currency Rate used to get from the account's base currency to the payment amount.
   */
  currencyRate: number;

  /**
   * Total amount of this payment in the group's base currency.
   */
  baseCurrencyPaymentAmount: number;

  /**
   * Unapplied balance of this payment in the group's base currency.  If this amount is nonzero, the field `IsOpen` will be true.
   */
  baseCurrencyUnappliedAmount: number;

  /**
   * The status of this payment within Service Fabric.
   * "UNAUTHORISED" "PENDING" "PAID" "PAID_OFFLINE" "FAILED" "CANCELLED" "REJECTED" "REFUNDED" "PARTIALLY" "PARTIALLY_REFUNDED"
   */
  serviceFabricStatus: string | null;

  /**
   * The date on which this record was last modified in source ERP.
   */
  sourceModifiedDate: string | null;

  /**
   * All applications this payment is associated with.
   * To retrieve this collection, specify `Applications` in the "Include" parameter for your query.
   */
  applications: PaymentAppliedModel[] | null;

  /**
   * A collection of notes linked to this record.  To retrieve this collection, specify `Notes` in the
   * `include` parameter when retrieving data.
   *
   * To create a note, use the [Create Note](https://developer.lockstep.io/reference/post_api-v1-notes)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  notes: NoteModel[] | null;

  /**
   * A collection of attachments linked to this record.  To retrieve this collection, specify `Attachments` in
   * the `include` parameter when retrieving data.
   *
   * To create an attachment, use the [Upload Attachment](https://developer.lockstep.io/reference/post_api-v1-attachments)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  attachments: AttachmentModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldDefinitions` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldDefinitions: CustomFieldDefinitionModel[] | null;

  /**
   * A collection of custom fields linked to this record.  To retrieve this collection, specify
   * `CustomFieldValues` in the `include` parameter when retrieving data.
   *
   * To create a custom field, use the [Create Custom Field](https://developer.lockstep.io/reference/post_api-v1-customfieldvalues)
   * endpoint with the `TableKey` to `Payment` and the `ObjectKey` set to the `PaymentId` for this record.  For
   * more information on extensibility, see [linking extensible metadata to objects](https://developer.lockstep.io/docs/custom-fields#linking-metadata-to-an-object).
   */
  customFieldValues: CustomFieldValueModel[] | null;
};
