import {Model} from "./model";

export class AddonTier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
}
