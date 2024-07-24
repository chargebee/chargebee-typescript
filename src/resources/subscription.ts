import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Subscription extends Model {
  public id: string;
  public currency_code: string;
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
  public customer_id: string;
  public plan_amount?: number;
  public plan_free_quantity?: number;
  public status: string;
  public trial_start?: number;
  public trial_end_action?: string;
  public current_term_start?: number;
  public current_term_end?: number;
  public next_billing_at?: number;
  public created_at?: number;
  public started_at?: number;
  public activated_at?: number;
  public gift_id?: string;
  public contract_term_billing_cycle_on_renewal?: number;
  public override_relationship?: boolean;
  public pause_date?: number;
  public resume_date?: number;
  public cancelled_at?: number;
  public cancel_reason?: string;
  public affiliate_token?: string;
  public created_from_ip?: string;
  public resource_version?: number;
  public updated_at?: number;
  public has_scheduled_advance_invoices: boolean;
  public has_scheduled_changes: boolean;
  public payment_source_id?: string;
  public plan_free_quantity_in_decimal?: string;
  public plan_amount_in_decimal?: string;
  public cancel_schedule_created_at?: number;
  public offline_payment_method?: string;
  public channel?: string;
  public net_term_days?: number;
  public active_id?: string;
  public subscription_items?: Array<SubscriptionItem>;
  public item_tiers?: Array<ItemTier>;
  public charged_items?: Array<ChargedItem>;
  public due_invoices_count?: number;
  public due_since?: number;
  public total_dues?: number;
  public mrr?: number;
  public exchange_rate?: number;
  public base_currency_code?: string;
  public addons?: Array<Addon>;
  public event_based_addons?: Array<EventBasedAddon>;
  public charged_event_based_addons?: Array<ChargedEventBasedAddon>;
  public coupon?: string;
  public coupons?: Array<Coupon>;
  public shipping_address?: ShippingAddress;
  public referral_info?: ReferralInfo;
  public invoice_notes?: string;
  public meta_data?: any;
  public metadata?: any;
  public deleted: boolean;
  public changes_scheduled_at?: number;
  public contract_term?: ContractTerm;
  public cancel_reason_code?: string;
  public free_period?: number;
  public free_period_unit?: string;
  public create_pending_invoices?: boolean;
  public auto_close_invoices?: boolean;
  public discounts?: Array<Discount>;
  public business_entity_id?: string;
}

