import {Model} from "./model";

export class TransactionLinkedInvoice extends Model {
  public invoice_id: string;
  public applied_amount: number;
  public applied_at: number;
  public invoice_date?: number;
  public invoice_total?: number;
  public invoice_status: string;
}
