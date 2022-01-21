import * as resources from ".";
import {ListResult} from '../list_result'
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class CouponCode extends Model {
  public code: string;
  public status: string;
  public coupon_id: string;
  public coupon_set_id: string;
  public coupon_set_name: string;

  

  // OPERATIONS
  //-----------

  public static create(params?: _coupon_code.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_codes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(coupon_code_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_code_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/coupon_codes',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _coupon_code.coupon_code_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/coupon_codes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static archive(coupon_code_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_code_id, params], {
      'methodName': 'archive',
      'httpMethod': 'POST',
      'urlPrefix': '/coupon_codes',
      'urlSuffix': '/archive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~CouponCode



  // REQUEST PARAMS
  //---------------

export namespace _coupon_code {
  export interface create_params {
    coupon_id: string;
    coupon_set_name: string;
    code: string;
  }
  export interface coupon_code_list_params {
    limit?: number;
    offset?: string;
    code?: filter._string;
    coupon_id?: filter._string;
    coupon_set_name?: filter._string;
    status?: filter._enum;
  }
}
