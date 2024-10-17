import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PaymentScheduleEstimate extends Model {
  public id: string;
  public scheme_id: string;
  public entity_type: string;
  public entity_id?: string;
  public amount: number;
  public currency_code?: string;
  public schedule_entries?: Array<ScheduleEntry>;

  

  // OPERATIONS
  //-----------

} // ~PaymentScheduleEstimate

export class ScheduleEntry extends Model {
  public id: string;
  public date: number;
  public amount: number;
  public status: string;
} // ~ScheduleEntry



  // REQUEST PARAMS
  //---------------

export namespace _payment_schedule_estimate {
}
