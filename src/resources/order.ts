import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

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
  public order_line_items?: Array<resources.OrderOrderLineItem>;
  public shipping_address?: resources.OrderShippingAddress;
  public billing_address?: resources.OrderBillingAddress;
  public discount?: number;
  public sub_total?: number;
  public total?: number;
  public line_item_taxes?: Array<resources.OrderLineItemTax>;
  public line_item_discounts?: Array<resources.OrderLineItemDiscount>;
  public linked_credit_notes?: Array<resources.OrderLinkedCreditNote>;
  public deleted: boolean;
  public currency_code?: string;
  public is_gifted?: boolean;
  public gift_note?: string;
  public gift_id?: string;

  

  // OPERATIONS
  //-----------

  public static create(params?: _order.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(order_id: string, params?: _order.update_params) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static assign_order_number(order_id: string, params?: any) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'assign_order_number',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/assign_order_number',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static cancel(order_id: string, params?: _order.cancel_params) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_refundable_credit_note(order_id: string, params?: _order.create_refundable_credit_note_params) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'create_refundable_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/create_refundable_credit_note',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static reopen(order_id: string, params?: _order.reopen_params) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'reopen',
      'httpMethod': 'POST',
      'urlPrefix': '/orders',
      'urlSuffix': '/reopen',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(order_id: string, params?: any) {
    return new RequestWrapper([order_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _order.order_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/orders',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static orders_for_invoice(invoice_id: string, params?: any) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'orders_for_invoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/orders',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

} // ~Order



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
    tracking_id?: string;
    shipment_carrier?: string;
    fulfillment_status?: string;
    status?: string;
    shipping_address?: shipping_address_update_params;
    order_line_items?: Array<order_line_items_update_params>;
  }
  export interface cancel_params {
    cancellation_reason: string;
    customer_notes?: string;
    cancelled_at?: number;
    credit_note?: credit_note_cancel_params;
  }
  export interface create_refundable_credit_note_params {
    customer_notes?: string;
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
    order_type?: filter._enum;
    order_date?: filter._timestamp;
    paid_on?: filter._timestamp;
    updated_at?: filter._timestamp;
    created_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
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
  export interface credit_note_cancel_params {
    total?: number;
  }
  export interface credit_note_create_refundable_credit_note_params {
    reason_code: string;
  }
  export interface credit_note_create_refundable_credit_note_params {
    total: number;
  }
}
