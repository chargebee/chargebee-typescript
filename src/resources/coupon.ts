import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

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
  public included_in_mrr?: boolean;
  public period?: number;
  public period_unit?: string;
  public plan_ids?: Array<string>;
  public addon_ids?: Array<string>;
  public item_constraints?: Array<ItemConstraint>;
  public item_constraint_criteria?: Array<ItemConstraintCriteria>;
  public redemptions?: number;
  public invoice_notes?: string;
  public meta_data?: any;
  public coupon_constraints?: Array<CouponConstraint>;
}

// OPERATIONS
//-----------
export class CouponApi extends Api {
  public create(params?: _coupon.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create_for_items(params?: _coupon.create_for_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/create_for_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update_for_items(coupon_id: string, params?: _coupon.update_for_items_params):RequestWrapper {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'update_for_items',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/update_for_items',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _coupon.coupon_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(coupon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(coupon_id: string, params?: _coupon.update_params):RequestWrapper {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(coupon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public copy(params?: _coupon.copy_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'copy',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/copy',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public unarchive(coupon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([coupon_id, params], {
      'methodName': 'unarchive',
      'httpMethod': 'POST',
      'urlPrefix': '/coupons',
      'urlSuffix': '/unarchive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Coupon

export class ItemConstraint extends Model {
  public item_type: string;
  public constraint: string;
  public item_price_ids?: any;
} // ~ItemConstraint

export class ItemConstraintCriteria extends Model {
  public item_type: string;
  public currencies?: any;
  public item_family_ids?: any;
  public item_price_periods?: any;
} // ~ItemConstraintCriteria

export class CouponConstraint extends Model {
  public entity_type: string;
  public type: string;
  public value?: string;
} // ~CouponConstraint



  // REQUEST PARAMS
  //---------------

export namespace _coupon {
  export interface create_params {
    id: string;
    name: string;
    invoice_name?: string;
    discount_type?: string;
    discount_amount?: number;
    currency_code?: string;
    discount_percentage?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    discount_quantity?: number;
    apply_on: string;
    duration_type?: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    included_in_mrr?: boolean;
    period?: number;
    period_unit?: string;
    plan_constraint?: string;
    addon_constraint?: string;
    plan_ids?: Array<string>;
    addon_ids?: Array<string>;
    status?: string;
  }
  export interface create_for_items_params {
    id: string;
    name: string;
    invoice_name?: string;
    discount_type?: string;
    discount_amount?: number;
    currency_code?: string;
    discount_percentage?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    discount_quantity?: number;
    apply_on: string;
    duration_type?: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    included_in_mrr?: boolean;
    period?: number;
    period_unit?: string;
    status?: string;
    item_constraints?: Array<item_constraints_create_for_items_params>;
    item_constraint_criteria?: Array<item_constraint_criteria_create_for_items_params>;
    coupon_constraints?: Array<coupon_constraints_create_for_items_params>;
  }
  export interface update_for_items_params {
    name?: string;
    invoice_name?: string;
    discount_type?: string;
    discount_amount?: number;
    currency_code?: string;
    discount_percentage?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    discount_quantity?: number;
    apply_on?: string;
    duration_type?: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    included_in_mrr?: boolean;
    period?: number;
    period_unit?: string;
    item_constraints?: Array<item_constraints_update_for_items_params>;
    item_constraint_criteria?: Array<item_constraint_criteria_update_for_items_params>;
    coupon_constraints?: Array<coupon_constraints_update_for_items_params>;
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
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    discount_quantity?: number;
    apply_on?: string;
    duration_type?: string;
    duration_month?: number;
    valid_till?: number;
    max_redemptions?: number;
    invoice_notes?: string;
    meta_data?: any;
    included_in_mrr?: boolean;
    period?: number;
    period_unit?: string;
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
  export interface item_constraints_create_for_items_params {
    constraint: string;
  }
  export interface item_constraints_create_for_items_params {
    item_type: string;
  }
  export interface item_constraints_create_for_items_params {
    item_price_ids?: any;
  }
  export interface item_constraint_criteria_create_for_items_params {
    item_type?: string;
  }
  export interface item_constraint_criteria_create_for_items_params {
    item_family_ids?: any;
  }
  export interface item_constraint_criteria_create_for_items_params {
    currencies?: any;
  }
  export interface item_constraint_criteria_create_for_items_params {
    item_price_periods?: any;
  }
  export interface coupon_constraints_create_for_items_params {
    entity_type: string;
  }
  export interface coupon_constraints_create_for_items_params {
    type: string;
  }
  export interface coupon_constraints_create_for_items_params {
    value?: string;
  }
  export interface item_constraints_update_for_items_params {
    constraint: string;
  }
  export interface item_constraints_update_for_items_params {
    item_type: string;
  }
  export interface item_constraints_update_for_items_params {
    item_price_ids?: any;
  }
  export interface item_constraint_criteria_update_for_items_params {
    item_type?: string;
  }
  export interface item_constraint_criteria_update_for_items_params {
    item_family_ids?: any;
  }
  export interface item_constraint_criteria_update_for_items_params {
    currencies?: any;
  }
  export interface item_constraint_criteria_update_for_items_params {
    item_price_periods?: any;
  }
  export interface coupon_constraints_update_for_items_params {
    entity_type: string;
  }
  export interface coupon_constraints_update_for_items_params {
    type: string;
  }
  export interface coupon_constraints_update_for_items_params {
    value?: string;
  }
}
