import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class ItemFamily extends Model {
  public id: string;
  public name: string;
  public description?: string;
  public status?: string;
  public resource_version?: number;
  public updated_at?: number;
  public channel?: string;
  public business_entity_id?: string;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create(params?: _item_family.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/item_families',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static retrieve(item_family_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_family_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/item_families',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static list(params?: _item_family.item_family_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/item_families',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static update(item_family_id: string, params?: _item_family.update_params):RequestWrapper {
    return new RequestWrapper([item_family_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/item_families',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static delete(item_family_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_family_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/item_families',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~ItemFamily



  // REQUEST PARAMS
  //---------------

export namespace _item_family {
  export interface create_params {
    id: string;
    name: string;
    description?: string;
    business_entity_id?: string;
  }
  export interface item_family_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    updated_at?: filter._timestamp;
    business_entity_id?: filter._string;
    include_site_level_resources?: filter._boolean;
  }
  export interface update_params {
    name?: string;
    description?: string;
  }
}
