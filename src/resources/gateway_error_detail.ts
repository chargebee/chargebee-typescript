import {Model} from "./model";
import { Api } from './api'

export class GatewayErrorDetail extends Model {
  public request_id?: string;
  public error_category?: string;
  public error_code?: string;
  public error_message?: string;
  public decline_code?: string;
  public decline_message?: string;
  public network_error_code?: string;
  public network_error_message?: string;
  public error_field?: string;
  public recommendation_code?: string;
  public recommendation_message?: string;
  public processor_error_code?: string;
  public processor_error_message?: string;
}

// OPERATIONS
//-----------
export class GatewayErrorDetailApi extends Api {
} // ~GatewayErrorDetail



  // REQUEST PARAMS
  //---------------

export namespace _gateway_error_detail {
}
