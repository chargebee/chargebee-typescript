import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class QuotedSubscription extends Model {
  public id: string;
  public plan_id: string;
  public plan_quantity: number;
  public plan_unit_price?: number;
  public setup_fee?: number;
  public billing_period?: number;
  public billing_period_unit?: string;
  public start_date?: number;
  public trial_end?: number;
  public remaining_billing_cycles?: number;
  public po_number?: string;
  public auto_collection?: string;
  public addons?: Array<Addon>;
  public event_based_addons?: Array<EventBasedAddon>;
  public coupons?: Array<Coupon>;
  public subscription_items?: Array<SubscriptionItem>;
  public item_tiers?: Array<ItemTier>;

  

  // OPERATIONS
  //-----------

} // ~QuotedSubscription

export class Addon extends Model {
  public id: string;
  public quantity?: number;
  public unit_price?: number;
  public amount?: number;
  public trial_end?: number;
  public remaining_billing_cycles?: number;
  public quantity_in_decimal?: string;
  public unit_price_in_decimal?: string;
  public amount_in_decimal?: string;
} // ~Addon

export class EventBasedAddon extends Model {
  public id: string;
  public quantity: number;
  public unit_price: number;
  public service_period_in_days?: number;
  public on_event: string;
  public charge_once: boolean;
  public quantity_in_decimal?: string;
  public unit_price_in_decimal?: string;
} // ~EventBasedAddon

export class Coupon extends Model {
  public coupon_id: string;
  public apply_till?: number;
  public applied_count: number;
  public coupon_code?: string;
} // ~Coupon

export class SubscriptionItem extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public unit_price?: number;
  public amount?: number;
  public free_quantity?: number;
  public trial_end?: number;
  public billing_cycles?: number;
  public service_period_days?: number;
  public charge_on_event?: string;
  public charge_once?: boolean;
  public charge_on_option?: string;
} // ~SubscriptionItem

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
} // ~ItemTier



  // REQUEST PARAMS
  //---------------

export namespace _quoted_subscription {
}
