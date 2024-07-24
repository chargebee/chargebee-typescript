import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class CouponSet extends Model {
  public id: string;
  public coupon_id: string;
  public name: string;
  public total_count?: number;
  public redeemed_count?: number;
  public archived_count?: number;
  public meta_data?: any;
}

// OPERATIONS
//-----------
export class CouponSetApi extends Api {
  public create(params?: _coupon_set.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public add_coupon_codes(coupon_set_id: string, params?: _coupon_set.add_coupon_codes_params):RequestWrapper {
    return new RequestWrapper([coupon_set_id, params], {
      'methodName': 'add_coupon_codes',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': '/add_coupon_codes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _coupon_set.coupon_set_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(coupon_set_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_set_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(coupon_set_id: string, params?: _coupon_set.update_params):RequestWrapper {
    return new RequestWrapper([coupon_set_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': '/update',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(coupon_set_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_set_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete_unused_coupon_codes(coupon_set_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_set_id, params], {
      'methodName': 'delete_unused_coupon_codes',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_sets',
      'urlSuffix': '/delete_unused_coupon_codes',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~CouponSet



  // REQUEST PARAMS
  //---------------

export namespace _coupon_set {
  export interface create_params {
    coupon_id: string;
    name: string;
    id: string;
    meta_data?: any;
  }
  export interface add_coupon_codes_params {
    code?: Array<string>;
  }
  export interface coupon_set_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    coupon_id?: filter._string;
    total_count?: filter._number;
    redeemed_count?: filter._number;
    archived_count?: filter._number;
  }
  export interface update_params {
    name?: string;
    meta_data?: any;
  }
}
