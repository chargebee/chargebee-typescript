import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Item extends Model {
  public id: string;
  public name: string;
  public external_name?: string;
  public description?: string;
  public status?: string;
  public resource_version?: number;
  public updated_at?: number;
  public item_family_id?: string;
  public type: string;
  public is_shippable?: boolean;
  public is_giftable: boolean;
  public redirect_url?: string;
  public enabled_for_checkout: boolean;
  public enabled_in_portal: boolean;
  public included_in_mrr?: boolean;
  public item_applicability: string;
  public gift_claim_redirect_url?: string;
  public unit?: string;
  public metered: boolean;
  public usage_calculation?: string;
  public archived_at?: number;
  public channel?: string;
  public applicable_items?: Array<ApplicableItem>;
  public metadata?: any;
}

// OPERATIONS
//-----------
export class ItemApi extends Api {
  public create(params?: _item.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/items',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(item_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/items',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(item_id: string, params?: _item.update_params):RequestWrapper {
    return new RequestWrapper([item_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/items',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _item.item_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/items',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public delete(item_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/items',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

} // ~Item

export class ApplicableItem extends Model {
  public id?: string;
} // ~ApplicableItem



  // REQUEST PARAMS
  //---------------

export namespace _item {
  export interface create_params {
    id: string;
    name: string;
    type: string;
    description?: string;
    item_family_id: string;
    is_giftable?: boolean;
    is_shippable?: boolean;
    external_name?: string;
    enabled_in_portal?: boolean;
    redirect_url?: string;
    enabled_for_checkout?: boolean;
    item_applicability?: string;
    applicable_items?: Array<string>;
    unit?: string;
    gift_claim_redirect_url?: string;
    included_in_mrr?: boolean;
    metered?: boolean;
    usage_calculation?: string;
    metadata?: any;
  }
  export interface update_params {
    name?: string;
    description?: string;
    is_shippable?: boolean;
    external_name?: string;
    item_family_id?: string;
    enabled_in_portal?: boolean;
    redirect_url?: string;
    enabled_for_checkout?: boolean;
    item_applicability?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    clear_applicable_items?: boolean;
    applicable_items?: Array<string>;
    unit?: string;
    gift_claim_redirect_url?: string;
    metadata?: any;
    included_in_mrr?: boolean;
    status?: string;
  }
  export interface item_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    item_family_id?: filter._string;
    type?: filter._enum;
    name?: filter._string;
    item_applicability?: filter._enum;
    status?: filter._enum;
    is_giftable?: filter._boolean;
    updated_at?: filter._timestamp;
    enabled_for_checkout?: filter._boolean;
    enabled_in_portal?: filter._boolean;
    metered?: filter._boolean;
    usage_calculation?: filter._enum;
    channel?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
}
