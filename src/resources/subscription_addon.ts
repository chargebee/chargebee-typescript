import {Model} from "./model";

export class SubscriptionAddon extends Model {
  public id: string;
  public quantity?: number;
  public unit_price?: number;
  public amount?: number;
  public trial_end?: number;
  public remaining_billing_cycles?: number;
}
