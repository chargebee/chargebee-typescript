import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class BusinessEntityTransfer extends Model {
  public id: string;
  public resource_type: string;
  public resource_id: string;
  public active_resource_id: string;
  public destination_business_entity_id: string;
  public source_business_entity_id: string;
  public reason_code: string;
  public created_at: number;

  

  // OPERATIONS
  //-----------

} // ~BusinessEntityTransfer



  // REQUEST PARAMS
  //---------------

export namespace _business_entity_transfer {
}
