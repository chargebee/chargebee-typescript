import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PriceVariant extends Model {
  public id: string;
  public name: string;
  public external_name?: string;
  public variant_group?: string;
  public description?: string;
  public status?: string;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public archived_at?: number;
  public attributes?: Array<Attribute>;

  

  // OPERATIONS
  //-----------

  public static create(params?: _price_variant.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/price_variants',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(price_variant_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([price_variant_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/price_variants',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(price_variant_id: string, params?: _price_variant.update_params):RequestWrapper {
    return new RequestWrapper([price_variant_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/price_variants',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(price_variant_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([price_variant_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/price_variants',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _price_variant.price_variant_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/price_variants',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

} // ~PriceVariant

export class Attribute extends Model {
  public name: string;
  public value: string;
} // ~Attribute



  // REQUEST PARAMS
  //---------------

export namespace _price_variant {
  export interface create_params {
    id: string;
    name: string;
    external_name?: string;
    description?: string;
    variant_group?: string;
    attributes?: Array<attributes_create_params>;
  }
  export interface update_params {
    name?: string;
    external_name?: string;
    description?: string;
    variant_group?: string;
    status?: string;
    attributes?: Array<attributes_update_params>;
  }
  export interface price_variant_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    status?: filter._enum;
    updated_at?: filter._timestamp;
    created_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface attributes_create_params {
    name: string;
  }
  export interface attributes_create_params {
    value: string;
  }
  export interface attributes_update_params {
    name: string;
  }
  export interface attributes_update_params {
    value: string;
  }
}
