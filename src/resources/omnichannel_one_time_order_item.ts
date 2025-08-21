import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelOneTimeOrderItem extends Model {
  public id: string;
  public item_id_at_source: string;
  public item_type_at_source?: string;
  public quantity?: number;
  public cancelled_at?: number;
  public cancellation_reason?: string;
  public created_at: number;
  public resource_version?: number;

  

  // OPERATIONS
  //-----------

} // ~OmnichannelOneTimeOrderItem



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_one_time_order_item {
}
