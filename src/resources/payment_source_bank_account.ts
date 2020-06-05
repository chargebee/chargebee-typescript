import {Model} from "./model";

export class PaymentSourceBankAccount extends Model {
  public last4: string;
  public name_on_account?: string;
  public bank_name?: string;
  public mandate_id?: string;
  public account_type?: string;
  public echeck_type?: string;
  public account_holder_type?: string;
}
