import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";
import {Result} from "../result";

export class Session extends Model {
  public id: string;

  public created_at: number;
  public expires_at: number;

  get content() {
    return new Result(this.values['content']);
  }

  set content(content) {}


  // OPERATIONS
  //-----------

  public static create(params?: _session.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/sessions',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(session_id: string, params?: _session.retrieve_params):RequestWrapper {
    return new RequestWrapper([session_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/sessions',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Session



  // REQUEST PARAMS
  //---------------

export namespace _session {
  export interface create_params {
    customer?: customer_create_params;
    subscription?: subscription_create_params;
  }
  export interface retrieve_params {
    id?: string;
  }
  export interface customer_create_params {
    id?: string;
  }
  export interface subscription_create_params {
    id?: string;
  }
}
