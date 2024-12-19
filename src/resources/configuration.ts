import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Configuration extends Model {
  public domain?: string;
  public product_catalog_version?: string;

  

  // OPERATIONS
  //-----------

  public static list(params?: any):RequestWrapper{
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/configurations',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Configuration



  // REQUEST PARAMS
  //---------------

export namespace _configuration {
}
