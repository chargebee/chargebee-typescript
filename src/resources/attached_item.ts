import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class AttachedItem extends Model {
  public id: string;
  public parent_item_id: string;
  public item_id: string;
  public type: string;
  public status?: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public billing_cycles?: number;
  public charge_on_event: string;
  public charge_once: boolean;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public channel?: string;
}

// OPERATIONS
//-----------
export class AttachedItemApi extends Api {
  public create(item_id: string, params?: _attached_item.create_params):RequestWrapper {
    return new RequestWrapper([item_id, params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/items',
      'urlSuffix': '/attached_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(attached_item_id: string, params?: _attached_item.update_params):RequestWrapper {
    return new RequestWrapper([attached_item_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/attached_items',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(attached_item_id: string, params?: _attached_item.retrieve_params):RequestWrapper {
    return new RequestWrapper([attached_item_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/attached_items',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(attached_item_id: string, params?: _attached_item.delete_params):RequestWrapper {
    return new RequestWrapper([attached_item_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/attached_items',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(item_id: string, params?: _attached_item.attached_item_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([item_id, params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/items',
      'urlSuffix': '/attached_items',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }
} // ~AttachedItem



  // REQUEST PARAMS
  //---------------

export namespace _attached_item {
  export interface create_params {
    item_id: string;
    type?: string;
    billing_cycles?: number;
    quantity?: number;
    quantity_in_decimal?: string;
    charge_on_event?: string;
    charge_once?: boolean;
  }
  export interface update_params {
    parent_item_id: string;
    type?: string;
    billing_cycles?: number;
    quantity?: number;
    quantity_in_decimal?: string;
    charge_on_event?: string;
    charge_once?: boolean;
  }
  export interface retrieve_params {
    parent_item_id: string;
  }
  export interface delete_params {
    parent_item_id: string;
  }
  export interface attached_item_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    item_id?: filter._string;
    type?: filter._enum;
    item_type?: filter._enum;
    charge_on_event?: filter._enum;
    updated_at?: filter._timestamp;
  }
}
