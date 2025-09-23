import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelSubscriptionItemOffer extends Model {
  public id: string;
  public offer_id_at_source?: string;
  public category: string;
  public category_at_source?: string;
  public type: string;
  public type_at_source?: string;
  public discount_type?: string;
  public duration: string;
  public percentage?: number;
  public price_currency?: string;
  public price_units?: number;
  public price_nanos?: number;
  public offer_term_start?: number;
  public offer_term_end?: number;
  public resource_version?: number;

  

  // OPERATIONS
  //-----------

} // ~OmnichannelSubscriptionItemOffer



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription_item_offer {
}
