import {Model} from "./model";

export class SubscriptionEstimate extends Model {
  public id?: string;
  public currency_code: string;
  public status?: string;
  public trial_end_action?: string;
  public next_billing_at?: number;
  public pause_date?: number;
  public resume_date?: number;
  public shipping_address?: ShippingAddress;
  public contract_term?: ContractTerm;

  

  // OPERATIONS
  //-----------

} // ~SubscriptionEstimate

export class ShippingAddress extends Model {
  public first_name?: string;
  public last_name?: string;
  public email?: string;
  public company?: string;
  public phone?: string;
  public line1?: string;
  public line2?: string;
  public line3?: string;
  public city?: string;
  public state_code?: string;
  public state?: string;
  public country?: string;
  public zip?: string;
  public validation_status?: string;
  public index: number;
} // ~ShippingAddress

export class ContractTerm extends Model {
  public id: string;
  public status: string;
  public contract_start: number;
  public contract_end: number;
  public billing_cycle: number;
  public action_at_term_end: string;
  public total_contract_value: number;
  public total_contract_value_before_tax: number;
  public cancellation_cutoff_period?: number;
  public created_at: number;
  public subscription_id: string;
  public remaining_billing_cycles?: number;
} // ~ContractTerm



  // REQUEST PARAMS
  //---------------

export namespace _subscription_estimate {
}
