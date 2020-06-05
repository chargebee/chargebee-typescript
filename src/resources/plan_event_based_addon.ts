import {Model} from "./model";

export class PlanEventBasedAddon extends Model {
  public id: string;
  public quantity: number;
  public on_event: string;
  public charge_once: boolean;
}
