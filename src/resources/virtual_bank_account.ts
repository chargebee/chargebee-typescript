import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class VirtualBankAccount extends Model {
  public id: string;
  public customer_id: string;
  public email: string;
  public scheme?: string;
  public bank_name?: string;
  public account_number: string;
  public routing_number?: string;
  public swift_code: string;
  public gateway: string;
  public gateway_account_id: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public reference_id: string;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create_using_permanent_token(params?: _virtual_bank_account.create_using_permanent_token_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_using_permanent_token',
      'httpMethod': 'POST',
      'urlPrefix': '/virtual_bank_accounts',
      'urlSuffix': '/create_using_permanent_token',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create(params?: _virtual_bank_account.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/virtual_bank_accounts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(virtual_bank_account_id: string, params?: any) {
    return new RequestWrapper([virtual_bank_account_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/virtual_bank_accounts',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _virtual_bank_account.virtual_bank_account_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/virtual_bank_accounts',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static delete_local(virtual_bank_account_id: string, params?: any) {
    return new RequestWrapper([virtual_bank_account_id, params], {
      'methodName': 'delete_local',
      'httpMethod': 'POST',
      'urlPrefix': '/virtual_bank_accounts',
      'urlSuffix': '/delete_local',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~VirtualBankAccount



  // REQUEST PARAMS
  //---------------

export namespace _virtual_bank_account {
  export interface create_using_permanent_token_params {
    customer_id: string;
    reference_id: string;
    scheme?: string;
  }
  export interface create_params {
    customer_id: string;
    email?: string;
    scheme?: string;
  }
  export interface virtual_bank_account_list_params {
    limit?: number;
    offset?: string;
    customer_id?: filter._string;
    updated_at?: filter._timestamp;
    created_at?: filter._timestamp;
  }
}
