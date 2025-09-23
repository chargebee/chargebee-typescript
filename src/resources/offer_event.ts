import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OfferEvent extends Model {

  

  // OPERATIONS
  //-----------

  public static offer_events(params?: _offer_event.offer_events_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'offer_events',
      'httpMethod': 'POST',
      'urlPrefix': '/offer_events',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'grow',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~OfferEvent



  // REQUEST PARAMS
  //---------------

export namespace _offer_event {
  export interface offer_events_params {
    personalized_offer_id: string;
    type: string;
  }
}
