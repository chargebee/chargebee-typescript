import {Model} from "./model";

export class InvoiceLinkedOrder extends Model {
  public id: string;
  public document_number?: string;
  public status?: string;
  public order_type?: string;
  public reference_id?: string;
  public fulfillment_status?: string;
  public batch_id?: string;
  public created_at: number;
}
