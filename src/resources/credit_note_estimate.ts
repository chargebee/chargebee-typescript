import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class CreditNoteEstimate extends Model {
  public reference_invoice_id: string;
  public type: string;
  public price_type: string;
  public currency_code: string;
  public sub_total: number;
  public total: number;
  public amount_allocated: number;
  public amount_available: number;
  public line_items?: Array<resources.CreditNoteEstimateLineItem>;
  public discounts?: Array<resources.CreditNoteEstimateDiscount>;
  public taxes?: Array<resources.CreditNoteEstimateTax>;
  public line_item_taxes?: Array<resources.CreditNoteEstimateLineItemTax>;
  public line_item_discounts?: Array<resources.CreditNoteEstimateLineItemDiscount>;
  public line_item_tiers?: Array<resources.CreditNoteEstimateLineItemTier>;
  public round_off_amount?: number;
  public customer_id?: string;

  

  // OPERATIONS
  //-----------

} // ~CreditNoteEstimate



  // REQUEST PARAMS
  //---------------

export namespace _credit_note_estimate {
}
