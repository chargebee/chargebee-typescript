import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Rule extends Model {
  public id: string;
  public namespace: string;
  public rule_name: string;
  public rule_order?: number;
  public status: string;
  public conditions?: string;
  public outcome?: string;
  public deleted: boolean;
  public created_at: number;
  public modified_at: number;

  

  // OPERATIONS
  //-----------

  public static retrieve(rule_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([rule_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/rules',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~Rule



  // REQUEST PARAMS
  //---------------

export namespace _rule {
}
