import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PortalSession extends Model {
  public id: string;
  public token: string;
  public access_url: string;
  public redirect_url?: string;
  public status: string;
  public created_at: number;
  public expires_at?: number;
  public customer_id: string;
  public login_at?: number;
  public logout_at?: number;
  public login_ipaddress?: string;
  public logout_ipaddress?: string;
  public linked_customers?: Array<resources.PortalSessionLinkedCustomer>;

  

  // OPERATIONS
  //-----------

  public static create(params?: _portal_session.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(portal_session_id: string, params?: any) {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static logout(portal_session_id: string, params?: any) {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'logout',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': '/logout',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static activate(portal_session_id: string, params?: _portal_session.activate_params) {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'activate',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': '/activate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~PortalSession



  // REQUEST PARAMS
  //---------------

export namespace _portal_session {
  export interface create_params {
    redirect_url?: string;
    forward_url?: string;
    customer?: customer_create_params;
  }
  export interface activate_params {
    token: string;
  }
  export interface customer_create_params {
    id: string;
  }
}
