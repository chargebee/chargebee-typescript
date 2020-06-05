import {Model} from "./model";

export class QuoteDiscount extends Model {
  public amount: number;
  public description?: string;
  public entity_type: string;
  public entity_id?: string;
}
