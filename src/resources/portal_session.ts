import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

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
  public linked_customers?: Array<LinkedCustomer>;
}

// OPERATIONS
//-----------
export class PortalSessionApi extends Api {
  public create(params?: _portal_session.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(portal_session_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public logout(portal_session_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'logout',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': '/logout',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public activate(portal_session_id: string, params?: _portal_session.activate_params):RequestWrapper {
    return new RequestWrapper([portal_session_id, params], {
      'methodName': 'activate',
      'httpMethod': 'POST',
      'urlPrefix': '/portal_sessions',
      'urlSuffix': '/activate',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~PortalSession

export class LinkedCustomer extends Model {
  public customer_id: string;
  public email?: string;
  public has_billing_address: boolean;
  public has_payment_method: boolean;
  public has_active_subscription: boolean;
} // ~LinkedCustomer



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
