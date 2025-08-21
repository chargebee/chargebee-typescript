import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class CustomerEntitlement extends Model {
  public customer_id: string;
  public subscription_id?: string;
  public feature_id?: string;
  public value?: string;
  public name?: string;
  public is_enabled: boolean;

  

  // OPERATIONS
  //-----------

  public static entitlements_for_customer(customer_id: string, params?: _customer_entitlement.customer_entitlement_entitlements_for_customer_params):RequestWrapper<ListResult> {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'entitlements_for_customer',
      'httpMethod': 'GET',
      'urlPrefix': '/customers',
      'urlSuffix': '/customer_entitlements',
      'hasIdInUrl': true,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~CustomerEntitlement



  // REQUEST PARAMS
  //---------------

export namespace _customer_entitlement {
  export interface customer_entitlement_entitlements_for_customer_params {
    limit?: number;
    offset?: string;
    consolidate_entitlements?: boolean;
  }
}
