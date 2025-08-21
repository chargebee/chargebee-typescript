import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class ImpactedCustomer extends Model {
  public action_type?: string;
  public download?: Download;

  

  // OPERATIONS
  //-----------

} // ~ImpactedCustomer

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _impacted_customer {
}
