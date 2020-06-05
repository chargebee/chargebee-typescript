import {Model} from "./model";

export class TransactionLinkedRefund extends Model {
  public txn_id: string;
  public txn_status: string;
  public txn_date: number;
  public txn_amount: number;
}
