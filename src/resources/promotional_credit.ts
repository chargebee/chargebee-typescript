import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class PromotionalCredit extends Model {
  public id: string;
  public customer_id: string;
  public type: string;
  public amount_in_decimal?: string;
  public amount: number;
  public currency_code: string;
  public description: string;
  public credit_type: string;
  public reference?: string;
  public closing_balance: number;
  public done_by?: string;
  public created_at: number;
}

// OPERATIONS
//-----------
export class PromotionalCreditApi extends Api {
  public add(params?: _promotional_credit.add_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'add',
      'httpMethod': 'POST',
      'urlPrefix': '/promotional_credits',
      'urlSuffix': '/add',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public deduct(params?: _promotional_credit.deduct_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'deduct',
      'httpMethod': 'POST',
      'urlPrefix': '/promotional_credits',
      'urlSuffix': '/deduct',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public set(params?: _promotional_credit.set_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'set',
      'httpMethod': 'POST',
      'urlPrefix': '/promotional_credits',
      'urlSuffix': '/set',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _promotional_credit.promotional_credit_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/promotional_credits',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(promotional_credit_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([promotional_credit_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/promotional_credits',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~PromotionalCredit



  // REQUEST PARAMS
  //---------------

export namespace _promotional_credit {
  export interface add_params {
    customer_id: string;
    amount?: number;
    amount_in_decimal?: string;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface deduct_params {
    customer_id: string;
    amount?: number;
    amount_in_decimal?: string;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface set_params {
    customer_id: string;
    amount?: number;
    amount_in_decimal?: string;
    currency_code?: string;
    description: string;
    credit_type?: string;
    reference?: string;
  }
  export interface promotional_credit_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    created_at?: filter._timestamp;
    type?: filter._enum;
    customer_id?: filter._string;
  }
}
