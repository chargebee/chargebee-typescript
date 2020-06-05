import {Model} from "./model";

export class CustomerReferralUrl extends Model {
  public external_customer_id?: string;
  public referral_sharing_url: string;
  public created_at: number;
  public updated_at: number;
  public referral_campaign_id: string;
  public referral_account_id: string;
  public referral_external_campaign_id?: string;
  public referral_system: string;
}
