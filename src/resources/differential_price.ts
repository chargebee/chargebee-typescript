import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class DifferentialPrice extends Model {
  public id: string;
  public item_price_id: string;
  public parent_item_id: string;
  public price?: number;
  public price_in_decimal?: string;
  public status?: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public modified_at: number;
  public tiers?: Array<Tier>;
  public currency_code: string;
  public parent_periods?: Array<ParentPeriod>;
}

// OPERATIONS
//-----------
export class DifferentialPriceApi extends Api {
  public create(item_price_id: string, params?: _differential_price.create_params):RequestWrapper {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/item_prices',
      'urlSuffix': '/differential_prices',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(differential_price_id: string, params?: _differential_price.retrieve_params):RequestWrapper {
    return new RequestWrapper([differential_price_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/differential_prices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(differential_price_id: string, params?: _differential_price.update_params):RequestWrapper {
    return new RequestWrapper([differential_price_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/differential_prices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(differential_price_id: string, params?: _differential_price.delete_params):RequestWrapper {
    return new RequestWrapper([differential_price_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/differential_prices',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _differential_price.differential_price_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/differential_prices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }
} // ~DifferentialPrice

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
} // ~Tier

export class ParentPeriod extends Model {
  public period_unit: string;
  public period?: any;
} // ~ParentPeriod



  // REQUEST PARAMS
  //---------------

export namespace _differential_price {
  export interface create_params {
    parent_item_id: string;
    price?: number;
    price_in_decimal?: string;
    parent_periods?: Array<parent_periods_create_params>;
    tiers?: Array<tiers_create_params>;
  }
  export interface retrieve_params {
    item_price_id: string;
  }
  export interface update_params {
    item_price_id: string;
    price?: number;
    price_in_decimal?: string;
    parent_periods?: Array<parent_periods_update_params>;
    tiers?: Array<tiers_update_params>;
  }
  export interface delete_params {
    item_price_id: string;
  }
  export interface differential_price_list_params {
    limit?: number;
    offset?: string;
    item_price_id?: filter._string;
    item_id?: filter._string;
    id?: filter._string;
    parent_item_id?: filter._string;
  }
  export interface parent_periods_create_params {
    period_unit: string;
  }
  export interface parent_periods_create_params {
    period?: any;
  }
  export interface tiers_create_params {
    starting_unit?: number;
  }
  export interface tiers_create_params {
    ending_unit?: number;
  }
  export interface tiers_create_params {
    price?: number;
  }
  export interface tiers_create_params {
    starting_unit_in_decimal?: string;
  }
  export interface tiers_create_params {
    ending_unit_in_decimal?: string;
  }
  export interface tiers_create_params {
    price_in_decimal?: string;
  }
  export interface parent_periods_update_params {
    period_unit: string;
  }
  export interface parent_periods_update_params {
    period?: any;
  }
  export interface tiers_update_params {
    starting_unit?: number;
  }
  export interface tiers_update_params {
    ending_unit?: number;
  }
  export interface tiers_update_params {
    price?: number;
  }
  export interface tiers_update_params {
    starting_unit_in_decimal?: string;
  }
  export interface tiers_update_params {
    ending_unit_in_decimal?: string;
  }
  export interface tiers_update_params {
    price_in_decimal?: string;
  }
}
