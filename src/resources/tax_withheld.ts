import {Model} from "./model";
import { Api } from './api'

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
  public resource_version?: number;
  public updated_at?: number;
  public exchange_rate?: number;
}

// OPERATIONS
//-----------
export class TaxWithheldApi extends Api {
} // ~TaxWithheld



  // REQUEST PARAMS
  //---------------

export namespace _tax_withheld {
}
