import {Model} from "./model";
import { Api } from './api'

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
  public plan_quantity_in_decimal?: string;
  public plan_unit_price_in_decimal?: string;
  public changes_scheduled_at?: number;
  public change_option?: string;
  public contract_term_billing_cycle_on_renewal?: number;
  public addons?: Array<Addon>;
  public event_based_addons?: Array<EventBasedAddon>;
  public coupons?: Array<Coupon>;
  public subscription_items?: Array<SubscriptionItem>;
  public item_tiers?: Array<ItemTier>;
  public quoted_contract_term?: QuotedContractTerm;
}

// OPERATIONS
//-----------
export class QuotedSubscriptionApi extends Api {
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
  public proration_type?: string;
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
} // ~Coupon

export class SubscriptionItem extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public metered_quantity?: string;
  public last_calculated_at?: number;
  public unit_price?: number;
  public unit_price_in_decimal?: string;
  public amount?: number;
  public amount_in_decimal?: string;
  public free_quantity?: number;
  public free_quantity_in_decimal?: string;
  public trial_end?: number;
  public billing_cycles?: number;
  public service_period_days?: number;
  public charge_on_event?: string;
  public charge_once?: boolean;
  public charge_on_option?: string;
  public proration_type?: string;
} // ~SubscriptionItem

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
  public index: number;
} // ~ItemTier

export class QuotedContractTerm extends Model {
  public contract_start: number;
  public contract_end: number;
  public billing_cycle: number;
  public action_at_term_end: string;
  public total_contract_value: number;
  public cancellation_cutoff_period?: number;
} // ~QuotedContractTerm



  // REQUEST PARAMS
  //---------------

export namespace _quoted_subscription {
}
