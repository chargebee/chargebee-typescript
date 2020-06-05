import {Model} from "./model";

export class OrderOrderLineItem extends Model {
  public id: string;
  public invoice_id: string;
  public invoice_line_item_id: string;
  public unit_price?: number;
  public description?: string;
  public amount?: number;
  public fulfillment_quantity?: number;
  public fulfillment_amount?: number;
  public tax_amount?: number;
  public amount_paid?: number;
  public amount_adjusted?: number;
  public refundable_credits_issued?: number;
  public refundable_credits?: number;
  public is_shippable: boolean;
  public sku?: string;
  public status?: string;
  public entity_type: string;
  public item_level_discount_amount?: number;
  public discount_amount?: number;
  public entity_id?: string;
}
