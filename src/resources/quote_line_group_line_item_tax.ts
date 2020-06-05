import {Model} from "./model";

export class QuoteLineGroupLineItemTax extends Model {
  public line_item_id?: string;
  public tax_name: string;
  public tax_rate: number;
  public is_partial_tax_applied?: boolean;
  public is_non_compliance_tax?: boolean;
  public taxable_amount: number;
  public tax_amount: number;
  public tax_juris_type?: string;
  public tax_juris_name?: string;
  public tax_juris_code?: string;
  public tax_amount_in_local_currency?: number;
  public local_currency_code?: string;
}
