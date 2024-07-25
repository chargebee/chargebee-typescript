import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Quote extends Model {
  public id: string;
  public name?: string;
  public po_number?: string;
  public customer_id: string;
  public subscription_id?: string;
  public invoice_id?: string;
  public status: string;
  public operation_type: string;
  public vat_number?: string;
  public price_type: string;
  public valid_till: number;
  public date: number;
  public total_payable?: number;
  public charge_on_acceptance?: number;
  public sub_total: number;
  public total?: number;
  public credits_applied?: number;
  public amount_paid?: number;
  public amount_due?: number;
  public version?: number;
  public resource_version?: number;
  public updated_at?: number;
  public vat_number_prefix?: string;
  public line_items?: Array<LineItem>;
  public discounts?: Array<Discount>;
  public line_item_discounts?: Array<LineItemDiscount>;
  public taxes?: Array<Tax>;
  public line_item_taxes?: Array<LineItemTax>;
  public line_item_tiers?: Array<LineItemTier>;
  public tax_category?: string;
  public currency_code: string;
  public notes?: any;
  public shipping_address?: ShippingAddress;
  public billing_address?: BillingAddress;
  public contract_term_start?: number;
  public contract_term_end?: number;
  public contract_term_termination_fee?: number;
  public business_entity_id: string;
}

