import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PersonalizedOffer extends Model {
  public id: string;
  public offer_id: string;
  public content: Content;
  public options: Array<Option>;

  

  // OPERATIONS
  //-----------

  public static personalized_offers(params?: _personalized_offer.personalized_offers_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'personalized_offers',
      'httpMethod': 'POST',
      'urlPrefix': '/personalized_offers',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'grow',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
        "custom": 0,
      }
    }, ChargeBee._env)
  }

} // ~PersonalizedOffer

export class Content extends Model {
  public title: string;
  public description: string;
} // ~Content

export class Option extends Model {
  public id: string;
  public label: string;
  public processing_type: string;
  public processing_layout: string;
  public redirect_url: string;
} // ~Option



  // REQUEST PARAMS
  //---------------

export namespace _personalized_offer {
  export interface personalized_offers_params {
    first_name?: string;
    last_name?: string;
    email?: string;
    roles?: Array<string>;
    external_user_id?: string;
    subscription_id?: string;
    customer_id: string;
    custom?: any;
    request_context?: request_context_personalized_offers_params;
  }
  export interface request_context_personalized_offers_params {
    user_agent?: string;
  }
  export interface request_context_personalized_offers_params {
    locale?: string;
  }
  export interface request_context_personalized_offers_params {
    timezone?: string;
  }
  export interface request_context_personalized_offers_params {
    url?: string;
  }
  export interface request_context_personalized_offers_params {
    referrer_url?: string;
  }
}
