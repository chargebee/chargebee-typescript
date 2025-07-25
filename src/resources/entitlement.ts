import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Entitlement extends Model {
  public id: string;
  public entity_id?: string;
  public entity_type?: string;
  public feature_id?: string;
  public feature_name?: string;
  public value?: string;
  public name?: string;

  

  // OPERATIONS
  //-----------

  public static list(params?: _entitlement.entitlement_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/entitlements',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static create(params?: _entitlement.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/entitlements',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~Entitlement



  // REQUEST PARAMS
  //---------------

export namespace _entitlement {
  export interface entitlement_list_params {
    limit?: number;
    offset?: string;
    feature_id?: filter._string;
    entity_type?: filter._enum;
    entity_id?: filter._string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    include_drafts?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    embed?: string;
  }
  export interface create_params {
    action: string;
    change_reason?: string;
    entitlements?: Array<entitlements_create_params>;
  }
  export interface entitlements_create_params {
    entity_id: string;
  }
  export interface entitlements_create_params {
    feature_id: string;
  }
  export interface entitlements_create_params {
    entity_type?: string;
  }
  export interface entitlements_create_params {
    value?: string;
  }
  export interface entitlements_create_params {
    apply_grandfathering?: boolean;
  }
}
