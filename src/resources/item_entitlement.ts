import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class ItemEntitlement extends Model {
  public id: string;
  public item_id?: string;
  public item_type?: string;
  public feature_id?: string;
  public feature_name?: string;
  public value?: string;
  public name?: string;
}

// OPERATIONS
//-----------
export class ItemEntitlementApi extends Api {
  public item_entitlements_for_item(item_id: string, params?: _item_entitlement.item_entitlement_item_entitlements_for_item_params):RequestWrapper<ListResult> {
    return new RequestWrapper([item_id, params], {
      'methodName': 'item_entitlements_for_item',
      'httpMethod': 'GET',
      'urlPrefix': '/items',
      'urlSuffix': '/item_entitlements',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public item_entitlements_for_feature(feature_id: string, params?: _item_entitlement.item_entitlement_item_entitlements_for_feature_params):RequestWrapper<ListResult> {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'item_entitlements_for_feature',
      'httpMethod': 'GET',
      'urlPrefix': '/features',
      'urlSuffix': '/item_entitlements',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public add_item_entitlements(feature_id: string, params?: _item_entitlement.add_item_entitlements_params):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'add_item_entitlements',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': '/item_entitlements',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public upsert_or_remove_item_entitlements_for_item(item_id: string, params?: _item_entitlement.upsert_or_remove_item_entitlements_for_item_params):RequestWrapper {
    return new RequestWrapper([item_id, params], {
      'methodName': 'upsert_or_remove_item_entitlements_for_item',
      'httpMethod': 'POST',
      'urlPrefix': '/items',
      'urlSuffix': '/item_entitlements',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~ItemEntitlement



  // REQUEST PARAMS
  //---------------

export namespace _item_entitlement {
  export interface item_entitlement_item_entitlements_for_item_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    include_drafts?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    embed?: string;
  }
  export interface item_entitlement_item_entitlements_for_feature_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    include_drafts?: boolean;
  }
  export interface add_item_entitlements_params {
    action: string;
    item_entitlements?: Array<item_entitlements_add_item_entitlements_params>;
  }
  export interface upsert_or_remove_item_entitlements_for_item_params {
    action: string;
    item_entitlements?: Array<item_entitlements_upsert_or_remove_item_entitlements_for_item_params>;
  }
  export interface item_entitlements_add_item_entitlements_params {
    item_id: string;
  }
  export interface item_entitlements_add_item_entitlements_params {
    item_type?: string;
  }
  export interface item_entitlements_add_item_entitlements_params {
    value?: string;
  }
  export interface item_entitlements_upsert_or_remove_item_entitlements_for_item_params {
    feature_id: string;
  }
  export interface item_entitlements_upsert_or_remove_item_entitlements_for_item_params {
    value?: string;
  }
}
