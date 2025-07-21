import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class BillingConfiguration extends Model {
  public is_calendar_billing_enabled: boolean;
  public billing_dates?: Array<BillingDate>;

  

  // OPERATIONS
  //-----------

} // ~BillingConfiguration

export class BillingDate extends Model {
  public start_date?: number;
  public end_date?: number;
} // ~BillingDate



  // REQUEST PARAMS
  //---------------

export namespace _billing_configuration {
}
