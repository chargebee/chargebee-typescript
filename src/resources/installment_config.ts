import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class InstallmentConfig extends Model {
  public id: string;
  public description?: string;
  public number_of_installments: number;
  public period_unit: string;
  public period?: number;
  public preferred_day?: number;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public installments?: Array<Installment>;
}

// OPERATIONS
//-----------
export class InstallmentConfigApi extends Api {
  public create(params?: _installment_config.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/installment_configs',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(installment_config_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([installment_config_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/installment_configs',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(installment_config_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([installment_config_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/installment_configs',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~InstallmentConfig

export class Installment extends Model {
  public period?: number;
  public amount_percentage?: number;
} // ~Installment



  // REQUEST PARAMS
  //---------------

export namespace _installment_config {
  export interface create_params {
    number_of_installments: number;
    period_unit: string;
    period?: number;
    preferred_day?: number;
    description?: string;
    installments?: Array<installments_create_params>;
  }
  export interface installments_create_params {
    period?: number;
  }
  export interface installments_create_params {
    amount_percentage?: number;
  }
}
