import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class NonSubscription extends Model {
  public app_id: string;
  public invoice_id: string;
  public customer_id?: string;
  public charge_id: string;
}

// OPERATIONS
//-----------
export class NonSubscriptionApi extends Api {
  public process_receipt(non_subscription_id: string, params?: _non_subscription.process_receipt_params):RequestWrapper {
    return new RequestWrapper([non_subscription_id, params], {
      'methodName': 'process_receipt',
      'httpMethod': 'POST',
      'urlPrefix': '/non_subscriptions',
      'urlSuffix': '/one_time_purchase',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~NonSubscription



  // REQUEST PARAMS
  //---------------

export namespace _non_subscription {
  export interface process_receipt_params {
    receipt: string;
    product?: product_process_receipt_params;
    customer?: customer_process_receipt_params;
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
    type: string;
  }
  export interface product_process_receipt_params {
    name?: string;
  }
  export interface product_process_receipt_params {
    price_in_decimal?: string;
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
}
