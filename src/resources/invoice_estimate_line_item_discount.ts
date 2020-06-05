import {Model} from "./model";

export class InvoiceEstimateLineItemDiscount extends Model {
  public line_item_id: string;
  public discount_type: string;
  public coupon_id?: string;
  public discount_amount: number;
}
