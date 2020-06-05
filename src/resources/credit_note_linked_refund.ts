import {Model} from "./model";

export class CreditNoteLinkedRefund extends Model {
  public txn_id: string;
  public applied_amount: number;
  public applied_at: number;
  public txn_status?: string;
  public txn_date?: number;
  public txn_amount?: number;
  public refund_reason_code?: string;
}
