import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class InAppSubscription extends Model {
  public app_id: string;
  public subscription_id: string;
  public customer_id?: string;
  public plan_id?: string;
  public store_status?: string;
  public invoice_id?: string;
}

// OPERATIONS
//-----------
export class InAppSubscriptionApi extends Api {
  public process_receipt(in_app_subscription_id: string, params?: _in_app_subscription.process_receipt_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'process_receipt',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/process_purchase_command',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_receipt(in_app_subscription_id: string, params?: _in_app_subscription.import_receipt_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'import_receipt',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/import_receipt',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public import_subscription(in_app_subscription_id: string, params?: _in_app_subscription.import_subscription_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'import_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/import_subscription',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve_store_subs(in_app_subscription_id: string, params?: _in_app_subscription.retrieve_store_subs_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'retrieve_store_subs',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/retrieve',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~InAppSubscription



  // REQUEST PARAMS
  //---------------

export namespace _in_app_subscription {
  export interface process_receipt_params {
    receipt: string;
    product?: product_process_receipt_params;
    customer?: customer_process_receipt_params;
  }
  export interface import_receipt_params {
    receipt: string;
    product?: product_import_receipt_params;
    customer?: customer_import_receipt_params;
  }
  export interface import_subscription_params {
    subscription?: subscription_import_subscription_params;
    customer?: customer_import_subscription_params;
  }
  export interface retrieve_store_subs_params {
    receipt: string;
  }
  export interface product_process_receipt_params {
    id: string;
  }
  export interface product_process_receipt_params {
    currency_code: string;
  }
  export interface product_process_receipt_params {
    price: number;
  }
  export interface product_process_receipt_params {
    name?: string;
  }
  export interface product_process_receipt_params {
    price_in_decimal?: string;
  }
  export interface product_process_receipt_params {
    period?: string;
  }
  export interface product_process_receipt_params {
    period_unit?: string;
  }
  export interface customer_process_receipt_params {
    id?: string;
  }
  export interface customer_process_receipt_params {
    email?: string;
  }
  export interface customer_process_receipt_params {
    first_name?: string;
  }
  export interface customer_process_receipt_params {
    last_name?: string;
  }
  export interface product_import_receipt_params {
    currency_code: string;
  }
  export interface customer_import_receipt_params {
    id?: string;
  }
  export interface customer_import_receipt_params {
    email?: string;
  }
  export interface subscription_import_subscription_params {
    id: string;
  }
  export interface subscription_import_subscription_params {
    started_at: number;
  }
  export interface subscription_import_subscription_params {
    term_start: number;
  }
  export interface subscription_import_subscription_params {
    term_end: number;
  }
  export interface subscription_import_subscription_params {
    product_id: string;
  }
  export interface subscription_import_subscription_params {
    currency_code: string;
  }
  export interface subscription_import_subscription_params {
    transaction_id: string;
  }
  export interface subscription_import_subscription_params {
    is_trial?: boolean;
  }
  export interface customer_import_subscription_params {
    id?: string;
  }
  export interface customer_import_subscription_params {
    email?: string;
  }
}
