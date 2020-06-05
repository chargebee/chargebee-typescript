import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class SubscriptionEstimate extends Model {
  public id?: string;
  public currency_code: string;
  public status?: string;
  public next_billing_at?: number;
  public pause_date?: number;
  public resume_date?: number;
  public shipping_address?: resources.SubscriptionEstimateShippingAddress;
  public contract_term?: resources.SubscriptionEstimateContractTerm;

  

  // OPERATIONS
  //-----------

} // ~SubscriptionEstimate



  // REQUEST PARAMS
  //---------------

export namespace _subscription_estimate {
}
