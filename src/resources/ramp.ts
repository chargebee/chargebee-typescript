import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Ramp extends Model {
  public id: string;
  public description?: string;
  public subscription_id: string;
  public effective_from: number;
  public status: string;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public items_to_add?: Array<ItemsToAdd>;
  public items_to_update?: Array<ItemsToUpdate>;
  public coupons_to_add?: Array<CouponsToAdd>;
  public discounts_to_add?: Array<DiscountsToAdd>;
  public item_tiers?: Array<ItemTier>;
  public items_to_remove?: Array<string>;
  public coupons_to_remove?: Array<string>;
  public discounts_to_remove?: Array<string>;
  public deleted: boolean;
}

// OPERATIONS
//-----------
export class RampApi extends Api {
  public create_for_subscription(subscription_id: string, params?: _ramp.create_for_subscription_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'create_for_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/create_ramp',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(ramp_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([ramp_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/ramps',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(ramp_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([ramp_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/ramps',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _ramp.ramp_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/ramps',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }
} // ~Ramp

export class ItemsToAdd extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public unit_price?: number;
  public unit_price_in_decimal?: string;
  public amount?: number;
  public amount_in_decimal?: string;
  public free_quantity?: number;
  public free_quantity_in_decimal?: string;
  public billing_cycles?: number;
  public service_period_days?: number;
  public metered_quantity?: string;
} // ~ItemsToAdd

export class ItemsToUpdate extends Model {
  public item_price_id: string;
  public item_type: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public unit_price?: number;
  public unit_price_in_decimal?: string;
  public amount?: number;
  public amount_in_decimal?: string;
  public free_quantity?: number;
  public free_quantity_in_decimal?: string;
  public billing_cycles?: number;
  public service_period_days?: number;
  public metered_quantity?: string;
} // ~ItemsToUpdate

export class CouponsToAdd extends Model {
  public coupon_id: string;
  public apply_till?: number;
} // ~CouponsToAdd

export class DiscountsToAdd extends Model {
  public id: string;
  public invoice_name?: string;
  public type: string;
  public percentage?: number;
  public amount?: number;
  public duration_type: string;
  public period?: number;
  public period_unit?: string;
  public included_in_mrr: boolean;
  public apply_on: string;
  public item_price_id?: string;
  public created_at: number;
} // ~DiscountsToAdd

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
  public index: number;
} // ~ItemTier



  // REQUEST PARAMS
  //---------------

export namespace _ramp {
  export interface create_for_subscription_params {
    effective_from: number;
    description?: string;
    coupons_to_remove?: Array<string>;
    discounts_to_remove?: Array<string>;
    items_to_remove?: Array<string>;
    items_to_add?: Array<items_to_add_create_for_subscription_params>;
    items_to_update?: Array<items_to_update_create_for_subscription_params>;
    item_tiers?: Array<item_tiers_create_for_subscription_params>;
    coupons_to_add?: Array<coupons_to_add_create_for_subscription_params>;
    discounts_to_add?: Array<discounts_to_add_create_for_subscription_params>;
  }
  export interface ramp_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    status?: filter._enum;
    subscription_id: filter._string;
    effective_from?: filter._timestamp;
    updated_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface items_to_add_create_for_subscription_params {
    item_price_id: string;
  }
  export interface items_to_add_create_for_subscription_params {
    quantity?: number;
  }
  export interface items_to_add_create_for_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface items_to_add_create_for_subscription_params {
    unit_price?: number;
  }
  export interface items_to_add_create_for_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface items_to_add_create_for_subscription_params {
    billing_cycles?: number;
  }
  export interface items_to_add_create_for_subscription_params {
    service_period_days?: number;
  }
  export interface items_to_update_create_for_subscription_params {
    item_price_id: string;
  }
  export interface items_to_update_create_for_subscription_params {
    quantity?: number;
  }
  export interface items_to_update_create_for_subscription_params {
    quantity_in_decimal?: string;
  }
  export interface items_to_update_create_for_subscription_params {
    unit_price?: number;
  }
  export interface items_to_update_create_for_subscription_params {
    unit_price_in_decimal?: string;
  }
  export interface items_to_update_create_for_subscription_params {
    billing_cycles?: number;
  }
  export interface items_to_update_create_for_subscription_params {
    service_period_days?: number;
  }
  export interface item_tiers_create_for_subscription_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_for_subscription_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_for_subscription_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_for_subscription_params {
    price?: number;
  }
  export interface item_tiers_create_for_subscription_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_subscription_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_for_subscription_params {
    price_in_decimal?: string;
  }
  export interface coupons_to_add_create_for_subscription_params {
    coupon_id?: string;
  }
  export interface coupons_to_add_create_for_subscription_params {
    apply_till?: number;
  }
  export interface discounts_to_add_create_for_subscription_params {
    apply_on: string;
  }
  export interface discounts_to_add_create_for_subscription_params {
    duration_type: string;
  }
  export interface discounts_to_add_create_for_subscription_params {
    percentage?: number;
  }
  export interface discounts_to_add_create_for_subscription_params {
    amount?: number;
  }
  export interface discounts_to_add_create_for_subscription_params {
    period?: number;
  }
  export interface discounts_to_add_create_for_subscription_params {
    period_unit?: string;
  }
  export interface discounts_to_add_create_for_subscription_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_to_add_create_for_subscription_params {
    item_price_id?: string;
  }
}
