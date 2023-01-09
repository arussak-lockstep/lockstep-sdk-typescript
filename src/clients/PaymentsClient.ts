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

import { LockstepApi } from "..";
import { LockstepResponse } from "..";
import { PaymentModel } from "..";
import { ActionResultModel } from "..";
import { FetchResult } from "..";
import { Blob } from "buffer";
import { PaymentSummaryModelPaymentSummaryTotalsModelSummaryFetchResult } from "..";
import { PaymentDetailHeaderModel } from "..";
import { PaymentDetailModel } from "..";

export class PaymentsClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Payment specified by this unique identifier, optionally including nested data sets.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param id The unique Lockstep Platform ID number of this Payment; NOT the customer's ERP key
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Applications, Notes, Attachments, CustomFields
   */
  retrievePayment(id: string, include?: string): Promise<LockstepResponse<PaymentModel>> {
    const url = `/api/v1/Payments/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<PaymentModel>("get", url, options, null);
  }

  /**
   * Updates an existing Payment with the information supplied to this PATCH call.
   *
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param id The unique Lockstep Platform ID number of the Payment to update; NOT the customer's ERP key
   * @param body A list of changes to apply to this Payment
   */
  updatePayment(id: string, body: object): Promise<LockstepResponse<PaymentModel>> {
    const url = `/api/v1/Payments/${id}`;
    return this.client.request<PaymentModel>("patch", url, null, body);
  }

  /**
   * Deletes the Payment referred to by this unique identifier.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param id The unique Lockstep Platform ID number of the Payment to delete; NOT the customer's ERP key
   */
  deletePayment(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Payments/${id}`;
    return this.client.request<ActionResultModel>("delete", url, null, null);
  }

  /**
   * Creates one or more Payments within this account and returns the records as created.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param body The Payments to create
   */
  createPayments(body: PaymentModel[]): Promise<LockstepResponse<PaymentModel[]>> {
    const url = `/api/v1/Payments`;
    return this.client.request<PaymentModel[]>("post", url, null, body);
  }

  /**
   * Queries Payments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Applications, Notes, Attachments, CustomFields
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryPayments(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<PaymentModel>>> {
    const url = `/api/v1/Payments/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<PaymentModel>>("get", url, options, null);
  }

  /**
   * Retrieves a PDF file for this payment if it has been synced using an app enrollment to one of the supported apps.
   *
   * Supported apps: Quickbooks Online
   *
   * @param id The unique Lockstep Platform ID number of this payment; NOT the customer's ERP key
   */
  retrievepaymentPDF(id: string): Promise<LockstepResponse<Blob>> {
    const url = `/api/v1/Payments/${id}/pdf`;
    return this.client.requestBlob("get", url, null, null);
  }

  /**
   * Queries Payments for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  This query endpoint provides extra data about the summary of payment information.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   *
   * A Payment represents money sent from one company to another.  A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit.  The creator of the Payment is identified by the `CustomerId` field, and the recipient of the Payment is identified by the `CompanyId` field.  Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment.  Payments that have not been fully applied have a nonzero `UnappliedAmount` value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Summary, Aging
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryPaymentSummaryView(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<PaymentSummaryModelPaymentSummaryTotalsModelSummaryFetchResult>> {
    const url = `/api/v1/Payments/views/summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<PaymentSummaryModelPaymentSummaryTotalsModelSummaryFetchResult>("get", url, options, null);
  }

  /**
   * Retrieves aggregated payment data from your account.
   *
   */
  retrievePaymentDetailHeader(): Promise<LockstepResponse<PaymentDetailHeaderModel>> {
    const url = `/api/v1/Payments/views/detail-header`;
    return this.client.request<PaymentDetailHeaderModel>("get", url, null, null);
  }

  /**
   * Queries Payments within the Lockstep platform using the specified filtering, sorting, nested fetch, and pagination rules requested.
   *
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website. A Payment represents money sent from one company to another. A single payment may contain payments for one or more invoices; it is also possible for payments to be made in advance of an invoice, for example, as a deposit. The creator of the Payment is identified by the CustomerId field, and the recipient of the Payment is identified by the CompanyId field. Most Payments are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the Payment. Payments that have not been fully applied have a nonzero UnappliedAmount value, which represents a deposit that has been paid and not yet applied to an Invoice.
   *
   * @param filter The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize The page size for results (default 250, maximum of 500). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryPaymentDetailView(filter?: string, include?: string, order?: string, pageSize?: number, pageNumber?: number): Promise<LockstepResponse<FetchResult<PaymentDetailModel>>> {
    const url = `/api/v1/Payments/views/detail`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<PaymentDetailModel>>("get", url, options, null);
  }
}