// OPERATIONS
//-----------
export class QuoteApi extends Api {
  public retrieve(quote_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/quotes',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_sub_for_customer_quote(customer_id: string, params?: _quote.create_sub_for_customer_quote_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_sub_for_customer_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/create_subscription_quote',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public edit_create_sub_for_customer_quote(quote_id: string, params?: _quote.edit_create_sub_for_customer_quote_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_create_sub_for_customer_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_create_subscription_quote',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_subscription_quote(params?: _quote.update_subscription_quote_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'update_subscription_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/update_subscription_quote',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public edit_update_subscription_quote(quote_id: string, params?: _quote.edit_update_subscription_quote_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_update_subscription_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_update_subscription_quote',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_for_onetime_charges(params?: _quote.create_for_onetime_charges_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_onetime_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/create_for_onetime_charges',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public edit_one_time_quote(quote_id: string, params?: _quote.edit_one_time_quote_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_one_time_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_one_time_quote',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_sub_items_for_customer_quote(customer_id: string, params?: _quote.create_sub_items_for_customer_quote_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'create_sub_items_for_customer_quote',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/create_subscription_quote_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public edit_create_sub_customer_quote_for_items(quote_id: string, params?: _quote.edit_create_sub_customer_quote_for_items_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_create_sub_customer_quote_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_create_subscription_quote_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_subscription_quote_for_items(params?: _quote.update_subscription_quote_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'update_subscription_quote_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/update_subscription_quote_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public edit_update_subscription_quote_for_items(quote_id: string, params?: _quote.edit_update_subscription_quote_for_items_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_update_subscription_quote_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_update_subscription_quote_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_for_charge_items_and_charges(params?: _quote.create_for_charge_items_and_charges_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_charge_items_and_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/create_for_charge_items_and_charges',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public edit_for_charge_items_and_charges(quote_id: string, params?: _quote.edit_for_charge_items_and_charges_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'edit_for_charge_items_and_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/edit_for_charge_items_and_charges',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _quote.quote_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/quotes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public quote_line_groups_for_quote(quote_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'quote_line_groups_for_quote',
      'httpMethod': 'GET',
      'urlPrefix': '/quotes',
      'urlSuffix': '/quote_line_groups',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public convert(quote_id: string, params?: _quote.convert_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'convert',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/convert',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_status(quote_id: string, params?: _quote.update_status_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'update_status',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/update_status',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public extend_expiry_date(quote_id: string, params?: _quote.extend_expiry_date_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'extend_expiry_date',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/extend_expiry_date',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(quote_id: string, params?: _quote.delete_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public pdf(quote_id: string, params?: _quote.pdf_params):RequestWrapper {
    return new RequestWrapper([quote_id, params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/quotes',
      'urlSuffix': '/pdf',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Quote

export class LineItem extends Model {
  public id?: string;
  public subscription_id?: string;
  public date_from: number;
  public date_to: number;
  public unit_amount: number;
  public quantity?: number;
  public amount?: number;
  public pricing_model?: string;
  public is_taxed: boolean;
  public tax_amount?: number;
  public tax_rate?: number;
  public unit_amount_in_decimal?: string;
  public quantity_in_decimal?: string;
  public amount_in_decimal?: string;
  public discount_amount?: number;
  public item_level_discount_amount?: number;
  public usage_percentage?: string;
  public reference_line_item_id?: string;
  public description: string;
  public entity_description?: string;
  public entity_type: string;
  public tax_exempt_reason?: string;
  public entity_id?: string;
  public customer_id?: string;
} // ~LineItem

export class Discount extends Model {
  public amount: number;
  public description?: string;
  public entity_type: string;
  public entity_id?: string;
  public coupon_set_code?: string;
} // ~Discount

export class LineItemDiscount extends Model {
  public line_item_id: string;
  public discount_type: string;
  public coupon_id?: string;
  public entity_id?: string;
  public discount_amount: number;
} // ~LineItemDiscount

export class Tax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
} // ~Tax

export class LineItemTax extends Model {
  public line_item_id?: string;
  public tax_name: string;
  public tax_rate: number;
  public date_to?: number;
  public date_from?: number;
  public prorated_taxable_amount?: number;
  public is_partial_tax_applied?: boolean;
  public is_non_compliance_tax?: boolean;
  public taxable_amount: number;
  public tax_amount: number;
  public tax_juris_type?: string;
  public tax_juris_name?: string;
  public tax_juris_code?: string;
  public tax_amount_in_local_currency?: number;
  public local_currency_code?: string;
} // ~LineItemTax

export class LineItemTier extends Model {
  public line_item_id?: string;
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public quantity_used_in_decimal?: string;
  public unit_amount_in_decimal?: string;
} // ~LineItemTier

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

export class BillingAddress extends Model {
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
} // ~BillingAddress



  // REQUEST PARAMS
  //---------------

export namespace _quote {
  export interface create_sub_for_customer_quote_params {
    name?: string;
    notes?: string;
    expires_at?: number;
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    subscription?: subscription_create_sub_for_customer_quote_params;
    shipping_address?: shipping_address_create_sub_for_customer_quote_params;
    contract_term?: contract_term_create_sub_for_customer_quote_params;
    addons?: Array<addons_create_sub_for_customer_quote_params>;
    event_based_addons?: Array<event_based_addons_create_sub_for_customer_quote_params>;
  }
  export interface edit_create_sub_for_customer_quote_params {
    notes?: string;
    expires_at?: number;
    billing_cycles?: number;
    mandatory_addons_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    subscription?: subscription_edit_create_sub_for_customer_quote_params;
    shipping_address?: shipping_address_edit_create_sub_for_customer_quote_params;
    contract_term?: contract_term_edit_create_sub_for_customer_quote_params;
    addons?: Array<addons_edit_create_sub_for_customer_quote_params>;
    event_based_addons?: Array<event_based_addons_edit_create_sub_for_customer_quote_params>;
  }
  export interface update_subscription_quote_params {
    name?: string;
    notes?: string;
    expires_at?: number;
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    change_option?: string;
    changes_scheduled_at?: number;
    force_term_reset?: boolean;
    reactivate?: boolean;
    subscription?: subscription_update_subscription_quote_params;
    billing_address?: billing_address_update_subscription_quote_params;
    shipping_address?: shipping_address_update_subscription_quote_params;
    customer?: customer_update_subscription_quote_params;
    contract_term?: contract_term_update_subscription_quote_params;
    addons?: Array<addons_update_subscription_quote_params>;
    event_based_addons?: Array<event_based_addons_update_subscription_quote_params>;
  }
  export interface edit_update_subscription_quote_params {
    notes?: string;
    expires_at?: number;
    replace_addon_list?: boolean;
    mandatory_addons_to_remove?: Array<string>;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    change_option?: string;
    changes_scheduled_at?: number;
    force_term_reset?: boolean;
    reactivate?: boolean;
    subscription?: subscription_edit_update_subscription_quote_params;
    billing_address?: billing_address_edit_update_subscription_quote_params;
    shipping_address?: shipping_address_edit_update_subscription_quote_params;
    customer?: customer_edit_update_subscription_quote_params;
    contract_term?: contract_term_edit_update_subscription_quote_params;
    addons?: Array<addons_edit_update_subscription_quote_params>;
    event_based_addons?: Array<event_based_addons_edit_update_subscription_quote_params>;
  }
  export interface create_for_onetime_charges_params {
    name?: string;
    customer_id: string;
    po_number?: string;
    notes?: string;
    expires_at?: number;
    currency_code?: string;
    coupon?: string;
    coupon_ids?: Array<string>;
    shipping_address?: shipping_address_create_for_onetime_charges_params;
    addons?: Array<addons_create_for_onetime_charges_params>;
    charges?: Array<charges_create_for_onetime_charges_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_for_onetime_charges_params>;
  }
  export interface edit_one_time_quote_params {
    po_number?: string;
    notes?: string;
    expires_at?: number;
    currency_code?: string;
    coupon?: string;
    coupon_ids?: Array<string>;
    shipping_address?: shipping_address_edit_one_time_quote_params;
    addons?: Array<addons_edit_one_time_quote_params>;
    charges?: Array<charges_edit_one_time_quote_params>;
    tax_providers_fields?: Array<tax_providers_fields_edit_one_time_quote_params>;
  }
  export interface create_sub_items_for_customer_quote_params {
    name?: string;
    notes?: string;
    expires_at?: number;
    billing_cycles?: number;
    mandatory_items_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    subscription?: subscription_create_sub_items_for_customer_quote_params;
    shipping_address?: shipping_address_create_sub_items_for_customer_quote_params;
    contract_term?: contract_term_create_sub_items_for_customer_quote_params;
    subscription_items?: Array<subscription_items_create_sub_items_for_customer_quote_params>;
    discounts?: Array<discounts_create_sub_items_for_customer_quote_params>;
    item_tiers?: Array<item_tiers_create_sub_items_for_customer_quote_params>;
  }
  export interface edit_create_sub_customer_quote_for_items_params {
    notes?: string;
    expires_at?: number;
    billing_cycles?: number;
    mandatory_items_to_remove?: Array<string>;
    terms_to_charge?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    subscription?: subscription_edit_create_sub_customer_quote_for_items_params;
    shipping_address?: shipping_address_edit_create_sub_customer_quote_for_items_params;
    contract_term?: contract_term_edit_create_sub_customer_quote_for_items_params;
    subscription_items?: Array<subscription_items_edit_create_sub_customer_quote_for_items_params>;
    discounts?: Array<discounts_edit_create_sub_customer_quote_for_items_params>;
    item_tiers?: Array<item_tiers_edit_create_sub_customer_quote_for_items_params>;
  }
  export interface update_subscription_quote_for_items_params {
    name?: string;
    notes?: string;
    expires_at?: number;
    mandatory_items_to_remove?: Array<string>;
    replace_items_list?: boolean;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    change_option?: string;
    changes_scheduled_at?: number;
    force_term_reset?: boolean;
    reactivate?: boolean;
    subscription?: subscription_update_subscription_quote_for_items_params;
    billing_address?: billing_address_update_subscription_quote_for_items_params;
    shipping_address?: shipping_address_update_subscription_quote_for_items_params;
    customer?: customer_update_subscription_quote_for_items_params;
    contract_term?: contract_term_update_subscription_quote_for_items_params;
    subscription_items?: Array<subscription_items_update_subscription_quote_for_items_params>;
    discounts?: Array<discounts_update_subscription_quote_for_items_params>;
    item_tiers?: Array<item_tiers_update_subscription_quote_for_items_params>;
  }
  export interface edit_update_subscription_quote_for_items_params {
    notes?: string;
    expires_at?: number;
    mandatory_items_to_remove?: Array<string>;
    replace_items_list?: boolean;
    billing_cycles?: number;
    terms_to_charge?: number;
    reactivate_from?: number;
    billing_alignment_mode?: string;
    coupon_ids?: Array<string>;
    replace_coupon_list?: boolean;
    change_option?: string;
    changes_scheduled_at?: number;
    force_term_reset?: boolean;
    reactivate?: boolean;
    subscription?: subscription_edit_update_subscription_quote_for_items_params;
    billing_address?: billing_address_edit_update_subscription_quote_for_items_params;
    shipping_address?: shipping_address_edit_update_subscription_quote_for_items_params;
    customer?: customer_edit_update_subscription_quote_for_items_params;
    contract_term?: contract_term_edit_update_subscription_quote_for_items_params;
    subscription_items?: Array<subscription_items_edit_update_subscription_quote_for_items_params>;
    discounts?: Array<discounts_edit_update_subscription_quote_for_items_params>;
    item_tiers?: Array<item_tiers_edit_update_subscription_quote_for_items_params>;
  }
  export interface create_for_charge_items_and_charges_params {
    name?: string;
    customer_id: string;
    po_number?: string;
    notes?: string;
    expires_at?: number;
    currency_code?: string;
    coupon?: string;
    coupon_ids?: Array<string>;
    shipping_address?: shipping_address_create_for_charge_items_and_charges_params;
    item_prices?: Array<item_prices_create_for_charge_items_and_charges_params>;
    item_tiers?: Array<item_tiers_create_for_charge_items_and_charges_params>;
    charges?: Array<charges_create_for_charge_items_and_charges_params>;
    discounts?: Array<discounts_create_for_charge_items_and_charges_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_for_charge_items_and_charges_params>;
  }
  export interface edit_for_charge_items_and_charges_params {
    po_number?: string;
    notes?: string;
    expires_at?: number;
    currency_code?: string;
    coupon?: string;
    coupon_ids?: Array<string>;
    shipping_address?: shipping_address_edit_for_charge_items_and_charges_params;
    item_prices?: Array<item_prices_edit_for_charge_items_and_charges_params>;
    item_tiers?: Array<item_tiers_edit_for_charge_items_and_charges_params>;
    charges?: Array<charges_edit_for_charge_items_and_charges_params>;
    discounts?: Array<discounts_edit_for_charge_items_and_charges_params>;
    tax_providers_fields?: Array<tax_providers_fields_edit_for_charge_items_and_charges_params>;
  }
  export interface quote_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    subscription_id?: filter._string;
    status?: filter._enum;
    date?: filter._timestamp;
    updated_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface convert_params {
    invoice_date?: number;
    create_pending_invoices?: boolean;
    first_invoice_pending?: boolean;
    subscription?: subscription_convert_params;
  }
  export interface update_status_params {
    status: string;
    comment?: string;
  }
  export interface extend_expiry_date_params {
    valid_till: number;
  }
  export interface delete_params {
    comment?: string;
  }
  export interface pdf_params {
    consolidated_view?: boolean;
    disposition_type?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    po_number?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    plan_id: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    plan_quantity?: number;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    plan_unit_price?: number;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    setup_fee?: number;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    start_date?: number;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    offline_payment_method?: string;
  }
  export interface subscription_create_sub_for_customer_quote_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    first_name?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    last_name?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    email?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    company?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    phone?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    line1?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    line2?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    line3?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    city?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    state_code?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    state?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    zip?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    country?: string;
  }
  export interface shipping_address_create_sub_for_customer_quote_params {
    validation_status?: string;
  }
  export interface contract_term_create_sub_for_customer_quote_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_sub_for_customer_quote_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface addons_create_sub_for_customer_quote_params {
    quantity?: number;
  }
  export interface addons_create_sub_for_customer_quote_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_sub_for_customer_quote_params {
    unit_price?: number;
  }
  export interface addons_create_sub_for_customer_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_sub_for_customer_quote_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    quantity?: number;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    unit_price?: number;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    on_event?: string;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_create_sub_for_customer_quote_params {
    charge_on?: string;
  }
  export interface addons_create_sub_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    po_number?: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    plan_id: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    plan_quantity?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    plan_unit_price?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    setup_fee?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    start_date?: number;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    offline_payment_method?: string;
  }
  export interface subscription_edit_create_sub_for_customer_quote_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    first_name?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    last_name?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    email?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    company?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    phone?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    line1?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    line2?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    line3?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    city?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    state_code?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    state?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    zip?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    country?: string;
  }
  export interface shipping_address_edit_create_sub_for_customer_quote_params {
    validation_status?: string;
  }
  export interface contract_term_edit_create_sub_for_customer_quote_params {
    action_at_term_end?: string;
  }
  export interface contract_term_edit_create_sub_for_customer_quote_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    quantity?: number;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    quantity_in_decimal?: string;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    unit_price?: number;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    billing_cycles?: number;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    id?: string;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    quantity?: number;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    unit_price?: number;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    on_event?: string;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_edit_create_sub_for_customer_quote_params {
    charge_on?: string;
  }
  export interface addons_edit_create_sub_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_quote_params {
    id: string;
  }
  export interface subscription_update_subscription_quote_params {
    plan_id?: string;
  }
  export interface subscription_update_subscription_quote_params {
    plan_quantity?: number;
  }
  export interface subscription_update_subscription_quote_params {
    plan_unit_price?: number;
  }
  export interface subscription_update_subscription_quote_params {
    setup_fee?: number;
  }
  export interface subscription_update_subscription_quote_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_update_subscription_quote_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_update_subscription_quote_params {
    start_date?: number;
  }
  export interface subscription_update_subscription_quote_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_quote_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_update_subscription_quote_params {
    auto_collection?: string;
  }
  export interface subscription_update_subscription_quote_params {
    offline_payment_method?: string;
  }
  export interface subscription_update_subscription_quote_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface billing_address_update_subscription_quote_params {
    first_name?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    last_name?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    email?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    company?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    phone?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    line1?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    line2?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    line3?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    city?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    state_code?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    state?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    zip?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    country?: string;
  }
  export interface billing_address_update_subscription_quote_params {
    validation_status?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    first_name?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    last_name?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    email?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    company?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    phone?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    line1?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    line2?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    line3?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    city?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    state_code?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    state?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    zip?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    country?: string;
  }
  export interface shipping_address_update_subscription_quote_params {
    validation_status?: string;
  }
  export interface customer_update_subscription_quote_params {
    vat_number?: string;
  }
  export interface customer_update_subscription_quote_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_subscription_quote_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_update_subscription_quote_params {
    action_at_term_end?: string;
  }
  export interface contract_term_update_subscription_quote_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_update_subscription_quote_params {
    id?: string;
  }
  export interface addons_update_subscription_quote_params {
    quantity?: number;
  }
  export interface addons_update_subscription_quote_params {
    unit_price?: number;
  }
  export interface addons_update_subscription_quote_params {
    billing_cycles?: number;
  }
  export interface addons_update_subscription_quote_params {
    quantity_in_decimal?: string;
  }
  export interface addons_update_subscription_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_update_subscription_quote_params {
    trial_end?: number;
  }
  export interface event_based_addons_update_subscription_quote_params {
    id?: string;
  }
  export interface event_based_addons_update_subscription_quote_params {
    quantity?: number;
  }
  export interface event_based_addons_update_subscription_quote_params {
    unit_price?: number;
  }
  export interface event_based_addons_update_subscription_quote_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_update_subscription_quote_params {
    charge_on?: string;
  }
  export interface event_based_addons_update_subscription_quote_params {
    on_event?: string;
  }
  export interface event_based_addons_update_subscription_quote_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_update_subscription_quote_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_update_subscription_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    plan_id?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    plan_quantity?: number;
  }
  export interface subscription_edit_update_subscription_quote_params {
    plan_unit_price?: number;
  }
  export interface subscription_edit_update_subscription_quote_params {
    setup_fee?: number;
  }
  export interface subscription_edit_update_subscription_quote_params {
    plan_quantity_in_decimal?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    plan_unit_price_in_decimal?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    start_date?: number;
  }
  export interface subscription_edit_update_subscription_quote_params {
    trial_end?: number;
  }
  export interface subscription_edit_update_subscription_quote_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    auto_collection?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    offline_payment_method?: string;
  }
  export interface subscription_edit_update_subscription_quote_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    first_name?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    last_name?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    email?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    company?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    phone?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    line1?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    line2?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    line3?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    city?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    state_code?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    state?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    zip?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    country?: string;
  }
  export interface billing_address_edit_update_subscription_quote_params {
    validation_status?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    first_name?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    last_name?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    email?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    company?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    phone?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    line1?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    line2?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    line3?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    city?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    state_code?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    state?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    zip?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    country?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_params {
    validation_status?: string;
  }
  export interface customer_edit_update_subscription_quote_params {
    vat_number?: string;
  }
  export interface customer_edit_update_subscription_quote_params {
    vat_number_prefix?: string;
  }
  export interface customer_edit_update_subscription_quote_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_edit_update_subscription_quote_params {
    action_at_term_end?: string;
  }
  export interface contract_term_edit_update_subscription_quote_params {
    cancellation_cutoff_period?: number;
  }
  export interface addons_edit_update_subscription_quote_params {
    id?: string;
  }
  export interface addons_edit_update_subscription_quote_params {
    quantity?: number;
  }
  export interface addons_edit_update_subscription_quote_params {
    unit_price?: number;
  }
  export interface addons_edit_update_subscription_quote_params {
    billing_cycles?: number;
  }
  export interface addons_edit_update_subscription_quote_params {
    quantity_in_decimal?: string;
  }
  export interface addons_edit_update_subscription_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_edit_update_subscription_quote_params {
    trial_end?: number;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    id?: string;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    quantity?: number;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    unit_price?: number;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    service_period_in_days?: number;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    charge_on?: string;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    on_event?: string;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    charge_once?: boolean;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_edit_update_subscription_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    first_name?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    last_name?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    email?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    company?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    phone?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    line1?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    line2?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    line3?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    city?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    state_code?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    state?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    zip?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    country?: string;
  }
  export interface shipping_address_create_for_onetime_charges_params {
    validation_status?: string;
  }
  export interface addons_create_for_onetime_charges_params {
    id?: string;
  }
  export interface addons_create_for_onetime_charges_params {
    quantity?: number;
  }
  export interface addons_create_for_onetime_charges_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_for_onetime_charges_params {
    unit_price?: number;
  }
  export interface addons_create_for_onetime_charges_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_for_onetime_charges_params {
    service_period?: number;
  }
  export interface charges_create_for_onetime_charges_params {
    amount?: number;
  }
  export interface charges_create_for_onetime_charges_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_for_onetime_charges_params {
    description?: string;
  }
  export interface charges_create_for_onetime_charges_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_for_onetime_charges_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_for_onetime_charges_params {
    avalara_service_type?: number;
  }
  export interface charges_create_for_onetime_charges_params {
    service_period?: number;
  }
  export interface tax_providers_fields_create_for_onetime_charges_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_create_for_onetime_charges_params {
    field_id?: string;
  }
  export interface tax_providers_fields_create_for_onetime_charges_params {
    field_value?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    first_name?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    last_name?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    email?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    company?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    phone?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    line1?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    line2?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    line3?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    city?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    state_code?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    state?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    zip?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    country?: string;
  }
  export interface shipping_address_edit_one_time_quote_params {
    validation_status?: string;
  }
  export interface addons_edit_one_time_quote_params {
    id?: string;
  }
  export interface addons_edit_one_time_quote_params {
    quantity?: number;
  }
  export interface addons_edit_one_time_quote_params {
    quantity_in_decimal?: string;
  }
  export interface addons_edit_one_time_quote_params {
    unit_price?: number;
  }
  export interface addons_edit_one_time_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_edit_one_time_quote_params {
    service_period?: number;
  }
  export interface charges_edit_one_time_quote_params {
    amount?: number;
  }
  export interface charges_edit_one_time_quote_params {
    amount_in_decimal?: string;
  }
  export interface charges_edit_one_time_quote_params {
    description?: string;
  }
  export interface charges_edit_one_time_quote_params {
    avalara_sale_type?: string;
  }
  export interface charges_edit_one_time_quote_params {
    avalara_transaction_type?: number;
  }
  export interface charges_edit_one_time_quote_params {
    avalara_service_type?: number;
  }
  export interface charges_edit_one_time_quote_params {
    service_period?: number;
  }
  export interface tax_providers_fields_edit_one_time_quote_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_edit_one_time_quote_params {
    field_id?: string;
  }
  export interface tax_providers_fields_edit_one_time_quote_params {
    field_value?: string;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    id?: string;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    po_number?: string;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    start_date?: number;
  }
  export interface subscription_create_sub_items_for_customer_quote_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    first_name?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    last_name?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    email?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    company?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    phone?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    line1?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    line2?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    line3?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    city?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    state_code?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    state?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    zip?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    country?: string;
  }
  export interface shipping_address_create_sub_items_for_customer_quote_params {
    validation_status?: string;
  }
  export interface contract_term_create_sub_items_for_customer_quote_params {
    action_at_term_end?: string;
  }
  export interface contract_term_create_sub_items_for_customer_quote_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    item_price_id: string;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    quantity?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    unit_price?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    billing_cycles?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    trial_end?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    service_period_days?: number;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    charge_on_event?: string;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    charge_once?: boolean;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    apply_on: string;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    duration_type: string;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    percentage?: number;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    amount?: number;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    period?: number;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    period_unit?: string;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_create_sub_items_for_customer_quote_params {
    item_price_id?: string;
  }
  export interface subscription_items_create_sub_items_for_customer_quote_params {
    charge_on_option?: string;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    price?: number;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_sub_items_for_customer_quote_params {
    price_in_decimal?: string;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    id?: string;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    po_number?: string;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    start_date?: number;
  }
  export interface subscription_edit_create_sub_customer_quote_for_items_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    email?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    company?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    phone?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    line1?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    line2?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    line3?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    city?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    state?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    zip?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    country?: string;
  }
  export interface shipping_address_edit_create_sub_customer_quote_for_items_params {
    validation_status?: string;
  }
  export interface contract_term_edit_create_sub_customer_quote_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_edit_create_sub_customer_quote_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    apply_on: string;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    duration_type: string;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    percentage?: number;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    amount?: number;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    period?: number;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    period_unit?: string;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_edit_create_sub_customer_quote_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_edit_create_sub_customer_quote_for_items_params {
    charge_on_option?: string;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    price?: number;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_create_sub_customer_quote_for_items_params {
    price_in_decimal?: string;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    id: string;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    start_date?: number;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    auto_collection?: string;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    offline_payment_method?: string;
  }
  export interface subscription_update_subscription_quote_for_items_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    first_name?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    last_name?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    email?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    company?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    phone?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    line1?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    line2?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    line3?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    city?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    state_code?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    state?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    zip?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    country?: string;
  }
  export interface billing_address_update_subscription_quote_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    email?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    company?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    phone?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    line1?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    line2?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    line3?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    city?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    state?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    zip?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    country?: string;
  }
  export interface shipping_address_update_subscription_quote_for_items_params {
    validation_status?: string;
  }
  export interface customer_update_subscription_quote_for_items_params {
    vat_number?: string;
  }
  export interface customer_update_subscription_quote_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_update_subscription_quote_for_items_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_update_subscription_quote_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_update_subscription_quote_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    charge_on_option?: string;
  }
  export interface subscription_items_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    apply_on: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    duration_type: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    percentage?: number;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    amount?: number;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    period?: number;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    period_unit?: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    item_price_id?: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    operation_type: string;
  }
  export interface discounts_update_subscription_quote_for_items_params {
    id?: string;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    price?: number;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_update_subscription_quote_for_items_params {
    price_in_decimal?: string;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    setup_fee?: number;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    start_date?: number;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    auto_collection?: string;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    offline_payment_method?: string;
  }
  export interface subscription_edit_update_subscription_quote_for_items_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    first_name?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    last_name?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    email?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    company?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    phone?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    line1?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    line2?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    line3?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    city?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    state_code?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    state?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    zip?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    country?: string;
  }
  export interface billing_address_edit_update_subscription_quote_for_items_params {
    validation_status?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    email?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    company?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    phone?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    line1?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    line2?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    line3?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    city?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    state?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    zip?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    country?: string;
  }
  export interface shipping_address_edit_update_subscription_quote_for_items_params {
    validation_status?: string;
  }
  export interface customer_edit_update_subscription_quote_for_items_params {
    vat_number?: string;
  }
  export interface customer_edit_update_subscription_quote_for_items_params {
    vat_number_prefix?: string;
  }
  export interface customer_edit_update_subscription_quote_for_items_params {
    registered_for_gst?: boolean;
  }
  export interface contract_term_edit_update_subscription_quote_for_items_params {
    action_at_term_end?: string;
  }
  export interface contract_term_edit_update_subscription_quote_for_items_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    item_price_id: string;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    unit_price?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    unit_price_in_decimal?: string;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    billing_cycles?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    trial_end?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    service_period_days?: number;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    charge_on_event?: string;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    charge_once?: boolean;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    charge_on_option?: string;
  }
  export interface subscription_items_edit_update_subscription_quote_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    item_type?: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    apply_on: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    duration_type: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    percentage?: number;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    amount?: number;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    period?: number;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    period_unit?: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    item_price_id?: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    operation_type: string;
  }
  export interface discounts_edit_update_subscription_quote_for_items_params {
    id?: string;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    item_price_id?: string;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    starting_unit?: number;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    ending_unit?: number;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    price?: number;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_update_subscription_quote_for_items_params {
    price_in_decimal?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    first_name?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    last_name?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    email?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    company?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    phone?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    line1?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    line2?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    line3?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    city?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    state_code?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    state?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    zip?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    country?: string;
  }
  export interface shipping_address_create_for_charge_items_and_charges_params {
    validation_status?: string;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    quantity?: number;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    quantity_in_decimal?: string;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    unit_price?: number;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    unit_price_in_decimal?: string;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    service_period_days?: number;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    price?: number;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_charge_items_and_charges_params {
    price_in_decimal?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    amount?: number;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    description?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    avalara_service_type?: number;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    service_period?: number;
  }
  export interface discounts_create_for_charge_items_and_charges_params {
    percentage?: number;
  }
  export interface discounts_create_for_charge_items_and_charges_params {
    amount?: number;
  }
  export interface discounts_create_for_charge_items_and_charges_params {
    apply_on: string;
  }
  export interface discounts_create_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface tax_providers_fields_create_for_charge_items_and_charges_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_create_for_charge_items_and_charges_params {
    field_id?: string;
  }
  export interface tax_providers_fields_create_for_charge_items_and_charges_params {
    field_value?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    first_name?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    last_name?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    email?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    company?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    phone?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    line1?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    line2?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    line3?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    city?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    state_code?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    state?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    zip?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    country?: string;
  }
  export interface shipping_address_edit_for_charge_items_and_charges_params {
    validation_status?: string;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    quantity?: number;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    quantity_in_decimal?: string;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    unit_price?: number;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    unit_price_in_decimal?: string;
  }
  export interface item_prices_edit_for_charge_items_and_charges_params {
    service_period_days?: number;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    starting_unit?: number;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    ending_unit?: number;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    price?: number;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_edit_for_charge_items_and_charges_params {
    price_in_decimal?: string;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    amount?: number;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    amount_in_decimal?: string;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    description?: string;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    avalara_sale_type?: string;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    avalara_transaction_type?: number;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    avalara_service_type?: number;
  }
  export interface charges_edit_for_charge_items_and_charges_params {
    service_period?: number;
  }
  export interface discounts_edit_for_charge_items_and_charges_params {
    percentage?: number;
  }
  export interface discounts_edit_for_charge_items_and_charges_params {
    amount?: number;
  }
  export interface discounts_edit_for_charge_items_and_charges_params {
    apply_on: string;
  }
  export interface discounts_edit_for_charge_items_and_charges_params {
    item_price_id?: string;
  }
  export interface tax_providers_fields_edit_for_charge_items_and_charges_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_edit_for_charge_items_and_charges_params {
    field_id?: string;
  }
  export interface tax_providers_fields_edit_for_charge_items_and_charges_params {
    field_value?: string;
  }
  export interface subscription_convert_params {
    id?: string;
  }
  export interface subscription_convert_params {
    auto_collection?: string;
  }
  export interface subscription_convert_params {
    po_number?: string;
  }
  export interface subscription_convert_params {
    auto_close_invoices?: boolean;
  }
}
