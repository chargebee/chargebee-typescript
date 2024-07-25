import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Gift extends Model {
  public id: string;
  public status: string;
  public scheduled_at?: number;
  public auto_claim: boolean;
  public no_expiry: boolean;
  public claim_expiry_date?: number;
  public resource_version?: number;
  public updated_at?: number;
  public gifter: Gifter;
  public gift_receiver: GiftReceiver;
  public gift_timelines?: Array<GiftTimeline>;
}

// OPERATIONS
//-----------
export class GiftApi extends Api {
  public create(params?: _gift.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create_for_items(params?: _gift.create_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/create_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(gift_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _gift.gift_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/gifts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public claim(gift_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'claim',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/claim',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public cancel(gift_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'cancel',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/cancel',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_gift(gift_id: string, params?: _gift.update_gift_params):RequestWrapper {
    return new RequestWrapper([gift_id, params], {
      'methodName': 'update_gift',
      'httpMethod': 'POST',
      'urlPrefix': '/gifts',
      'urlSuffix': '/update_gift',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Gift

export class Gifter extends Model {
  public customer_id: string;
  public invoice_id?: string;
  public signature?: string;
  public note?: string;
} // ~Gifter

export class GiftReceiver extends Model {
  public customer_id: string;
  public subscription_id: string;
  public first_name?: string;
  public last_name?: string;
  public email?: string;
} // ~GiftReceiver

export class GiftTimeline extends Model {
  public status: string;
  public occurred_at?: number;
} // ~GiftTimeline



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
    payment_intent?: payment_intent_create_params;
    shipping_address?: shipping_address_create_params;
    subscription?: subscription_create_params;
    addons?: Array<addons_create_params>;
  }
  export interface create_for_items_params {
    scheduled_at?: number;
    auto_claim?: boolean;
    no_expiry?: boolean;
    claim_expiry_date?: number;
    coupon_ids?: Array<string>;
    gifter?: gifter_create_for_items_params;
    gift_receiver?: gift_receiver_create_for_items_params;
    payment_intent?: payment_intent_create_for_items_params;
    shipping_address?: shipping_address_create_for_items_params;
    subscription_items?: Array<subscription_items_create_for_items_params>;
  }
  export interface gift_list_params {
    limit?: number;
    offset?: string;
    gift_receiver?: gift_receiver_gift_list_params;
    gifter?: gifter_gift_list_params;
    status?: filter._enum;
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
    payment_method_type?: string;
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
  export interface payment_intent_create_params {
    additional_information?: any;
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
  export interface subscription_create_params {
    plan_id: string;
  }
  export interface subscription_create_params {
    plan_quantity?: number;
  }
  export interface subscription_create_params {
    plan_quantity_in_decimal?: string;
  }
  export interface addons_create_params {
    id?: string;
  }
  export interface addons_create_params {
    quantity?: number;
  }
  export interface addons_create_params {
    quantity_in_decimal?: string;
  }
  export interface gifter_create_for_items_params {
    customer_id: string;
  }
  export interface gifter_create_for_items_params {
    signature: string;
  }
  export interface gifter_create_for_items_params {
    note?: string;
  }
  export interface gifter_create_for_items_params {
    payment_src_id?: string;
  }
  export interface gift_receiver_create_for_items_params {
    customer_id: string;
  }
  export interface gift_receiver_create_for_items_params {
    first_name: string;
  }
  export interface gift_receiver_create_for_items_params {
    last_name: string;
  }
  export interface gift_receiver_create_for_items_params {
    email: string;
  }
  export interface payment_intent_create_for_items_params {
    id?: string;
  }
  export interface payment_intent_create_for_items_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_for_items_params {
    gw_token?: string;
  }
  export interface payment_intent_create_for_items_params {
    payment_method_type?: string;
  }
  export interface payment_intent_create_for_items_params {
    reference_id?: string;
  }
  export interface payment_intent_create_for_items_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface payment_intent_create_for_items_params {
    additional_information?: any;
  }
  export interface shipping_address_create_for_items_params {
    first_name?: string;
  }
  export interface shipping_address_create_for_items_params {
    last_name?: string;
  }
  export interface shipping_address_create_for_items_params {
    email?: string;
  }
  export interface shipping_address_create_for_items_params {
    company?: string;
  }
  export interface shipping_address_create_for_items_params {
    phone?: string;
  }
  export interface shipping_address_create_for_items_params {
    line1?: string;
  }
  export interface shipping_address_create_for_items_params {
    line2?: string;
  }
  export interface shipping_address_create_for_items_params {
    line3?: string;
  }
  export interface shipping_address_create_for_items_params {
    city?: string;
  }
  export interface shipping_address_create_for_items_params {
    state_code?: string;
  }
  export interface shipping_address_create_for_items_params {
    state?: string;
  }
  export interface shipping_address_create_for_items_params {
    zip?: string;
  }
  export interface shipping_address_create_for_items_params {
    country?: string;
  }
  export interface shipping_address_create_for_items_params {
    validation_status?: string;
  }
  export interface subscription_items_create_for_items_params {
    item_price_id?: string;
  }
  export interface subscription_items_create_for_items_params {
    quantity?: number;
  }
  export interface subscription_items_create_for_items_params {
    quantity_in_decimal?: string;
  }
  export interface gift_receiver_gift_list_params {
    email?: filter._string;
  }
  export interface gift_receiver_gift_list_params {
    customer_id?: filter._string;
  }
  export interface gifter_gift_list_params {
    customer_id?: filter._string;
  }
}
