import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class CreditNote extends Model {
  public id: string;
  public customer_id: string;
  public subscription_id?: string;
  public reference_invoice_id?: string;
  public type: string;
  public reason_code?: string;
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
  public generated_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public channel?: string;
  public einvoice?: Einvoice;
  public sub_total: number;
  public sub_total_in_local_currency?: number;
  public total_in_local_currency?: number;
  public local_currency_code?: string;
  public round_off_amount?: number;
  public fractional_correction?: number;
  public line_items?: Array<LineItem>;
  public discounts?: Array<Discount>;
  public line_item_discounts?: Array<LineItemDiscount>;
  public line_item_tiers?: Array<LineItemTier>;
  public taxes?: Array<Tax>;
  public line_item_taxes?: Array<LineItemTax>;
  public linked_refunds?: Array<LinkedRefund>;
  public allocations?: Array<Allocation>;
  public deleted: boolean;
  public tax_category?: string;
  public local_currency_exchange_rate?: number;
  public create_reason_code?: string;
  public vat_number_prefix?: string;
  public business_entity_id: string;
  public shipping_address?: ShippingAddress;
  public billing_address?: BillingAddress;
  public site_details_at_creation?: SiteDetailsAtCreation;
  public tax_origin?: TaxOrigin;
}

// OPERATIONS
//-----------
export class CreditNoteApi extends Api {
  public create(params?: _credit_note.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(credit_note_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public pdf(credit_note_id: string, params?: _credit_note.pdf_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/pdf',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public download_einvoice(credit_note_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'download_einvoice',
      'httpMethod': 'GET',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/download_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public refund(credit_note_id: string, params?: _credit_note.refund_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'refund',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public record_refund(credit_note_id: string, params?: _credit_note.record_refund_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public void_credit_note(credit_note_id: string, params?: _credit_note.void_credit_note_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'void_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _credit_note.credit_note_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/credit_notes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public credit_notes_for_customer(customer_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'credit_notes_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/credit_notes',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public delete(credit_note_id: string, params?: _credit_note.delete_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_tax_withheld_refund(credit_note_id: string, params?: _credit_note.remove_tax_withheld_refund_params):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'remove_tax_withheld_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/remove_tax_withheld_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public resend_einvoice(credit_note_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'resend_einvoice',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/resend_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public send_einvoice(credit_note_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([credit_note_id, params], {
      'methodName': 'send_einvoice',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/send_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_credit_note(params?: _credit_note.import_credit_note_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'import_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/credit_notes',
      'urlSuffix': '/import_credit_note',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~CreditNote

export class Einvoice extends Model {
  public id: string;
  public reference_number?: string;
  public status: string;
  public message?: string;
} // ~Einvoice

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

export class LinkedRefund extends Model {
  public txn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public txn_status?: string;
  public txn_date?: number;
  public txn_amount?: number;
  public refund_reason_code?: string;
} // ~LinkedRefund

export class Allocation extends Model {
  public invoice_id: string;
  public allocated_amount: number;
  public allocated_at: number;
  public invoice_date?: number;
  public invoice_status: string;
} // ~Allocation

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

export class SiteDetailsAtCreation extends Model {
  public timezone?: string;
  public organization_address?: any;
} // ~SiteDetailsAtCreation

export class TaxOrigin extends Model {
  public country?: string;
  public registration_number?: string;
} // ~TaxOrigin



  // REQUEST PARAMS
  //---------------

export namespace _credit_note {
  export interface create_params {
    reference_invoice_id?: string;
    customer_id?: string;
    total?: number;
    type: string;
    reason_code?: string;
    create_reason_code?: string;
    date?: number;
    customer_notes?: string;
    currency_code?: string;
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
    einvoice?: einvoice_credit_note_list_params;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    subscription_id?: filter._string;
    reference_invoice_id?: filter._string;
    type?: filter._enum;
    reason_code?: filter._enum;
    create_reason_code?: filter._string;
    status?: filter._enum;
    date?: filter._timestamp;
    total?: filter._number;
    price_type?: filter._enum;
    amount_allocated?: filter._number;
    amount_refunded?: filter._number;
    amount_available?: filter._number;
    voided_at?: filter._timestamp;
    updated_at?: filter._timestamp;
    channel?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface delete_params {
    comment?: string;
  }
  export interface remove_tax_withheld_refund_params {
    tax_withheld?: tax_withheld_remove_tax_withheld_refund_params;
  }
  export interface import_credit_note_params {
    id: string;
    customer_id?: string;
    subscription_id?: string;
    reference_invoice_id: string;
    type: string;
    currency_code?: string;
    create_reason_code: string;
    date: number;
    status?: string;
    total?: number;
    refunded_at?: number;
    voided_at?: number;
    sub_total?: number;
    round_off_amount?: number;
    fractional_correction?: number;
    vat_number_prefix?: string;
    line_items?: Array<line_items_import_credit_note_params>;
    line_item_tiers?: Array<line_item_tiers_import_credit_note_params>;
    discounts?: Array<discounts_import_credit_note_params>;
    taxes?: Array<taxes_import_credit_note_params>;
    allocations?: Array<allocations_import_credit_note_params>;
    linked_refunds?: Array<linked_refunds_import_credit_note_params>;
  }
  export interface line_items_create_params {
    reference_line_item_id?: string;
  }
  export interface line_items_create_params {
    unit_amount?: number;
  }
  export interface line_items_create_params {
    unit_amount_in_decimal?: string;
  }
  export interface line_items_create_params {
    quantity?: number;
  }
  export interface line_items_create_params {
    quantity_in_decimal?: string;
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
  export interface line_items_create_params {
    entity_type?: string;
  }
  export interface line_items_create_params {
    entity_id?: string;
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
    custom_payment_method_id?: string;
  }
  export interface transaction_record_refund_params {
    date: number;
  }
  export interface einvoice_credit_note_list_params {
    status?: filter._enum;
  }
  export interface tax_withheld_remove_tax_withheld_refund_params {
    id: string;
  }
  export interface line_items_import_credit_note_params {
    reference_line_item_id?: string;
  }
  export interface line_items_import_credit_note_params {
    id?: string;
  }
  export interface line_items_import_credit_note_params {
    date_from?: number;
  }
  export interface line_items_import_credit_note_params {
    date_to?: number;
  }
  export interface line_items_import_credit_note_params {
    subscription_id?: string;
  }
  export interface line_items_import_credit_note_params {
    description: string;
  }
  export interface line_items_import_credit_note_params {
    unit_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    quantity?: number;
  }
  export interface line_items_import_credit_note_params {
    amount?: number;
  }
  export interface line_items_import_credit_note_params {
    unit_amount_in_decimal?: string;
  }
  export interface line_items_import_credit_note_params {
    quantity_in_decimal?: string;
  }
  export interface line_items_import_credit_note_params {
    amount_in_decimal?: string;
  }
  export interface line_items_import_credit_note_params {
    entity_type?: string;
  }
  export interface line_items_import_credit_note_params {
    entity_id?: string;
  }
  export interface line_items_import_credit_note_params {
    item_level_discount1_entity_id?: string;
  }
  export interface line_items_import_credit_note_params {
    item_level_discount1_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    item_level_discount2_entity_id?: string;
  }
  export interface line_items_import_credit_note_params {
    item_level_discount2_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax1_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax1_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax2_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax2_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax3_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax3_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax4_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax4_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax5_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax5_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax6_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax6_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax7_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax7_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax8_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax8_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax9_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax9_amount?: number;
  }
  export interface line_items_import_credit_note_params {
    tax10_name?: string;
  }
  export interface line_items_import_credit_note_params {
    tax10_amount?: number;
  }
  export interface line_item_tiers_import_credit_note_params {
    line_item_id: string;
  }
  export interface line_item_tiers_import_credit_note_params {
    starting_unit?: number;
  }
  export interface line_item_tiers_import_credit_note_params {
    ending_unit?: number;
  }
  export interface line_item_tiers_import_credit_note_params {
    quantity_used?: number;
  }
  export interface line_item_tiers_import_credit_note_params {
    unit_amount?: number;
  }
  export interface line_item_tiers_import_credit_note_params {
    starting_unit_in_decimal?: string;
  }
  export interface line_item_tiers_import_credit_note_params {
    ending_unit_in_decimal?: string;
  }
  export interface line_item_tiers_import_credit_note_params {
    quantity_used_in_decimal?: string;
  }
  export interface line_item_tiers_import_credit_note_params {
    unit_amount_in_decimal?: string;
  }
  export interface discounts_import_credit_note_params {
    entity_type: string;
  }
  export interface discounts_import_credit_note_params {
    entity_id?: string;
  }
  export interface discounts_import_credit_note_params {
    description?: string;
  }
  export interface discounts_import_credit_note_params {
    amount: number;
  }
  export interface taxes_import_credit_note_params {
    name: string;
  }
  export interface taxes_import_credit_note_params {
    rate: number;
  }
  export interface taxes_import_credit_note_params {
    amount?: number;
  }
  export interface taxes_import_credit_note_params {
    description?: string;
  }
  export interface taxes_import_credit_note_params {
    juris_type?: string;
  }
  export interface taxes_import_credit_note_params {
    juris_name?: string;
  }
  export interface taxes_import_credit_note_params {
    juris_code?: string;
  }
  export interface allocations_import_credit_note_params {
    invoice_id: string;
  }
  export interface allocations_import_credit_note_params {
    allocated_amount: number;
  }
  export interface allocations_import_credit_note_params {
    allocated_at: number;
  }
  export interface linked_refunds_import_credit_note_params {
    amount: number;
  }
  export interface linked_refunds_import_credit_note_params {
    payment_method: string;
  }
  export interface linked_refunds_import_credit_note_params {
    date: number;
  }
  export interface linked_refunds_import_credit_note_params {
    reference_number?: string;
  }
}
