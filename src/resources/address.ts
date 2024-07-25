import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class Address extends Model {
  public label: string;
  public first_name?: string;
  public last_name?: string;
  public email?: string;
  public company?: string;
  public phone?: string;
  public addr?: string;
  public extended_addr?: string;
  public extended_addr2?: string;
  public city?: string;
  public state_code?: string;
  public state?: string;
  public country?: string;
  public zip?: string;
  public validation_status?: string;
  public subscription_id: string;
}

// OPERATIONS
//-----------
export class AddressApi extends Api {
  public retrieve(params?: _address.retrieve_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/addresses',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(params?: _address.update_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/addresses',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~Address



  // REQUEST PARAMS
  //---------------

export namespace _address {
  export interface retrieve_params {
    subscription_id: string;
    label: string;
  }
  export interface update_params {
    subscription_id: string;
    label: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    phone?: string;
    addr?: string;
    extended_addr?: string;
    extended_addr2?: string;
    city?: string;
    state_code?: string;
    state?: string;
    zip?: string;
    country?: string;
    validation_status?: string;
  }
}
