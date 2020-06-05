import * as resources from ".";
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
  public amount_unused?: number;
  public masked_card_number?: string;
  public reference_transaction_id?: string;
  public refunded_txn_id?: string;
  public reference_authorization_id?: string;
  public amount_capturable?: number;
  public reversal_transaction_id?: string;
  public linked_invoices?: Array<resources.TransactionLinkedInvoice>;
  public linked_credit_notes?: Array<resources.TransactionLinkedCreditNote>;
  public linked_refunds?: Array<resources.TransactionLinkedRefund>;
  public linked_payments?: Array<resources.TransactionLinkedPayment>;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create_authorization(params?: _transaction.create_authorization_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_authorization',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/create_authorization',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static void_transaction(transaction_id: string, params?: any) {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'void_transaction',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/void',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static record_refund(transaction_id: string, params?: _transaction.record_refund_params) {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'record_refund',
      'httpMethod': 'POST',
      'urlPrefix': '/transactions',
      'urlSuffix': '/record_refund',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _transaction.transaction_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/transactions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static transactions_for_customer(customer_id: string, params?: any) {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'transactions_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/transactions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static transactions_for_subscription(subscription_id: string, params?: any) {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'transactions_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/transactions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static payments_for_invoice(invoice_id: string, params?: any) {
    return new RequestWrapper([invoice_id, params], {
      'methodName': 'payments_for_invoice',
      'httpMethod': 'GET',
      'urlPrefix': '/invoices',
      'urlSuffix': '/payments',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(transaction_id: string, params?: any) {
    return new RequestWrapper([transaction_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/transactions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete_offline_transaction(transaction_id: string, params?: _transaction.delete_offline_transaction_params) {
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
