import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class UnbilledCharge extends Model {
  public id?: string;
  public customer_id?: string;
  public subscription_id?: string;
  public date_from?: number;
  public date_to?: number;
  public unit_amount?: number;
  public pricing_model?: string;
  public quantity?: number;
  public amount?: number;
  public currency_code: string;
  public discount_amount?: number;
  public description?: string;
  public entity_type: string;
  public entity_id?: string;
  public is_voided: boolean;
  public voided_at?: number;
  public unit_amount_in_decimal?: string;
  public quantity_in_decimal?: string;
  public amount_in_decimal?: string;
  public updated_at: number;
  public tiers?: Array<Tier>;
  public is_advance_charge?: boolean;
  public business_entity_id?: string;
  public deleted: boolean;
}

// OPERATIONS
//-----------
export class UnbilledChargeApi extends Api {
  public create_unbilled_charge(params?: _unbilled_charge.create_unbilled_charge_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_unbilled_charge',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/create',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public create(params?: _unbilled_charge.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public invoice_unbilled_charges(params?: _unbilled_charge.invoice_unbilled_charges_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'invoice_unbilled_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/invoice_unbilled_charges',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public delete(unbilled_charge_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([unbilled_charge_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _unbilled_charge.unbilled_charge_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public invoice_now_estimate(params?: _unbilled_charge.invoice_now_estimate_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'invoice_now_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/invoice_now_estimate',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~UnbilledCharge

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public quantity_used_in_decimal?: string;
  public unit_amount_in_decimal?: string;
} // ~Tier



  // REQUEST PARAMS
  //---------------

export namespace _unbilled_charge {
  export interface create_unbilled_charge_params {
    subscription_id: string;
    currency_code?: string;
    addons?: Array<addons_create_unbilled_charge_params>;
    charges?: Array<charges_create_unbilled_charge_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_unbilled_charge_params>;
  }
  export interface create_params {
    subscription_id: string;
    currency_code?: string;
    item_prices?: Array<item_prices_create_params>;
    item_tiers?: Array<item_tiers_create_params>;
    charges?: Array<charges_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
  }
  export interface invoice_unbilled_charges_params {
    subscription_id?: string;
    customer_id?: string;
  }
  export interface unbilled_charge_list_params {
    limit?: number;
    offset?: string;
    include_deleted?: boolean;
    is_voided?: boolean;
    subscription_id?: filter._string;
    customer_id?: filter._string;
  }
  export interface invoice_now_estimate_params {
    subscription_id?: string;
    customer_id?: string;
  }
  export interface addons_create_unbilled_charge_params {
    id?: string;
  }
  export interface addons_create_unbilled_charge_params {
    quantity?: number;
  }
  export interface addons_create_unbilled_charge_params {
    unit_price?: number;
  }
  export interface addons_create_unbilled_charge_params {
    quantity_in_decimal?: string;
  }
  export interface addons_create_unbilled_charge_params {
    unit_price_in_decimal?: string;
  }
  export interface addons_create_unbilled_charge_params {
    date_from?: number;
  }
  export interface addons_create_unbilled_charge_params {
    date_to?: number;
  }
  export interface charges_create_unbilled_charge_params {
    amount?: number;
  }
  export interface charges_create_unbilled_charge_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_unbilled_charge_params {
    description?: string;
  }
  export interface charges_create_unbilled_charge_params {
    taxable?: boolean;
  }
  export interface charges_create_unbilled_charge_params {
    tax_profile_id?: string;
  }
  export interface charges_create_unbilled_charge_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_unbilled_charge_params {
    hsn_code?: string;
  }
  export interface charges_create_unbilled_charge_params {
    taxjar_product_code?: string;
  }
  export interface charges_create_unbilled_charge_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_unbilled_charge_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_unbilled_charge_params {
    avalara_service_type?: number;
  }
  export interface charges_create_unbilled_charge_params {
    date_from?: number;
  }
  export interface charges_create_unbilled_charge_params {
    date_to?: number;
  }
  export interface tax_providers_fields_create_unbilled_charge_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_create_unbilled_charge_params {
    field_id?: string;
  }
  export interface tax_providers_fields_create_unbilled_charge_params {
    field_value?: string;
  }
  export interface item_prices_create_params {
    item_price_id?: string;
  }
  export interface item_prices_create_params {
    quantity?: number;
  }
  export interface item_prices_create_params {
    quantity_in_decimal?: string;
  }
  export interface item_prices_create_params {
    unit_price?: number;
  }
  export interface item_prices_create_params {
    unit_price_in_decimal?: string;
  }
  export interface item_prices_create_params {
    date_from?: number;
  }
  export interface item_prices_create_params {
    date_to?: number;
  }
  export interface item_tiers_create_params {
    item_price_id?: string;
  }
  export interface item_tiers_create_params {
    starting_unit?: number;
  }
  export interface item_tiers_create_params {
    ending_unit?: number;
  }
  export interface item_tiers_create_params {
    price?: number;
  }
  export interface item_tiers_create_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_create_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_create_params {
    price_in_decimal?: string;
  }
  export interface charges_create_params {
    amount?: number;
  }
  export interface charges_create_params {
    amount_in_decimal?: string;
  }
  export interface charges_create_params {
    description?: string;
  }
  export interface charges_create_params {
    taxable?: boolean;
  }
  export interface charges_create_params {
    tax_profile_id?: string;
  }
  export interface charges_create_params {
    avalara_tax_code?: string;
  }
  export interface charges_create_params {
    hsn_code?: string;
  }
  export interface charges_create_params {
    taxjar_product_code?: string;
  }
  export interface charges_create_params {
    avalara_sale_type?: string;
  }
  export interface charges_create_params {
    avalara_transaction_type?: number;
  }
  export interface charges_create_params {
    avalara_service_type?: number;
  }
  export interface charges_create_params {
    date_from?: number;
  }
  export interface charges_create_params {
    date_to?: number;
  }
  export interface tax_providers_fields_create_params {
    provider_name?: string;
  }
  export interface tax_providers_fields_create_params {
    field_id?: string;
  }
  export interface tax_providers_fields_create_params {
    field_value?: string;
  }
}
