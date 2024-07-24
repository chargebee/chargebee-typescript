import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Installment extends Model {
  public id: string;
  public invoice_id: string;
  public date: number;
  public amount: number;
  public status: string;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
}

// OPERATIONS
//-----------
export class InstallmentApi extends Api {
  public retrieve(installment_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([installment_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/installments',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _installment.installment_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/installments',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

} // ~Installment



  // REQUEST PARAMS
  //---------------

export namespace _installment {
  export interface installment_list_params {
    limit?: number;
    offset?: string;
    sort_by?: string;
    invoice_id: filter._string;
  }
}
