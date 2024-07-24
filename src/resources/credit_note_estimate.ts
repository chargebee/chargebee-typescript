import {Model} from "./model";

export class CreditNoteEstimate extends Model {
  public reference_invoice_id: string;
  public type: string;
  public price_type: string;
  public currency_code: string;
  public sub_total: number;
  public total: number;
  public amount_allocated: number;
  public amount_available: number;
  public line_items?: Array<LineItem>;
  public discounts?: Array<Discount>;
  public taxes?: Array<Tax>;
  public line_item_taxes?: Array<LineItemTax>;
  public line_item_discounts?: Array<LineItemDiscount>;
  public line_item_tiers?: Array<LineItemTier>;
  public round_off_amount?: number;
  public customer_id?: string;



  // OPERATIONS
  //-----------

} // ~CreditNoteEstimate

export class LineItem extends Model {
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
  public unit_amount_in_decimal?: string;
  public quantity_in_decimal?: string;
  public amount_in_decimal?: string;
  public discount_amount?: number;
  public item_level_discount_amount?: number;
  public usage_percentage?: string;
  public reference_line_item_id?: string;
  public description: string;
  public entity_description?: string;
  public entity_type: string;
  public tax_exempt_reason?: string;
  public entity_id?: string;
  public customer_id?: string;
} // ~LineItem

export class Discount extends Model {
  public amount: number;
  public description?: string;
  public entity_type: string;
  public entity_id?: string;
  public coupon_set_code?: string;
} // ~Discount

export class Tax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
} // ~Tax

export class LineItemTax extends Model {
  public line_item_id?: string;
  public tax_name: string;
  public tax_rate: number;
  public date_to?: number;
  public date_from?: number;
  public prorated_taxable_amount?: number;
  public is_partial_tax_applied?: boolean;
  public is_non_compliance_tax?: boolean;
  public taxable_amount: number;
  public tax_amount: number;
  public tax_juris_type?: string;
  public tax_juris_name?: string;
  public tax_juris_code?: string;
  public tax_amount_in_local_currency?: number;
  public local_currency_code?: string;
} // ~LineItemTax

export class LineItemDiscount extends Model {
  public line_item_id: string;
  public discount_type: string;
  public coupon_id?: string;
  public entity_id?: string;
  public discount_amount: number;
} // ~LineItemDiscount

export class LineItemTier extends Model {
  public line_item_id?: string;
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public quantity_used_in_decimal?: string;
  public unit_amount_in_decimal?: string;
} // ~LineItemTier



  // REQUEST PARAMS
  //---------------

export namespace _credit_note_estimate {
}
