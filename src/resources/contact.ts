import {Model} from "./model";
import { Api } from './api'

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
}

// OPERATIONS
//-----------
export class ContactApi extends Api {
} // ~Contact



  // REQUEST PARAMS
  //---------------

export namespace _contact {
}
