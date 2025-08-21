import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class WebhookEndpoint extends Model {
  public id: string;
  public name: string;
  public url: string;
  public send_card_resource?: boolean;
  public disabled: boolean;
  public primary_url: boolean;
  public api_version: string;
  public chargebee_response_schema_type?: string;
  public enabled_events?: Array<string>;

  

  // OPERATIONS
  //-----------

  public static create(params?: _webhook_endpoint.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/webhook_endpoints',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static update(webhook_endpoint_id: string, params?: _webhook_endpoint.update_params):RequestWrapper {
    return new RequestWrapper([webhook_endpoint_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/webhook_endpoints',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static retrieve(webhook_endpoint_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([webhook_endpoint_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/webhook_endpoints',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static delete(webhook_endpoint_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([webhook_endpoint_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/webhook_endpoints',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static list(params?: any):RequestWrapper<ListResult>{
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/webhook_endpoints',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~WebhookEndpoint



  // REQUEST PARAMS
  //---------------

export namespace _webhook_endpoint {
  export interface create_params {
    name: string;
    api_version?: string;
    url: string;
    primary_url?: boolean;
    disabled?: boolean;
    basic_auth_password?: string;
    basic_auth_username?: string;
    send_card_resource?: boolean;
    chargebee_response_schema_type?: string;
    enabled_events?: Array<string>;
  }
  export interface update_params {
    name?: string;
    api_version?: string;
    url?: string;
    primary_url?: boolean;
    send_card_resource?: boolean;
    basic_auth_password?: string;
    basic_auth_username?: string;
    disabled?: boolean;
    enabled_events?: Array<string>;
  }
}
