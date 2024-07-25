import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Invoice extends Model {
  public id: string;
  public po_number?: string;
  public customer_id: string;
  public subscription_id?: string;
  public recurring: boolean;
  public status: string;
  public vat_number?: string;
  public price_type: string;
  public date?: number;
  public due_date?: number;
  public net_term_days?: number;
  public exchange_rate?: number;
  public currency_code: string;
  public total?: number;
  public amount_paid?: number;
  public amount_adjusted?: number;
  public write_off_amount?: number;
  public credits_applied?: number;
  public amount_due?: number;
  public paid_at?: number;
  public dunning_status?: string;
  public next_retry_at?: number;
  public voided_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public sub_total: number;
  public sub_total_in_local_currency?: number;
  public total_in_local_currency?: number;
  public local_currency_code?: string;
  public tax: number;
  public local_currency_exchange_rate?: number;
  public first_invoice?: boolean;
  public new_sales_amount?: number;
  public has_advance_charges?: boolean;
  public term_finalized: boolean;
  public is_gifted: boolean;
  public generated_at?: number;
  public expected_payment_date?: number;
  public amount_to_collect?: number;
  public round_off_amount?: number;
  public line_items?: Array<LineItem>;
  public discounts?: Array<Discount>;
  public line_item_discounts?: Array<LineItemDiscount>;
  public taxes?: Array<Tax>;
  public line_item_taxes?: Array<LineItemTax>;
  public line_item_tiers?: Array<LineItemTier>;
  public linked_payments?: Array<LinkedPayment>;
  public dunning_attempts?: Array<DunningAttempt>;
  public applied_credits?: Array<AppliedCredit>;
  public adjustment_credit_notes?: Array<AdjustmentCreditNote>;
  public issued_credit_notes?: Array<IssuedCreditNote>;
  public linked_orders?: Array<LinkedOrder>;
  public notes?: Array<Note>;
  public shipping_address?: ShippingAddress;
  public statement_descriptor?: StatementDescriptor;
  public billing_address?: BillingAddress;
  public einvoice?: Einvoice;
  public payment_owner?: string;
  public void_reason_code?: string;
  public deleted: boolean;
  public tax_category?: string;
  public vat_number_prefix?: string;
  public channel?: string;
  public business_entity_id?: string;
  public site_details_at_creation?: SiteDetailsAtCreation;
  public tax_origin?: TaxOrigin;
}

