import {Model} from "./model";

export class CustomerRelationship extends Model {
  public parent_id?: string;
  public payment_owner_id: string;
  public invoice_owner_id: string;
}
