import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class QuotedRamp extends Model {
  public id: string;
  public line_items?: Array<LineItem>;
  public discounts?: Array<Discount>;
  public item_tiers?: Array<ItemTier>;

  

  // OPERATIONS
  //-----------

} // ~QuotedRamp

export class LineItem extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public metered_quantity?: string;
  public unit_price?: number;
  public unit_price_in_decimal?: string;
  public amount?: number;
  public amount_in_decimal?: string;
  public billing_period?: number;
  public billing_period_unit?: string;
  public free_quantity?: number;
  public free_quantity_in_decimal?: string;
  public billing_cycles?: number;
  public service_period_days?: number;
  public charge_on_event?: string;
  public charge_once?: boolean;
  public charge_on_option?: string;
  public start_date?: number;
  public end_date?: number;
  public ramp_tier_id?: string;
  public discount_amount?: number;
  public md_discount_amount?: string;
  public item_level_discount_amount?: number;
  public md_item_level_discount_amount?: string;
  public discount_per_billing_cycle?: number;
  public discount_per_billing_cycle_in_decimal?: string;
  public item_level_discount_per_billing_cycle?: number;
  public item_level_discount_per_billing_cycle_in_decimal?: string;
  public net_amount?: number;
  public md_net_amount?: string;
  public amount_per_billing_cycle?: number;
  public amount_per_billing_cycle_in_decimal?: string;
  public net_amount_per_billing_cycle?: number;
  public net_amount_per_billing_cycle_in_decimal?: string;
} // ~LineItem

export class Discount extends Model {
  public id: string;
  public name: string;
  public invoice_name?: string;
  public type: string;
  public percentage?: number;
  public amount?: number;
  public duration_type: string;
  public entity_type: string;
  public entity_id?: string;
  public period?: number;
  public period_unit?: string;
  public included_in_mrr: boolean;
  public apply_on: string;
  public apply_on_item_type?: string;
  public item_price_id?: string;
  public created_at: number;
  public updated_at?: number;
  public start_date?: number;
  public end_date?: number;
} // ~Discount

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
  public ramp_tier_id?: string;
} // ~ItemTier



  // REQUEST PARAMS
  //---------------

export namespace _quoted_ramp {
}
