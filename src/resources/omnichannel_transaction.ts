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

  

  // OPERATIONS
  //-----------

} // ~OmnichannelTransaction



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_transaction {
}
