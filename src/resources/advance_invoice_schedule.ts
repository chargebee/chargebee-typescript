import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class AdvanceInvoiceSchedule extends Model {
  public id: string;
  public schedule_type?: string;
  public fixed_interval_schedule?: FixedIntervalSchedule;
  public specific_dates_schedule?: SpecificDatesSchedule;

  

  // OPERATIONS
  //-----------

} // ~AdvanceInvoiceSchedule

export class FixedIntervalSchedule extends Model {
  public end_schedule_on?: string;
  public number_of_occurrences?: number;
  public days_before_renewal?: number;
  public end_date?: number;
  public created_at: number;
  public terms_to_charge?: number;
} // ~FixedIntervalSchedule

export class SpecificDatesSchedule extends Model {
  public terms_to_charge?: number;
  public date?: number;
  public created_at: number;
} // ~SpecificDatesSchedule



  // REQUEST PARAMS
  //---------------

export namespace _advance_invoice_schedule {
}
