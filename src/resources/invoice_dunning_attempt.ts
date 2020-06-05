import {Model} from "./model";

export class InvoiceDunningAttempt extends Model {
  public attempt: number;
  public transaction_id?: string;
  public dunning_type: string;
  public created_at?: number;
  public txn_status?: string;
  public txn_amount?: number;
}
