import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelOneTimeOrder extends Model {
  public id: string;
  public app_id: string;
  public customer_id?: string;
  public id_at_source: string;
  public origin?: string;
  public source: string;
  public created_at: number;
  public resource_version?: number;
  public omnichannel_one_time_order_items: Array<resources.OmnichannelOneTimeOrderItem>;
  public purchase_transaction?: OmnichannelTransaction;

  

  // OPERATIONS
  //-----------

  public static retrieve(omnichannel_one_time_order_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([omnichannel_one_time_order_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_one_time_orders',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static list(params?: _omnichannel_one_time_order.omnichannel_one_time_order_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_one_time_orders',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~OmnichannelOneTimeOrder

export class OmnichannelTransaction extends Model {
  public id: string;
  public id_at_source: string;
  public app_id: string;
  public price_currency?: string;
  public price_units?: number;
  public price_nanos?: number;
  public type: string;
  public transacted_at?: number;
  public created_at: number;
  public resource_version?: number;
} // ~OmnichannelTransaction



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_one_time_order {
  export interface omnichannel_one_time_order_list_params {
    limit?: number;
    offset?: string;
    source?: filter._enum;
    customer_id?: filter._string;
  }
}
