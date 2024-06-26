import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class InstallmentDetail extends Model {
  public id?: string;
  public invoice_id?: string;
  public amount?: number;
  public installments?: Array<Installment>;

  

  // OPERATIONS
  //-----------

} // ~InstallmentDetail

export class Installment extends Model {
  public id: string;
  public invoice_id: string;
  public date: number;
  public amount: number;
  public status: string;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
} // ~Installment



  // REQUEST PARAMS
  //---------------

export namespace _installment_detail {
}
