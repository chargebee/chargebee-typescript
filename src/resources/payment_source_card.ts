import {Model} from "./model";

export class PaymentSourceCard extends Model {
  public first_name?: string;
  public last_name?: string;
  public iin: string;
  public last4: string;
  public brand: string;
  public funding_type: string;
  public expiry_month: number;
  public expiry_year: number;
  public billing_addr1?: string;
  public billing_addr2?: string;
  public billing_city?: string;
  public billing_state_code?: string;
  public billing_state?: string;
  public billing_country?: string;
  public billing_zip?: string;
  public masked_number?: string;
}
