import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class CreditNote extends Model {
  public id: string;
  public customer_id: string;
  public subscription_id?: string;
  public reference_invoice_id: string;
  public type: string;
  public reason_code: string;
  public status: string;
  public vat_number?: string;
  public date?: number;
  public price_type: string;
  public currency_code: string;
  public total?: number;
  public amount_allocated?: number;
  public amount_refunded?: number;
  public amount_available?: number;
  public refunded_at?: number;
  public voided_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public sub_total: number;
  public sub_total_in_local_currency?: number;
  public total_in_local_currency?: number;
  public local_currency_code?: string;
  public round_off_amount?: number;
  public fractional_correction?: number;
  public line_items?: Array<resources.CreditNoteLineItem>;
  public discounts?: Array<resources.CreditNoteDiscount>;
  public line_item_discounts?: Array<resources.CreditNoteLineItemDiscount>;
  public line_item_tiers?: Array<resources.CreditNoteLineItemTier>;
  public taxes?: Array<resources.CreditNoteTax>;
  public line_item_taxes?: Array<resources.CreditNoteLineItemTax>;
  public linked_refunds?: Array<resources.CreditNoteLinkedRefund>;
  public allocations?: Array<resources.CreditNoteAllocation>;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create(params?: _credit_note.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(credit_note_id: string, params?: any) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static pdf(credit_note_id: string, params?: _credit_note.pdf_params) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/pdf',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static refund(credit_note_id: string, params?: _credit_note.refund_params) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'refund',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_refund(credit_note_id: string, params?: _credit_note.record_refund_params) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static void_credit_note(credit_note_id: string, params?: _credit_note.void_credit_note_params) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'void_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _credit_note.credit_note_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static credit_notes_for_customer(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'credit_notes_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/credit_notes',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static delete(credit_note_id: string, params?: _credit_note.delete_params) {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~CreditNote



  // REQUEST PARAMS
  //---------------

export namespace _credit_note {
  export interface create_params {
    reference_invoice_id: string;
    total?: number;
    type: string;
    reason_code: string;
    date?: number;
    customer_notes?: string;
    comment?: string;
    line_items?: Array<line_items_create_params>;
  }
  export interface pdf_params {
    disposition_type?: string;
  }
  export interface refund_params {
    refund_amount?: number;
    customer_notes?: string;
    refund_reason_code?: string;
  }
  export interface record_refund_params {
    refund_reason_code?: string;
    comment?: string;
    transaction?: transaction_record_refund_params;
  }
  export interface void_credit_note_params {
    comment?: string;
  }
  export interface credit_note_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    subscription_id?: filter._string;
    reference_invoice_id?: filter._string;
    type?: filter._enum;
    reason_code?: filter._enum;
    status?: filter._enum;
    date?: filter._timestamp;
    total?: filter._number;
    price_type?: filter._enum;
    amount_allocated?: filter._number;
    amount_refunded?: filter._number;
    amount_available?: filter._number;
    voided_at?: filter._timestamp;
    updated_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface delete_params {
    comment?: string;
  }
  export interface line_items_create_params {
    reference_line_item_id: string;
  }
  export interface line_items_create_params {
    unit_amount?: number;
  }
  export interface line_items_create_params {
    quantity?: number;
  }
  export interface line_items_create_params {
    amount?: number;
  }
  export interface line_items_create_params {
    date_from?: number;
  }
  export interface line_items_create_params {
    date_to?: number;
  }
  export interface line_items_create_params {
    description?: string;
  }
  export interface transaction_record_refund_params {
    amount?: number;
  }
  export interface transaction_record_refund_params {
    payment_method: string;
  }
  export interface transaction_record_refund_params {
    reference_number?: string;
  }
  export interface transaction_record_refund_params {
    date: number;
  }
}
