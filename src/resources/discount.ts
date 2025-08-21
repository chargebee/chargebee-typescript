import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Discount extends Model {
  public id: string;
  public invoice_name?: string;
  public type: string;
  public percentage?: number;
  public amount?: number;
  public quantity?: number;
  public currency_code?: string;
  public duration_type: string;
  public period?: number;
  public period_unit?: string;
  public included_in_mrr: boolean;
  public apply_on: string;
  public item_price_id?: string;
  public created_at: number;
  public apply_till?: number;
  public applied_count?: number;
  public coupon_id: string;
  public index: number;

  

  // OPERATIONS
  //-----------

} // ~Discount



  // REQUEST PARAMS
  //---------------

export namespace _discount {
}
