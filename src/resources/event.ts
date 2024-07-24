import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";
import {Result} from "../result";
import {Util} from "../util";
import { Api } from './api'

export class Event extends Model {
  public id: string;
  public occurred_at: number;
  public source: string;
  public user?: string;
  public webhook_status: string;
  public webhook_failure_reason?: string;
  public webhooks?: Array<Webhook>;
  public event_type?: string;
  public api_version?: string;
  public origin_user?: string;

  get content() {
    return new Result(this.values['content']);
  }

  set content(content) {
  }

  public deserialize(json: string): resources.Event {
    let webhook_data;
    try {
      webhook_data = JSON.parse(json);
    } catch (Error) {
      throw ("Invalid webhook object to deserialize. " + Error.message);
    }

    let api_version = webhook_data['api_version'];
    if (Util.isNotUndefinedNEmpty(api_version) && api_version.toUpperCase() !== ChargeBee._api_version.toUpperCase()) {
      throw ("API version " + "[" + api_version.toUpperCase() + "] in response does not match with client library API version [" + ChargeBee._api_version.toUpperCase() + "]")
    }

    let event_result = new Result({ 'event': webhook_data });
    return event_result.event;
  }
}

// OPERATIONS
//-----------
export class EventApi extends Api {
  public list(params?: _event.event_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/events',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(event_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([event_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/events',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Event

export class Webhook extends Model {
  public id: string;
  public webhook_status: string;
} // ~Webhook



  // REQUEST PARAMS
  //---------------

export namespace _event {
  export interface event_list_params {
    limit?: number;
    offset?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    start_time?: number;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    end_time?: number;
    id?: filter._string;
    webhook_status?: filter._enum;
    event_type?: filter._enum;
    source?: filter._enum;
    occurred_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
}
