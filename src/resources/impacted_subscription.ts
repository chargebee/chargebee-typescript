import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class ImpactedSubscription extends Model {
  public count?: number;
  public download?: Download;
  public subscription_ids?: any;

  

  // OPERATIONS
  //-----------

} // ~ImpactedSubscription

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _impacted_subscription {
}
