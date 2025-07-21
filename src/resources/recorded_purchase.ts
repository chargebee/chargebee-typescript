import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class RecordedPurchase extends Model {
  public id: string;
  public customer_id: string;
  public app_id: string;
  public source: string;
  public status: string;
  public omnichannel_transaction_id?: string;
  public created_at: number;
  public resource_version?: number;
  public linked_omnichannel_subscriptions?: Array<LinkedOmnichannelSubscription>;
  public error_detail?: ErrorDetail;

  

  // OPERATIONS
  //-----------

  public static create(params?: _recorded_purchase.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/recorded_purchases',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static retrieve(recorded_purchase_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([recorded_purchase_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/recorded_purchases',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~RecordedPurchase

export class LinkedOmnichannelSubscription extends Model {
  public omnichannel_subscription_id?: string;
} // ~LinkedOmnichannelSubscription

export class ErrorDetail extends Model {
  public error_message?: string;
} // ~ErrorDetail



  // REQUEST PARAMS
  //---------------

export namespace _recorded_purchase {
  export interface create_params {
    app_id: string;
    customer?: customer_create_params;
    apple_app_store?: apple_app_store_create_params;
    google_play_store?: google_play_store_create_params;
    omnichannel_subscription?: omnichannel_subscription_create_params;
  }
  export interface customer_create_params {
    id: string;
  }
  export interface apple_app_store_create_params {
    transaction_id?: string;
  }
  export interface apple_app_store_create_params {
    receipt?: string;
  }
  export interface apple_app_store_create_params {
    product_id?: string;
  }
  export interface google_play_store_create_params {
    purchase_token?: string;
  }
  export interface omnichannel_subscription_create_params {
    id?: string;
  }
}
