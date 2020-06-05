import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Contact extends Model {
  public id: string;
  public first_name?: string;
  public last_name?: string;
  public email: string;
  public phone?: string;
  public label?: string;
  public enabled: boolean;
  public send_account_email: boolean;
  public send_billing_email: boolean;

  

  // OPERATIONS
  //-----------

} // ~Contact



  // REQUEST PARAMS
  //---------------

export namespace _contact {
}
