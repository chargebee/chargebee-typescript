import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class ContractTerm extends Model {
  public id: string;
  public status: string;
  public contract_start: number;
  public contract_end: number;
  public billing_cycle: number;
  public action_at_term_end: string;
  public total_contract_value: number;
  public cancellation_cutoff_period?: number;
  public created_at: number;
  public subscription_id: string;
  public remaining_billing_cycles?: number;

  

  // OPERATIONS
  //-----------

} // ~ContractTerm



  // REQUEST PARAMS
  //---------------

export namespace _contract_term {
}
