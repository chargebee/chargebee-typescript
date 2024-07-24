import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class HostedPage extends Model {
  public id?: string;
  public type?: string;
  public url?: string;
  public state?: string;
  public failure_reason?: string;
  public pass_thru_content?: string;
  public embed: boolean;
  public created_at?: number;
  public expires_at?: number;
  public updated_at?: number;
  public resource_version?: number;
  public checkout_info?: any;
  public business_entity_id?: string;
}

// OPERATIONS
//-----------
export class HostedPageApi extends Api {
  public checkout_new(params?: _hosted_page.checkout_new_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_new',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_new',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_one_time(params?: _hosted_page.checkout_one_time_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_one_time',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_one_time',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_one_time_for_items(params?: _hosted_page.checkout_one_time_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_one_time_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_one_time_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_new_for_items(params?: _hosted_page.checkout_new_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_new_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_new_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_existing(params?: _hosted_page.checkout_existing_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_existing',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_existing',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_existing_for_items(params?: _hosted_page.checkout_existing_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_existing_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_existing_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update_card(params?: _hosted_page.update_card_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'update_card',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/update_card',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update_payment_method(params?: _hosted_page.update_payment_method_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'update_payment_method',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/update_payment_method',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public manage_payment_sources(params?: _hosted_page.manage_payment_sources_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'manage_payment_sources',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/manage_payment_sources',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public collect_now(params?: _hosted_page.collect_now_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'collect_now',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/collect_now',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public accept_quote(params?: _hosted_page.accept_quote_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'accept_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/accept_quote',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public extend_subscription(params?: _hosted_page.extend_subscription_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'extend_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/extend_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_gift(params?: _hosted_page.checkout_gift_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_gift',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public checkout_gift_for_items(params?: _hosted_page.checkout_gift_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'checkout_gift_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/checkout_gift_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public claim_gift(params?: _hosted_page.claim_gift_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'claim_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/claim_gift',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve_agreement_pdf(params?: _hosted_page.retrieve_agreement_pdf_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'retrieve_agreement_pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/retrieve_agreement_pdf',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public acknowledge(hosted_page_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([hosted_page_id, params], {
      'methodName': 'acknowledge',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/acknowledge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(hosted_page_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([hosted_page_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _hosted_page.hosted_page_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public pre_cancel(params?: _hosted_page.pre_cancel_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'pre_cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/pre_cancel',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public events(params?: _hosted_page.events_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'events',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/events',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public view_voucher(params?: _hosted_page.view_voucher_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'view_voucher',
      'httpMethod': 'POST',
      'urlPrefix': '/hosted_pages',
      'urlSuffix': '/view_voucher',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~HostedPage



  // REQUEST PARAMS
  //---------------

export namespace _hosted_page {
  export interface checkout_new_params {
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_new_params;
    customer?: customer_checkout_new_params;
    card?: card_checkout_new_params;
    billing_address?: billing_address_checkout_new_params;
    shipping_address?: shipping_address_checkout_new_params;
    contract_term?: contract_term_checkout_new_params;
    addons?: Array<addons_checkout_new_params>;
    event_based_addons?: Array<event_based_addons_checkout_new_params>;
  }
  export interface checkout_one_time_params {
    currency_code?: string;
    invoice_note?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    customer?: customer_checkout_one_time_params;
    invoice?: invoice_checkout_one_time_params;
    card?: card_checkout_one_time_params;
    billing_address?: billing_address_checkout_one_time_params;
    shipping_address?: shipping_address_checkout_one_time_params;
    addons?: Array<addons_checkout_one_time_params>;
    charges?: Array<charges_checkout_one_time_params>;
  }
  export interface checkout_one_time_for_items_params {
    business_entity_id?: string;
    layout?: string;
    invoice_note?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    currency_code?: string;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    customer?: customer_checkout_one_time_for_items_params;
    invoice?: invoice_checkout_one_time_for_items_params;
    card?: card_checkout_one_time_for_items_params;
    billing_address?: billing_address_checkout_one_time_for_items_params;
    shipping_address?: shipping_address_checkout_one_time_for_items_params;
    item_prices?: Array<item_prices_checkout_one_time_for_items_params>;
    item_tiers?: Array<item_tiers_checkout_one_time_for_items_params>;
    charges?: Array<charges_checkout_one_time_for_items_params>;
    discounts?: Array<discounts_checkout_one_time_for_items_params>;
    entity_identifiers?: Array<entity_identifiers_checkout_one_time_for_items_params>;
  }
  export interface checkout_new_for_items_params {
    layout?: string;
    business_entity_id?: string;
    billing_cycles?: number;
    mandatory_items_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_new_for_items_params;
    customer?: customer_checkout_new_for_items_params;
    card?: card_checkout_new_for_items_params;
    billing_address?: billing_address_checkout_new_for_items_params;
    shipping_address?: shipping_address_checkout_new_for_items_params;
    contract_term?: contract_term_checkout_new_for_items_params;
    subscription_items?: Array<subscription_items_checkout_new_for_items_params>;
    discounts?: Array<discounts_checkout_new_for_items_params>;
    item_tiers?: Array<item_tiers_checkout_new_for_items_params>;
    entity_identifiers?: Array<entity_identifiers_checkout_new_for_items_params>;
  }
  export interface checkout_existing_params {
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    invoice_date?: number;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    reactivate?: boolean;
    force_term_reset?: boolean;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_existing_params;
    customer?: customer_checkout_existing_params;
    card?: card_checkout_existing_params;
    contract_term?: contract_term_checkout_existing_params;
    addons?: Array<addons_checkout_existing_params>;
    event_based_addons?: Array<event_based_addons_checkout_existing_params>;
  }
  export interface checkout_existing_for_items_params {
    layout?: string;
    mandatory_items_to_remove?: Array<string>;
    replace_items_list?: boolean;
    invoice_date?: number;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    reactivate?: boolean;
    force_term_reset?: boolean;
    change_option?: string;
    changes_scheduled_at?: number;
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    allow_offline_payment_methods?: boolean;
    subscription?: subscription_checkout_existing_for_items_params;
    customer?: customer_checkout_existing_for_items_params;
    card?: card_checkout_existing_for_items_params;
    contract_term?: contract_term_checkout_existing_for_items_params;
    subscription_items?: Array<subscription_items_checkout_existing_for_items_params>;
    discounts?: Array<discounts_checkout_existing_for_items_params>;
    item_tiers?: Array<item_tiers_checkout_existing_for_items_params>;
    entity_identifiers?: Array<entity_identifiers_checkout_existing_for_items_params>;
  }
  export interface update_card_params {
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    customer?: customer_update_card_params;
    card?: card_update_card_params;
  }
  export interface update_payment_method_params {
    redirect_url?: string;
    cancel_url?: string;
    pass_thru_content?: string;
    embed?: boolean;
    iframe_messaging?: boolean;
    customer?: customer_update_payment_method_params;
    card?: card_update_payment_method_params;
  }
  export interface manage_payment_sources_params {
    redirect_url?: string;
    customer?: customer_manage_payment_sources_params;
    card?: card_manage_payment_sources_params;
  }
  export interface collect_now_params {
    redirect_url?: string;
    currency_code?: string;
    customer?: customer_collect_now_params;
    card?: card_collect_now_params;
  }
  export interface accept_quote_params {
    redirect_url?: string;
    layout?: string;
    quote?: quote_accept_quote_params;
  }
  export interface extend_subscription_params {
    expiry?: number;
    billing_cycle?: number;
    subscription?: subscription_extend_subscription_params;
  }
  export interface checkout_gift_params {
    redirect_url?: string;
    coupon_ids?: Array<string>;
    gifter?: gifter_checkout_gift_params;
    subscription?: subscription_checkout_gift_params;
    addons?: Array<addons_checkout_gift_params>;
  }
  export interface checkout_gift_for_items_params {
    business_entity_id?: string;
    redirect_url?: string;
    coupon_ids?: Array<string>;
    gifter?: gifter_checkout_gift_for_items_params;
    subscription_items?: Array<subscription_items_checkout_gift_for_items_params>;
  }
  export interface claim_gift_params {
    redirect_url?: string;
    gift?: gift_claim_gift_params;
    customer?: customer_claim_gift_params;
  }
  export interface retrieve_agreement_pdf_params {
    payment_source_id: string;
  }
  export interface hosted_page_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    type?: filter._enum;
    state?: filter._enum;
    updated_at?: filter._timestamp;
  }
  export interface pre_cancel_params {
    pass_thru_content?: string;
    cancel_url?: string;
    redirect_url?: string;
    subscription?: subscription_pre_cancel_params;
  }
  export interface events_params {
    event_name: string;
    occurred_at?: number;
    event_data: any;
  }
  export interface view_voucher_params {
    payment_voucher?: payment_voucher_view_voucher_params;
    customer?: customer_view_voucher_params;
  }
  export interface subscription_checkout_new_params {
    id?: string;
  }
  export interface subscription_checkout_new_params {
    plan_id: string;
  }
  export interface subscription_checkout_new_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_new_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_new_params {
    plan_unit_price?: number;
  }
  export interface subscription_checkout_new_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_checkout_new_params {
    setup_fee?: number;
  }
  export interface subscription_checkout_new_params {
    trial_end?: number;
  }
  export interface subscription_checkout_new_params {
    start_date?: number;
  }
  export interface subscription_checkout_new_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_checkout_new_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_new_params {
    offline_payment_method?: string;
  }
  export interface subscription_checkout_new_params {
    invoice_notes?: string;
  }
  export interface subscription_checkout_new_params {
    affiliate_token?: string;
  }
  export interface subscription_checkout_new_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface customer_checkout_new_params {
    id?: string;
  }
  export interface customer_checkout_new_params {
    email?: string;
  }
  export interface customer_checkout_new_params {
    first_name?: string;
  }
  export interface customer_checkout_new_params {
    last_name?: string;
  }
  export interface customer_checkout_new_params {
    company?: string;
  }
  export interface customer_checkout_new_params {
    phone?: string;
  }
  export interface customer_checkout_new_params {
    locale?: string;
  }
  export interface customer_checkout_new_params {
    taxability?: string;
  }
  export interface customer_checkout_new_params {
    vat_number?: string;
  }
  export interface customer_checkout_new_params {
    vat_number_prefix?: string;
  }
  export interface customer_checkout_new_params {
    consolidated_invoicing?: boolean;
  }
  export interface card_checkout_new_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_new_params {
    gateway_account_id?: string;
  }
  export interface billing_address_checkout_new_params {
    first_name?: string;
  }
  export interface billing_address_checkout_new_params {
    last_name?: string;
  }
  export interface billing_address_checkout_new_params {
    email?: string;
  }
  export interface billing_address_checkout_new_params {
    company?: string;
  }
  export interface billing_address_checkout_new_params {
    phone?: string;
  }
  export interface billing_address_checkout_new_params {
    line1?: string;
  }
  export interface billing_address_checkout_new_params {
    line2?: string;
  }
  export interface billing_address_checkout_new_params {
    line3?: string;
  }
  export interface billing_address_checkout_new_params {
    city?: string;
  }
  export interface billing_address_checkout_new_params {
    state_code?: string;
  }
  export interface billing_address_checkout_new_params {
    state?: string;
  }
  export interface billing_address_checkout_new_params {
    zip?: string;
  }
  export interface billing_address_checkout_new_params {
    country?: string;
  }
  export interface billing_address_checkout_new_params {
    validation_status?: string;
  }
  export interface shipping_address_checkout_new_params {
    first_name?: string;
  }
  export interface shipping_address_checkout_new_params {
    last_name?: string;
  }
  export interface shipping_address_checkout_new_params {
    email?: string;
  }
  export interface shipping_address_checkout_new_params {
    company?: string;
  }
  export interface shipping_address_checkout_new_params {
    phone?: string;
  }
  export interface shipping_address_checkout_new_params {
    line1?: string;
  }
  export interface shipping_address_checkout_new_params {
    line2?: string;
  }
  export interface shipping_address_checkout_new_params {
    line3?: string;
  }
  export interface shipping_address_checkout_new_params {
    city?: string;
  }
  export interface shipping_address_checkout_new_params {
    state_code?: string;
  }
  export interface shipping_address_checkout_new_params {
    state?: string;
  }
  export interface shipping_address_checkout_new_params {
    zip?: string;
  }
  export interface shipping_address_checkout_new_params {
    country?: string;
  }
  export interface shipping_address_checkout_new_params {
    validation_status?: string;
  }
  export interface contract_term_checkout_new_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_new_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_checkout_new_params {
    id?: string;
  }
  export interface addons_checkout_new_params {
    quantity?: number;
  }
  export interface addons_checkout_new_params {
    quantity_in_decimal?: string;
  }
  export interface addons_checkout_new_params {
    unit_price?: number;
  }
  export interface addons_checkout_new_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_checkout_new_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_checkout_new_params {
    id?: string;
  }
  export interface event_based_addons_checkout_new_params {
    quantity?: number;
  }
  export interface event_based_addons_checkout_new_params {
    unit_price?: number;
  }
  export interface event_based_addons_checkout_new_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_checkout_new_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_checkout_new_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_checkout_new_params {
    on_event?: string;
  }
  export interface event_based_addons_checkout_new_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_checkout_new_params {
    charge_on?: string;
  }
  export interface customer_checkout_one_time_params {
    id?: string;
  }
  export interface customer_checkout_one_time_params {
    email?: string;
  }
  export interface customer_checkout_one_time_params {
    first_name?: string;
  }
  export interface customer_checkout_one_time_params {
    last_name?: string;
  }
  export interface customer_checkout_one_time_params {
    company?: string;
  }
  export interface customer_checkout_one_time_params {
    phone?: string;
  }
  export interface customer_checkout_one_time_params {
    locale?: string;
  }
  export interface customer_checkout_one_time_params {
    taxability?: string;
  }
  export interface customer_checkout_one_time_params {
    vat_number?: string;
  }
  export interface customer_checkout_one_time_params {
    vat_number_prefix?: string;
  }
  export interface customer_checkout_one_time_params {
    consolidated_invoicing?: boolean;
  }
  export interface invoice_checkout_one_time_params {
    po_number?: string;
  }
  export interface card_checkout_one_time_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_one_time_params {
    gateway_account_id?: string;
  }
  export interface billing_address_checkout_one_time_params {
    first_name?: string;
  }
  export interface billing_address_checkout_one_time_params {
    last_name?: string;
  }
  export interface billing_address_checkout_one_time_params {
    email?: string;
  }
  export interface billing_address_checkout_one_time_params {
    company?: string;
  }
  export interface billing_address_checkout_one_time_params {
    phone?: string;
  }
  export interface billing_address_checkout_one_time_params {
    line1?: string;
  }
  export interface billing_address_checkout_one_time_params {
    line2?: string;
  }
  export interface billing_address_checkout_one_time_params {
    line3?: string;
  }
  export interface billing_address_checkout_one_time_params {
    city?: string;
  }
  export interface billing_address_checkout_one_time_params {
    state_code?: string;
  }
  export interface billing_address_checkout_one_time_params {
    state?: string;
  }
  export interface billing_address_checkout_one_time_params {
    zip?: string;
  }
  export interface billing_address_checkout_one_time_params {
    country?: string;
  }
  export interface billing_address_checkout_one_time_params {
    validation_status?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    first_name?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    last_name?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    email?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    company?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    phone?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    line1?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    line2?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    line3?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    city?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    state_code?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    state?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    zip?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    country?: string;
  }
  export interface shipping_address_checkout_one_time_params {
    validation_status?: string;
  }
  export interface addons_checkout_one_time_params {
    id?: string;
  }
  export interface addons_checkout_one_time_params {
    quantity?: number;
  }
  export interface addons_checkout_one_time_params {
    unit_price?: number;
  }
  export interface addons_checkout_one_time_params {
    quantity_in_decimal?: string;
  }
  export interface addons_checkout_one_time_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_checkout_one_time_params {
    date_from?: number;
  }
  export interface addons_checkout_one_time_params {
    date_to?: number;
  }
  export interface charges_checkout_one_time_params {
    amount?: number;
  }
  export interface charges_checkout_one_time_params {
    amount_in_decimal?: string;
  }
  export interface charges_checkout_one_time_params {
    description?: string;
  }
  export interface charges_checkout_one_time_params {
    taxable?: boolean;
  }
  export interface charges_checkout_one_time_params {
    tax_profile_id?: string;
  }
  export interface charges_checkout_one_time_params {
    avalara_tax_code?: string;
  }
  export interface charges_checkout_one_time_params {
    hsn_code?: string;
  }
  export interface charges_checkout_one_time_params {
    taxjar_product_code?: string;
  }
  export interface charges_checkout_one_time_params {
    avalara_sale_type?: string;
  }
  export interface charges_checkout_one_time_params {
    avalara_transaction_type?: number;
  }
  export interface charges_checkout_one_time_params {
    avalara_service_type?: number;
  }
  export interface charges_checkout_one_time_params {
    date_from?: number;
  }
  export interface charges_checkout_one_time_params {
    date_to?: number;
  }
  export interface customer_checkout_one_time_for_items_params {
    id?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    email?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    first_name?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    last_name?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    company?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    phone?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    locale?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    taxability?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    vat_number?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    einvoicing_method?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_checkout_one_time_for_items_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    entity_identifier_standard?: string;
  }
  export interface customer_checkout_one_time_for_items_params {
    consolidated_invoicing?: boolean;
  }
  export interface invoice_checkout_one_time_for_items_params {
    po_number?: string;
  }
  export interface card_checkout_one_time_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_one_time_for_items_params {
    gateway_account_id?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    first_name?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    last_name?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    email?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    company?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    phone?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    line1?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    line2?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    line3?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    city?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    state_code?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    state?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    zip?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    country?: string;
  }
  export interface billing_address_checkout_one_time_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    email?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    company?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    phone?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    line1?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    line2?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    line3?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    city?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    state?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    zip?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    country?: string;
  }
  export interface shipping_address_checkout_one_time_for_items_params {
    validation_status?: string;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    item_price_id?: string;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    quantity?: number;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    unit_price?: number;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    date_from?: number;
  }
  export interface item_prices_checkout_one_time_for_items_params {
    date_to?: number;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    price?: number;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_one_time_for_items_params {
    price_in_decimal?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    amount?: number;
  }
  export interface charges_checkout_one_time_for_items_params {
    amount_in_decimal?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    description?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    taxable?: boolean;
  }
  export interface charges_checkout_one_time_for_items_params {
    tax_profile_id?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    avalara_tax_code?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    hsn_code?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    taxjar_product_code?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    avalara_sale_type?: string;
  }
  export interface charges_checkout_one_time_for_items_params {
    avalara_transaction_type?: number;
  }
  export interface charges_checkout_one_time_for_items_params {
    avalara_service_type?: number;
  }
  export interface charges_checkout_one_time_for_items_params {
    date_from?: number;
  }
  export interface charges_checkout_one_time_for_items_params {
    date_to?: number;
  }
  export interface discounts_checkout_one_time_for_items_params {
    percentage?: number;
  }
  export interface discounts_checkout_one_time_for_items_params {
    amount?: number;
  }
  export interface discounts_checkout_one_time_for_items_params {
    apply_on: string;
  }
  export interface discounts_checkout_one_time_for_items_params {
    item_price_id?: string;
  }
  export interface entity_identifiers_checkout_one_time_for_items_params {
    id?: string;
  }
  export interface entity_identifiers_checkout_one_time_for_items_params {
    scheme?: string;
  }
  export interface entity_identifiers_checkout_one_time_for_items_params {
    value?: string;
  }
  export interface entity_identifiers_checkout_one_time_for_items_params {
    operation?: string;
  }
  export interface entity_identifiers_checkout_one_time_for_items_params {
    standard?: string;
  }
  export interface subscription_checkout_new_for_items_params {
    id?: string;
  }
  export interface subscription_checkout_new_for_items_params {
    trial_end?: number;
  }
  export interface subscription_checkout_new_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_checkout_new_for_items_params {
    start_date?: number;
  }
  export interface subscription_checkout_new_for_items_params {
    coupon?: string;
  }
  export interface subscription_checkout_new_for_items_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_new_for_items_params {
    invoice_notes?: string;
  }
  export interface subscription_checkout_new_for_items_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface customer_checkout_new_for_items_params {
    id?: string;
  }
  export interface customer_checkout_new_for_items_params {
    email?: string;
  }
  export interface customer_checkout_new_for_items_params {
    first_name?: string;
  }
  export interface customer_checkout_new_for_items_params {
    last_name?: string;
  }
  export interface customer_checkout_new_for_items_params {
    company?: string;
  }
  export interface customer_checkout_new_for_items_params {
    phone?: string;
  }
  export interface customer_checkout_new_for_items_params {
    locale?: string;
  }
  export interface customer_checkout_new_for_items_params {
    taxability?: string;
  }
  export interface customer_checkout_new_for_items_params {
    vat_number?: string;
  }
  export interface customer_checkout_new_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_checkout_new_for_items_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_checkout_new_for_items_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_checkout_new_for_items_params {
    entity_identifier_standard?: string;
  }
  export interface customer_checkout_new_for_items_params {
    einvoicing_method?: string;
  }
  export interface card_checkout_new_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_new_for_items_params {
    gateway_account_id?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    first_name?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    last_name?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    email?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    company?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    phone?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    line1?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    line2?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    line3?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    city?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    state_code?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    state?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    zip?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    country?: string;
  }
  export interface billing_address_checkout_new_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    email?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    company?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    phone?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    line1?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    line2?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    line3?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    city?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    state?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    zip?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    country?: string;
  }
  export interface shipping_address_checkout_new_for_items_params {
    validation_status?: string;
  }
  export interface contract_term_checkout_new_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_new_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_checkout_new_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_checkout_new_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_checkout_new_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_checkout_new_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_checkout_new_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_checkout_new_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_checkout_new_for_items_params {
    apply_on: string;
  }
  export interface discounts_checkout_new_for_items_params {
    duration_type: string;
  }
  export interface discounts_checkout_new_for_items_params {
    percentage?: number;
  }
  export interface discounts_checkout_new_for_items_params {
    amount?: number;
  }
  export interface discounts_checkout_new_for_items_params {
    period?: number;
  }
  export interface discounts_checkout_new_for_items_params {
    period_unit?: string;
  }
  export interface discounts_checkout_new_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_checkout_new_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_checkout_new_for_items_params {
    charge_on_option?: string;
  }
  export interface item_tiers_checkout_new_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_checkout_new_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_checkout_new_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_checkout_new_for_items_params {
    price?: number;
  }
  export interface item_tiers_checkout_new_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_new_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_new_for_items_params {
    price_in_decimal?: string;
  }
  export interface entity_identifiers_checkout_new_for_items_params {
    id?: string;
  }
  export interface entity_identifiers_checkout_new_for_items_params {
    scheme?: string;
  }
  export interface entity_identifiers_checkout_new_for_items_params {
    value?: string;
  }
  export interface entity_identifiers_checkout_new_for_items_params {
    operation?: string;
  }
  export interface entity_identifiers_checkout_new_for_items_params {
    standard?: string;
  }
  export interface subscription_checkout_existing_params {
    id: string;
  }
  export interface subscription_checkout_existing_params {
    plan_id?: string;
  }
  export interface subscription_checkout_existing_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_existing_params {
    plan_unit_price?: number;
  }
  export interface subscription_checkout_existing_params {
    setup_fee?: number;
  }
  export interface subscription_checkout_existing_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_existing_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_checkout_existing_params {
    start_date?: number;
  }
  export interface subscription_checkout_existing_params {
    trial_end?: number;
  }
  export interface subscription_checkout_existing_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_checkout_existing_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_existing_params {
    offline_payment_method?: string;
  }
  export interface subscription_checkout_existing_params {
    invoice_notes?: string;
  }
  export interface subscription_checkout_existing_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface customer_checkout_existing_params {
    vat_number?: string;
  }
  export interface customer_checkout_existing_params {
    vat_number_prefix?: string;
  }
  export interface card_checkout_existing_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_existing_params {
    gateway_account_id?: string;
  }
  export interface contract_term_checkout_existing_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_existing_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_checkout_existing_params {
    id?: string;
  }
  export interface addons_checkout_existing_params {
    quantity?: number;
  }
  export interface addons_checkout_existing_params {
    unit_price?: number;
  }
  export interface addons_checkout_existing_params {
    billing_cycles?: number;
  }
  export interface addons_checkout_existing_params {
    quantity_in_decimal?: string;
  }
  export interface addons_checkout_existing_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    id?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    quantity?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    unit_price?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_checkout_existing_params {
    charge_on?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    on_event?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_checkout_existing_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_checkout_existing_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    id: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_checkout_existing_for_items_params {
    start_date?: number;
  }
  export interface subscription_checkout_existing_for_items_params {
    trial_end?: number;
  }
  export interface subscription_checkout_existing_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    auto_collection?: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    offline_payment_method?: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    invoice_notes?: string;
  }
  export interface subscription_checkout_existing_for_items_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface customer_checkout_existing_for_items_params {
    vat_number?: string;
  }
  export interface customer_checkout_existing_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_checkout_existing_for_items_params {
    is_einvoice_enabled?: boolean;
  }
  export interface customer_checkout_existing_for_items_params {
    entity_identifier_scheme?: string;
  }
  export interface customer_checkout_existing_for_items_params {
    entity_identifier_standard?: string;
  }
  export interface card_checkout_existing_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_checkout_existing_for_items_params {
    gateway_account_id?: string;
  }
  export interface contract_term_checkout_existing_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_checkout_existing_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    charge_on_option?: string;
  }
  export interface subscription_items_checkout_existing_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    apply_on: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    duration_type: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    percentage?: number;
  }
  export interface discounts_checkout_existing_for_items_params {
    amount?: number;
  }
  export interface discounts_checkout_existing_for_items_params {
    period?: number;
  }
  export interface discounts_checkout_existing_for_items_params {
    period_unit?: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_checkout_existing_for_items_params {
    item_price_id?: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    operation_type: string;
  }
  export interface discounts_checkout_existing_for_items_params {
    id?: string;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    price?: number;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_checkout_existing_for_items_params {
    price_in_decimal?: string;
  }
  export interface entity_identifiers_checkout_existing_for_items_params {
    id?: string;
  }
  export interface entity_identifiers_checkout_existing_for_items_params {
    scheme?: string;
  }
  export interface entity_identifiers_checkout_existing_for_items_params {
    value?: string;
  }
  export interface entity_identifiers_checkout_existing_for_items_params {
    operation?: string;
  }
  export interface entity_identifiers_checkout_existing_for_items_params {
    standard?: string;
  }
  export interface customer_update_card_params {
    id: string;
  }
  export interface customer_update_card_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number?: string;
  }
  export interface customer_update_card_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number_prefix?: string;
  }
  export interface card_update_card_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_card_params {
    gateway_account_id?: string;
  }
  export interface customer_update_payment_method_params {
    id: string;
  }
  export interface customer_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number?: string;
  }
  export interface customer_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number_prefix?: string;
  }
  export interface card_update_payment_method_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_update_payment_method_params {
    gateway_account_id?: string;
  }
  export interface customer_manage_payment_sources_params {
    id: string;
  }
  export interface card_manage_payment_sources_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_manage_payment_sources_params {
    gateway_account_id?: string;
  }
  export interface customer_collect_now_params {
    id: string;
  }
  export interface card_collect_now_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_collect_now_params {
    gateway_account_id?: string;
  }
  export interface quote_accept_quote_params {
    id: string;
  }
  export interface subscription_extend_subscription_params {
    id: string;
  }
  export interface gifter_checkout_gift_params {
    customer_id?: string;
  }
  export interface subscription_checkout_gift_params {
    plan_id: string;
  }
  export interface subscription_checkout_gift_params {
    plan_quantity?: number;
  }
  export interface subscription_checkout_gift_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_checkout_gift_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface addons_checkout_gift_params {
    id?: string;
  }
  export interface addons_checkout_gift_params {
    quantity?: number;
  }
  export interface addons_checkout_gift_params {
    quantity_in_decimal?: string;
  }
  export interface gifter_checkout_gift_for_items_params {
    customer_id?: string;
  }
  export interface subscription_items_checkout_gift_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_checkout_gift_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_checkout_gift_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface gift_claim_gift_params {
    id: string;
  }
  export interface customer_claim_gift_params {
    locale?: string;
  }
  export interface subscription_pre_cancel_params {
    id: string;
  }
  export interface payment_voucher_view_voucher_params {
    id: string;
  }
  export interface customer_view_voucher_params {
    locale?: string;
  }
}
