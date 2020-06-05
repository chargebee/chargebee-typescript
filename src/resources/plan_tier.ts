import {Model} from "./model";

export class PlanTier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
}
