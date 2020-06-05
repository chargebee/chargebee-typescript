import {Model} from "./model";

export class CustomerBalance extends Model {
  public promotional_credits: number;
  public excess_payments: number;
  public refundable_credits: number;
  public unbilled_charges: number;
  public currency_code: string;
  public balance_currency_code: string;
}
