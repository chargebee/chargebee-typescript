import {Model} from "./model";

export class SubscriptionEventBasedAddon extends Model {
  public id: string;
  public quantity: number;
  public unit_price: number;
  public service_period_in_days?: number;
  public on_event: string;
  public charge_once: boolean;
}
