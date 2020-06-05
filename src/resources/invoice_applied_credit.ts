import {Model} from "./model";

export class InvoiceAppliedCredit extends Model {
  public cn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public cn_reason_code: string;
  public cn_date?: number;
  public cn_status: string;
}
