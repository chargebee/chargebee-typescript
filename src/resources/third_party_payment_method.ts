import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class ThirdPartyPaymentMethod extends Model {
  public type: string;
  public gateway: string;
  public gateway_account_id?: string;
  public reference_id: string;

  

  // OPERATIONS
  //-----------

} // ~ThirdPartyPaymentMethod



  // REQUEST PARAMS
  //---------------

export namespace _third_party_payment_method {
}
