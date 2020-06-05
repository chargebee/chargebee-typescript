import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class Hierarchy extends Model {
  public customer_id: string;
  public parent_id?: string;
  public payment_owner_id: string;
  public invoice_owner_id: string;
  public children_ids?: Array<string>;

  

  // OPERATIONS
  //-----------

} // ~Hierarchy



  // REQUEST PARAMS
  //---------------

export namespace _hierarchy {
}
