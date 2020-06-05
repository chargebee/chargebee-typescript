import {Model} from "./model";

export class PlanAttachedAddon extends Model {
  public id: string;
  public quantity: number;
  public billing_cycles?: number;
  public type: string;
}
