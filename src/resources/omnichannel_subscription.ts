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
  public omnichannel_subscription_items: Array<OmnichannelSubscriptionItem>;

  

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

  public static list(params?: any):RequestWrapper<ListResult>{
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

export class OmnichannelSubscriptionItem extends Model {
  public id: string;
  public id_at_source: string;
  public status: string;
  public current_term_start?: number;
  public current_term_end?: number;
  public expired_at?: number;
  public expiration_reason?: string;
  public cancelled_at?: number;
  public cancellation_reason?: string;
} // ~OmnichannelSubscriptionItem



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription {
}
