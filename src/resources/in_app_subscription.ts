import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class InAppSubscription extends Model {
  public app_id: string;
  public subscription_id?: string;
  public customer_id?: string;
  public plan_id?: string;

  

  // OPERATIONS
  //-----------

  public static process_receipt(in_app_subscription_id: string, params?: _in_app_subscription.process_receipt_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'process_receipt',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/process_purchase_command',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static import_receipt(in_app_subscription_id: string, params?: _in_app_subscription.import_receipt_params):RequestWrapper {
    return new RequestWrapper([in_app_subscription_id, params], {
      'methodName': 'import_receipt',
      'httpMethod': 'POST',
      'urlPrefix': '/in_app_subscriptions',
      'urlSuffix': '/import_receipt',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
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
  export interface product_process_receipt_params {
    id: string;
  }
  export interface product_process_receipt_params {
    name?: string;
  }
  export interface product_process_receipt_params {
    currency_code: string;
  }
  export interface product_process_receipt_params {
    price: number;
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
  export interface product_import_receipt_params {
    currency_code: string;
  }
  export interface customer_import_receipt_params {
    id?: string;
  }
  export interface customer_import_receipt_params {
    email?: string;
  }
}
