import {Model} from "./model";

export class CustomerPaymentMethod extends Model {
  public type: string;
  public gateway: string;
  public gateway_account_id?: string;
  public status: string;
  public reference_id: string;
}
