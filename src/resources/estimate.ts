import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Estimate extends Model {
  public created_at: number;
  public subscription_estimate?: resources.SubscriptionEstimate;
  public invoice_estimate?: resources.InvoiceEstimate;
  public invoice_estimates?: Array<resources.InvoiceEstimate>;
  public next_invoice_estimate?: resources.InvoiceEstimate;
  public credit_note_estimates?: Array<resources.CreditNoteEstimate>;
  public unbilled_charge_estimates?: Array<resources.UnbilledCharge>;

  

  // OPERATIONS
  //-----------

  public static create_subscription(params?: _estimate.create_subscription_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/create_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_sub_item_estimate(params?: _estimate.create_sub_item_estimate_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_sub_item_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/create_subscription_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_sub_for_customer_estimate(customer_id: string, params?: _estimate.create_sub_for_customer_estimate_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_sub_for_customer_estimate',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/create_subscription_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_sub_item_for_customer_estimate(customer_id: string, params?: _estimate.create_sub_item_for_customer_estimate_params) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_sub_item_for_customer_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/create_subscription_for_items_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_subscription(params?: _estimate.update_subscription_params) {
    return new RequestWrapper([params], {
      'methodName': 'update_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/update_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_subscription_for_items(params?: _estimate.update_subscription_for_items_params) {
    return new RequestWrapper([params], {
      'methodName': 'update_subscription_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/update_subscription_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static renewal_estimate(subscription_id: string, params?: _estimate.renewal_estimate_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'renewal_estimate',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/renewal_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static advance_invoice_estimate(subscription_id: string, params?: _estimate.advance_invoice_estimate_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'advance_invoice_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/advance_invoice_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static regenerate_invoice_estimate(subscription_id: string, params?: _estimate.regenerate_invoice_estimate_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'regenerate_invoice_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/regenerate_invoice_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static upcoming_invoices_estimate(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'upcoming_invoices_estimate',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/upcoming_invoices_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static change_term_end(subscription_id: string, params?: _estimate.change_term_end_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'change_term_end',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/change_term_end_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static cancel_subscription(subscription_id: string, params?: _estimate.cancel_subscription_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'cancel_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/cancel_subscription_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static cancel_subscription_for_items(subscription_id: string, params?: _estimate.cancel_subscription_for_items_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'cancel_subscription_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/cancel_subscription_for_items_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static pause_subscription(subscription_id: string, params?: _estimate.pause_subscription_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'pause_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/pause_subscription_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static resume_subscription(subscription_id: string, params?: _estimate.resume_subscription_params) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'resume_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/resume_subscription_estimate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static gift_subscription(params?: _estimate.gift_subscription_params) {
    return new RequestWrapper([params], {
      'methodName': 'gift_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/gift_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static gift_subscription_for_items(params?: _estimate.gift_subscription_for_items_params) {
    return new RequestWrapper([params], {
      'methodName': 'gift_subscription_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/gift_subscription_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_invoice(params?: _estimate.create_invoice_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/create_invoice',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_invoice_for_items(params?: _estimate.create_invoice_for_items_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_invoice_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/estimates',
      'urlSuffix': '/create_invoice_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Estimate



  // REQUEST PARAMS
  //---------------

export namespace _estimate {
  export interface create_subscription_params {
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    invoice_immediately?: boolean;
    invoice_date?: number;
    client_profile_id?: string;
    subscription?: subscription_create_subscription_params;
    billing_address?: billing_address_create_subscription_params;
    shipping_address?: shipping_address_create_subscription_params;
    customer?: customer_create_subscription_params;
    contract_term?: contract_term_create_subscription_params;
    addons?: Array<addons_create_subscription_params>;
    event_based_addons?: Array<event_based_addons_create_subscription_params>;
  }
  export interface create_sub_item_estimate_params {
    billing_cycles?: number;
    mandatory_items_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    invoice_immediately?: boolean;
    invoice_date?: number;
    client_profile_id?: string;
    subscription?: subscription_create_sub_item_estimate_params;
    billing_address?: billing_address_create_sub_item_estimate_params;
    shipping_address?: shipping_address_create_sub_item_estimate_params;
    customer?: customer_create_sub_item_estimate_params;
    contract_term?: contract_term_create_sub_item_estimate_params;
    subscription_items?: Array<subscription_items_create_sub_item_estimate_params>;
    item_tiers?: Array<item_tiers_create_sub_item_estimate_params>;
  }
  export interface create_sub_for_customer_estimate_params {
    use_existing_balances?: boolean;
    invoice_immediately?: boolean;
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    invoice_date?: number;
    coupon_ids?: Array<string>;
    subscription?: subscription_create_sub_for_customer_estimate_params;
    shipping_address?: shipping_address_create_sub_for_customer_estimate_params;
    contract_term?: contract_term_create_sub_for_customer_estimate_params;
    addons?: Array<addons_create_sub_for_customer_estimate_params>;
    event_based_addons?: Array<event_based_addons_create_sub_for_customer_estimate_params>;
  }
  export interface create_sub_item_for_customer_estimate_params {
    use_existing_balances?: boolean;
    invoice_immediately?: boolean;
    billing_cycles?: number;
    mandatory_items_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    invoice_date?: number;
    coupon_ids?: Array<string>;
    subscription?: subscription_create_sub_item_for_customer_estimate_params;
    shipping_address?: shipping_address_create_sub_item_for_customer_estimate_params;
    contract_term?: contract_term_create_sub_item_for_customer_estimate_params;
    subscription_items?: Array<subscription_items_create_sub_item_for_customer_estimate_params>;
    item_tiers?: Array<item_tiers_create_sub_item_for_customer_estimate_params>;
  }
  export interface update_subscription_params {
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    invoice_date?: number;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    prorate?: boolean;
    end_of_term?: boolean;
    force_term_reset?: boolean;
    reactivate?: boolean;
    include_delayed_charges?: boolean;
    use_existing_balances?: boolean;
    invoice_immediately?: boolean;
    subscription?: subscription_update_subscription_params;
    billing_address?: billing_address_update_subscription_params;
    shipping_address?: shipping_address_update_subscription_params;
    customer?: customer_update_subscription_params;
    addons?: Array<addons_update_subscription_params>;
    event_based_addons?: Array<event_based_addons_update_subscription_params>;
  }
  export interface update_subscription_for_items_params {
    mandatory_items_to_remove?: Array<string>;
    replace_items_list?: boolean;
    invoice_date?: number;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    prorate?: boolean;
    end_of_term?: boolean;
    force_term_reset?: boolean;
    reactivate?: boolean;
    include_delayed_charges?: boolean;
    use_existing_balances?: boolean;
    invoice_immediately?: boolean;
    subscription?: subscription_update_subscription_for_items_params;
    billing_address?: billing_address_update_subscription_for_items_params;
    shipping_address?: shipping_address_update_subscription_for_items_params;
    customer?: customer_update_subscription_for_items_params;
    subscription_items?: Array<subscription_items_update_subscription_for_items_params>;
    item_tiers?: Array<item_tiers_update_subscription_for_items_params>;
  }
  export interface renewal_estimate_params {
    include_delayed_charges?: boolean;
    use_existing_balances?: boolean;
    ignore_scheduled_cancellation?: boolean;
    ignore_scheduled_changes?: boolean;
  }
  export interface advance_invoice_estimate_params {
    terms_to_charge?: number;
    invoice_immediately?: boolean;
    schedule_type?: string;
    fixed_interval_schedule?: fixed_interval_schedule_advance_invoice_estimate_params;
    specific_dates_schedule?: Array<specific_dates_schedule_advance_invoice_estimate_params>;
  }
  export interface regenerate_invoice_estimate_params {
    date_from?: number;
    date_to?: number;
    prorate?: boolean;
    invoice_immediately?: boolean;
  }
  export interface change_term_end_params {
    term_ends_at: number;
    prorate?: boolean;
    invoice_immediately?: boolean;
  }
  export interface cancel_subscription_params {
    end_of_term?: boolean;
    cancel_at?: number;
    credit_option_for_current_term_charges?: string;
    unbilled_charges_option?: string;
    account_receivables_handling?: string;
    refundable_credits_handling?: string;
    contract_term_cancel_option?: string;
    invoice_date?: number;
    cancel_reason_code?: string;
    event_based_addons?: Array<event_based_addons_cancel_subscription_params>;
  }
  export interface cancel_subscription_for_items_params {
    end_of_term?: boolean;
    cancel_at?: number;
    credit_option_for_current_term_charges?: string;
    unbilled_charges_option?: string;
    account_receivables_handling?: string;
    refundable_credits_handling?: string;
    contract_term_cancel_option?: string;
    invoice_date?: number;
    cancel_reason_code?: string;
    subscription_items?: Array<subscription_items_cancel_subscription_for_items_params>;
  }
  export interface pause_subscription_params {
    pause_option?: string;
    unbilled_charges_handling?: string;
    subscription?: subscription_pause_subscription_params;
  }
  export interface resume_subscription_params {
    resume_option?: string;
    charges_handling?: string;
    subscription?: subscription_resume_subscription_params;
  }
  export interface gift_subscription_params {
    coupon_ids?: Array<string>;
    gift?: gift_gift_subscription_params;
    gifter?: gifter_gift_subscription_params;
    gift_receiver?: gift_receiver_gift_subscription_params;
    payment_intent?: payment_intent_gift_subscription_params;
    shipping_address?: shipping_address_gift_subscription_params;
    subscription?: subscription_gift_subscription_params;
    addons?: Array<addons_gift_subscription_params>;
  }
  export interface gift_subscription_for_items_params {
    coupon_ids?: Array<string>;
    gift?: gift_gift_subscription_for_items_params;
    gifter?: gifter_gift_subscription_for_items_params;
    gift_receiver?: gift_receiver_gift_subscription_for_items_params;
    payment_intent?: payment_intent_gift_subscription_for_items_params;
    shipping_address?: shipping_address_gift_subscription_for_items_params;
    subscription_items?: Array<subscription_items_gift_subscription_for_items_params>;
  }
  export interface create_invoice_params {
    currency_code?: string;
    invoice_note?: string;
    remove_general_note?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    auto_collection?: string;
    invoice_date?: number;
    invoice?: invoice_create_invoice_params;
    shipping_address?: shipping_address_create_invoice_params;
    addons?: Array<addons_create_invoice_params>;
    charges?: Array<charges_create_invoice_params>;
    notes_to_remove?: Array<notes_to_remove_create_invoice_params>;
  }
  export interface create_invoice_for_items_params {
    currency_code?: string;
    invoice_note?: string;
    remove_general_note?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    auto_collection?: string;
    invoice_date?: number;
    invoice?: invoice_create_invoice_for_items_params;
    shipping_address?: shipping_address_create_invoice_for_items_params;
    item_prices?: Array<item_prices_create_invoice_for_items_params>;
    item_tiers?: Array<item_tiers_create_invoice_for_items_params>;
    charges?: Array<charges_create_invoice_for_items_params>;
    notes_to_remove?: Array<notes_to_remove_create_invoice_for_items_params>;
  }
  export interface subscription_create_subscription_params {
    id?: string;
  }
  export interface subscription_create_subscription_params {
    plan_id: string;
  }
  export interface subscription_create_subscription_params {
    plan_quantity?: number;
  }
  export interface subscription_create_subscription_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_create_subscription_params {
    plan_unit_price?: number;
  }
  export interface subscription_create_subscription_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_create_subscription_params {
    setup_fee?: number;
  }
  export interface subscription_create_subscription_params {
    trial_end?: number;
  }
  export interface subscription_create_subscription_params {
    start_date?: number;
  }
  export interface subscription_create_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_create_subscription_params {
    offline_payment_method?: string;
  }
  export interface billing_address_create_subscription_params {
    line1?: string;
  }
  export interface billing_address_create_subscription_params {
    line2?: string;
  }
  export interface billing_address_create_subscription_params {
    line3?: string;
  }
  export interface billing_address_create_subscription_params {
    city?: string;
  }
  export interface billing_address_create_subscription_params {
    state_code?: string;
  }
  export interface billing_address_create_subscription_params {
    zip?: string;
  }
  export interface billing_address_create_subscription_params {
    country?: string;
  }
  export interface billing_address_create_subscription_params {
    validation_status?: string;
  }
  export interface shipping_address_create_subscription_params {
    line1?: string;
  }
  export interface shipping_address_create_subscription_params {
    line2?: string;
  }
  export interface shipping_address_create_subscription_params {
    line3?: string;
  }
  export interface shipping_address_create_subscription_params {
    city?: string;
  }
  export interface shipping_address_create_subscription_params {
    state_code?: string;
  }
  export interface shipping_address_create_subscription_params {
    zip?: string;
  }
  export interface shipping_address_create_subscription_params {
    country?: string;
  }
  export interface shipping_address_create_subscription_params {
    validation_status?: string;
  }
  export interface customer_create_subscription_params {
    vat_number?: string;
  }
  export interface customer_create_subscription_params {
    vat_number_prefix?: string;
  }
  export interface customer_create_subscription_params {
    registered_for_gst?: boolean;
  }
  export interface customer_create_subscription_params {
    taxability?: string;
  }
  export interface customer_create_subscription_params {
    entity_code?: string;
  }
  export interface customer_create_subscription_params {
    exempt_number?: string;
  }
  export interface customer_create_subscription_params {
  }
  export interface subscription_create_subscription_params {
    free_period?: number;
  }
  export interface subscription_create_subscription_params {
    free_period_unit?: string;
  }
  export interface subscription_create_subscription_params {
  }
  export interface contract_term_create_subscription_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_subscription_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_create_subscription_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface subscription_create_subscription_params {
    trial_end_action?: string;
  }
  export interface customer_create_subscription_params {
    exemption_details?: any;
  }
  export interface customer_create_subscription_params {
    customer_type?: string;
  }
  export interface addons_create_subscription_params {
    id?: string;
  }
  export interface addons_create_subscription_params {
    quantity?: number;
  }
  export interface addons_create_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_subscription_params {
    unit_price?: number;
  }
  export interface addons_create_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_subscription_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_create_subscription_params {
    id?: string;
  }
  export interface event_based_addons_create_subscription_params {
    quantity?: number;
  }
  export interface event_based_addons_create_subscription_params {
    unit_price?: number;
  }
  export interface event_based_addons_create_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_create_subscription_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_create_subscription_params {
    on_event?: string;
  }
  export interface event_based_addons_create_subscription_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_create_subscription_params {
    charge_on?: string;
  }
  export interface addons_create_subscription_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    id?: string;
  }
  export interface subscription_create_sub_item_estimate_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    start_date?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_create_sub_item_estimate_params {
    offline_payment_method?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    line1?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    line2?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    line3?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    city?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    state_code?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    zip?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    country?: string;
  }
  export interface billing_address_create_sub_item_estimate_params {
    validation_status?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    line1?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    line2?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    line3?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    city?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    state_code?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    zip?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    country?: string;
  }
  export interface shipping_address_create_sub_item_estimate_params {
    validation_status?: string;
  }
  export interface customer_create_sub_item_estimate_params {
    vat_number?: string;
  }
  export interface customer_create_sub_item_estimate_params {
    vat_number_prefix?: string;
  }
  export interface customer_create_sub_item_estimate_params {
    registered_for_gst?: boolean;
  }
  export interface customer_create_sub_item_estimate_params {
    taxability?: string;
  }
  export interface customer_create_sub_item_estimate_params {
    entity_code?: string;
  }
  export interface customer_create_sub_item_estimate_params {
    exempt_number?: string;
  }
  export interface customer_create_sub_item_estimate_params {
  }
  export interface subscription_create_sub_item_estimate_params {
    free_period?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    free_period_unit?: string;
  }
  export interface subscription_create_sub_item_estimate_params {
  }
  export interface customer_create_sub_item_estimate_params {
    exemption_details?: any;
  }
  export interface customer_create_sub_item_estimate_params {
    customer_type?: string;
  }
  export interface contract_term_create_sub_item_estimate_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_sub_item_estimate_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface subscription_create_sub_item_estimate_params {
    trial_end_action?: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    item_price_id: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    quantity?: number;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    unit_price?: number;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    billing_cycles?: number;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    trial_end?: number;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    service_period_days?: number;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    charge_on_event?: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    charge_once?: boolean;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface subscription_items_create_sub_item_estimate_params {
    charge_on_option?: string;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    price?: number;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_item_estimate_params {
    price_in_decimal?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    id?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    plan_id: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    plan_quantity?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    plan_unit_price?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    setup_fee?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    start_date?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    offline_payment_method?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    line1?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    line2?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    line3?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    city?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    state_code?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    zip?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    country?: string;
  }
  export interface shipping_address_create_sub_for_customer_estimate_params {
    validation_status?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    free_period?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    free_period_unit?: string;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
  }
  export interface contract_term_create_sub_for_customer_estimate_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_sub_for_customer_estimate_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface subscription_create_sub_for_customer_estimate_params {
    trial_end_action?: string;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    id?: string;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    quantity?: number;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    unit_price?: number;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    id?: string;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    quantity?: number;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    unit_price?: number;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    on_event?: string;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_create_sub_for_customer_estimate_params {
    charge_on?: string;
  }
  export interface addons_create_sub_for_customer_estimate_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    id?: string;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    start_date?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    offline_payment_method?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    line1?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    line2?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    line3?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    city?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    state_code?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    zip?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    country?: string;
  }
  export interface shipping_address_create_sub_item_for_customer_estimate_params {
    validation_status?: string;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    free_period?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    free_period_unit?: string;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
  }
  export interface contract_term_create_sub_item_for_customer_estimate_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_sub_item_for_customer_estimate_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface subscription_create_sub_item_for_customer_estimate_params {
    trial_end_action?: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    item_price_id: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    quantity?: number;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    unit_price?: number;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    billing_cycles?: number;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    trial_end?: number;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    service_period_days?: number;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    charge_on_event?: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    charge_once?: boolean;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface subscription_items_create_sub_item_for_customer_estimate_params {
    charge_on_option?: string;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    price?: number;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_item_for_customer_estimate_params {
    price_in_decimal?: string;
  }
  export interface subscription_update_subscription_params {
    id: string;
  }
  export interface subscription_update_subscription_params {
    plan_id?: string;
  }
  export interface subscription_update_subscription_params {
    plan_quantity?: number;
  }
  export interface subscription_update_subscription_params {
    plan_unit_price?: number;
  }
  export interface subscription_update_subscription_params {
    setup_fee?: number;
  }
  export interface subscription_update_subscription_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_update_subscription_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_update_subscription_params {
    start_date?: number;
  }
  export interface subscription_update_subscription_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_update_subscription_params {
    auto_collection?: string;
  }
  export interface subscription_update_subscription_params {
    offline_payment_method?: string;
  }
  export interface billing_address_update_subscription_params {
    line1?: string;
  }
  export interface billing_address_update_subscription_params {
    line2?: string;
  }
  export interface billing_address_update_subscription_params {
    line3?: string;
  }
  export interface billing_address_update_subscription_params {
    city?: string;
  }
  export interface billing_address_update_subscription_params {
    state_code?: string;
  }
  export interface billing_address_update_subscription_params {
    zip?: string;
  }
  export interface billing_address_update_subscription_params {
    country?: string;
  }
  export interface billing_address_update_subscription_params {
    validation_status?: string;
  }
  export interface shipping_address_update_subscription_params {
    line1?: string;
  }
  export interface shipping_address_update_subscription_params {
    line2?: string;
  }
  export interface shipping_address_update_subscription_params {
    line3?: string;
  }
  export interface shipping_address_update_subscription_params {
    city?: string;
  }
  export interface shipping_address_update_subscription_params {
    state_code?: string;
  }
  export interface shipping_address_update_subscription_params {
    zip?: string;
  }
  export interface shipping_address_update_subscription_params {
    country?: string;
  }
  export interface shipping_address_update_subscription_params {
    validation_status?: string;
  }
  export interface customer_update_subscription_params {
    vat_number?: string;
  }
  export interface customer_update_subscription_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_subscription_params {
    registered_for_gst?: boolean;
  }
  export interface subscription_update_subscription_params {
    free_period?: number;
  }
  export interface subscription_update_subscription_params {
    free_period_unit?: string;
  }
  export interface subscription_update_subscription_params {
  }
  export interface customer_update_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    taxability?: string;
  }
  export interface customer_update_subscription_params {
  }
  export interface subscription_update_subscription_params {
    trial_end_action?: string;
  }
  export interface addons_update_subscription_params {
    id?: string;
  }
  export interface addons_update_subscription_params {
    quantity?: number;
  }
  export interface addons_update_subscription_params {
    unit_price?: number;
  }
  export interface addons_update_subscription_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_update_subscription_params {
    id?: string;
  }
  export interface event_based_addons_update_subscription_params {
    quantity?: number;
  }
  export interface event_based_addons_update_subscription_params {
    unit_price?: number;
  }
  export interface event_based_addons_update_subscription_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_update_subscription_params {
    charge_on?: string;
  }
  export interface event_based_addons_update_subscription_params {
    on_event?: string;
  }
  export interface event_based_addons_update_subscription_params {
    charge_once?: boolean;
  }
  export interface addons_update_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface addons_update_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_update_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_update_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_update_subscription_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_for_items_params {
    id: string;
  }
  export interface subscription_update_subscription_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_update_subscription_for_items_params {
    start_date?: number;
  }
  export interface subscription_update_subscription_for_items_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_update_subscription_for_items_params {
    auto_collection?: string;
  }
  export interface subscription_update_subscription_for_items_params {
    offline_payment_method?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    line1?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    line2?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    line3?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    city?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    state_code?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    zip?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    country?: string;
  }
  export interface billing_address_update_subscription_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    line1?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    line2?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    line3?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    city?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    zip?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    country?: string;
  }
  export interface shipping_address_update_subscription_for_items_params {
    validation_status?: string;
  }
  export interface customer_update_subscription_for_items_params {
    vat_number?: string;
  }
  export interface customer_update_subscription_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_subscription_for_items_params {
    registered_for_gst?: boolean;
  }
  export interface subscription_update_subscription_for_items_params {
    free_period?: number;
  }
  export interface subscription_update_subscription_for_items_params {
    free_period_unit?: string;
  }
  export interface subscription_update_subscription_for_items_params {
  }
  export interface customer_update_subscription_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    taxability?: string;
  }
  export interface customer_update_subscription_for_items_params {
  }
  export interface subscription_update_subscription_for_items_params {
    trial_end_action?: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_update_subscription_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_update_subscription_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_update_subscription_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_update_subscription_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_update_subscription_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_update_subscription_for_items_params {
    charge_on_option?: string;
  }
  export interface subscription_items_update_subscription_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface item_tiers_update_subscription_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_update_subscription_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_update_subscription_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_update_subscription_for_items_params {
    price?: number;
  }
  export interface item_tiers_update_subscription_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_update_subscription_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_update_subscription_for_items_params {
    price_in_decimal?: string;
  }
  export interface fixed_interval_schedule_advance_invoice_estimate_params {
    number_of_occurrences?: number;
  }
  export interface fixed_interval_schedule_advance_invoice_estimate_params {
    days_before_renewal?: number;
  }
  export interface fixed_interval_schedule_advance_invoice_estimate_params {
    end_schedule_on?: string;
  }
  export interface fixed_interval_schedule_advance_invoice_estimate_params {
    end_date?: number;
  }
  export interface specific_dates_schedule_advance_invoice_estimate_params {
    terms_to_charge?: number;
  }
  export interface specific_dates_schedule_advance_invoice_estimate_params {
    date?: number;
  }
  export interface event_based_addons_cancel_subscription_params {
    id?: string;
  }
  export interface event_based_addons_cancel_subscription_params {
    quantity?: number;
  }
  export interface event_based_addons_cancel_subscription_params {
    unit_price?: number;
  }
  export interface event_based_addons_cancel_subscription_params {
    service_period_in_days?: number;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_cancel_subscription_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_pause_subscription_params {
    pause_date?: number;
  }
  export interface subscription_pause_subscription_params {
    resume_date?: number;
  }
  export interface subscription_resume_subscription_params {
    resume_date?: number;
  }
  export interface gift_gift_subscription_params {
    scheduled_at?: number;
  }
  export interface gift_gift_subscription_params {
    auto_claim?: boolean;
  }
  export interface gift_gift_subscription_params {
    no_expiry?: boolean;
  }
  export interface gift_gift_subscription_params {
    claim_expiry_date?: number;
  }
  export interface gifter_gift_subscription_params {
    customer_id: string;
  }
  export interface gifter_gift_subscription_params {
    signature: string;
  }
  export interface gifter_gift_subscription_params {
    note?: string;
  }
  export interface gifter_gift_subscription_params {
    payment_src_id?: string;
  }
  export interface gift_receiver_gift_subscription_params {
    customer_id: string;
  }
  export interface gift_receiver_gift_subscription_params {
    first_name: string;
  }
  export interface gift_receiver_gift_subscription_params {
    last_name: string;
  }
  export interface gift_receiver_gift_subscription_params {
    email: string;
  }
  export interface payment_intent_gift_subscription_params {
    id?: string;
  }
  export interface payment_intent_gift_subscription_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_gift_subscription_params {
    gw_token?: string;
  }
  export interface payment_intent_gift_subscription_params {
    reference_id?: string;
  }
  export interface payment_intent_gift_subscription_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_gift_subscription_params {
    additional_information?: any;
  }
  export interface shipping_address_gift_subscription_params {
    first_name?: string;
  }
  export interface shipping_address_gift_subscription_params {
    last_name?: string;
  }
  export interface shipping_address_gift_subscription_params {
    email?: string;
  }
  export interface shipping_address_gift_subscription_params {
    company?: string;
  }
  export interface shipping_address_gift_subscription_params {
    phone?: string;
  }
  export interface shipping_address_gift_subscription_params {
    line1?: string;
  }
  export interface shipping_address_gift_subscription_params {
    line2?: string;
  }
  export interface shipping_address_gift_subscription_params {
    line3?: string;
  }
  export interface shipping_address_gift_subscription_params {
    city?: string;
  }
  export interface shipping_address_gift_subscription_params {
    state_code?: string;
  }
  export interface shipping_address_gift_subscription_params {
    state?: string;
  }
  export interface shipping_address_gift_subscription_params {
    zip?: string;
  }
  export interface shipping_address_gift_subscription_params {
    country?: string;
  }
  export interface shipping_address_gift_subscription_params {
    validation_status?: string;
  }
  export interface subscription_gift_subscription_params {
    plan_id: string;
  }
  export interface subscription_gift_subscription_params {
    plan_quantity?: number;
  }
  export interface subscription_gift_subscription_params {
    plan_quantity_in_decimal?: string;
  }
  export interface addons_gift_subscription_params {
    id?: string;
  }
  export interface addons_gift_subscription_params {
    quantity?: number;
  }
  export interface addons_gift_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface gift_gift_subscription_for_items_params {
    scheduled_at?: number;
  }
  export interface gift_gift_subscription_for_items_params {
    auto_claim?: boolean;
  }
  export interface gift_gift_subscription_for_items_params {
    no_expiry?: boolean;
  }
  export interface gift_gift_subscription_for_items_params {
    claim_expiry_date?: number;
  }
  export interface gifter_gift_subscription_for_items_params {
    customer_id: string;
  }
  export interface gifter_gift_subscription_for_items_params {
    signature: string;
  }
  export interface gifter_gift_subscription_for_items_params {
    note?: string;
  }
  export interface gifter_gift_subscription_for_items_params {
    payment_src_id?: string;
  }
  export interface gift_receiver_gift_subscription_for_items_params {
    customer_id: string;
  }
  export interface gift_receiver_gift_subscription_for_items_params {
    first_name: string;
  }
  export interface gift_receiver_gift_subscription_for_items_params {
    last_name: string;
  }
  export interface gift_receiver_gift_subscription_for_items_params {
    email: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    id?: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    gw_token?: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    reference_id?: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_gift_subscription_for_items_params {
    additional_information?: any;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    email?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    company?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    phone?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    line1?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    line2?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    line3?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    city?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    state?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    zip?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    country?: string;
  }
  export interface shipping_address_gift_subscription_for_items_params {
    validation_status?: string;
  }
  export interface subscription_items_gift_subscription_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_gift_subscription_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_gift_subscription_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface invoice_create_invoice_params {
    customer_id?: string;
  }
  export interface invoice_create_invoice_params {
    subscription_id?: string;
  }
  export interface invoice_create_invoice_params {
    po_number?: string;
  }
  export interface shipping_address_create_invoice_params {
    first_name?: string;
  }
  export interface shipping_address_create_invoice_params {
    last_name?: string;
  }
  export interface shipping_address_create_invoice_params {
    email?: string;
  }
  export interface shipping_address_create_invoice_params {
    company?: string;
  }
  export interface shipping_address_create_invoice_params {
    phone?: string;
  }
  export interface shipping_address_create_invoice_params {
    line1?: string;
  }
  export interface shipping_address_create_invoice_params {
    line2?: string;
  }
  export interface shipping_address_create_invoice_params {
    line3?: string;
  }
  export interface shipping_address_create_invoice_params {
    city?: string;
  }
  export interface shipping_address_create_invoice_params {
    state_code?: string;
  }
  export interface shipping_address_create_invoice_params {
    state?: string;
  }
  export interface shipping_address_create_invoice_params {
    zip?: string;
  }
  export interface shipping_address_create_invoice_params {
    country?: string;
  }
  export interface shipping_address_create_invoice_params {
    validation_status?: string;
  }
  export interface addons_create_invoice_params {
    id?: string;
  }
  export interface addons_create_invoice_params {
    quantity?: number;
  }
  export interface addons_create_invoice_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_invoice_params {
    unit_price?: number;
  }
  export interface addons_create_invoice_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_invoice_params {
    date_from?: number;
  }
  export interface addons_create_invoice_params {
    date_to?: number;
  }
  export interface charges_create_invoice_params {
    amount?: number;
  }
  export interface charges_create_invoice_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_invoice_params {
    description?: string;
  }
  export interface charges_create_invoice_params {
    taxable?: boolean;
  }
  export interface charges_create_invoice_params {
    tax_profile_id?: string;
  }
  export interface charges_create_invoice_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_invoice_params {
    taxjar_product_code?: string;
  }
  export interface charges_create_invoice_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_invoice_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_invoice_params {
    avalara_service_type?: number;
  }
  export interface charges_create_invoice_params {
    date_from?: number;
  }
  export interface charges_create_invoice_params {
    date_to?: number;
  }
  export interface notes_to_remove_create_invoice_params {
    entity_type?: string;
  }
  export interface notes_to_remove_create_invoice_params {
    entity_id?: string;
  }
  export interface invoice_create_invoice_for_items_params {
    customer_id: string;
  }
  export interface invoice_create_invoice_for_items_params {
    subscription_id?: string;
  }
  export interface invoice_create_invoice_for_items_params {
    po_number?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    email?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    company?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    phone?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    line1?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    line2?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    line3?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    city?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    state?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    zip?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    country?: string;
  }
  export interface shipping_address_create_invoice_for_items_params {
    validation_status?: string;
  }
  export interface item_prices_create_invoice_for_items_params {
    item_price_id?: string;
  }
  export interface item_prices_create_invoice_for_items_params {
    quantity?: number;
  }
  export interface item_prices_create_invoice_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface item_prices_create_invoice_for_items_params {
    unit_price?: number;
  }
  export interface item_prices_create_invoice_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface item_prices_create_invoice_for_items_params {
    date_from?: number;
  }
  export interface item_prices_create_invoice_for_items_params {
    date_to?: number;
  }
  export interface item_tiers_create_invoice_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_invoice_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_invoice_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_invoice_for_items_params {
    price?: number;
  }
  export interface item_tiers_create_invoice_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_invoice_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_invoice_for_items_params {
    price_in_decimal?: string;
  }
  export interface charges_create_invoice_for_items_params {
    amount?: number;
  }
  export interface charges_create_invoice_for_items_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_invoice_for_items_params {
    description?: string;
  }
  export interface charges_create_invoice_for_items_params {
    taxable?: boolean;
  }
  export interface charges_create_invoice_for_items_params {
    tax_profile_id?: string;
  }
  export interface charges_create_invoice_for_items_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_invoice_for_items_params {
    taxjar_product_code?: string;
  }
  export interface charges_create_invoice_for_items_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_invoice_for_items_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_invoice_for_items_params {
    avalara_service_type?: number;
  }
  export interface charges_create_invoice_for_items_params {
    date_from?: number;
  }
  export interface charges_create_invoice_for_items_params {
    date_to?: number;
  }
  export interface notes_to_remove_create_invoice_for_items_params {
    entity_type?: string;
  }
  export interface notes_to_remove_create_invoice_for_items_params {
    entity_id?: string;
  }
}
