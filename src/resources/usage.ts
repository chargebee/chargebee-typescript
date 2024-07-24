import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Usage extends Model {
  public id?: string;
  public usage_date: number;
  public subscription_id: string;
  public item_price_id: string;
  public invoice_id?: string;
  public line_item_id?: string;
  public quantity: string;
  public source?: string;
  public note?: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
}

// OPERATIONS
//-----------
export class UsageApi extends Api {
  public create(subscription_id: string, params?: _usage.create_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/usages',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(subscription_id: string, params?: _usage.retrieve_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/usages',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(subscription_id: string, params?: _usage.delete_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/delete_usage',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _usage.usage_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/usages',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public pdf(params?: _usage.pdf_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'pdf',
      'httpMethod': 'POST',
      'urlPrefix': '/usages',
      'urlSuffix': '/pdf',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~Usage



  // REQUEST PARAMS
  //---------------

export namespace _usage {
  export interface create_params {
    id?: string;
    item_price_id: string;
    quantity: string;
    usage_date: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    dedupe_option?: string;
    note?: string;
  }
  export interface retrieve_params {
    id: string;
  }
  export interface delete_params {
    id: string;
  }
  export interface usage_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    subscription_id: filter._string;
    usage_date?: filter._timestamp;
    item_price_id?: filter._string;
    invoice_id?: filter._string;
    source?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface pdf_params {
    disposition_type?: string;
    invoice?: invoice_pdf_params;
  }
  export interface invoice_pdf_params {
    id: string;
  }
}
