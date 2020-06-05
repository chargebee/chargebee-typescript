import {Model} from "./model";

export class CreditNoteEstimateLineItem extends Model {
  public id?: string;
  public subscription_id?: string;
  public date_from: number;
  public date_to: number;
  public unit_amount: number;
  public quantity?: number;
  public amount?: number;
  public pricing_model?: string;
  public is_taxed: boolean;
  public tax_amount?: number;
  public tax_rate?: number;
  public discount_amount?: number;
  public item_level_discount_amount?: number;
  public description: string;
  public entity_description: string;
  public entity_type: string;
  public tax_exempt_reason?: string;
  public entity_id?: string;
  public customer_id?: string;
}
