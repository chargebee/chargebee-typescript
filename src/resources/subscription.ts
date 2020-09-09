import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Subscription extends Model {
  public id: string;
  public customer_id: string;
  public currency_code: string;
  public plan_id: string;
  public plan_quantity: number;
  public plan_unit_price?: number;
  public setup_fee?: number;
  public plan_amount?: number;
  public billing_period?: number;
  public billing_period_unit?: string;
  public plan_free_quantity?: number;
  public status: string;
  public start_date?: number;
  public trial_start?: number;
  public trial_end?: number;
  public current_term_start?: number;
  public current_term_end?: number;
  public next_billing_at?: number;
  public remaining_billing_cycles?: number;
  public po_number?: string;
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
  public has_scheduled_changes: boolean;
  public payment_source_id?: string;
  public auto_collection?: string;
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
  public deleted: boolean;
  public contract_term?: ContractTerm;
  public cancel_reason_code?: string;
  public free_period?: number;
  public free_period_unit?: string;

  

  // OPERATIONS
  //-----------

  public static create(params?: _subscription.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_for_customer(customer_id: string, params?: _subscription.create_for_customer_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/subscriptions',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _subscription.subscription_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static subscriptions_for_customer(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'subscriptions_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/subscriptions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static contract_terms_for_subscription(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'contract_terms_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/contract_terms',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve_with_scheduled_changes(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve_with_scheduled_changes',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/retrieve_with_scheduled_changes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_scheduled_changes(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_changes',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_changes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_scheduled_cancellation(subscription_id: string, params?: _subscription.remove_scheduled_cancellation_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_cancellation',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_cancellation',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_coupons(subscription_id: string, params?: _subscription.remove_coupons_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_coupons',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_coupons',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(subscription_id: string, params?: _subscription.update_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static change_term_end(subscription_id: string, params?: _subscription.change_term_end_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'change_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/change_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static reactivate(subscription_id: string, params?: _subscription.reactivate_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'reactivate',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/reactivate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static add_charge_at_term_end(subscription_id: string, params?: _subscription.add_charge_at_term_end_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'add_charge_at_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/add_charge_at_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static charge_addon_at_term_end(subscription_id: string, params?: _subscription.charge_addon_at_term_end_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'charge_addon_at_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/charge_addon_at_term_end',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static charge_future_renewals(subscription_id: string, params?: _subscription.charge_future_renewals_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'charge_future_renewals',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/charge_future_renewals',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static import_subscription(params?: _subscription.import_subscription_params) {
    return new RequestWrapper([params], {
      'methodName': 'import_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/import_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static import_for_customer(customer_id: string, params?: _subscription.import_for_customer_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'import_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/import_subscription',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static import_contract_term(subscription_id: string, params?: _subscription.import_contract_term_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'import_contract_term',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/import_contract_term',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static override_billing_profile(subscription_id: string, params?: _subscription.override_billing_profile_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'override_billing_profile',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/override_billing_profile',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static pause(subscription_id: string, params?: _subscription.pause_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'pause',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/pause',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static cancel(subscription_id: string, params?: _subscription.cancel_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static resume(subscription_id: string, params?: _subscription.resume_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'resume',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/resume',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_scheduled_pause(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_pause',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_pause',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static remove_scheduled_resumption(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'remove_scheduled_resumption',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/remove_scheduled_resumption',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Subscription

export class SubscriptionItem extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public unit_price?: number;
  public amount?: number;
  public item_free_quantity?: number;
  public trial_end?: number;
  public billing_cycles?: number;
  public service_period_in_days?: number;
  public on_event?: string;
  public charge_once?: boolean;
  public charge_on?: string;
} // ~SubscriptionItem

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
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
} // ~Addon

export class EventBasedAddon extends Model {
  public id: string;
  public quantity: number;
  public unit_price: number;
  public service_period_in_days?: number;
  public on_event: string;
  public charge_once: boolean;
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
  public cancellation_cutoff_period?: number;
  public created_at: number;
  public subscription_id: string;
  public remaining_billing_cycles?: number;
} // ~ContractTerm



  // REQUEST PARAMS
  //---------------

export namespace _subscription {
  export interface create_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_unit_price?: number;
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
    po_number?: string;
    coupon_ids?: Array<string>;
    token_id?: string;
    affiliate_token?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    created_from_ip?: string;
    invoice_notes?: string;
    meta_data?: any;
    invoice_immediately?: boolean;
    free_period?: number;
    free_period_unit?: string;
    contract_term_billing_cycle_on_renewal?: number;
    client_profile_id?: string;
    customer?: customer_create_params;
    card?: card_create_params;
    bank_account?: bank_account_create_params;
    payment_method?: payment_method_create_params;
    payment_intent?: payment_intent_create_params;
    billing_address?: billing_address_create_params;
    shipping_address?: shipping_address_create_params;
    contract_term?: contract_term_create_params;
    addons?: Array<addons_create_params>;
    event_based_addons?: Array<event_based_addons_create_params>;
  }
  export interface create_for_customer_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_unit_price?: number;
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
    po_number?: string;
    coupon_ids?: Array<string>;
    payment_source_id?: string;
    override_relationship?: boolean;
    invoice_notes?: string;
    meta_data?: any;
    invoice_immediately?: boolean;
    free_period?: number;
    free_period_unit?: string;
    contract_term_billing_cycle_on_renewal?: number;
    shipping_address?: shipping_address_create_for_customer_params;
    payment_intent?: payment_intent_create_for_customer_params;
    contract_term?: contract_term_create_for_customer_params;
    addons?: Array<addons_create_for_customer_params>;
    event_based_addons?: Array<event_based_addons_create_for_customer_params>;
  }
  export interface subscription_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    plan_id?: filter._string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_id?: filter._string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
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
    override_relationship?: filter._boolean;
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
    contract_term_billing_cycle_on_renewal?: number;
    free_period?: number;
    free_period_unit?: string;
    card?: card_update_params;
    bank_account?: bank_account_update_params;
    payment_method?: payment_method_update_params;
    payment_intent?: payment_intent_update_params;
    billing_address?: billing_address_update_params;
    shipping_address?: shipping_address_update_params;
    customer?: customer_update_params;
    contract_term?: contract_term_update_params;
    addons?: Array<addons_update_params>;
    event_based_addons?: Array<event_based_addons_update_params>;
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
    contract_term_billing_cycle_on_renewal?: number;
    contract_term?: contract_term_reactivate_params;
    payment_intent?: payment_intent_reactivate_params;
  }
  export interface add_charge_at_term_end_params {
    amount: number;
    description: string;
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
    date_from?: number;
    date_to?: number;
  }
  export interface charge_future_renewals_params {
    terms_to_charge?: number;
  }
  export interface import_subscription_params {
    id?: string;
    client_profile_id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_unit_price?: number;
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
    pause_date?: number;
    resume_date?: number;
    create_current_term_invoice?: boolean;
    affiliate_token?: string;
    invoice_notes?: string;
    meta_data?: any;
    customer?: customer_import_subscription_params;
    contract_term?: contract_term_import_subscription_params;
    card?: card_import_subscription_params;
    bank_account?: bank_account_import_subscription_params;
    payment_method?: payment_method_import_subscription_params;
    billing_address?: billing_address_import_subscription_params;
    shipping_address?: shipping_address_import_subscription_params;
    transaction?: transaction_import_subscription_params;
    addons?: Array<addons_import_subscription_params>;
    event_based_addons?: Array<event_based_addons_import_subscription_params>;
    charged_event_based_addons?: Array<charged_event_based_addons_import_subscription_params>;
  }
  export interface import_for_customer_params {
    id?: string;
    plan_id: string;
    plan_quantity?: number;
    plan_unit_price?: number;
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
  }
  export interface import_contract_term_params {
    contract_term_billing_cycle_on_renewal?: number;
    contract_term?: contract_term_import_contract_term_params;
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
    resume_date?: number;
  }
  export interface cancel_params {
    end_of_term?: boolean;
    cancel_at?: number;
    credit_option_for_current_term_charges?: string;
    unbilled_charges_option?: string;
    account_receivables_handling?: string;
    refundable_credits_handling?: string;
    contract_term_cancel_option?: string;
    cancel_reason_code?: string;
    event_based_addons?: Array<event_based_addons_cancel_params>;
  }
  export interface resume_params {
    resume_option?: string;
    resume_date?: number;
    charges_handling?: string;
    unpaid_invoices_handling?: string;
    payment_intent?: payment_intent_resume_params;
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
    taxability?: string;
  }
  export interface customer_create_params {
    locale?: string;
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
    phone?: string;
  }
  export interface customer_create_params {
    auto_collection?: string;
  }
  export interface customer_create_params {
    allow_direct_debit?: boolean;
  }
  export interface customer_create_params {
    consolidated_invoicing?: boolean;
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
    reference_id?: string;
  }
  export interface payment_intent_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
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
  export interface customer_create_params {
    vat_number?: string;
  }
  export interface customer_create_params {
    registered_for_gst?: boolean;
  }
  export interface customer_create_params {
    business_customer_without_vat_number?: boolean;
  }
  export interface contract_term_create_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_params {
    cancellation_cutoff_period?: number;
  }
  export interface customer_create_params {
    exemption_details?: any;
  }
  export interface customer_create_params {
    customer_type?: string;
  }
  export interface addons_create_params {
    id?: string;
  }
  export interface addons_create_params {
    quantity?: number;
  }
  export interface addons_create_params {
    unit_price?: number;
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
    reference_id?: string;
  }
  export interface payment_intent_create_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
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
    unit_price?: number;
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
  export interface bank_account_update_params {
  }
  export interface bank_account_update_params {
  }
  export interface bank_account_update_params {
  }
  export interface bank_account_update_params {
  }
  export interface bank_account_update_params {
  }
  export interface bank_account_update_params {
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
    reference_id?: string;
  }
  export interface payment_intent_update_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
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
  export interface customer_update_params {
    vat_number?: string;
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
  export interface addons_update_params {
    trial_end?: number;
  }
  export interface contract_term_reactivate_params {
    action_at_term_end?: string;
  }
  export interface contract_term_reactivate_params {
    cancellation_cutoff_period?: number;
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
    reference_id?: string;
  }
  export interface payment_intent_reactivate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
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
    taxability?: string;
  }
  export interface customer_import_subscription_params {
    locale?: string;
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
    phone?: string;
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
  export interface bank_account_import_subscription_params {
  }
  export interface bank_account_import_subscription_params {
  }
  export interface bank_account_import_subscription_params {
  }
  export interface bank_account_import_subscription_params {
  }
  export interface bank_account_import_subscription_params {
  }
  export interface bank_account_import_subscription_params {
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
  }
  export interface payment_method_import_subscription_params {
    issuing_country?: string;
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
  export interface customer_import_subscription_params {
    vat_number?: string;
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
    unit_price?: number;
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
    unit_price?: number;
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
    total_contract_value?: number;
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
    reference_id?: string;
  }
  export interface payment_intent_resume_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
}
