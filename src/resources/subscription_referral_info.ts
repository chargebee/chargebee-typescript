import {Model} from "./model";

export class SubscriptionReferralInfo extends Model {
  public referral_code?: string;
  public coupon_code?: string;
  public referrer_id?: string;
  public external_reference_id?: string;
  public reward_status?: string;
  public referral_system?: string;
  public account_id: string;
  public campaign_id: string;
  public external_campaign_id?: string;
  public friend_offer_type?: string;
  public referrer_reward_type?: string;
  public notify_referral_system?: string;
  public destination_url?: string;
  public post_purchase_widget_enabled: boolean;
}
