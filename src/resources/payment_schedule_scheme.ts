import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PaymentScheduleScheme extends Model {
  public id: string;
  public name?: string;
  public description?: string;
  public number_of_schedules: number;
  public period_unit: string;
  public period?: number;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public preferred_schedules?: Array<PreferredSchedule>;

  

  // OPERATIONS
  //-----------

  public static create(params?: _payment_schedule_scheme.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_schedule_schemes',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(payment_schedule_scheme_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([payment_schedule_scheme_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_schedule_schemes',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(payment_schedule_scheme_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([payment_schedule_scheme_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_schedule_schemes',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~PaymentScheduleScheme

export class PreferredSchedule extends Model {
  public period?: number;
  public amount_percentage?: number;
} // ~PreferredSchedule



  // REQUEST PARAMS
  //---------------

export namespace _payment_schedule_scheme {
  export interface create_params {
    number_of_schedules: number;
    period_unit: string;
    period?: number;
    name: string;
    flexible_schedules?: Array<flexible_schedules_create_params>;
  }
  export interface flexible_schedules_create_params {
    period?: number;
  }
  export interface flexible_schedules_create_params {
    amount_percentage?: number;
  }
}
