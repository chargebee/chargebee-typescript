import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class PaymentVoucher extends Model {
  public id: string;
  public id_at_gateway?: string;
  public payment_voucher_type: string;
  public expires_at?: number;
  public status?: string;
  public subscription_id?: string;
  public currency_code: string;
  public amount?: number;
  public gateway_account_id?: string;
  public payment_source_id?: string;
  public gateway: string;
  public payload?: string;
  public error_code?: string;
  public error_text?: string;
  public url?: string;
  public date?: number;
  public resource_version?: number;
  public updated_at?: number;
  public customer_id: string;
  public linked_invoices?: Array<LinkedInvoice>;
}

// OPERATIONS
//-----------
export class PaymentVoucherApi extends Api {
  public create(params?: _payment_voucher.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_vouchers',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(payment_voucher_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([payment_voucher_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_vouchers',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public payment_vouchers_for_invoice(invoice_id: string, params?: _payment_voucher.payment_voucher_payment_vouchers_for_invoice_params):RequestWrapper<ListResult> {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'payment_vouchers_for_invoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/payment_vouchers',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public payment_vouchers_for_customer(customer_id: string, params?: _payment_voucher.payment_voucher_payment_vouchers_for_customer_params):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'payment_vouchers_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/payment_vouchers',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }
} // ~PaymentVoucher

export class LinkedInvoice extends Model {
  public invoice_id: string;
  public txn_id: string;
  public applied_at: number;
} // ~LinkedInvoice



  // REQUEST PARAMS
  //---------------

export namespace _payment_voucher {
  export interface create_params {
    customer_id: string;
    payment_source_id?: string;
    voucher_payment_source?: voucher_payment_source_create_params;
    invoice_allocations?: Array<invoice_allocations_create_params>;
  }
  export interface payment_voucher_payment_vouchers_for_invoice_params {
    limit?: number;
    offset?: string;
    status?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface payment_voucher_payment_vouchers_for_customer_params {
    limit?: number;
    offset?: string;
    status?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface voucher_payment_source_create_params {
    voucher_type: string;
  }
  export interface invoice_allocations_create_params {
    invoice_id: string;
  }
}
