import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PaymentReferenceNumber extends Model {
  public id: string;
  public type: string;
  public number: string;
  public invoice_id?: string;

  

  // OPERATIONS
  //-----------

} // ~PaymentReferenceNumber



  // REQUEST PARAMS
  //---------------

export namespace _payment_reference_number {
}
