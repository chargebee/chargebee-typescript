import {Model} from "./model";

export class CreditNoteAllocation extends Model {
  public invoice_id: string;
  public allocated_amount: number;
  public allocated_at: number;
  public invoice_date?: number;
  public invoice_status: string;
}
