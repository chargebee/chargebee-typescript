import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Gift extends Model {
  public id: string;
  public status: string;
  public scheduled_at?: number;
  public auto_claim: boolean;
  public no_expiry: boolean;
  public claim_expiry_date?: number;
  public resource_version?: number;
  public updated_at?: number;
  public gifter: resources.GiftGifter;
  public gift_receiver: resources.GiftGiftReceiver;
  public gift_timelines?: Array<resources.GiftGiftTimeline>;

  

  // OPERATIONS
  //-----------

  public static create(params?: _gift.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(gift_id: string, params?: any) {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _gift.gift_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static claim(gift_id: string, params?: any) {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'claim',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/claim',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static cancel(gift_id: string, params?: any) {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_gift(gift_id: string, params?: _gift.update_gift_params) {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'update_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/update_gift',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Gift



  // REQUEST PARAMS
  //---------------

export namespace _gift {
  export interface create_params {
    scheduled_at?: number;
    auto_claim?: boolean;
    no_expiry?: boolean;
    claim_expiry_date?: number;
    coupon_ids?: Array<string>;
    gifter?: gifter_create_params;
    gift_receiver?: gift_receiver_create_params;
    subscription?: subscription_create_params;
    payment_intent?: payment_intent_create_params;
    shipping_address?: shipping_address_create_params;
    addons?: Array<addons_create_params>;
  }
  export interface gift_list_params {
    limit?: number;
    offset?: string;
    status?: filter._enum;
    gift_receiver?: gift_receiver_gift_list_params;
    gifter?: gifter_gift_list_params;
  }
  export interface update_gift_params {
    scheduled_at: number;
    comment?: string;
  }
  export interface gifter_create_params {
    customer_id: string;
  }
  export interface gifter_create_params {
    signature: string;
  }
  export interface gifter_create_params {
    note?: string;
  }
  export interface gifter_create_params {
    payment_src_id?: string;
  }
  export interface gift_receiver_create_params {
    customer_id: string;
  }
  export interface gift_receiver_create_params {
    first_name: string;
  }
  export interface gift_receiver_create_params {
    last_name: string;
  }
  export interface gift_receiver_create_params {
    email: string;
  }
  export interface subscription_create_params {
    plan_id: string;
  }
  export interface subscription_create_params {
    plan_quantity?: number;
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
    reference_id?: string;
  }
  export interface payment_intent_create_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
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
  export interface addons_create_params {
    id?: string;
  }
  export interface addons_create_params {
    quantity?: number;
  }
  export interface gift_receiver_gift_list_params {
    email?: filter._string;
  }
  export interface gifter_gift_list_params {
    customer_id?: filter._string;
  }
  export interface gift_receiver_gift_list_params {
    customer_id?: filter._string;
  }
}
