import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelSubscriptionItemScheduledChange extends Model {
  public id?: string;
  public omnichannel_subscription_item_id?: string;
  public scheduled_at: number;
  public change_type: string;
  public created_at: number;
  public modified_at: number;
  public resource_version?: number;
  public current_state?: CurrentState;
  public scheduled_state?: ScheduledState;

  

  // OPERATIONS
  //-----------

} // ~OmnichannelSubscriptionItemScheduledChange

export class CurrentState extends Model {
  public item_id_at_source?: string;
} // ~CurrentState

export class ScheduledState extends Model {
  public item_id_at_source?: string;
} // ~ScheduledState



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription_item_scheduled_change {
}
