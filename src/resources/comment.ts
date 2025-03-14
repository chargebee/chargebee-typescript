import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Comment extends Model {
  public id: string;
  public entity_type: string;
  public added_by?: string;
  public notes: string;
  public created_at: number;
  public type: string;
  public entity_id: string;

  

  // OPERATIONS
  //-----------

  public static create(params?: _comment.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/comments',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static retrieve(comment_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([comment_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/comments',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static list(params?: _comment.comment_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/comments',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static delete(comment_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([comment_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/comments',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~Comment



  // REQUEST PARAMS
  //---------------

export namespace _comment {
  export interface create_params {
    entity_type: string;
    entity_id: string;
    notes: string;
    added_by?: string;
  }
  export interface comment_list_params {
    limit?: number;
    offset?: string;
    entity_type?: string;
    entity_id?: string;
    created_at?: filter._timestamp;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
}
