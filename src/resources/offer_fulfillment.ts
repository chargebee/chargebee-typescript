import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OfferFulfillment extends Model {
  public id: string;
  public personalized_offer_id: string;
  public option_id: string;
  public processing_type: string;
  public status: string;
  public redirect_url?: string;
  public failed_at?: number;
  public created_at: number;
  public completed_at?: number;
  public error?: Error;

  

  // OPERATIONS
  //-----------

  public static offer_fulfillments(params?: _offer_fulfillment.offer_fulfillments_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'offer_fulfillments',
      'httpMethod': 'POST',
      'urlPrefix': '/offer_fulfillments',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'grow',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static offer_fulfillments_get(offer_fulfillment_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([offer_fulfillment_id, params], {
      'methodName': 'offer_fulfillments_get',
      'httpMethod': 'GET',
      'urlPrefix': '/offer_fulfillments',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain':  'grow',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static offer_fulfillments_update(offer_fulfillment_id: string, params?: _offer_fulfillment.offer_fulfillments_update_params):RequestWrapper {
    return new RequestWrapper([offer_fulfillment_id, params], {
      'methodName': 'offer_fulfillments_update',
      'httpMethod': 'POST',
      'urlPrefix': '/offer_fulfillments',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain':  'grow',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~OfferFulfillment

export class Error extends Model {
  public code: string;
  public message: string;
} // ~Error



  // REQUEST PARAMS
  //---------------

export namespace _offer_fulfillment {
  export interface offer_fulfillments_params {
    personalized_offer_id: string;
    option_id: string;
  }
  export interface offer_fulfillments_update_params {
    id: string;
    status: string;
    failure_reason?: string;
  }
}
