import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelSubscription extends Model {
  public id: string;
  public id_at_source: string;
  public app_id: string;
  public source: string;
  public customer_id?: string;
  public created_at: number;
  public resource_version?: number;
  public omnichannel_subscription_items: Array<resources.OmnichannelSubscriptionItem>;
  public initial_purchase_transaction?: OmnichannelTransaction;

  

  // OPERATIONS
  //-----------

  public static retrieve(omnichannel_subscription_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([omnichannel_subscription_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _omnichannel_subscription.omnichannel_subscription_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_subscriptions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static omnichannel_transactions_for_omnichannel_subscription(omnichannel_subscription_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([omnichannel_subscription_id, params], {
      'methodName': 'omnichannel_transactions_for_omnichannel_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_subscriptions',
      'urlSuffix': '/omnichannel_transactions',
      'hasIdInUrl': true,
      'isListReq': true,
    }, ChargeBee._env)
  }

} // ~OmnichannelSubscription

export class OmnichannelTransaction extends Model {
  public id: string;
  public id_at_source: string;
  public app_id: string;
  public price_currency: string;
  public price_units: number;
  public price_nanos: number;
  public type: string;
  public transacted_at: number;
  public created_at: number;
  public resource_version?: number;
} // ~OmnichannelTransaction



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription {
  export interface omnichannel_subscription_list_params {
    limit?: number;
    offset?: string;
    customer_id?: filter._string;
  }
}
