/**
 * Lockstep Software Development Kit for JavaScript / TypeScript
 *
 * (c) 2021-2022 Lockstep, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Ted Spence <tspence@lockstep.io>
 * @copyright  2021-2022 Lockstep, Inc.
 * @version    2021.39
 * @link       https://github.com/Lockstep-Network/lockstep-sdk-typescript
 */

import { LockstepApi } from "../LockstepApi.js";
import { LockstepResponse } from "../models/LockstepResponse.js";
import { InvoiceModel } from "../models/DataModels.js";
import { ActionResultModel } from "../models/ActionResultModel.js";
import { FetchResult } from "../models/FetchResult.js";
import { InvoiceSummaryModel } from "../models/DataModels.js";
import { AtRiskInvoiceSummaryModel } from "../models/DataModels.js";

export class InvoicesClient {
  private readonly client: LockstepApi;

  /**
   * Internal constructor for this client library
   */
  public constructor(client: LockstepApi) {
    this.client = client;
  }

  /**
   * Retrieves the Invoice specified by this unique identifier, optionally including nested data sets.
   * 
   * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
   * 
   * @param id - The unique Lockstep Platform ID number of this invoice; NOT the customer's ERP key
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Addresses, Lines, Payments, Notes, Attachments, Company, Customer, CustomFields, CreditMemos
   */
  retrieveInvoice(id: string, include: string): Promise<LockstepResponse<InvoiceModel>> {
    const url = `/api/v1/Invoices/${id}`;
    const options = {
      params: {
        include,
      },
    };
    return this.client.request<InvoiceModel>('get', url, options, null);
  }

  /**
   * Updates an existing Invoice with the information supplied to this PATCH call.
   * 
   * The PATCH method allows you to change specific values on the object while leaving other values alone.  As input you should supply a list of field names and new values.  If you do not provide the name of a field, that field will remain unchanged.  This allows you to ensure that you are only updating the specific fields desired.  An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
   * 
   * @param id - The unique Lockstep Platform ID number of the invoice to update; NOT the customer's ERP key
   * @param body - A list of changes to apply to this Invoice
   */
  updateInvoice(id: string, body: object): Promise<LockstepResponse<InvoiceModel>> {
    const url = `/api/v1/Invoices/${id}`;
    return this.client.request<InvoiceModel>('patch', url, null, body);
  }

  /**
   * Deletes the Invoice referred to by this unique identifier. An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
   * 
   * @param id - The unique Lockstep Platform ID number of the invoice to delete; NOT the customer's ERP key
   */
  deleteInvoice(id: string): Promise<LockstepResponse<ActionResultModel>> {
    const url = `/api/v1/Invoices/${id}`;
    return this.client.request<ActionResultModel>('delete', url, null, null);
  }

  /**
   * Creates one or more Invoices within this account and returns the records as created.
   * 
   * An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
   * 
   * @param body - The Invoices to create
   */
  createInvoices(body: InvoiceModel[]): Promise<LockstepResponse<InvoiceModel[]>> {
    const url = `/api/v1/Invoices`;
    return this.client.request<InvoiceModel[]>('post', url, null, body);
  }

  /**
   * Queries Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.  An Invoice represents a bill sent from one company to another.  The creator of the invoice is identified by the `CompanyId` field, and the recipient of the invoice is identified by the `CustomerId` field.  Most invoices are uniquely identified both by a Lockstep Platform ID number and a customer ERP "key" that was generated by the system that originated the invoice.  Invoices have a total amount and a due date, and when some payments have been made on the Invoice the `TotalAmount` and the `OutstandingBalanceAmount` may be different.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. Available collections: Addresses, Lines, Payments, Notes, Attachments, Company, Customer, CustomFields, CreditMemos
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryInvoices(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<InvoiceModel>>> {
    const url = `/api/v1/Invoices/query`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<InvoiceModel>>('get', url, options, null);
  }

  /**
   * Queries Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  Display the results using the Invoice Summary View format.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   * 
   * The Invoice Summary View represents a slightly different view of the data and includes some extra fields that might be useful.  For more information, see the data format of the Invoice Summary Model.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryInvoiceSummaryView(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<InvoiceSummaryModel>>> {
    const url = `/api/v1/Invoices/views/summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<InvoiceSummaryModel>>('get', url, options, null);
  }

  /**
   * Queries At Risk Invoices for this account using the specified filtering, sorting, nested fetch, and pagination rules requested.  Display the results using the At Risk Invoice Summary View format.
   * 
   * More information on querying can be found on the [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight) page on the Lockstep Developer website.
   * 
   * The At Risk Invoice Summary View represents a slightly different view of the data and includes some extra fields that might be useful.  For more information, see the data format of the At Risk Invoice Summary Model.
   * 
   * @param filter - The filter for this query. See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param include - To fetch additional data on this object, specify the list of elements to retrieve. No collections are currently available but may be offered in the future
   * @param order - The sort order for this query. See See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageSize - The page size for results (default 200). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   * @param pageNumber - The page number for results (default 0). See [Searchlight Query Language](https://developer.lockstep.io/docs/querying-with-searchlight)
   */
  queryAtRiskInvoiceSummaryView(filter: string, include: string, order: string, pageSize: number, pageNumber: number): Promise<LockstepResponse<FetchResult<AtRiskInvoiceSummaryModel>>> {
    const url = `/api/v1/Invoices/views/at-risk-summary`;
    const options = {
      params: {
        filter,
        include,
        order,
        pageSize,
        pageNumber,
      },
    };
    return this.client.request<FetchResult<AtRiskInvoiceSummaryModel>>('get', url, options, null);
  }
}
