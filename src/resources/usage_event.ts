import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class UsageEvent extends Model {
  public subscription_id: string;
  public deduplication_id: string;
  public usage_timestamp: number;
  public properties: any;

  

  // OPERATIONS
  //-----------

  public static create(params?: _usage_event.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/usage_events',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'ingest',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
        "properties": 0,
      }
    }, ChargeBee._env)
  }

  public static batch_ingest(params?: _usage_event.batch_ingest_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'batch_ingest',
      'httpMethod': 'POST',
      'urlPrefix': '/batch',
      'urlSuffix': '/usage_events',
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'ingest',
      'isOperationNeedsJsonInput': true,
      'jsonKeys': { 
        "properties": 1,
      }
    }, ChargeBee._env)
  }

} // ~UsageEvent



  // REQUEST PARAMS
  //---------------

export namespace _usage_event {
  export interface create_params {
    deduplication_id: string;
    subscription_id: string;
    usage_timestamp: number;
    properties: any;
  }
  export interface batch_ingest_params {
    events?: Array<events_batch_ingest_params>;
  }
  export interface events_batch_ingest_params {
    deduplication_id: string;
  }
  export interface events_batch_ingest_params {
    subscription_id: string;
  }
  export interface events_batch_ingest_params {
    usage_timestamp: number;
  }
  export interface events_batch_ingest_params {
    properties: any;
  }
}
