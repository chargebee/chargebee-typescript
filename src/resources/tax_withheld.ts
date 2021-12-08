import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class TaxWithheld extends Model {
  public id: string;
  public reference_number?: string;
  public description?: string;
  public date?: number;
  public currency_code: string;
  public amount?: number;

  

  // OPERATIONS
  //-----------

} // ~TaxWithheld



  // REQUEST PARAMS
  //---------------

export namespace _tax_withheld {
}
