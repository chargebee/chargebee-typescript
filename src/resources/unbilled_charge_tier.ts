import {Model} from "./model";

export class UnbilledChargeTier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
}
