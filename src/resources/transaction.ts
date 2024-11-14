import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Transaction extends Model {
  public id: string;
  public customer_id?: string;
  public subscription_id?: string;
  public gateway_account_id?: string;
  public payment_source_id?: string;
  public payment_method: string;
  public reference_number?: string;
  public gateway: string;
  public type: string;
  public date?: number;
  public settled_at?: number;
  public exchange_rate?: number;
  public currency_code: string;
  public amount?: number;
  public id_at_gateway?: string;
  public status?: string;
  public fraud_flag?: string;
  public initiator_type?: string;
  public three_d_secure?: boolean;
  public authorization_reason?: string;
  public error_code?: string;
  public error_text?: string;
  public voided_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public fraud_reason?: string;
  public custom_payment_method_id?: string;
  public amount_unused?: number;
  public masked_card_number?: string;
  public reference_transaction_id?: string;
  public refunded_txn_id?: string;
  public reference_authorization_id?: string;
  public amount_capturable?: number;
  public reversal_transaction_id?: string;
  public linked_invoices?: Array<LinkedInvoice>;
  public linked_credit_notes?: Array<LinkedCreditNote>;
  public linked_refunds?: Array<LinkedRefund>;
  public linked_payments?: Array<LinkedPayment>;
  public deleted: boolean;
  public iin?: string;
  public last4?: string;
  public merchant_reference_id?: string;
  public business_entity_id?: string;
  public payment_method_details?: string;
  public error_detail?: GatewayErrorDetail;
  public custom_payment_method_name?: string;

  

  // OPERATIONS
  //-----------

  public static create_authorization(params?: _transaction.create_authorization_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_authorization',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/create_authorization',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static void_transaction(transaction_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'void_transaction',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_refund(transaction_id: string, params?: _transaction.record_refund_params):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static reconcile(transaction_id: string, params?: _transaction.reconcile_params):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'reconcile',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/reconcile',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static refund(transaction_id: string, params?: _transaction.refund_params):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'refund',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _transaction.transaction_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/transactions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static transactions_for_customer(customer_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'transactions_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/transactions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static transactions_for_subscription(subscription_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'transactions_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/transactions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static payments_for_invoice(invoice_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'payments_for_invoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/payments',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(transaction_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/transactions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete_offline_transaction(transaction_id: string, params?: _transaction.delete_offline_transaction_params):RequestWrapper {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'delete_offline_transaction',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/delete_offline_transaction',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Transaction

export class LinkedInvoice extends Model {
  public invoice_id: string;
  public applied_amount: number;
  public applied_at: number;
  public invoice_date?: number;
  public invoice_total?: number;
  public invoice_status: string;
} // ~LinkedInvoice

export class LinkedCreditNote extends Model {
  public cn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public cn_reason_code?: string;
  public cn_create_reason_code?: string;
  public cn_date?: number;
  public cn_total?: number;
  public cn_status: string;
  public cn_reference_invoice_id?: string;
} // ~LinkedCreditNote

export class LinkedRefund extends Model {
  public txn_id: string;
  public txn_status: string;
  public txn_date: number;
  public txn_amount: number;
} // ~LinkedRefund

export class LinkedPayment extends Model {
  public id: string;
  public status?: string;
  public amount?: number;
  public date?: number;
} // ~LinkedPayment

export class GatewayErrorDetail extends Model {
  public request_id?: string;
  public error_category?: string;
  public error_code?: string;
  public error_message?: string;
  public decline_code?: string;
  public decline_message?: string;
  public network_error_code?: string;
  public network_error_message?: string;
  public error_field?: string;
  public recommendation_code?: string;
  public recommendation_message?: string;
  public processor_error_code?: string;
  public processor_error_message?: string;
} // ~GatewayErrorDetail



  // REQUEST PARAMS
  //---------------

export namespace _transaction {
  export interface create_authorization_params {
    customer_id: string;
    payment_source_id?: string;
    currency_code?: string;
    amount: number;
  }
  export interface record_refund_params {
    amount?: number;
    payment_method: string;
    date: number;
    reference_number?: string;
    custom_payment_method_id?: string;
    comment?: string;
  }
  export interface reconcile_params {
    id_at_gateway?: string;
    customer_id?: string;
    status?: string;
  }
  export interface refund_params {
    amount?: number;
    comment?: string;
  }
  export interface transaction_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    id?: filter._string;
    customer_id?: filter._string;
    subscription_id?: filter._string;
    payment_source_id?: filter._string;
    payment_method?: filter._enum;
    gateway?: filter._enum;
    gateway_account_id?: filter._string;
    id_at_gateway?: filter._string;
    reference_number?: filter._string;
    type?: filter._enum;
    date?: filter._timestamp;
    amount?: filter._number;
    amount_capturable?: filter._number;
    status?: filter._enum;
    updated_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface delete_offline_transaction_params {
    comment?: string;
  }
}
