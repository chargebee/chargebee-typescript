import {Model} from "./model";

export class InvoiceLinkedPayment extends Model {
  public txn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public txn_status?: string;
  public txn_date?: number;
  public txn_amount?: number;
}
