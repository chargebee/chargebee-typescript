import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelSubscriptionItem extends Model {
  public id: string;
  public item_id_at_source: string;
  public status: string;
  public current_term_start?: number;
  public current_term_end?: number;
  public expired_at?: number;
  public expiration_reason?: string;
  public cancelled_at?: number;
  public cancellation_reason?: string;
  public grace_period_expires_at?: number;
  public resource_version?: number;

  

  // OPERATIONS
  //-----------

} // ~OmnichannelSubscriptionItem



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription_item {
}
