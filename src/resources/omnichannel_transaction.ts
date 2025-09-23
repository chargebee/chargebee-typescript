import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelTransaction extends Model {
  public id: string;
  public id_at_source: string;
  public app_id: string;
  public price_currency?: string;
  public price_units?: number;
  public price_nanos?: number;
  public type: string;
  public transacted_at?: number;
  public created_at: number;
  public resource_version?: number;
  public linked_omnichannel_subscriptions?: Array<LinkedOmnichannelSubscription>;
  public linked_omnichannel_one_time_orders?: Array<LinkedOmnichannelOneTimeOrder>;

  

  // OPERATIONS
  //-----------

} // ~OmnichannelTransaction

export class LinkedOmnichannelSubscription extends Model {
  public omnichannel_subscription_id?: string;
} // ~LinkedOmnichannelSubscription

export class LinkedOmnichannelOneTimeOrder extends Model {
  public omnichannel_one_time_order_id?: string;
} // ~LinkedOmnichannelOneTimeOrder



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_transaction {
}
