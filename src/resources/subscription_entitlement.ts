import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class SubscriptionEntitlement extends Model {
  public subscription_id: string;
  public feature_id?: string;
  public feature_name?: string;
  public feature_unit?: string;
  public value?: string;
  public name?: string;
  public is_overridden: boolean;
  public is_enabled: boolean;
  public expires_at?: number;
  public components?: Component;
}

// OPERATIONS
//-----------
export class SubscriptionEntitlementApi extends Api {
  public subscription_entitlements_for_subscription(subscription_id: string, params?: _subscription_entitlement.subscription_entitlement_subscription_entitlements_for_subscription_params):RequestWrapper<ListResult> {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'subscription_entitlements_for_subscription',
      'httpMethod': 'GET',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/subscription_entitlements',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public set_subscription_entitlement_availability(subscription_id: string, params?: _subscription_entitlement.set_subscription_entitlement_availability_params):RequestWrapper {
    return new RequestWrapper([subscription_id, params], {
      'methodName': 'set_subscription_entitlement_availability',
      'httpMethod': 'POST',
      'urlPrefix': '/subscriptions',
      'urlSuffix': '/subscription_entitlements/set_availability',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~SubscriptionEntitlement

export class Component extends Model {
  public entitlement_overrides?: resources.EntitlementOverride;
} // ~Component



  // REQUEST PARAMS
  //---------------

export namespace _subscription_entitlement {
  export interface subscription_entitlement_subscription_entitlements_for_subscription_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    include_drafts?: boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    embed?: string;
  }
  export interface set_subscription_entitlement_availability_params {
    is_enabled: boolean;
    subscription_entitlements?: Array<subscription_entitlements_set_subscription_entitlement_availability_params>;
  }
  export interface subscription_entitlements_set_subscription_entitlement_availability_params {
    feature_id: string;
  }
}
