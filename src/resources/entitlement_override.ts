import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class EntitlementOverride extends Model {
  public id: string;
  public entity_id?: string;
  public entity_type?: string;
  public feature_id?: string;
  public feature_name?: string;
  public value?: string;
  public name?: string;
  public expires_at?: number;
}

// OPERATIONS
//-----------
export class EntitlementOverrideApi extends Api {
  public add_entitlement_override_for_subscription(subscription_id: string, params?: _entitlement_override.add_entitlement_override_for_subscription_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'add_entitlement_override_for_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/entitlement_overrides',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list_entitlement_override_for_subscription(subscription_id: string, params?: _entitlement_override.entitlement_override_list_entitlement_override_for_subscription_params):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'list_entitlement_override_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/entitlement_overrides',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

} // ~EntitlementOverride



  // REQUEST PARAMS
  //---------------

export namespace _entitlement_override {
  export interface add_entitlement_override_for_subscription_params {
    action?: string;
    entitlement_overrides?: Array<entitlement_overrides_add_entitlement_override_for_subscription_params>;
  }
  export interface entitlement_override_list_entitlement_override_for_subscription_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    embed?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    include_drafts?: boolean;
  }
  export interface entitlement_overrides_add_entitlement_override_for_subscription_params {
    feature_id: string;
  }
  export interface entitlement_overrides_add_entitlement_override_for_subscription_params {
    value?: string;
  }
  export interface entitlement_overrides_add_entitlement_override_for_subscription_params {
    expires_at?: number;
  }
}
