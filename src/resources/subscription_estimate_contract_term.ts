import {Model} from "./model";

export class SubscriptionEstimateContractTerm extends Model {
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
  public total_amount_raised: number;
}
