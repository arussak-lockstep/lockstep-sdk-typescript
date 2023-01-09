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
 * Contains group level payment data.
 */
export type PaymentDetailHeaderModel = {

  /**
   * The GroupKey uniquely identifies a single Lockstep Platform account.  All records for this
   * account will share the same GroupKey value.  GroupKey values cannot be changed once created.
   *
   * For more information, see [Accounts and GroupKeys](https://developer.lockstep.io/docs/accounts-and-groupkeys).
   */
  groupKey: string;

  /**
   * The base currency code of the group.
   */
  baseCurrencyCode: string | null;

  /**
   * The total number of Customers.
   */
  customerCount: number | null;

  /**
   * The total amount collected in the group's base currency.
   */
  amountCollected: number | null;

  /**
   * The total unapplied amount in the group's base currency.
   */
  unappliedAmount: number | null;

  /**
   * The number of paid invoices.
   */
  paidInvoiceCount: number | null;

  /**
   * The number of open invoices.
   */
  openInvoiceCount: number | null;
};
