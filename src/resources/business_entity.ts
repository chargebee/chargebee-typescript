import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class BusinessEntity extends Model {
  public id: string;
  public name: string;
  public status: string;
  public deleted: boolean;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;

  

  // OPERATIONS
  //-----------

  public static create_transfers(params?: _business_entity.create_transfers_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_transfers',
      'httpMethod': 'POST',
      'urlPrefix': '/business_entities',
      'urlSuffix': '/transfers',
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static get_transfers(params?: _business_entity.business_entity_get_transfers_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'get_transfers',
      'httpMethod': 'GET',
      'urlPrefix': '/business_entities',
      'urlSuffix': '/transfers',
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~BusinessEntity



  // REQUEST PARAMS
  //---------------

export namespace _business_entity {
  export interface create_transfers_params {
    active_resource_ids: Array<string>;
    destination_business_entity_ids: Array<string>;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    source_business_entity_ids?: Array<string>;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    resource_types: Array<string>;
    reason_codes: Array<string>;
  }
  export interface business_entity_get_transfers_params {
    limit?: number;
    offset?: string;
    resource_type?: filter._string;
    resource_id?: filter._string;
    active_resource_id?: filter._string;
    created_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
}
