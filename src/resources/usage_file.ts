import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class UsageFile extends Model {
  public id: string;
  public name: string;
  public mime_type: string;
  public error_code?: string;
  public error_reason?: string;
  public status?: string;
  public total_records_count?: number;
  public processed_records_count?: number;
  public failed_records_count?: number;
  public file_size_in_bytes?: number;
  public processing_started_at?: number;
  public processing_completed_at?: number;
  public uploaded_by?: string;
  public uploaded_at?: number;
  public upload_details?: UploadDetail;

  

  // OPERATIONS
  //-----------

  public static upload_url(params?: _usage_file.upload_url_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'upload_url',
      'httpMethod': 'POST',
      'urlPrefix': '/usage_files',
      'urlSuffix': '/upload_url',
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain':  'file-ingest',
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static processing_status(usage_file_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([usage_file_id, params], {
      'methodName': 'processing_status',
      'httpMethod': 'GET',
      'urlPrefix': '/usage_files',
      'urlSuffix': '/processing_status',
      'hasIdInUrl': true,
      'isListReq': false,
      'subDomain':  'file-ingest',
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~UsageFile

export class UploadDetail extends Model {
  public url: string;
  public expires_at: number;
} // ~UploadDetail



  // REQUEST PARAMS
  //---------------

export namespace _usage_file {
  export interface upload_url_params {
    file_name: string;
    mime_type: string;
  }
}
