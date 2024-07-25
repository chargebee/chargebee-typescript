import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Order extends Model {
  public id: string;
  public document_number?: string;
  public invoice_id?: string;
  public subscription_id?: string;
  public customer_id?: string;
  public status?: string;
  public cancellation_reason?: string;
  public payment_status?: string;
  public order_type?: string;
  public price_type: string;
  public reference_id?: string;
  public fulfillment_status?: string;
  public order_date?: number;
  public shipping_date?: number;
  public note?: string;
  public tracking_id?: string;
  public tracking_url?: string;
  public batch_id?: string;
  public created_by?: string;
  public shipment_carrier?: string;
  public invoice_round_off_amount?: number;
  public tax?: number;
  public amount_paid?: number;
  public amount_adjusted?: number;
  public refundable_credits_issued?: number;
  public refundable_credits?: number;
  public rounding_adjustement?: number;
  public paid_on?: number;
  public shipping_cut_off_date?: number;
  public created_at: number;
  public status_update_at?: number;
  public delivered_at?: number;
  public shipped_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public cancelled_at?: number;
  public resent_status?: string;
  public is_resent: boolean;
  public original_order_id?: string;
  public order_line_items?: Array<OrderLineItem>;
  public shipping_address?: ShippingAddress;
  public billing_address?: BillingAddress;
  public discount?: number;
  public sub_total?: number;
  public total?: number;
  public line_item_taxes?: Array<LineItemTax>;
  public line_item_discounts?: Array<LineItemDiscount>;
  public linked_credit_notes?: Array<LinkedCreditNote>;
  public deleted: boolean;
  public currency_code?: string;
  public is_gifted?: boolean;
  public gift_note?: string;
  public gift_id?: string;
  public resend_reason?: string;
  public resent_orders?: Array<ResentOrder>;
  public business_entity_id?: string;
}