// OPERATIONS
//-----------
export class InvoiceApi extends Api {
  public create(params?: _invoice.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create_for_charge_items_and_charges(params?: _invoice.create_for_charge_items_and_charges_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_charge_items_and_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/create_for_charge_items_and_charges',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public charge(params?: _invoice.charge_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/charge',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public charge_addon(params?: _invoice.charge_addon_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'charge_addon',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/charge_addon',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create_for_charge_item(params?: _invoice.create_for_charge_item_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_charge_item',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/create_for_charge_item',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public stop_dunning(invoice_id: string, params?: _invoice.stop_dunning_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'stop_dunning',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/stop_dunning',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_invoice(params?: _invoice.import_invoice_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'import_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/import_invoice',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public apply_payments(invoice_id: string, params?: _invoice.apply_payments_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'apply_payments',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/apply_payments',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public sync_usages(invoice_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'sync_usages',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/sync_usages',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete_line_items(invoice_id: string, params?: _invoice.delete_line_items_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'delete_line_items',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/delete_line_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public apply_credits(invoice_id: string, params?: _invoice.apply_credits_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'apply_credits',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/apply_credits',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _invoice.invoice_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public invoices_for_customer(customer_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'invoices_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/invoices',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public invoices_for_subscription(subscription_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'invoices_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/invoices',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(invoice_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public pdf(invoice_id: string, params?: _invoice.pdf_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/pdf',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public download_einvoice(invoice_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'download_einvoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/download_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list_payment_reference_numbers(params?: _invoice.invoice_list_payment_reference_numbers_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list_payment_reference_numbers',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/payment_reference_numbers',
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public add_charge(invoice_id: string, params?: _invoice.add_charge_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'add_charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/add_charge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public add_addon_charge(invoice_id: string, params?: _invoice.add_addon_charge_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'add_addon_charge',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/add_addon_charge',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public add_charge_item(invoice_id: string, params?: _invoice.add_charge_item_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'add_charge_item',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/add_charge_item',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public close(invoice_id: string, params?: _invoice.close_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'close',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/close',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public collect_payment(invoice_id: string, params?: _invoice.collect_payment_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'collect_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/collect_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public record_payment(invoice_id: string, params?: _invoice.record_payment_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'record_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/record_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public record_tax_withheld(invoice_id: string, params?: _invoice.record_tax_withheld_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'record_tax_withheld',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/record_tax_withheld',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_tax_withheld(invoice_id: string, params?: _invoice.remove_tax_withheld_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'remove_tax_withheld',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/remove_tax_withheld',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public refund(invoice_id: string, params?: _invoice.refund_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'refund',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public record_refund(invoice_id: string, params?: _invoice.record_refund_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_payment(invoice_id: string, params?: _invoice.remove_payment_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'remove_payment',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/remove_payment',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_credit_note(invoice_id: string, params?: _invoice.remove_credit_note_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'remove_credit_note',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/remove_credit_note',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public void_invoice(invoice_id: string, params?: _invoice.void_invoice_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'void_invoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public write_off(invoice_id: string, params?: _invoice.write_off_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'write_off',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/write_off',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(invoice_id: string, params?: _invoice.delete_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_details(invoice_id: string, params?: _invoice.update_details_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'update_details',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/update_details',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public installments(invoice_id: string, params?: _invoice.installments_params):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'installments',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/installments',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public resend_einvoice(invoice_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'resend_einvoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/resend_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public send_einvoice(invoice_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'send_einvoice',
      'httpMethod': 'POST',
      'urlPrefix': '/invoices',
      'urlSuffix': '/send_einvoice',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Invoice

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

export class LinkedPayment extends Model {
  public txn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public txn_status?: string;
  public txn_date?: number;
  public txn_amount?: number;
} // ~LinkedPayment

export class DunningAttempt extends Model {
  public attempt: number;
  public transaction_id?: string;
  public dunning_type: string;
  public created_at?: number;
  public txn_status?: string;
  public txn_amount?: number;
} // ~DunningAttempt

export class AppliedCredit extends Model {
  public cn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public cn_reason_code?: string;
  public cn_create_reason_code?: string;
  public cn_date?: number;
  public cn_status: string;
} // ~AppliedCredit

export class AdjustmentCreditNote extends Model {
  public cn_id: string;
  public cn_reason_code?: string;
  public cn_create_reason_code?: string;
  public cn_date?: number;
  public cn_total?: number;
  public cn_status: string;
} // ~AdjustmentCreditNote

export class IssuedCreditNote extends Model {
  public cn_id: string;
  public cn_reason_code?: string;
  public cn_create_reason_code?: string;
  public cn_date?: number;
  public cn_total?: number;
  public cn_status: string;
} // ~IssuedCreditNote

export class LinkedOrder extends Model {
  public id: string;
  public document_number?: string;
  public status?: string;
  public order_type?: string;
  public reference_id?: string;
  public fulfillment_status?: string;
  public batch_id?: string;
  public created_at: number;
} // ~LinkedOrder

export class Note extends Model {
  public entity_type: string;
  public note: string;
  public entity_id?: string;
} // ~Note

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

export class StatementDescriptor extends Model {
  public id: string;
  public descriptor?: string;
} // ~StatementDescriptor

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

export class Einvoice extends Model {
  public id: string;
  public reference_number?: string;
  public status: string;
  public message?: string;
} // ~Einvoice

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

export namespace _invoice {
  export interface create_params {
    customer_id?: string;
    subscription_id?: string;
    currency_code?: string;
    invoice_date?: number;
    invoice_note?: string;
    remove_general_note?: boolean;
    po_number?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    auto_collection?: string;
    token_id?: string;
    replace_primary_payment_source?: boolean;
    retain_payment_source?: boolean;
    payment_initiator?: string;
    shipping_address?: shipping_address_create_params;
    statement_descriptor?: statement_descriptor_create_params;
    card?: card_create_params;
    bank_account?: bank_account_create_params;
    payment_method?: payment_method_create_params;
    payment_intent?: payment_intent_create_params;
    addons?: Array<addons_create_params>;
    charges?: Array<charges_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
    notes_to_remove?: Array<notes_to_remove_create_params>;
  }
  export interface create_for_charge_items_and_charges_params {
    customer_id?: string;
    subscription_id?: string;
    currency_code?: string;
    invoice_note?: string;
    remove_general_note?: boolean;
    po_number?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    coupon_ids?: Array<string>;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    auto_collection?: string;
    invoice_date?: number;
    token_id?: string;
    replace_primary_payment_source?: boolean;
    retain_payment_source?: boolean;
    payment_initiator?: string;
    shipping_address?: shipping_address_create_for_charge_items_and_charges_params;
    statement_descriptor?: statement_descriptor_create_for_charge_items_and_charges_params;
    card?: card_create_for_charge_items_and_charges_params;
    bank_account?: bank_account_create_for_charge_items_and_charges_params;
    payment_method?: payment_method_create_for_charge_items_and_charges_params;
    payment_intent?: payment_intent_create_for_charge_items_and_charges_params;
    item_prices?: Array<item_prices_create_for_charge_items_and_charges_params>;
    item_tiers?: Array<item_tiers_create_for_charge_items_and_charges_params>;
    charges?: Array<charges_create_for_charge_items_and_charges_params>;
    notes_to_remove?: Array<notes_to_remove_create_for_charge_items_and_charges_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_for_charge_items_and_charges_params>;
    discounts?: Array<discounts_create_for_charge_items_and_charges_params>;
  }
  export interface charge_params {
    customer_id?: string;
    subscription_id?: string;
    currency_code?: string;
    amount?: number;
    amount_in_decimal?: string;
    description: string;
    date_from?: number;
    date_to?: number;
    coupon_ids?: Array<string>;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    po_number?: string;
    invoice_date?: number;
    payment_source_id?: string;
    payment_initiator?: string;
    tax_providers_fields?: Array<tax_providers_fields_charge_params>;
  }
  export interface charge_addon_params {
    customer_id?: string;
    subscription_id?: string;
    addon_id: string;
    addon_quantity?: number;
    addon_unit_price?: number;
    addon_quantity_in_decimal?: string;
    addon_unit_price_in_decimal?: string;
    date_from?: number;
    date_to?: number;
    coupon_ids?: Array<string>;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    coupon?: string;
    po_number?: string;
    invoice_date?: number;
    payment_source_id?: string;
    payment_initiator?: string;
  }
  export interface create_for_charge_item_params {
    customer_id?: string;
    subscription_id?: string;
    po_number?: string;
    coupon?: string;
    payment_source_id?: string;
    payment_initiator?: string;
    invoice_date?: number;
    item_price?: item_price_create_for_charge_item_params;
    item_tiers?: Array<item_tiers_create_for_charge_item_params>;
  }
  export interface stop_dunning_params {
    comment?: string;
  }
  export interface import_invoice_params {
    id: string;
    currency_code?: string;
    customer_id?: string;
    subscription_id?: string;
    po_number?: string;
    price_type?: string;
    tax_override_reason?: string;
    vat_number?: string;
    vat_number_prefix?: string;
    date: number;
    total: number;
    round_off?: number;
    status?: string;
    voided_at?: number;
    void_reason_code?: string;
    is_written_off?: boolean;
    write_off_amount?: number;
    write_off_date?: number;
    due_date?: number;
    net_term_days?: number;
    has_advance_charges?: boolean;
    use_for_proration?: boolean;
    credit_note?: credit_note_import_invoice_params;
    billing_address?: billing_address_import_invoice_params;
    shipping_address?: shipping_address_import_invoice_params;
    line_items?: Array<line_items_import_invoice_params>;
    payment_reference_numbers?: Array<payment_reference_numbers_import_invoice_params>;
    line_item_tiers?: Array<line_item_tiers_import_invoice_params>;
    discounts?: Array<discounts_import_invoice_params>;
    taxes?: Array<taxes_import_invoice_params>;
    payments?: Array<payments_import_invoice_params>;
    notes?: Array<notes_import_invoice_params>;
  }
  export interface apply_payments_params {
    comment?: string;
    transactions?: Array<transactions_apply_payments_params>;
  }
  export interface delete_line_items_params {
    line_items?: Array<line_items_delete_line_items_params>;
  }
  export interface apply_credits_params {
    comment?: string;
    credit_notes?: Array<credit_notes_apply_credits_params>;
  }
  export interface invoice_list_params {
    limit?: number;
    offset?: string;
    einvoice?: einvoice_invoice_list_params;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    paid_on_after?: number;
    include_deleted?: boolean;
    id?: filter._string;
    subscription_id?: filter._string;
    customer_id?: filter._string;
    recurring?: filter._boolean;
    status?: filter._enum;
    price_type?: filter._enum;
    date?: filter._timestamp;
    paid_at?: filter._timestamp;
    total?: filter._number;
    amount_paid?: filter._number;
    amount_adjusted?: filter._number;
    credits_applied?: filter._number;
    amount_due?: filter._number;
    dunning_status?: filter._enum;
    payment_owner?: filter._string;
    updated_at?: filter._timestamp;
    channel?: filter._enum;
    voided_at?: filter._timestamp;
    void_reason_code?: filter._string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface pdf_params {
    disposition_type?: string;
  }
  export interface invoice_list_payment_reference_numbers_params {
    limit?: number;
    offset?: string;
    payment_reference_number?: payment_reference_number_invoice_list_payment_reference_numbers_params;
    id?: filter._string;
  }
  export interface add_charge_params {
    amount: number;
    description: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    avalara_tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    comment?: string;
    subscription_id?: string;
    line_item?: line_item_add_charge_params;
  }
  export interface add_addon_charge_params {
    addon_id: string;
    addon_quantity?: number;
    addon_unit_price?: number;
    addon_quantity_in_decimal?: string;
    addon_unit_price_in_decimal?: string;
    comment?: string;
    subscription_id?: string;
    line_item?: line_item_add_addon_charge_params;
  }
  export interface add_charge_item_params {
    comment?: string;
    subscription_id?: string;
    item_price?: item_price_add_charge_item_params;
    item_tiers?: Array<item_tiers_add_charge_item_params>;
  }
  export interface close_params {
    comment?: string;
    invoice_note?: string;
    remove_general_note?: boolean;
    invoice_date?: number;
    notes_to_remove?: Array<notes_to_remove_close_params>;
  }
  export interface collect_payment_params {
    amount?: number;
    authorization_transaction_id?: string;
    payment_source_id?: string;
    comment?: string;
    payment_initiator?: string;
  }
  export interface record_payment_params {
    comment?: string;
    transaction?: transaction_record_payment_params;
  }
  export interface record_tax_withheld_params {
    tax_withheld?: tax_withheld_record_tax_withheld_params;
  }
  export interface remove_tax_withheld_params {
    tax_withheld?: tax_withheld_remove_tax_withheld_params;
  }
  export interface refund_params {
    refund_amount?: number;
    comment?: string;
    customer_notes?: string;
    credit_note?: credit_note_refund_params;
  }
  export interface record_refund_params {
    comment?: string;
    customer_notes?: string;
    transaction?: transaction_record_refund_params;
    credit_note?: credit_note_record_refund_params;
  }
  export interface remove_payment_params {
    transaction?: transaction_remove_payment_params;
  }
  export interface remove_credit_note_params {
    credit_note?: credit_note_remove_credit_note_params;
  }
  export interface void_invoice_params {
    comment?: string;
    void_reason_code?: string;
  }
  export interface write_off_params {
    comment?: string;
  }
  export interface delete_params {
    comment?: string;
  }
  export interface update_details_params {
    vat_number?: string;
    vat_number_prefix?: string;
    po_number?: string;
    comment?: string;
    billing_address?: billing_address_update_details_params;
    shipping_address?: shipping_address_update_details_params;
    statement_descriptor?: statement_descriptor_update_details_params;
  }
  export interface installments_params {
    config_id: string;
    amount?: number;
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
    quantity_in_decimal?: string;
  }
  export interface addons_create_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_params {
    date_from?: number;
  }
  export interface addons_create_params {
    date_to?: number;
  }
  export interface charges_create_params {
    amount?: number;
  }
  export interface charges_create_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_params {
    description?: string;
  }
  export interface charges_create_params {
    taxable?: boolean;
  }
  export interface charges_create_params {
    tax_profile_id?: string;
  }
  export interface charges_create_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_params {
    hsn_code?: string;
  }
  export interface charges_create_params {
    taxjar_product_code?: string;
  }
  export interface charges_create_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_params {
    avalara_service_type?: number;
  }
  export interface charges_create_params {
    date_from?: number;
  }
  export interface charges_create_params {
    date_to?: number;
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
  export interface notes_to_remove_create_params {
    entity_type?: string;
  }
  export interface notes_to_remove_create_params {
    entity_id?: string;
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
  export interface statement_descriptor_create_for_charge_items_and_charges_params {
    descriptor?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    gateway_account_id?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    tmp_token?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    first_name?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    last_name?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    number?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    expiry_month?: number;
  }
  export interface card_create_for_charge_items_and_charges_params {
    expiry_year?: number;
  }
  export interface card_create_for_charge_items_and_charges_params {
    cvv?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_addr1?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_addr2?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_city?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_state_code?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_state?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_zip?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    billing_country?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
  }
  export interface card_create_for_charge_items_and_charges_params {
    additional_information?: any;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    gateway_account_id?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    iban?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    first_name?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    last_name?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    company?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    email?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    phone?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    bank_name?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    account_number?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    routing_number?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    bank_code?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    account_type?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    account_holder_type?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    echeck_type?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    issuing_country?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    swedish_identity_number?: string;
  }
  export interface bank_account_create_for_charge_items_and_charges_params {
    billing_address?: any;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    type?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    gateway_account_id?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    reference_id?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    tmp_token?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    issuing_country?: string;
  }
  export interface payment_method_create_for_charge_items_and_charges_params {
    additional_information?: any;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    id?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    gw_token?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    payment_method_type?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    reference_id?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_for_charge_items_and_charges_params {
    additional_information?: any;
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
    date_from?: number;
  }
  export interface item_prices_create_for_charge_items_and_charges_params {
    date_to?: number;
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
    taxable?: boolean;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    tax_profile_id?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    hsn_code?: string;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    taxjar_product_code?: string;
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
    date_from?: number;
  }
  export interface charges_create_for_charge_items_and_charges_params {
    date_to?: number;
  }
  export interface notes_to_remove_create_for_charge_items_and_charges_params {
    entity_type?: string;
  }
  export interface notes_to_remove_create_for_charge_items_and_charges_params {
    entity_id?: string;
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
  export interface tax_providers_fields_charge_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_charge_params {
    field_id?: string;
  }
  export interface tax_providers_fields_charge_params {
    field_value?: string;
  }
  export interface item_price_create_for_charge_item_params {
    item_price_id: string;
  }
  export interface item_price_create_for_charge_item_params {
    quantity?: number;
  }
  export interface item_price_create_for_charge_item_params {
    quantity_in_decimal?: string;
  }
  export interface item_price_create_for_charge_item_params {
    unit_price?: number;
  }
  export interface item_price_create_for_charge_item_params {
    unit_price_in_decimal?: string;
  }
  export interface item_price_create_for_charge_item_params {
    date_from?: number;
  }
  export interface item_price_create_for_charge_item_params {
    date_to?: number;
  }
  export interface item_tiers_create_for_charge_item_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_for_charge_item_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_for_charge_item_params {
    price?: number;
  }
  export interface item_tiers_create_for_charge_item_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_charge_item_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_charge_item_params {
    price_in_decimal?: string;
  }
  export interface credit_note_import_invoice_params {
    id?: string;
  }
  export interface billing_address_import_invoice_params {
    first_name?: string;
  }
  export interface billing_address_import_invoice_params {
    last_name?: string;
  }
  export interface billing_address_import_invoice_params {
    email?: string;
  }
  export interface billing_address_import_invoice_params {
    company?: string;
  }
  export interface billing_address_import_invoice_params {
    phone?: string;
  }
  export interface billing_address_import_invoice_params {
    line1?: string;
  }
  export interface billing_address_import_invoice_params {
    line2?: string;
  }
  export interface billing_address_import_invoice_params {
    line3?: string;
  }
  export interface billing_address_import_invoice_params {
    city?: string;
  }
  export interface billing_address_import_invoice_params {
    state_code?: string;
  }
  export interface billing_address_import_invoice_params {
    state?: string;
  }
  export interface billing_address_import_invoice_params {
    zip?: string;
  }
  export interface billing_address_import_invoice_params {
    country?: string;
  }
  export interface billing_address_import_invoice_params {
    validation_status?: string;
  }
  export interface shipping_address_import_invoice_params {
    first_name?: string;
  }
  export interface shipping_address_import_invoice_params {
    last_name?: string;
  }
  export interface shipping_address_import_invoice_params {
    email?: string;
  }
  export interface shipping_address_import_invoice_params {
    company?: string;
  }
  export interface shipping_address_import_invoice_params {
    phone?: string;
  }
  export interface shipping_address_import_invoice_params {
    line1?: string;
  }
  export interface shipping_address_import_invoice_params {
    line2?: string;
  }
  export interface shipping_address_import_invoice_params {
    line3?: string;
  }
  export interface shipping_address_import_invoice_params {
    city?: string;
  }
  export interface shipping_address_import_invoice_params {
    state_code?: string;
  }
  export interface shipping_address_import_invoice_params {
    state?: string;
  }
  export interface shipping_address_import_invoice_params {
    zip?: string;
  }
  export interface shipping_address_import_invoice_params {
    country?: string;
  }
  export interface shipping_address_import_invoice_params {
    validation_status?: string;
  }
  export interface line_items_import_invoice_params {
    id?: string;
  }
  export interface line_items_import_invoice_params {
    date_from?: number;
  }
  export interface line_items_import_invoice_params {
    date_to?: number;
  }
  export interface line_items_import_invoice_params {
    subscription_id?: string;
  }
  export interface line_items_import_invoice_params {
    description: string;
  }
  export interface line_items_import_invoice_params {
    unit_amount?: number;
  }
  export interface line_items_import_invoice_params {
    quantity?: number;
  }
  export interface line_items_import_invoice_params {
    amount?: number;
  }
  export interface line_items_import_invoice_params {
    unit_amount_in_decimal?: string;
  }
  export interface line_items_import_invoice_params {
    quantity_in_decimal?: string;
  }
  export interface line_items_import_invoice_params {
    amount_in_decimal?: string;
  }
  export interface line_items_import_invoice_params {
    entity_type?: string;
  }
  export interface line_items_import_invoice_params {
    entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount1_entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount1_amount?: number;
  }
  export interface line_items_import_invoice_params {
    item_level_discount2_entity_id?: string;
  }
  export interface line_items_import_invoice_params {
    item_level_discount2_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax1_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax1_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax2_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax2_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax3_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax3_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax4_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax4_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax5_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax5_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax6_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax6_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax7_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax7_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax8_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax8_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax9_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax9_amount?: number;
  }
  export interface line_items_import_invoice_params {
    tax10_name?: string;
  }
  export interface line_items_import_invoice_params {
    tax10_amount?: number;
  }
  export interface payment_reference_numbers_import_invoice_params {
    id?: string;
  }
  export interface payment_reference_numbers_import_invoice_params {
    type: string;
  }
  export interface payment_reference_numbers_import_invoice_params {
    number: string;
  }
  export interface line_item_tiers_import_invoice_params {
    line_item_id: string;
  }
  export interface line_item_tiers_import_invoice_params {
    starting_unit?: number;
  }
  export interface line_item_tiers_import_invoice_params {
    ending_unit?: number;
  }
  export interface line_item_tiers_import_invoice_params {
    quantity_used?: number;
  }
  export interface line_item_tiers_import_invoice_params {
    unit_amount?: number;
  }
  export interface line_item_tiers_import_invoice_params {
    starting_unit_in_decimal?: string;
  }
  export interface line_item_tiers_import_invoice_params {
    ending_unit_in_decimal?: string;
  }
  export interface line_item_tiers_import_invoice_params {
    quantity_used_in_decimal?: string;
  }
  export interface line_item_tiers_import_invoice_params {
    unit_amount_in_decimal?: string;
  }
  export interface discounts_import_invoice_params {
    entity_type: string;
  }
  export interface discounts_import_invoice_params {
    entity_id?: string;
  }
  export interface discounts_import_invoice_params {
    description?: string;
  }
  export interface discounts_import_invoice_params {
    amount: number;
  }
  export interface taxes_import_invoice_params {
    name: string;
  }
  export interface taxes_import_invoice_params {
    rate: number;
  }
  export interface taxes_import_invoice_params {
    amount?: number;
  }
  export interface taxes_import_invoice_params {
    description?: string;
  }
  export interface taxes_import_invoice_params {
    juris_type?: string;
  }
  export interface taxes_import_invoice_params {
    juris_name?: string;
  }
  export interface taxes_import_invoice_params {
    juris_code?: string;
  }
  export interface payments_import_invoice_params {
    amount: number;
  }
  export interface payments_import_invoice_params {
    payment_method: string;
  }
  export interface payments_import_invoice_params {
    date?: number;
  }
  export interface payments_import_invoice_params {
    reference_number?: string;
  }
  export interface notes_import_invoice_params {
    entity_type?: string;
  }
  export interface notes_import_invoice_params {
    entity_id?: string;
  }
  export interface notes_import_invoice_params {
    note?: string;
  }
  export interface transactions_apply_payments_params {
    id?: string;
  }
  export interface transactions_apply_payments_params {
    amount?: number;
  }
  export interface line_items_delete_line_items_params {
    id?: string;
  }
  export interface credit_notes_apply_credits_params {
    id?: string;
  }
  export interface einvoice_invoice_list_params {
    status?: filter._enum;
  }
  export interface payment_reference_number_invoice_list_payment_reference_numbers_params {
    number?: filter._string;
  }
  export interface line_item_add_charge_params {
    date_from?: number;
  }
  export interface line_item_add_charge_params {
    date_to?: number;
  }
  export interface line_item_add_addon_charge_params {
    date_from?: number;
  }
  export interface line_item_add_addon_charge_params {
    date_to?: number;
  }
  export interface item_price_add_charge_item_params {
    item_price_id: string;
  }
  export interface item_price_add_charge_item_params {
    quantity?: number;
  }
  export interface item_price_add_charge_item_params {
    quantity_in_decimal?: string;
  }
  export interface item_price_add_charge_item_params {
    unit_price?: number;
  }
  export interface item_price_add_charge_item_params {
    unit_price_in_decimal?: string;
  }
  export interface item_price_add_charge_item_params {
    date_from?: number;
  }
  export interface item_price_add_charge_item_params {
    date_to?: number;
  }
  export interface item_tiers_add_charge_item_params {
    starting_unit?: number;
  }
  export interface item_tiers_add_charge_item_params {
    ending_unit?: number;
  }
  export interface item_tiers_add_charge_item_params {
    price?: number;
  }
  export interface item_tiers_add_charge_item_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_add_charge_item_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_add_charge_item_params {
    price_in_decimal?: string;
  }
  export interface notes_to_remove_close_params {
    entity_type?: string;
  }
  export interface notes_to_remove_close_params {
    entity_id?: string;
  }
  export interface transaction_record_payment_params {
    amount?: number;
  }
  export interface transaction_record_payment_params {
    payment_method: string;
  }
  export interface transaction_record_payment_params {
    reference_number?: string;
  }
  export interface transaction_record_payment_params {
    custom_payment_method_id?: string;
  }
  export interface transaction_record_payment_params {
    id_at_gateway?: string;
  }
  export interface transaction_record_payment_params {
    status?: string;
  }
  export interface transaction_record_payment_params {
    date?: number;
  }
  export interface transaction_record_payment_params {
    error_code?: string;
  }
  export interface transaction_record_payment_params {
    error_text?: string;
  }
  export interface tax_withheld_record_tax_withheld_params {
    amount: number;
  }
  export interface tax_withheld_record_tax_withheld_params {
    reference_number?: string;
  }
  export interface tax_withheld_record_tax_withheld_params {
    date?: number;
  }
  export interface tax_withheld_record_tax_withheld_params {
    description?: string;
  }
  export interface tax_withheld_remove_tax_withheld_params {
    id: string;
  }
  export interface credit_note_refund_params {
    reason_code?: string;
  }
  export interface credit_note_refund_params {
    create_reason_code?: string;
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
  export interface credit_note_record_refund_params {
    reason_code?: string;
  }
  export interface credit_note_record_refund_params {
    create_reason_code?: string;
  }
  export interface transaction_remove_payment_params {
    id: string;
  }
  export interface credit_note_remove_credit_note_params {
    id: string;
  }
  export interface billing_address_update_details_params {
    first_name?: string;
  }
  export interface billing_address_update_details_params {
    last_name?: string;
  }
  export interface billing_address_update_details_params {
    email?: string;
  }
  export interface billing_address_update_details_params {
    company?: string;
  }
  export interface billing_address_update_details_params {
    phone?: string;
  }
  export interface billing_address_update_details_params {
    line1?: string;
  }
  export interface billing_address_update_details_params {
    line2?: string;
  }
  export interface billing_address_update_details_params {
    line3?: string;
  }
  export interface billing_address_update_details_params {
    city?: string;
  }
  export interface billing_address_update_details_params {
    state_code?: string;
  }
  export interface billing_address_update_details_params {
    state?: string;
  }
  export interface billing_address_update_details_params {
    zip?: string;
  }
  export interface billing_address_update_details_params {
    country?: string;
  }
  export interface billing_address_update_details_params {
    validation_status?: string;
  }
  export interface shipping_address_update_details_params {
    first_name?: string;
  }
  export interface shipping_address_update_details_params {
    last_name?: string;
  }
  export interface shipping_address_update_details_params {
    email?: string;
  }
  export interface shipping_address_update_details_params {
    company?: string;
  }
  export interface shipping_address_update_details_params {
    phone?: string;
  }
  export interface shipping_address_update_details_params {
    line1?: string;
  }
  export interface shipping_address_update_details_params {
    line2?: string;
  }
  export interface shipping_address_update_details_params {
    line3?: string;
  }
  export interface shipping_address_update_details_params {
    city?: string;
  }
  export interface shipping_address_update_details_params {
    state_code?: string;
  }
  export interface shipping_address_update_details_params {
    state?: string;
  }
  export interface shipping_address_update_details_params {
    zip?: string;
  }
  export interface shipping_address_update_details_params {
    country?: string;
  }
  export interface shipping_address_update_details_params {
    validation_status?: string;
  }
  export interface statement_descriptor_update_details_params {
    descriptor?: string;
  }
}
