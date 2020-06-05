import {Model} from "./model";

export class InvoiceEstimateDiscount extends Model {
  public amount: number;
  public description?: string;
  public entity_type: string;
  public entity_id?: string;
}