// OPERATIONS
//-----------
export class SubscriptionApi extends Api {
  public create(params?: _subscription.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create_for_customer(customer_id: string, params?: _subscription.create_for_customer_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/subscriptions',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_with_items(customer_id: string, params?: _subscription.create_with_items_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_with_items',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/subscription_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _subscription.subscription_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public subscriptions_for_customer(customer_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'subscriptions_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/subscriptions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public contract_terms_for_subscription(subscription_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'contract_terms_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/contract_terms',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public list_discounts(subscription_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'list_discounts',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/discounts',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve_with_scheduled_changes(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve_with_scheduled_changes',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/retrieve_with_scheduled_changes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_scheduled_changes(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_changes',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_changes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_scheduled_cancellation(subscription_id: string, params?: _subscription.remove_scheduled_cancellation_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_cancellation',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_cancellation',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_coupons(subscription_id: string, params?: _subscription.remove_coupons_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_coupons',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_coupons',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(subscription_id: string, params?: _subscription.update_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_for_items(subscription_id: string, params?: _subscription.update_for_items_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'update_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/update_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public change_term_end(subscription_id: string, params?: _subscription.change_term_end_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'change_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/change_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public reactivate(subscription_id: string, params?: _subscription.reactivate_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'reactivate',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/reactivate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public add_charge_at_term_end(subscription_id: string, params?: _subscription.add_charge_at_term_end_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'add_charge_at_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/add_charge_at_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public charge_addon_at_term_end(subscription_id: string, params?: _subscription.charge_addon_at_term_end_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'charge_addon_at_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/charge_addon_at_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public charge_future_renewals(subscription_id: string, params?: _subscription.charge_future_renewals_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'charge_future_renewals',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/charge_future_renewals',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public edit_advance_invoice_schedule(subscription_id: string, params?: _subscription.edit_advance_invoice_schedule_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'edit_advance_invoice_schedule',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/edit_advance_invoice_schedule',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve_advance_invoice_schedule(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve_advance_invoice_schedule',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/retrieve_advance_invoice_schedule',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_advance_invoice_schedule(subscription_id: string, params?: _subscription.remove_advance_invoice_schedule_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_advance_invoice_schedule',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_advance_invoice_schedule',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public regenerate_invoice(subscription_id: string, params?: _subscription.regenerate_invoice_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'regenerate_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/regenerate_invoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_subscription(params?: _subscription.import_subscription_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'import_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/import_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public import_for_customer(customer_id: string, params?: _subscription.import_for_customer_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'import_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/import_subscription',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_contract_term(subscription_id: string, params?: _subscription.import_contract_term_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'import_contract_term',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/import_contract_term',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_unbilled_charges(subscription_id: string, params?: _subscription.import_unbilled_charges_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'import_unbilled_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/import_unbilled_charges',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_for_items(customer_id: string, params?: _subscription.import_for_items_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'import_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/import_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public override_billing_profile(subscription_id: string, params?: _subscription.override_billing_profile_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'override_billing_profile',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/override_billing_profile',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public pause(subscription_id: string, params?: _subscription.pause_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'pause',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/pause',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public cancel(subscription_id: string, params?: _subscription.cancel_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public cancel_for_items(subscription_id: string, params?: _subscription.cancel_for_items_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'cancel_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/cancel_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public resume(subscription_id: string, params?: _subscription.resume_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'resume',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/resume',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_scheduled_pause(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_pause',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_pause',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_scheduled_resumption(subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_resumption',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_resumption',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public move(subscription_id: string, params?: _subscription.move_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'move',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/move',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Subscription

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

export class ChargedItem extends Model {
  public item_price_id: string;
  public last_charged_at: number;
} // ~ChargedItem

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

export class ChargedEventBasedAddon extends Model {
  public id: string;
  public last_charged_at: number;
} // ~ChargedEventBasedAddon

export class Coupon extends Model {
  public coupon_id: string;
  public apply_till?: number;
  public applied_count: number;
  public coupon_code?: string;
} // ~Coupon

export class ShippingAddress extends Model {
  public first_name?: string;
  public last_name?: string;
  public email?: string;
  public company?: string;
  public phone?: string;
  public line1?: string;
  public line2?: string;
  public line3?: string;
  public city?: string;
  public state_code?: string;
  public state?: string;
  public country?: string;
  public zip?: string;
  public validation_status?: string;
  public index: number;
} // ~ShippingAddress

export class ReferralInfo extends Model {
  public referral_code?: string;
  public coupon_code?: string;
  public referrer_id?: string;
  public external_reference_id?: string;
  public reward_status?: string;
  public referral_system?: string;
  public account_id: string;
  public campaign_id: string;
  public external_campaign_id?: string;
  public friend_offer_type?: string;
  public referrer_reward_type?: string;
  public notify_referral_system?: string;
  public destination_url?: string;
  public post_purchase_widget_enabled: boolean;
} // ~ReferralInfo

export class ContractTerm extends Model {
  public id: string;
  public status: string;
  public contract_start: number;
  public contract_end: number;
  public billing_cycle: number;
  public action_at_term_end: string;
  public total_contract_value: number;
  public total_contract_value_before_tax: number;
  public cancellation_cutoff_period?: number;
  public created_at: number;
  public subscription_id: string;
  public remaining_billing_cycles?: number;
} // ~ContractTerm

export class Discount extends Model {
  public id: string;
  public invoice_name?: string;
  public type: string;
  public percentage?: number;
  public amount?: number;
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
} // ~Discount



  // REQUEST PARAMS
  //---------------

export namespace _subscription {
  export interface create_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_quantity_in_decimal?: string;
    plan_unit_price?: number;
    plan_unit_price_in_decimal?: string;
    setup_fee?: number;
    trial_end?: number;
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    start_date?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    auto_collection?: string;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    offline_payment_method?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    token_id?: string;
    affiliate_token?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    created_from_ip?: string;
    invoice_notes?: string;
    invoice_date?: number;
    meta_data?: any;
    invoice_immediately?: boolean;
    free_period?: number;
    free_period_unit?: string;
    contract_term_billing_cycle_on_renewal?: number;
    trial_end_action?: string;
    client_profile_id?: string;
    payment_initiator?: string;
    customer?: customer_create_params;
    card?: card_create_params;
    bank_account?: bank_account_create_params;
    payment_method?: payment_method_create_params;
    payment_intent?: payment_intent_create_params;
    billing_address?: billing_address_create_params;
    shipping_address?: shipping_address_create_params;
    statement_descriptor?: statement_descriptor_create_params;
    contract_term?: contract_term_create_params;
    entity_identifiers?: Array<entity_identifiers_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
    addons?: Array<addons_create_params>;
    event_based_addons?: Array<event_based_addons_create_params>;
    coupons?: Array<coupons_create_params>;
  }
  export interface create_for_customer_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_quantity_in_decimal?: string;
    plan_unit_price?: number;
    plan_unit_price_in_decimal?: string;
    setup_fee?: number;
    trial_end?: number;
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    start_date?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    auto_collection?: string;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    offline_payment_method?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    payment_source_id?: string;
    override_relationship?: boolean;
    invoice_notes?: string;
    invoice_date?: number;
    meta_data?: any;
    invoice_immediately?: boolean;
    replace_primary_payment_source?: boolean;
    free_period?: number;
    free_period_unit?: string;
    contract_term_billing_cycle_on_renewal?: number;
    trial_end_action?: string;
    payment_initiator?: string;
    shipping_address?: shipping_address_create_for_customer_params;
    statement_descriptor?: statement_descriptor_create_for_customer_params;
    payment_intent?: payment_intent_create_for_customer_params;
    contract_term?: contract_term_create_for_customer_params;
    addons?: Array<addons_create_for_customer_params>;
    event_based_addons?: Array<event_based_addons_create_for_customer_params>;
    coupons?: Array<coupons_create_for_customer_params>;
  }
  export interface create_with_items_params {
    id?: string;
    business_entity_id?: string;
    trial_end?: number;
    billing_cycles?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
    mandatory_items_to_remove?: Array<string>;
    net_term_days?: number;
    start_date?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    auto_collection?: string;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    payment_source_id?: string;
    override_relationship?: boolean;
    invoice_notes?: string;
    invoice_date?: number;
    meta_data?: any;
    invoice_immediately?: boolean;
    replace_primary_payment_source?: boolean;
    free_period?: number;
    free_period_unit?: string;
    contract_term_billing_cycle_on_renewal?: number;
    create_pending_invoices?: boolean;
    auto_close_invoices?: boolean;
    first_invoice_pending?: boolean;
    trial_end_action?: string;
    payment_initiator?: string;
    shipping_address?: shipping_address_create_with_items_params;
    statement_descriptor?: statement_descriptor_create_with_items_params;
    payment_intent?: payment_intent_create_with_items_params;
    contract_term?: contract_term_create_with_items_params;
    subscription_items?: Array<subscription_items_create_with_items_params>;
    discounts?: Array<discounts_create_with_items_params>;
    item_tiers?: Array<item_tiers_create_with_items_params>;
    coupons?: Array<coupons_create_with_items_params>;
  }
  export interface subscription_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    plan_id?: filter._string;
    item_id?: filter._string;
    item_price_id?: filter._string;
    status?: filter._enum;
    cancel_reason?: filter._enum;
    cancel_reason_code?: filter._string;
    remaining_billing_cycles?: filter._number;
    created_at?: filter._timestamp;
    activated_at?: filter._timestamp;
    next_billing_at?: filter._timestamp;
    cancelled_at?: filter._timestamp;
    has_scheduled_changes?: filter._boolean;
    updated_at?: filter._timestamp;
    offline_payment_method?: filter._enum;
    auto_close_invoices?: filter._boolean;
    override_relationship?: filter._boolean;
    business_entity_id?: filter._string;
    channel?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface remove_scheduled_cancellation_params {
    billing_cycles?: number;
  }
  export interface remove_coupons_params {
    coupon_ids?: Array<string>;
  }
  export interface update_params {
    plan_id?: string;
    plan_quantity?: number;
    plan_unit_price?: number;
    setup_fee?: number;
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    plan_quantity_in_decimal?: string;
    plan_unit_price_in_decimal?: string;
    invoice_date?: number;
    start_date?: number;
    trial_end?: number;
    billing_cycles?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    auto_collection?: string;
    offline_payment_method?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    prorate?: boolean;
    end_of_term?: boolean;
    force_term_reset?: boolean;
    reactivate?: boolean;
    token_id?: string;
    invoice_notes?: string;
    meta_data?: any;
    invoice_immediately?: boolean;
    override_relationship?: boolean;
    changes_scheduled_at?: number;
    change_option?: string;
    contract_term_billing_cycle_on_renewal?: number;
    free_period?: number;
    free_period_unit?: string;
    trial_end_action?: string;
    card?: card_update_params;
    payment_method?: payment_method_update_params;
    payment_intent?: payment_intent_update_params;
    billing_address?: billing_address_update_params;
    shipping_address?: shipping_address_update_params;
    statement_descriptor?: statement_descriptor_update_params;
    customer?: customer_update_params;
    contract_term?: contract_term_update_params;
    addons?: Array<addons_update_params>;
    coupons?: Array<coupons_update_params>;
    event_based_addons?: Array<event_based_addons_update_params>;
  }
  export interface update_for_items_params {
    mandatory_items_to_remove?: Array<string>;
    replace_items_list?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
    net_term_days?: number;
    invoice_date?: number;
    start_date?: number;
    trial_end?: number;
    billing_cycles?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    auto_collection?: string;
    offline_payment_method?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    prorate?: boolean;
    end_of_term?: boolean;
    force_term_reset?: boolean;
    reactivate?: boolean;
    token_id?: string;
    invoice_notes?: string;
    meta_data?: any;
    invoice_immediately?: boolean;
    override_relationship?: boolean;
    changes_scheduled_at?: number;
    change_option?: string;
    contract_term_billing_cycle_on_renewal?: number;
    free_period?: number;
    free_period_unit?: string;
    create_pending_invoices?: boolean;
    auto_close_invoices?: boolean;
    trial_end_action?: string;
    payment_initiator?: string;
    card?: card_update_for_items_params;
    payment_method?: payment_method_update_for_items_params;
    payment_intent?: payment_intent_update_for_items_params;
    billing_address?: billing_address_update_for_items_params;
    shipping_address?: shipping_address_update_for_items_params;
    statement_descriptor?: statement_descriptor_update_for_items_params;
    customer?: customer_update_for_items_params;
    contract_term?: contract_term_update_for_items_params;
    subscription_items?: Array<subscription_items_update_for_items_params>;
    discounts?: Array<discounts_update_for_items_params>;
    item_tiers?: Array<item_tiers_update_for_items_params>;
    coupons?: Array<coupons_update_for_items_params>;
  }
  export interface change_term_end_params {
    term_ends_at: number;
    prorate?: boolean;
    invoice_immediately?: boolean;
  }
  export interface reactivate_params {
    trial_end?: number;
    billing_cycles?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    trial_period_days?: number;
    reactivate_from?: number;
    invoice_immediately?: boolean;
    billing_alignment_mode?: string;
    terms_to_charge?: number;
    invoice_date?: number;
    contract_term_billing_cycle_on_renewal?: number;
    payment_initiator?: string;
    contract_term?: contract_term_reactivate_params;
    statement_descriptor?: statement_descriptor_reactivate_params;
    payment_intent?: payment_intent_reactivate_params;
  }
  export interface add_charge_at_term_end_params {
    amount?: number;
    description: string;
    amount_in_decimal?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    date_from?: number;
    date_to?: number;
  }
  export interface charge_addon_at_term_end_params {
    addon_id: string;
    addon_quantity?: number;
    addon_unit_price?: number;
    addon_quantity_in_decimal?: string;
    addon_unit_price_in_decimal?: string;
    date_from?: number;
    date_to?: number;
  }
  export interface charge_future_renewals_params {
    terms_to_charge?: number;
    invoice_immediately?: boolean;
    schedule_type?: string;
    fixed_interval_schedule?: fixed_interval_schedule_charge_future_renewals_params;
    specific_dates_schedule?: Array<specific_dates_schedule_charge_future_renewals_params>;
  }
  export interface edit_advance_invoice_schedule_params {
    terms_to_charge?: number;
    schedule_type?: string;
    fixed_interval_schedule?: fixed_interval_schedule_edit_advance_invoice_schedule_params;
    specific_dates_schedule?: Array<specific_dates_schedule_edit_advance_invoice_schedule_params>;
  }
  export interface remove_advance_invoice_schedule_params {
    specific_dates_schedule?: Array<specific_dates_schedule_remove_advance_invoice_schedule_params>;
  }
  export interface regenerate_invoice_params {
    date_from?: number;
    date_to?: number;
    prorate?: boolean;
    invoice_immediately?: boolean;
  }
  export interface import_subscription_params {
    id?: string;
    client_profile_id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_quantity_in_decimal?: string;
    plan_unit_price?: number;
    plan_unit_price_in_decimal?: string;
    setup_fee?: number;
    trial_end?: number;
    billing_cycles?: number;
    start_date?: number;
    auto_collection?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    contract_term_billing_cycle_on_renewal?: number;
    status: string;
    current_term_end?: number;
    current_term_start?: number;
    trial_start?: number;
    cancelled_at?: number;
    started_at?: number;
    activated_at?: number;
    pause_date?: number;
    resume_date?: number;
    create_current_term_invoice?: boolean;
    affiliate_token?: string;
    invoice_notes?: string;
    meta_data?: any;
    customer?: customer_import_subscription_params;
    contract_term?: contract_term_import_subscription_params;
    card?: card_import_subscription_params;
    payment_method?: payment_method_import_subscription_params;
    billing_address?: billing_address_import_subscription_params;
    shipping_address?: shipping_address_import_subscription_params;
    transaction?: transaction_import_subscription_params;
    addons?: Array<addons_import_subscription_params>;
    event_based_addons?: Array<event_based_addons_import_subscription_params>;
    charged_event_based_addons?: Array<charged_event_based_addons_import_subscription_params>;
    coupons?: Array<coupons_import_subscription_params>;
  }
  export interface import_for_customer_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_quantity_in_decimal?: string;
    plan_unit_price?: number;
    plan_unit_price_in_decimal?: string;
    setup_fee?: number;
    trial_end?: number;
    billing_cycles?: number;
    start_date?: number;
    auto_collection?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    payment_source_id?: string;
    status: string;
    current_term_end?: number;
    current_term_start?: number;
    trial_start?: number;
    cancelled_at?: number;
    started_at?: number;
    activated_at?: number;
    pause_date?: number;
    resume_date?: number;
    contract_term_billing_cycle_on_renewal?: number;
    create_current_term_invoice?: boolean;
    invoice_notes?: string;
    meta_data?: any;
    contract_term?: contract_term_import_for_customer_params;
    transaction?: transaction_import_for_customer_params;
    shipping_address?: shipping_address_import_for_customer_params;
    addons?: Array<addons_import_for_customer_params>;
    event_based_addons?: Array<event_based_addons_import_for_customer_params>;
    charged_event_based_addons?: Array<charged_event_based_addons_import_for_customer_params>;
    coupons?: Array<coupons_import_for_customer_params>;
  }
  export interface import_contract_term_params {
    contract_term_billing_cycle_on_renewal?: number;
    contract_term?: contract_term_import_contract_term_params;
  }
  export interface import_unbilled_charges_params {
    unbilled_charges?: Array<unbilled_charges_import_unbilled_charges_params>;
    discounts?: Array<discounts_import_unbilled_charges_params>;
    tiers?: Array<tiers_import_unbilled_charges_params>;
  }
  export interface import_for_items_params {
    id?: string;
    trial_end?: number;
    billing_cycles?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
    net_term_days?: number;
    start_date?: number;
    auto_collection?: string;
    po_number?: string;
    coupon_ids?: Array<string>;
    payment_source_id?: string;
    status: string;
    current_term_end?: number;
    current_term_start?: number;
    trial_start?: number;
    cancelled_at?: number;
    started_at?: number;
    activated_at?: number;
    pause_date?: number;
    resume_date?: number;
    contract_term_billing_cycle_on_renewal?: number;
    create_current_term_invoice?: boolean;
    invoice_notes?: string;
    meta_data?: any;
    cancel_reason_code?: string;
    create_pending_invoices?: boolean;
    auto_close_invoices?: boolean;
    contract_term?: contract_term_import_for_items_params;
    transaction?: transaction_import_for_items_params;
    shipping_address?: shipping_address_import_for_items_params;
    subscription_items?: Array<subscription_items_import_for_items_params>;
    discounts?: Array<discounts_import_for_items_params>;
    charged_items?: Array<charged_items_import_for_items_params>;
    item_tiers?: Array<item_tiers_import_for_items_params>;
    coupons?: Array<coupons_import_for_items_params>;
  }
  export interface override_billing_profile_params {
    payment_source_id?: string;
    auto_collection?: string;
  }
  export interface pause_params {
    pause_option?: string;
    pause_date?: number;
    unbilled_charges_handling?: string;
    invoice_dunning_handling?: string;
    skip_billing_cycles?: number;
    resume_date?: number;
  }
  export interface cancel_params {
    cancel_option?: string;
    end_of_term?: boolean;
    cancel_at?: number;
    credit_option_for_current_term_charges?: string;
    unbilled_charges_option?: string;
    account_receivables_handling?: string;
    refundable_credits_handling?: string;
    contract_term_cancel_option?: string;
    invoice_date?: number;
    cancel_reason_code?: string;
    event_based_addons?: Array<event_based_addons_cancel_params>;
  }
  export interface cancel_for_items_params {
    cancel_option?: string;
    end_of_term?: boolean;
    cancel_at?: number;
    credit_option_for_current_term_charges?: string;
    unbilled_charges_option?: string;
    account_receivables_handling?: string;
    refundable_credits_handling?: string;
    contract_term_cancel_option?: string;
    invoice_date?: number;
    cancel_reason_code?: string;
    subscription_items?: Array<subscription_items_cancel_for_items_params>;
  }
  export interface resume_params {
    resume_option?: string;
    resume_date?: number;
    charges_handling?: string;
    unpaid_invoices_handling?: string;
    payment_initiator?: string;
    payment_intent?: payment_intent_resume_params;
  }
  export interface move_params {
    to_customer_id: string;
    copy_payment_source?: boolean;
  }
  export interface customer_create_params {
    id?: string;
  }
  export interface customer_create_params {
    email?: string;
  }
  export interface customer_create_params {
    first_name?: string;
  }
  export interface customer_create_params {
    last_name?: string;
  }
  export interface customer_create_params {
    company?: string;
  }
  export interface customer_create_params {
    phone?: string;
  }
  export interface customer_create_params {
    locale?: string;
  }
  export interface customer_create_params {
    taxability?: string;
  }
  export interface customer_create_params {
    entity_code?: string;
  }
  export interface customer_create_params {
    exempt_number?: string;
  }
  export interface customer_create_params {
    net_term_days?: number;
  }
  export interface customer_create_params {
    taxjar_exemption_category?: string;
  }
  export interface customer_create_params {
    auto_collection?: string;
  }
  export interface customer_create_params {
    offline_payment_method?: string;
  }
  export interface customer_create_params {
    allow_direct_debit?: boolean;
  }
  export interface customer_create_params {
    consolidated_invoicing?: boolean;
  }
  export interface customer_create_params {
    vat_number?: string;
  }
  export interface customer_create_params {
    vat_number_prefix?: string;
  }
  export interface customer_create_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_create_params {
    entity_identifier_standard?: string;
  }
  export interface customer_create_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_create_params {
    einvoicing_method?: string;
  }
  export interface customer_create_params {
    registered_for_gst?: boolean;
  }
  export interface customer_create_params {
    business_customer_without_vat_number?: boolean;
  }
  export interface customer_create_params {
    exemption_details?: any;
  }
  export interface customer_create_params {
    customer_type?: string;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_create_params {
    gateway_account_id?: string;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface card_create_params {
    first_name?: string;
  }
  export interface card_create_params {
    last_name?: string;
  }
  export interface card_create_params {
    number?: string;
  }
  export interface card_create_params {
    expiry_month?: number;
  }
  export interface card_create_params {
    expiry_year?: number;
  }
  export interface card_create_params {
    cvv?: string;
  }
  export interface card_create_params {
    billing_addr1?: string;
  }
  export interface card_create_params {
    billing_addr2?: string;
  }
  export interface card_create_params {
    billing_city?: string;
  }
  export interface card_create_params {
    billing_state_code?: string;
  }
  export interface card_create_params {
    billing_state?: string;
  }
  export interface card_create_params {
    billing_zip?: string;
  }
  export interface card_create_params {
    billing_country?: string;
  }
  export interface card_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
  }
  export interface card_create_params {
    additional_information?: any;
  }
  export interface bank_account_create_params {
    gateway_account_id?: string;
  }
  export interface bank_account_create_params {
    iban?: string;
  }
  export interface bank_account_create_params {
    first_name?: string;
  }
  export interface bank_account_create_params {
    last_name?: string;
  }
  export interface bank_account_create_params {
    company?: string;
  }
  export interface bank_account_create_params {
    email?: string;
  }
  export interface bank_account_create_params {
    phone?: string;
  }
  export interface bank_account_create_params {
    bank_name?: string;
  }
  export interface bank_account_create_params {
    account_number?: string;
  }
  export interface bank_account_create_params {
    routing_number?: string;
  }
  export interface bank_account_create_params {
    bank_code?: string;
  }
  export interface bank_account_create_params {
    account_type?: string;
  }
  export interface bank_account_create_params {
    account_holder_type?: string;
  }
  export interface bank_account_create_params {
    echeck_type?: string;
  }
  export interface bank_account_create_params {
    issuing_country?: string;
  }
  export interface bank_account_create_params {
    swedish_identity_number?: string;
  }
  export interface bank_account_create_params {
    billing_address?: any;
  }
  export interface payment_method_create_params {
    type?: string;
  }
  export interface payment_method_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_create_params {
    gateway_account_id?: string;
  }
  export interface payment_method_create_params {
    reference_id?: string;
  }
  export interface payment_method_create_params {
    tmp_token?: string;
  }
  export interface payment_method_create_params {
    issuing_country?: string;
  }
  export interface payment_method_create_params {
    additional_information?: any;
  }
  export interface payment_intent_create_params {
    id?: string;
  }
  export interface payment_intent_create_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_params {
    gw_token?: string;
  }
  export interface payment_intent_create_params {
    payment_method_type?: string;
  }
  export interface payment_intent_create_params {
    reference_id?: string;
  }
  export interface payment_intent_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_params {
    additional_information?: any;
  }
  export interface billing_address_create_params {
    first_name?: string;
  }
  export interface billing_address_create_params {
    last_name?: string;
  }
  export interface billing_address_create_params {
    email?: string;
  }
  export interface billing_address_create_params {
    company?: string;
  }
  export interface billing_address_create_params {
    phone?: string;
  }
  export interface billing_address_create_params {
    line1?: string;
  }
  export interface billing_address_create_params {
    line2?: string;
  }
  export interface billing_address_create_params {
    line3?: string;
  }
  export interface billing_address_create_params {
    city?: string;
  }
  export interface billing_address_create_params {
    state_code?: string;
  }
  export interface billing_address_create_params {
    state?: string;
  }
  export interface billing_address_create_params {
    zip?: string;
  }
  export interface billing_address_create_params {
    country?: string;
  }
  export interface billing_address_create_params {
    validation_status?: string;
  }
  export interface shipping_address_create_params {
    first_name?: string;
  }
  export interface shipping_address_create_params {
    last_name?: string;
  }
  export interface shipping_address_create_params {
    email?: string;
  }
  export interface shipping_address_create_params {
    company?: string;
  }
  export interface shipping_address_create_params {
    phone?: string;
  }
  export interface shipping_address_create_params {
    line1?: string;
  }
  export interface shipping_address_create_params {
    line2?: string;
  }
  export interface shipping_address_create_params {
    line3?: string;
  }
  export interface shipping_address_create_params {
    city?: string;
  }
  export interface shipping_address_create_params {
    state_code?: string;
  }
  export interface shipping_address_create_params {
    state?: string;
  }
  export interface shipping_address_create_params {
    zip?: string;
  }
  export interface shipping_address_create_params {
    country?: string;
  }
  export interface shipping_address_create_params {
    validation_status?: string;
  }
  export interface statement_descriptor_create_params {
    descriptor?: string;
  }
  export interface contract_term_create_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_params {
    cancellation_cutoff_period?: number;
  }
  export interface entity_identifiers_create_params {
    id?: string;
  }
  export interface entity_identifiers_create_params {
    scheme?: string;
  }
  export interface entity_identifiers_create_params {
    value?: string;
  }
  export interface entity_identifiers_create_params {
    standard?: string;
  }
  export interface tax_providers_fields_create_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_create_params {
    field_id?: string;
  }
  export interface tax_providers_fields_create_params {
    field_value?: string;
  }
  export interface addons_create_params {
    id?: string;
  }
  export interface addons_create_params {
    quantity?: number;
  }
  export interface addons_create_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_params {
    unit_price?: number;
  }
  export interface addons_create_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_create_params {
    id?: string;
  }
  export interface event_based_addons_create_params {
    quantity?: number;
  }
  export interface event_based_addons_create_params {
    unit_price?: number;
  }
  export interface event_based_addons_create_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_create_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_create_params {
    on_event?: string;
  }
  export interface event_based_addons_create_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_create_params {
    charge_on?: string;
  }
  export interface addons_create_params {
    trial_end?: number;
  }
  export interface coupons_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface shipping_address_create_for_customer_params {
    first_name?: string;
  }
  export interface shipping_address_create_for_customer_params {
    last_name?: string;
  }
  export interface shipping_address_create_for_customer_params {
    email?: string;
  }
  export interface shipping_address_create_for_customer_params {
    company?: string;
  }
  export interface shipping_address_create_for_customer_params {
    phone?: string;
  }
  export interface shipping_address_create_for_customer_params {
    line1?: string;
  }
  export interface shipping_address_create_for_customer_params {
    line2?: string;
  }
  export interface shipping_address_create_for_customer_params {
    line3?: string;
  }
  export interface shipping_address_create_for_customer_params {
    city?: string;
  }
  export interface shipping_address_create_for_customer_params {
    state_code?: string;
  }
  export interface shipping_address_create_for_customer_params {
    state?: string;
  }
  export interface shipping_address_create_for_customer_params {
    zip?: string;
  }
  export interface shipping_address_create_for_customer_params {
    country?: string;
  }
  export interface shipping_address_create_for_customer_params {
    validation_status?: string;
  }
  export interface statement_descriptor_create_for_customer_params {
    descriptor?: string;
  }
  export interface payment_intent_create_for_customer_params {
    id?: string;
  }
  export interface payment_intent_create_for_customer_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_for_customer_params {
    gw_token?: string;
  }
  export interface payment_intent_create_for_customer_params {
    payment_method_type?: string;
  }
  export interface payment_intent_create_for_customer_params {
    reference_id?: string;
  }
  export interface payment_intent_create_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_for_customer_params {
    additional_information?: any;
  }
  export interface contract_term_create_for_customer_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_for_customer_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_create_for_customer_params {
    id?: string;
  }
  export interface addons_create_for_customer_params {
    quantity?: number;
  }
  export interface addons_create_for_customer_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_for_customer_params {
    unit_price?: number;
  }
  export interface addons_create_for_customer_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_for_customer_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_create_for_customer_params {
    id?: string;
  }
  export interface event_based_addons_create_for_customer_params {
    quantity?: number;
  }
  export interface event_based_addons_create_for_customer_params {
    unit_price?: number;
  }
  export interface event_based_addons_create_for_customer_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_for_customer_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_create_for_customer_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_create_for_customer_params {
    on_event?: string;
  }
  export interface event_based_addons_create_for_customer_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_create_for_customer_params {
    charge_on?: string;
  }
  export interface addons_create_for_customer_params {
    trial_end?: number;
  }
  export interface coupons_create_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_create_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface shipping_address_create_with_items_params {
    first_name?: string;
  }
  export interface shipping_address_create_with_items_params {
    last_name?: string;
  }
  export interface shipping_address_create_with_items_params {
    email?: string;
  }
  export interface shipping_address_create_with_items_params {
    company?: string;
  }
  export interface shipping_address_create_with_items_params {
    phone?: string;
  }
  export interface shipping_address_create_with_items_params {
    line1?: string;
  }
  export interface shipping_address_create_with_items_params {
    line2?: string;
  }
  export interface shipping_address_create_with_items_params {
    line3?: string;
  }
  export interface shipping_address_create_with_items_params {
    city?: string;
  }
  export interface shipping_address_create_with_items_params {
    state_code?: string;
  }
  export interface shipping_address_create_with_items_params {
    state?: string;
  }
  export interface shipping_address_create_with_items_params {
    zip?: string;
  }
  export interface shipping_address_create_with_items_params {
    country?: string;
  }
  export interface shipping_address_create_with_items_params {
    validation_status?: string;
  }
  export interface statement_descriptor_create_with_items_params {
    descriptor?: string;
  }
  export interface payment_intent_create_with_items_params {
    id?: string;
  }
  export interface payment_intent_create_with_items_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_with_items_params {
    gw_token?: string;
  }
  export interface payment_intent_create_with_items_params {
    payment_method_type?: string;
  }
  export interface payment_intent_create_with_items_params {
    reference_id?: string;
  }
  export interface payment_intent_create_with_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_with_items_params {
    additional_information?: any;
  }
  export interface contract_term_create_with_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_with_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    contract_start?: number;
  }
  export interface contract_term_create_with_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_create_with_items_params {
    item_price_id: string;
  }
  export interface subscription_items_create_with_items_params {
    quantity?: number;
  }
  export interface subscription_items_create_with_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_create_with_items_params {
    unit_price?: number;
  }
  export interface subscription_items_create_with_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_create_with_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_create_with_items_params {
    trial_end?: number;
  }
  export interface subscription_items_create_with_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_create_with_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_create_with_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_create_with_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_create_with_items_params {
    apply_on: string;
  }
  export interface discounts_create_with_items_params {
    duration_type: string;
  }
  export interface discounts_create_with_items_params {
    percentage?: number;
  }
  export interface discounts_create_with_items_params {
    amount?: number;
  }
  export interface discounts_create_with_items_params {
    period?: number;
  }
  export interface discounts_create_with_items_params {
    period_unit?: string;
  }
  export interface discounts_create_with_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_create_with_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_create_with_items_params {
    charge_on_option?: string;
  }
  export interface item_tiers_create_with_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_with_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_with_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_with_items_params {
    price?: number;
  }
  export interface item_tiers_create_with_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_with_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_with_items_params {
    price_in_decimal?: string;
  }
  export interface coupons_create_with_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_create_with_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface card_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_params {
    gateway_account_id?: string;
  }
  export interface card_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface card_update_params {
    first_name?: string;
  }
  export interface card_update_params {
    last_name?: string;
  }
  export interface card_update_params {
    number?: string;
  }
  export interface card_update_params {
    expiry_month?: number;
  }
  export interface card_update_params {
    expiry_year?: number;
  }
  export interface card_update_params {
    cvv?: string;
  }
  export interface card_update_params {
    billing_addr1?: string;
  }
  export interface card_update_params {
    billing_addr2?: string;
  }
  export interface card_update_params {
    billing_city?: string;
  }
  export interface card_update_params {
    billing_state_code?: string;
  }
  export interface card_update_params {
    billing_state?: string;
  }
  export interface card_update_params {
    billing_zip?: string;
  }
  export interface card_update_params {
    billing_country?: string;
  }
  export interface card_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
  }
  export interface card_update_params {
    additional_information?: any;
  }
  export interface payment_method_update_params {
    type?: string;
  }
  export interface payment_method_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_update_params {
    gateway_account_id?: string;
  }
  export interface payment_method_update_params {
    reference_id?: string;
  }
  export interface payment_method_update_params {
    tmp_token?: string;
  }
  export interface payment_method_update_params {
    issuing_country?: string;
  }
  export interface payment_method_update_params {
    additional_information?: any;
  }
  export interface payment_intent_update_params {
    id?: string;
  }
  export interface payment_intent_update_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_update_params {
    gw_token?: string;
  }
  export interface payment_intent_update_params {
    payment_method_type?: string;
  }
  export interface payment_intent_update_params {
    reference_id?: string;
  }
  export interface payment_intent_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_update_params {
    additional_information?: any;
  }
  export interface billing_address_update_params {
    first_name?: string;
  }
  export interface billing_address_update_params {
    last_name?: string;
  }
  export interface billing_address_update_params {
    email?: string;
  }
  export interface billing_address_update_params {
    company?: string;
  }
  export interface billing_address_update_params {
    phone?: string;
  }
  export interface billing_address_update_params {
    line1?: string;
  }
  export interface billing_address_update_params {
    line2?: string;
  }
  export interface billing_address_update_params {
    line3?: string;
  }
  export interface billing_address_update_params {
    city?: string;
  }
  export interface billing_address_update_params {
    state_code?: string;
  }
  export interface billing_address_update_params {
    state?: string;
  }
  export interface billing_address_update_params {
    zip?: string;
  }
  export interface billing_address_update_params {
    country?: string;
  }
  export interface billing_address_update_params {
    validation_status?: string;
  }
  export interface shipping_address_update_params {
    first_name?: string;
  }
  export interface shipping_address_update_params {
    last_name?: string;
  }
  export interface shipping_address_update_params {
    email?: string;
  }
  export interface shipping_address_update_params {
    company?: string;
  }
  export interface shipping_address_update_params {
    phone?: string;
  }
  export interface shipping_address_update_params {
    line1?: string;
  }
  export interface shipping_address_update_params {
    line2?: string;
  }
  export interface shipping_address_update_params {
    line3?: string;
  }
  export interface shipping_address_update_params {
    city?: string;
  }
  export interface shipping_address_update_params {
    state_code?: string;
  }
  export interface shipping_address_update_params {
    state?: string;
  }
  export interface shipping_address_update_params {
    zip?: string;
  }
  export interface shipping_address_update_params {
    country?: string;
  }
  export interface shipping_address_update_params {
    validation_status?: string;
  }
  export interface statement_descriptor_update_params {
    descriptor?: string;
  }
  export interface customer_update_params {
    vat_number?: string;
  }
  export interface customer_update_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_update_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_update_params {
    einvoicing_method?: string;
  }
  export interface customer_update_params {
    entity_identifier_standard?: string;
  }
  export interface customer_update_params {
    business_customer_without_vat_number?: boolean;
  }
  export interface customer_update_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_update_params {
    action_at_term_end?: string;
  }
  export interface contract_term_update_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_update_params {
    id?: string;
  }
  export interface addons_update_params {
    quantity?: number;
  }
  export interface addons_update_params {
    unit_price?: number;
  }
  export interface addons_update_params {
    billing_cycles?: number;
  }
  export interface addons_update_params {
    quantity_in_decimal?: string;
  }
  export interface addons_update_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_update_params {
    trial_end?: number;
  }
  export interface addons_update_params {
    proration_type?: string;
  }
  export interface coupons_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface event_based_addons_update_params {
    id?: string;
  }
  export interface event_based_addons_update_params {
    quantity?: number;
  }
  export interface event_based_addons_update_params {
    unit_price?: number;
  }
  export interface event_based_addons_update_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_update_params {
    charge_on?: string;
  }
  export interface event_based_addons_update_params {
    on_event?: string;
  }
  export interface event_based_addons_update_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_update_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_update_params {
    unit_price_in_decimal?: string;
  }
  export interface card_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_for_items_params {
    gateway_account_id?: string;
  }
  export interface card_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface card_update_for_items_params {
    first_name?: string;
  }
  export interface card_update_for_items_params {
    last_name?: string;
  }
  export interface card_update_for_items_params {
    number?: string;
  }
  export interface card_update_for_items_params {
    expiry_month?: number;
  }
  export interface card_update_for_items_params {
    expiry_year?: number;
  }
  export interface card_update_for_items_params {
    cvv?: string;
  }
  export interface card_update_for_items_params {
    billing_addr1?: string;
  }
  export interface card_update_for_items_params {
    billing_addr2?: string;
  }
  export interface card_update_for_items_params {
    billing_city?: string;
  }
  export interface card_update_for_items_params {
    billing_state_code?: string;
  }
  export interface card_update_for_items_params {
    billing_state?: string;
  }
  export interface card_update_for_items_params {
    billing_zip?: string;
  }
  export interface card_update_for_items_params {
    billing_country?: string;
  }
  export interface card_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
  }
  export interface card_update_for_items_params {
    additional_information?: any;
  }
  export interface payment_method_update_for_items_params {
    type?: string;
  }
  export interface payment_method_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_update_for_items_params {
    gateway_account_id?: string;
  }
  export interface payment_method_update_for_items_params {
    reference_id?: string;
  }
  export interface payment_method_update_for_items_params {
    tmp_token?: string;
  }
  export interface payment_method_update_for_items_params {
    issuing_country?: string;
  }
  export interface payment_method_update_for_items_params {
    additional_information?: any;
  }
  export interface payment_intent_update_for_items_params {
    id?: string;
  }
  export interface payment_intent_update_for_items_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_update_for_items_params {
    gw_token?: string;
  }
  export interface payment_intent_update_for_items_params {
    payment_method_type?: string;
  }
  export interface payment_intent_update_for_items_params {
    reference_id?: string;
  }
  export interface payment_intent_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_update_for_items_params {
    additional_information?: any;
  }
  export interface billing_address_update_for_items_params {
    first_name?: string;
  }
  export interface billing_address_update_for_items_params {
    last_name?: string;
  }
  export interface billing_address_update_for_items_params {
    email?: string;
  }
  export interface billing_address_update_for_items_params {
    company?: string;
  }
  export interface billing_address_update_for_items_params {
    phone?: string;
  }
  export interface billing_address_update_for_items_params {
    line1?: string;
  }
  export interface billing_address_update_for_items_params {
    line2?: string;
  }
  export interface billing_address_update_for_items_params {
    line3?: string;
  }
  export interface billing_address_update_for_items_params {
    city?: string;
  }
  export interface billing_address_update_for_items_params {
    state_code?: string;
  }
  export interface billing_address_update_for_items_params {
    state?: string;
  }
  export interface billing_address_update_for_items_params {
    zip?: string;
  }
  export interface billing_address_update_for_items_params {
    country?: string;
  }
  export interface billing_address_update_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_update_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_update_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_update_for_items_params {
    email?: string;
  }
  export interface shipping_address_update_for_items_params {
    company?: string;
  }
  export interface shipping_address_update_for_items_params {
    phone?: string;
  }
  export interface shipping_address_update_for_items_params {
    line1?: string;
  }
  export interface shipping_address_update_for_items_params {
    line2?: string;
  }
  export interface shipping_address_update_for_items_params {
    line3?: string;
  }
  export interface shipping_address_update_for_items_params {
    city?: string;
  }
  export interface shipping_address_update_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_update_for_items_params {
    state?: string;
  }
  export interface shipping_address_update_for_items_params {
    zip?: string;
  }
  export interface shipping_address_update_for_items_params {
    country?: string;
  }
  export interface shipping_address_update_for_items_params {
    validation_status?: string;
  }
  export interface statement_descriptor_update_for_items_params {
    descriptor?: string;
  }
  export interface customer_update_for_items_params {
    vat_number?: string;
  }
  export interface customer_update_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_for_items_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_update_for_items_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_update_for_items_params {
    einvoicing_method?: string;
  }
  export interface customer_update_for_items_params {
    entity_identifier_standard?: string;
  }
  export interface customer_update_for_items_params {
    business_customer_without_vat_number?: boolean;
  }
  export interface customer_update_for_items_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_update_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_update_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface contract_term_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    contract_start?: number;
  }
  export interface subscription_items_update_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_update_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_update_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_update_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_update_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_update_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_update_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_update_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_update_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_update_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_update_for_items_params {
    charge_on_option?: string;
  }
  export interface subscription_items_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_update_for_items_params {
    apply_on: string;
  }
  export interface discounts_update_for_items_params {
    duration_type: string;
  }
  export interface discounts_update_for_items_params {
    percentage?: number;
  }
  export interface discounts_update_for_items_params {
    amount?: number;
  }
  export interface discounts_update_for_items_params {
    period?: number;
  }
  export interface discounts_update_for_items_params {
    period_unit?: string;
  }
  export interface discounts_update_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_update_for_items_params {
    item_price_id?: string;
  }
  export interface discounts_update_for_items_params {
    operation_type: string;
  }
  export interface discounts_update_for_items_params {
    id?: string;
  }
  export interface item_tiers_update_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_update_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_update_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_update_for_items_params {
    price?: number;
  }
  export interface item_tiers_update_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_update_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_update_for_items_params {
    price_in_decimal?: string;
  }
  export interface subscription_items_update_for_items_params {
    proration_type?: string;
  }
  export interface coupons_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_update_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface contract_term_reactivate_params {
    action_at_term_end?: string;
  }
  export interface contract_term_reactivate_params {
    cancellation_cutoff_period?: number;
  }
  export interface statement_descriptor_reactivate_params {
    descriptor?: string;
  }
  export interface payment_intent_reactivate_params {
    id?: string;
  }
  export interface payment_intent_reactivate_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_reactivate_params {
    gw_token?: string;
  }
  export interface payment_intent_reactivate_params {
    payment_method_type?: string;
  }
  export interface payment_intent_reactivate_params {
    reference_id?: string;
  }
  export interface payment_intent_reactivate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_reactivate_params {
    additional_information?: any;
  }
  export interface fixed_interval_schedule_charge_future_renewals_params {
    number_of_occurrences?: number;
  }
  export interface fixed_interval_schedule_charge_future_renewals_params {
    days_before_renewal?: number;
  }
  export interface fixed_interval_schedule_charge_future_renewals_params {
    end_schedule_on?: string;
  }
  export interface fixed_interval_schedule_charge_future_renewals_params {
    end_date?: number;
  }
  export interface specific_dates_schedule_charge_future_renewals_params {
    terms_to_charge?: number;
  }
  export interface specific_dates_schedule_charge_future_renewals_params {
    date?: number;
  }
  export interface fixed_interval_schedule_edit_advance_invoice_schedule_params {
    number_of_occurrences?: number;
  }
  export interface fixed_interval_schedule_edit_advance_invoice_schedule_params {
    days_before_renewal?: number;
  }
  export interface fixed_interval_schedule_edit_advance_invoice_schedule_params {
    end_schedule_on?: string;
  }
  export interface fixed_interval_schedule_edit_advance_invoice_schedule_params {
    end_date?: number;
  }
  export interface specific_dates_schedule_edit_advance_invoice_schedule_params {
    id?: string;
  }
  export interface specific_dates_schedule_edit_advance_invoice_schedule_params {
    terms_to_charge?: number;
  }
  export interface specific_dates_schedule_edit_advance_invoice_schedule_params {
    date?: number;
  }
  export interface specific_dates_schedule_remove_advance_invoice_schedule_params {
    id?: string;
  }
  export interface customer_import_subscription_params {
    id?: string;
  }
  export interface customer_import_subscription_params {
    email?: string;
  }
  export interface customer_import_subscription_params {
    first_name?: string;
  }
  export interface customer_import_subscription_params {
    last_name?: string;
  }
  export interface customer_import_subscription_params {
    company?: string;
  }
  export interface customer_import_subscription_params {
    phone?: string;
  }
  export interface customer_import_subscription_params {
    locale?: string;
  }
  export interface customer_import_subscription_params {
    taxability?: string;
  }
  export interface customer_import_subscription_params {
    entity_code?: string;
  }
  export interface customer_import_subscription_params {
    exempt_number?: string;
  }
  export interface customer_import_subscription_params {
    net_term_days?: number;
  }
  export interface customer_import_subscription_params {
    taxjar_exemption_category?: string;
  }
  export interface customer_import_subscription_params {
    customer_type?: string;
  }
  export interface customer_import_subscription_params {
    auto_collection?: string;
  }
  export interface customer_import_subscription_params {
    allow_direct_debit?: boolean;
  }
  export interface customer_import_subscription_params {
    vat_number?: string;
  }
  export interface customer_import_subscription_params {
    vat_number_prefix?: string;
  }
  export interface contract_term_import_subscription_params {
    id?: string;
  }
  export interface contract_term_import_subscription_params {
    created_at?: number;
  }
  export interface contract_term_import_subscription_params {
    contract_start?: number;
  }
  export interface contract_term_import_subscription_params {
    billing_cycle?: number;
  }
  export interface contract_term_import_subscription_params {
    total_amount_raised?: number;
  }
  export interface contract_term_import_subscription_params {
    total_amount_raised_before_tax?: number;
  }
  export interface contract_term_import_subscription_params {
    action_at_term_end?: string;
  }
  export interface contract_term_import_subscription_params {
    cancellation_cutoff_period?: number;
  }
  export interface card_import_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_import_subscription_params {
    gateway_account_id?: string;
  }
  export interface card_import_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface card_import_subscription_params {
    first_name?: string;
  }
  export interface card_import_subscription_params {
    last_name?: string;
  }
  export interface card_import_subscription_params {
    number?: string;
  }
  export interface card_import_subscription_params {
    expiry_month?: number;
  }
  export interface card_import_subscription_params {
    expiry_year?: number;
  }
  export interface card_import_subscription_params {
    cvv?: string;
  }
  export interface card_import_subscription_params {
    billing_addr1?: string;
  }
  export interface card_import_subscription_params {
    billing_addr2?: string;
  }
  export interface card_import_subscription_params {
    billing_city?: string;
  }
  export interface card_import_subscription_params {
    billing_state_code?: string;
  }
  export interface card_import_subscription_params {
    billing_state?: string;
  }
  export interface card_import_subscription_params {
    billing_zip?: string;
  }
  export interface card_import_subscription_params {
    billing_country?: string;
  }
  export interface card_import_subscription_params {
    additional_information?: any;
  }
  export interface payment_method_import_subscription_params {
    type?: string;
  }
  export interface payment_method_import_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_import_subscription_params {
    gateway_account_id?: string;
  }
  export interface payment_method_import_subscription_params {
    reference_id?: string;
  }
  export interface payment_method_import_subscription_params {
    issuing_country?: string;
  }
  export interface payment_method_import_subscription_params {
    additional_information?: any;
  }
  export interface billing_address_import_subscription_params {
    first_name?: string;
  }
  export interface billing_address_import_subscription_params {
    last_name?: string;
  }
  export interface billing_address_import_subscription_params {
    email?: string;
  }
  export interface billing_address_import_subscription_params {
    company?: string;
  }
  export interface billing_address_import_subscription_params {
    phone?: string;
  }
  export interface billing_address_import_subscription_params {
    line1?: string;
  }
  export interface billing_address_import_subscription_params {
    line2?: string;
  }
  export interface billing_address_import_subscription_params {
    line3?: string;
  }
  export interface billing_address_import_subscription_params {
    city?: string;
  }
  export interface billing_address_import_subscription_params {
    state_code?: string;
  }
  export interface billing_address_import_subscription_params {
    state?: string;
  }
  export interface billing_address_import_subscription_params {
    zip?: string;
  }
  export interface billing_address_import_subscription_params {
    country?: string;
  }
  export interface billing_address_import_subscription_params {
    validation_status?: string;
  }
  export interface shipping_address_import_subscription_params {
    first_name?: string;
  }
  export interface shipping_address_import_subscription_params {
    last_name?: string;
  }
  export interface shipping_address_import_subscription_params {
    email?: string;
  }
  export interface shipping_address_import_subscription_params {
    company?: string;
  }
  export interface shipping_address_import_subscription_params {
    phone?: string;
  }
  export interface shipping_address_import_subscription_params {
    line1?: string;
  }
  export interface shipping_address_import_subscription_params {
    line2?: string;
  }
  export interface shipping_address_import_subscription_params {
    line3?: string;
  }
  export interface shipping_address_import_subscription_params {
    city?: string;
  }
  export interface shipping_address_import_subscription_params {
    state_code?: string;
  }
  export interface shipping_address_import_subscription_params {
    state?: string;
  }
  export interface shipping_address_import_subscription_params {
    zip?: string;
  }
  export interface shipping_address_import_subscription_params {
    country?: string;
  }
  export interface shipping_address_import_subscription_params {
    validation_status?: string;
  }
  export interface transaction_import_subscription_params {
    amount?: number;
  }
  export interface transaction_import_subscription_params {
    payment_method?: string;
  }
  export interface transaction_import_subscription_params {
    reference_number?: string;
  }
  export interface transaction_import_subscription_params {
    date?: number;
  }
  export interface addons_import_subscription_params {
    id?: string;
  }
  export interface addons_import_subscription_params {
    quantity?: number;
  }
  export interface addons_import_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface addons_import_subscription_params {
    unit_price?: number;
  }
  export interface addons_import_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_import_subscription_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_import_subscription_params {
    id?: string;
  }
  export interface event_based_addons_import_subscription_params {
    quantity?: number;
  }
  export interface event_based_addons_import_subscription_params {
    unit_price?: number;
  }
  export interface event_based_addons_import_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_import_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_import_subscription_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_import_subscription_params {
    on_event?: string;
  }
  export interface event_based_addons_import_subscription_params {
    charge_once?: boolean;
  }
  export interface charged_event_based_addons_import_subscription_params {
    id?: string;
  }
  export interface charged_event_based_addons_import_subscription_params {
    last_charged_at?: number;
  }
  export interface coupons_import_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_import_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface contract_term_import_for_customer_params {
    id?: string;
  }
  export interface contract_term_import_for_customer_params {
    created_at?: number;
  }
  export interface contract_term_import_for_customer_params {
    contract_start?: number;
  }
  export interface contract_term_import_for_customer_params {
    billing_cycle?: number;
  }
  export interface contract_term_import_for_customer_params {
    total_amount_raised?: number;
  }
  export interface contract_term_import_for_customer_params {
    total_amount_raised_before_tax?: number;
  }
  export interface contract_term_import_for_customer_params {
    action_at_term_end?: string;
  }
  export interface contract_term_import_for_customer_params {
    cancellation_cutoff_period?: number;
  }
  export interface transaction_import_for_customer_params {
    amount?: number;
  }
  export interface transaction_import_for_customer_params {
    payment_method?: string;
  }
  export interface transaction_import_for_customer_params {
    reference_number?: string;
  }
  export interface transaction_import_for_customer_params {
    date?: number;
  }
  export interface shipping_address_import_for_customer_params {
    first_name?: string;
  }
  export interface shipping_address_import_for_customer_params {
    last_name?: string;
  }
  export interface shipping_address_import_for_customer_params {
    email?: string;
  }
  export interface shipping_address_import_for_customer_params {
    company?: string;
  }
  export interface shipping_address_import_for_customer_params {
    phone?: string;
  }
  export interface shipping_address_import_for_customer_params {
    line1?: string;
  }
  export interface shipping_address_import_for_customer_params {
    line2?: string;
  }
  export interface shipping_address_import_for_customer_params {
    line3?: string;
  }
  export interface shipping_address_import_for_customer_params {
    city?: string;
  }
  export interface shipping_address_import_for_customer_params {
    state_code?: string;
  }
  export interface shipping_address_import_for_customer_params {
    state?: string;
  }
  export interface shipping_address_import_for_customer_params {
    zip?: string;
  }
  export interface shipping_address_import_for_customer_params {
    country?: string;
  }
  export interface shipping_address_import_for_customer_params {
    validation_status?: string;
  }
  export interface addons_import_for_customer_params {
    id?: string;
  }
  export interface addons_import_for_customer_params {
    quantity?: number;
  }
  export interface addons_import_for_customer_params {
    quantity_in_decimal?: string;
  }
  export interface addons_import_for_customer_params {
    unit_price?: number;
  }
  export interface addons_import_for_customer_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_import_for_customer_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_import_for_customer_params {
    id?: string;
  }
  export interface event_based_addons_import_for_customer_params {
    quantity?: number;
  }
  export interface event_based_addons_import_for_customer_params {
    unit_price?: number;
  }
  export interface event_based_addons_import_for_customer_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_import_for_customer_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_import_for_customer_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_import_for_customer_params {
    on_event?: string;
  }
  export interface event_based_addons_import_for_customer_params {
    charge_once?: boolean;
  }
  export interface charged_event_based_addons_import_for_customer_params {
    id?: string;
  }
  export interface charged_event_based_addons_import_for_customer_params {
    last_charged_at?: number;
  }
  export interface coupons_import_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_import_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface contract_term_import_contract_term_params {
    id?: string;
  }
  export interface contract_term_import_contract_term_params {
    created_at?: number;
  }
  export interface contract_term_import_contract_term_params {
    contract_start?: number;
  }
  export interface contract_term_import_contract_term_params {
    contract_end?: number;
  }
  export interface contract_term_import_contract_term_params {
    status?: string;
  }
  export interface contract_term_import_contract_term_params {
    total_amount_raised?: number;
  }
  export interface contract_term_import_contract_term_params {
    total_amount_raised_before_tax?: number;
  }
  export interface contract_term_import_contract_term_params {
    total_contract_value?: number;
  }
  export interface contract_term_import_contract_term_params {
    total_contract_value_before_tax?: number;
  }
  export interface contract_term_import_contract_term_params {
    billing_cycle?: number;
  }
  export interface contract_term_import_contract_term_params {
    action_at_term_end?: string;
  }
  export interface contract_term_import_contract_term_params {
    cancellation_cutoff_period?: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    id?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    date_from: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    date_to: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    entity_type: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    entity_id?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    description?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    unit_amount?: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    quantity?: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    amount?: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    unit_amount_in_decimal?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    quantity_in_decimal?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    amount_in_decimal?: string;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    discount_amount?: number;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    use_for_proration?: boolean;
  }
  export interface unbilled_charges_import_unbilled_charges_params {
    is_advance_charge?: boolean;
  }
  export interface discounts_import_unbilled_charges_params {
    unbilled_charge_id?: string;
  }
  export interface discounts_import_unbilled_charges_params {
    entity_type?: string;
  }
  export interface discounts_import_unbilled_charges_params {
    entity_id?: string;
  }
  export interface discounts_import_unbilled_charges_params {
    description?: string;
  }
  export interface discounts_import_unbilled_charges_params {
    amount: number;
  }
  export interface tiers_import_unbilled_charges_params {
    unbilled_charge_id: string;
  }
  export interface tiers_import_unbilled_charges_params {
    starting_unit?: number;
  }
  export interface tiers_import_unbilled_charges_params {
    ending_unit?: number;
  }
  export interface tiers_import_unbilled_charges_params {
    quantity_used?: number;
  }
  export interface tiers_import_unbilled_charges_params {
    unit_amount?: number;
  }
  export interface tiers_import_unbilled_charges_params {
    starting_unit_in_decimal?: string;
  }
  export interface tiers_import_unbilled_charges_params {
    ending_unit_in_decimal?: string;
  }
  export interface tiers_import_unbilled_charges_params {
    quantity_used_in_decimal?: string;
  }
  export interface tiers_import_unbilled_charges_params {
    unit_amount_in_decimal?: string;
  }
  export interface contract_term_import_for_items_params {
    id?: string;
  }
  export interface contract_term_import_for_items_params {
    created_at?: number;
  }
  export interface contract_term_import_for_items_params {
    contract_start?: number;
  }
  export interface contract_term_import_for_items_params {
    billing_cycle?: number;
  }
  export interface contract_term_import_for_items_params {
    total_amount_raised?: number;
  }
  export interface contract_term_import_for_items_params {
    total_amount_raised_before_tax?: number;
  }
  export interface contract_term_import_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_import_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface transaction_import_for_items_params {
    amount?: number;
  }
  export interface transaction_import_for_items_params {
    payment_method?: string;
  }
  export interface transaction_import_for_items_params {
    reference_number?: string;
  }
  export interface transaction_import_for_items_params {
    date?: number;
  }
  export interface shipping_address_import_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_import_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_import_for_items_params {
    email?: string;
  }
  export interface shipping_address_import_for_items_params {
    company?: string;
  }
  export interface shipping_address_import_for_items_params {
    phone?: string;
  }
  export interface shipping_address_import_for_items_params {
    line1?: string;
  }
  export interface shipping_address_import_for_items_params {
    line2?: string;
  }
  export interface shipping_address_import_for_items_params {
    line3?: string;
  }
  export interface shipping_address_import_for_items_params {
    city?: string;
  }
  export interface shipping_address_import_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_import_for_items_params {
    state?: string;
  }
  export interface shipping_address_import_for_items_params {
    zip?: string;
  }
  export interface shipping_address_import_for_items_params {
    country?: string;
  }
  export interface shipping_address_import_for_items_params {
    validation_status?: string;
  }
  export interface subscription_items_import_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_import_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_import_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_import_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_import_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_import_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_import_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_import_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_import_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_import_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_import_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_import_for_items_params {
    apply_on: string;
  }
  export interface discounts_import_for_items_params {
    duration_type: string;
  }
  export interface discounts_import_for_items_params {
    percentage?: number;
  }
  export interface discounts_import_for_items_params {
    amount?: number;
  }
  export interface discounts_import_for_items_params {
    period?: number;
  }
  export interface discounts_import_for_items_params {
    period_unit?: string;
  }
  export interface discounts_import_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_import_for_items_params {
    item_price_id?: string;
  }
  export interface charged_items_import_for_items_params {
    item_price_id?: string;
  }
  export interface charged_items_import_for_items_params {
    last_charged_at?: number;
  }
  export interface item_tiers_import_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_import_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_import_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_import_for_items_params {
    price?: number;
  }
  export interface item_tiers_import_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_import_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_import_for_items_params {
    price_in_decimal?: string;
  }
  export interface coupons_import_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon_id?: string;
  }
  export interface coupons_import_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    apply_till?: number;
  }
  export interface event_based_addons_cancel_params {
    id?: string;
  }
  export interface event_based_addons_cancel_params {
    quantity?: number;
  }
  export interface event_based_addons_cancel_params {
    unit_price?: number;
  }
  export interface event_based_addons_cancel_params {
    service_period_in_days?: number;
  }
  export interface subscription_items_cancel_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_cancel_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_cancel_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_cancel_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_cancel_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_cancel_for_items_params {
    service_period_days?: number;
  }
  export interface payment_intent_resume_params {
    id?: string;
  }
  export interface payment_intent_resume_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_resume_params {
    gw_token?: string;
  }
  export interface payment_intent_resume_params {
    payment_method_type?: string;
  }
  export interface payment_intent_resume_params {
    reference_id?: string;
  }
  export interface payment_intent_resume_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_resume_params {
    additional_information?: any;
  }
}
