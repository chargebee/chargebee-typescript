import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class Currency extends Model {
  public id?: string;
  public enabled: boolean;
  public forex_type?: string;
  public currency_code?: string;
  public is_base_currency?: boolean;
  public manual_exchange_rate?: string;
}

// OPERATIONS
//-----------
export class CurrencyApi extends Api {
  public list(params?: any):RequestWrapper{
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/currencies',
      'urlSuffix': '/list',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(currency_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([currency_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/currencies',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public create(params?: _currency.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/currencies',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(currency_id: string, params?: _currency.update_params):RequestWrapper {
    return new RequestWrapper([currency_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/currencies',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public add_schedule(currency_id: string, params?: _currency.add_schedule_params):RequestWrapper {
    return new RequestWrapper([currency_id, params], {
      'methodName': 'add_schedule',
      'httpMethod': 'POST',
      'urlPrefix': '/currencies',
      'urlSuffix': '/add_schedule',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public remove_schedule(currency_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([currency_id, params], {
      'methodName': 'remove_schedule',
      'httpMethod': 'POST',
      'urlPrefix': '/currencies',
      'urlSuffix': '/remove_schedule',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Currency



  // REQUEST PARAMS
  //---------------

export namespace _currency {
  export interface create_params {
    currency_code: string;
    forex_type: string;
    manual_exchange_rate?: string;
  }
  export interface update_params {
    forex_type: string;
    manual_exchange_rate?: string;
  }
  export interface add_schedule_params {
    manual_exchange_rate: string;
    schedule_at: number;
  }
}
