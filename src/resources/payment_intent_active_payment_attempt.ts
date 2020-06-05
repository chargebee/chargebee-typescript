import {Model} from "./model";

export class PaymentIntentPaymentAttempt extends Model {
  public id?: string;
  public status: string;
  public payment_method_type?: string;
  public id_at_gateway?: string;
  public error_code?: string;
  public error_text?: string;
  public created_at: number;
  public modified_at: number;
}
