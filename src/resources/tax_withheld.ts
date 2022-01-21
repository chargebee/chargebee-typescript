import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class TaxWithheld extends Model {
  public id: string;
  public user?: string;
  public reference_number?: string;
  public description?: string;
  public type: string;
  public payment_method: string;
  public date?: number;
  public currency_code: string;
  public amount?: number;
  public exchange_rate?: number;

  

  // OPERATIONS
  //-----------

} // ~TaxWithheld



  // REQUEST PARAMS
  //---------------

export namespace _tax_withheld {
}
