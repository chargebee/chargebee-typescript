import {Model} from "./model";

export class InvoiceNote extends Model {
  public entity_type: string;
  public note: string;
  public entity_id?: string;
}
