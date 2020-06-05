import {Model} from "./model";

export class SubscriptionCoupon extends Model {
  public coupon_id: string;
  public apply_till?: number;
  public applied_count: number;
  public coupon_code?: string;
}
