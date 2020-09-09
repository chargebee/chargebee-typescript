import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Coupon extends Model {
  public id: string;
  public name: string;
  public invoice_name?: string;
  public discount_type: string;
  public discount_percentage?: number;
  public discount_amount?: number;
  public discount_quantity?: number;
  public currency_code?: string;
  public duration_type: string;
  public duration_month?: number;
  public valid_till?: number;
  public max_redemptions?: number;
  public status?: string;
  public apply_discount_on: string;
  public apply_on: string;
  public plan_constraint: string;
  public addon_constraint: string;
  public created_at: number;
  public archived_at?: number;
  public resource_version?: number;
  public updated_at?: number;
  public plan_ids?: Array<string>;
  public addon_ids?: Array<string>;
  public redemptions?: number;
  public invoice_notes?: string;
  public meta_data?: any;

  

  // OPERATIONS
  //-----------

  public static create(params?: _coupon.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _coupon.coupon_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(coupon_id: string, params?: any) {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(coupon_id: string, params?: _coupon.update_params) {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(coupon_id: string, params?: any) {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static copy(params?: _coupon.copy_params) {
    return new RequestWrapper([params], {
      'methodName': 'copy',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/copy',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static unarchive(coupon_id: string, params?: any) {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'unarchive',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/unarchive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Coupon



  // REQUEST PARAMS
  //---------------

export namespace _coupon {
  export interface create_params {
    id: string;
    name: string;
    invoice_name?: string;
    discount_type: string;
    discount_amount?: number;
    currency_code?: string;
    discount_percentage?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    discount_quantity?: number;
    apply_on: string;
    duration_type: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    plan_constraint?: string;
    addon_constraint?: string;
    plan_ids?: Array<string>;
    addon_ids?: Array<string>;
    status?: string;
  }
  export interface coupon_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    discount_type?: filter._enum;
    duration_type?: filter._enum;
    status?: filter._enum;
    apply_on?: filter._enum;
    created_at?: filter._timestamp;
    updated_at?: filter._timestamp;
    currency_code?: filter._string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface update_params {
    name?: string;
    invoice_name?: string;
    discount_type?: string;
    discount_amount?: number;
    currency_code?: string;
    discount_percentage?: number;
    apply_on?: string;
    duration_type?: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    plan_constraint?: string;
    addon_constraint?: string;
    plan_ids?: Array<string>;
    addon_ids?: Array<string>;
  }
  export interface copy_params {
    from_site: string;
    id_at_from_site: string;
    id?: string;
    for_site_merging?: boolean;
  }
}
