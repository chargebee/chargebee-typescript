import {Model} from "./model";

export class CustomerContact extends Model {
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