// OPERATIONS
//-----------
export class OrderApi extends Api {
  public create(params?: _order.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(order_id: string, params?: _order.update_params):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_order(params?: _order.import_order_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'import_order',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/import_order',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public assign_order_number(order_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'assign_order_number',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/assign_order_number',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public cancel(order_id: string, params?: _order.cancel_params):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create_refundable_credit_note(order_id: string, params?: _order.create_refundable_credit_note_params):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'create_refundable_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/create_refundable_credit_note',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public reopen(order_id: string, params?: _order.reopen_params):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'reopen',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/reopen',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(order_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(order_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _order.order_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public orders_for_invoice(invoice_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'orders_for_invoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/orders',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public resend(order_id: string, params?: _order.resend_params):RequestWrapper {
    return new RequestWrapper([order_id, params], {
      'methodName': 'resend',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/resend',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Order

export class OrderLineItem extends Model {
  public id: string;
  public invoice_id: string;
  public invoice_line_item_id: string;
  public unit_price?: number;
  public description?: string;
  public amount?: number;
  public fulfillment_quantity?: number;
  public fulfillment_amount?: number;
  public tax_amount?: number;
  public amount_paid?: number;
  public amount_adjusted?: number;
  public refundable_credits_issued?: number;
  public refundable_credits?: number;
  public is_shippable: boolean;
  public sku?: string;
  public status?: string;
  public entity_type: string;
  public item_level_discount_amount?: number;
  public discount_amount?: number;
  public entity_id?: string;
} // ~OrderLineItem

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

export class LineItemDiscount extends Model {
  public line_item_id: string;
  public discount_type: string;
  public coupon_id?: string;
  public entity_id?: string;
  public discount_amount: number;
} // ~LineItemDiscount

export class LinkedCreditNote extends Model {
  public amount?: number;
  public type: string;
  public id: string;
  public status: string;
  public amount_adjusted?: number;
  public amount_refunded?: number;
} // ~LinkedCreditNote

export class ResentOrder extends Model {
  public order_id: string;
  public reason?: string;
  public amount?: number;
} // ~ResentOrder



  // REQUEST PARAMS
  //---------------

export namespace _order {
  export interface create_params {
    id?: string;
    invoice_id: string;
    status?: string;
    reference_id?: string;
    fulfillment_status?: string;
    note?: string;
    tracking_id?: string;
    tracking_url?: string;
    batch_id?: string;
  }
  export interface update_params {
    reference_id?: string;
    batch_id?: string;
    note?: string;
    shipping_date?: number;
    order_date?: number;
    cancelled_at?: number;
    cancellation_reason?: string;
    shipped_at?: number;
    delivered_at?: number;
    tracking_url?: string;
    tracking_id?: string;
    shipment_carrier?: string;
    fulfillment_status?: string;
    status?: string;
    shipping_address?: shipping_address_update_params;
    order_line_items?: Array<order_line_items_update_params>;
  }
  export interface import_order_params {
    id?: string;
    document_number?: string;
    invoice_id: string;
    status: string;
    subscription_id?: string;
    customer_id?: string;
    created_at: number;
    order_date: number;
    shipping_date: number;
    reference_id?: string;
    fulfillment_status?: string;
    note?: string;
    tracking_id?: string;
    tracking_url?: string;
    batch_id?: string;
    shipment_carrier?: string;
    shipping_cut_off_date?: number;
    delivered_at?: number;
    shipped_at?: number;
    cancelled_at?: number;
    cancellation_reason?: string;
    refundable_credits_issued?: number;
    shipping_address?: shipping_address_import_order_params;
    billing_address?: billing_address_import_order_params;
  }
  export interface cancel_params {
    cancellation_reason: string;
    customer_notes?: string;
    comment?: string;
    cancelled_at?: number;
    credit_note?: credit_note_cancel_params;
  }
  export interface create_refundable_credit_note_params {
    customer_notes?: string;
    comment?: string;
    credit_note?: credit_note_create_refundable_credit_note_params;
  }
  export interface reopen_params {
    void_cancellation_credit_notes?: boolean;
  }
  export interface order_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    exclude_deleted_credit_notes?: boolean;
    id?: filter._string;
    invoice_id?: filter._string;
    subscription_id?: filter._string;
    status?: filter._enum;
    shipping_date?: filter._timestamp;
    shipped_at?: filter._timestamp;
    order_type?: filter._enum;
    order_date?: filter._timestamp;
    paid_on?: filter._timestamp;
    updated_at?: filter._timestamp;
    created_at?: filter._timestamp;
    resent_status?: filter._enum;
    is_resent?: filter._boolean;
    original_order_id?: filter._string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface resend_params {
    shipping_date?: number;
    resend_reason?: string;
    order_line_items?: Array<order_line_items_resend_params>;
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
  export interface order_line_items_update_params {
    id?: string;
  }
  export interface order_line_items_update_params {
    status?: string;
  }
  export interface order_line_items_update_params {
    sku?: string;
  }
  export interface shipping_address_import_order_params {
    first_name?: string;
  }
  export interface shipping_address_import_order_params {
    last_name?: string;
  }
  export interface shipping_address_import_order_params {
    email?: string;
  }
  export interface shipping_address_import_order_params {
    company?: string;
  }
  export interface shipping_address_import_order_params {
    phone?: string;
  }
  export interface shipping_address_import_order_params {
    line1?: string;
  }
  export interface shipping_address_import_order_params {
    line2?: string;
  }
  export interface shipping_address_import_order_params {
    line3?: string;
  }
  export interface shipping_address_import_order_params {
    city?: string;
  }
  export interface shipping_address_import_order_params {
    state_code?: string;
  }
  export interface shipping_address_import_order_params {
    state?: string;
  }
  export interface shipping_address_import_order_params {
    zip?: string;
  }
  export interface shipping_address_import_order_params {
    country?: string;
  }
  export interface shipping_address_import_order_params {
    validation_status?: string;
  }
  export interface billing_address_import_order_params {
    first_name?: string;
  }
  export interface billing_address_import_order_params {
    last_name?: string;
  }
  export interface billing_address_import_order_params {
    email?: string;
  }
  export interface billing_address_import_order_params {
    company?: string;
  }
  export interface billing_address_import_order_params {
    phone?: string;
  }
  export interface billing_address_import_order_params {
    line1?: string;
  }
  export interface billing_address_import_order_params {
    line2?: string;
  }
  export interface billing_address_import_order_params {
    line3?: string;
  }
  export interface billing_address_import_order_params {
    city?: string;
  }
  export interface billing_address_import_order_params {
    state_code?: string;
  }
  export interface billing_address_import_order_params {
    state?: string;
  }
  export interface billing_address_import_order_params {
    zip?: string;
  }
  export interface billing_address_import_order_params {
    country?: string;
  }
  export interface billing_address_import_order_params {
    validation_status?: string;
  }
  export interface credit_note_cancel_params {
    total?: number;
  }
  export interface credit_note_create_refundable_credit_note_params {
    reason_code: string;
  }
  export interface credit_note_create_refundable_credit_note_params {
    total: number;
  }
  export interface order_line_items_resend_params {
    id?: string;
  }
  export interface order_line_items_resend_params {
    fulfillment_quantity?: number;
  }
}
