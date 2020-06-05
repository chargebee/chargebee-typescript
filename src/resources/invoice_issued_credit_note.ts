import {Model} from "./model";

export class InvoiceIssuedCreditNote extends Model {
  public cn_id: string;
  public cn_reason_code: string;
  public cn_date?: number;
  public cn_total?: number;
  public cn_status: string;
}
