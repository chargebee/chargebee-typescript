import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class InvoiceEstimate extends Model {
  public recurring: boolean;
  public price_type: string;
  public currency_code: string;
  public sub_total: number;
  public total?: number;
  public credits_applied?: number;
  public amount_paid?: number;
  public amount_due?: number;
  public line_items?: Array<resources.InvoiceEstimateLineItem>;
  public discounts?: Array<resources.InvoiceEstimateDiscount>;
  public taxes?: Array<resources.InvoiceEstimateTax>;
  public line_item_taxes?: Array<resources.InvoiceEstimateLineItemTax>;
  public line_item_tiers?: Array<resources.InvoiceEstimateLineItemTier>;
  public line_item_discounts?: Array<resources.InvoiceEstimateLineItemDiscount>;
  public round_off_amount?: number;
  public customer_id?: string;

  

  // OPERATIONS
  //-----------

} // ~InvoiceEstimate



  // REQUEST PARAMS
  //---------------

export namespace _invoice_estimate {
}
