import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class QuoteLineGroup extends Model {
  public version?: number;
  public id?: string;
  public sub_total: number;
  public total?: number;
  public credits_applied?: number;
  public amount_paid?: number;
  public amount_due?: number;
  public charge_event?: string;
  public billing_cycle_number?: number;
  public line_items?: Array<resources.QuoteLineGroupLineItem>;
  public discounts?: Array<resources.QuoteLineGroupDiscount>;
  public line_item_discounts?: Array<resources.QuoteLineGroupLineItemDiscount>;
  public taxes?: Array<resources.QuoteLineGroupTax>;
  public line_item_taxes?: Array<resources.QuoteLineGroupLineItemTax>;

  

  // OPERATIONS
  //-----------

} // ~QuoteLineGroup



  // REQUEST PARAMS
  //---------------

export namespace _quote_line_group {
}
