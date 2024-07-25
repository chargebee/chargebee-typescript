import {Model} from "./model";
import { Api } from './api'

export class QuotedCharge extends Model {
  public charges?: Array<Charge>;
  public addons?: Array<Addon>;
  public invoice_items?: Array<InvoiceItem>;
  public item_tiers?: Array<ItemTier>;
  public coupons?: Array<Coupon>;
}

// OPERATIONS
//-----------
export class QuotedChargeApi extends Api {
} // ~QuotedCharge

export class Charge extends Model {
  public amount?: number;
  public amount_in_decimal?: string;
  public description?: string;
  public service_period_in_days?: number;
  public avalara_sale_type?: string;
  public avalara_transaction_type?: number;
  public avalara_service_type?: number;
} // ~Charge

export class Addon extends Model {
  public id: string;
  public quantity?: number;
  public unit_price?: number;
  public quantity_in_decimal?: string;
  public unit_price_in_decimal?: string;
  public proration_type?: string;
  public service_period?: number;
} // ~Addon

export class InvoiceItem extends Model {
  public item_price_id: string;
  public quantity?: number;
  public quantity_in_decimal?: string;
  public unit_price?: number;
  public unit_price_in_decimal?: string;
  public service_period_days?: number;
} // ~InvoiceItem

export class ItemTier extends Model {
  public item_price_id: string;
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
  public index: number;
} // ~ItemTier

export class Coupon extends Model {
  public coupon_id: string;
} // ~Coupon



  // REQUEST PARAMS
  //---------------

export namespace _quoted_charge {
}
