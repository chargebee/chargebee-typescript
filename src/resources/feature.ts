import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Feature extends Model {
  public id: string;
  public name: string;
  public description?: string;
  public status?: string;
  public type?: string;
  public unit?: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public levels?: Array<Level>;
}

// OPERATIONS
//-----------
export class FeatureApi extends Api {
  public list(params?: _feature.feature_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/features',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public create(params?: _feature.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(feature_id: string, params?: _feature.update_params):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(feature_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/features',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(feature_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public activate(feature_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'activate',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': '/activate_command',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public archive(feature_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'archive',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': '/archive_command',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public reactivate(feature_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([feature_id, params], {
      'methodName': 'reactivate',
      'httpMethod': 'POST',
      'urlPrefix': '/features',
      'urlSuffix': '/reactivate_command',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Feature

export class Level extends Model {
  public name?: string;
  public value: string;
  public level: number;
  public is_unlimited: boolean;
} // ~Level



  // REQUEST PARAMS
  //---------------

export namespace _feature {
  export interface feature_list_params {
    limit?: number;
    offset?: string;
    name?: filter._string;
    id?: filter._string;
    status?: filter._enum;
    type?: filter._enum;
  }
  export interface create_params {
    id?: string;
    name: string;
    description?: string;
    type?: string;
    unit?: string;
    levels?: Array<levels_create_params>;
  }
  export interface update_params {
    name?: string;
    description?: string;
    unit?: string;
    levels?: Array<levels_update_params>;
  }
  export interface levels_create_params {
    name?: string;
  }
  export interface levels_create_params {
    value?: string;
  }
  export interface levels_create_params {
    is_unlimited?: boolean;
  }
  export interface levels_create_params {
    level?: number;
  }
  export interface levels_update_params {
    name?: string;
  }
  export interface levels_update_params {
    value?: string;
  }
  export interface levels_update_params {
    is_unlimited?: boolean;
  }
  export interface levels_update_params {
    level?: number;
  }
}
