import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class ItemPrice extends Model {
  public id: string;
  public name: string;
  public item_family_id?: string;
  public item_id?: string;
  public description?: string;
  public status?: string;
  public external_name?: string;
  public price_variant_id?: string;
  public proration_type?: string;
  public pricing_model: string;
  public price?: number;
  public price_in_decimal?: string;
  public period?: number;
  public currency_code: string;
  public period_unit?: string;
  public trial_period?: number;
  public trial_period_unit?: string;
  public trial_end_action?: string;
  public shipping_period?: number;
  public shipping_period_unit?: string;
  public billing_cycles?: number;
  public free_quantity: number;
  public free_quantity_in_decimal?: string;
  public channel?: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public archived_at?: number;
  public invoice_notes?: string;
  public tiers?: Array<Tier>;
  public is_taxable?: boolean;
  public tax_detail?: TaxDetail;
  public tax_providers_fields?: Array<TaxProvidersField>;
  public accounting_detail?: AccountingDetail;
  public metadata?: any;
  public item_type?: string;
  public archivable?: boolean;
  public parent_item_id?: string;
  public show_description_in_invoices?: boolean;
  public show_description_in_quotes?: boolean;
}

// OPERATIONS
//-----------
export class ItemPriceApi extends Api {
  public create(params?: _item_price.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/item_prices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(item_price_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/item_prices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update(item_price_id: string, params?: _item_price.update_params):RequestWrapper {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/item_prices',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _item_price.item_price_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/item_prices',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public delete(item_price_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/item_prices',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public find_applicable_items(item_price_id: string, params?: _item_price.item_price_find_applicable_items_params):RequestWrapper<ListResult> {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'find_applicable_items',
      'httpMethod': 'GET',
      'urlPrefix': '/item_prices',
      'urlSuffix': '/applicable_items',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }

  public find_applicable_item_prices(item_price_id: string, params?: _item_price.item_price_find_applicable_item_prices_params):RequestWrapper<ListResult> {
    return new RequestWrapper([item_price_id, params], {
      'methodName': 'find_applicable_item_prices',
      'httpMethod': 'GET',
      'urlPrefix': '/item_prices',
      'urlSuffix': '/applicable_item_prices',
      'hasIdInUrl': true,
      'isListReq': true,
    }, this._env)
  }
} // ~ItemPrice

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
} // ~Tier

export class TaxDetail extends Model {
  public tax_profile_id?: string;
  public avalara_sale_type?: string;
  public avalara_transaction_type?: number;
  public avalara_service_type?: number;
  public avalara_tax_code?: string;
  public hsn_code?: string;
  public taxjar_product_code?: string;
} // ~TaxDetail

export class TaxProvidersField extends Model {
  public provider_name: string;
  public field_id: string;
  public field_value: string;
} // ~TaxProvidersField

export class AccountingDetail extends Model {
  public sku?: string;
  public accounting_code?: string;
  public accounting_category1?: string;
  public accounting_category2?: string;
  public accounting_category3?: string;
  public accounting_category4?: string;
} // ~AccountingDetail



  // REQUEST PARAMS
  //---------------

export namespace _item_price {
  export interface create_params {
    id: string;
    name: string;
    description?: string;
    item_id: string;
    invoice_notes?: string;
    proration_type?: string;
    external_name?: string;
    currency_code?: string;
    price_variant_id?: string;
    is_taxable?: boolean;
    free_quantity?: number;
    free_quantity_in_decimal?: string;
    metadata?: any;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    pricing_model?: string;
    price?: number;
    price_in_decimal?: string;
    period_unit?: string;
    period?: number;
    trial_period_unit?: string;
    trial_period?: number;
    shipping_period?: number;
    shipping_period_unit?: string;
    billing_cycles?: number;
    trial_end_action?: string;
    tax_detail?: tax_detail_create_params;
    accounting_detail?: accounting_detail_create_params;
    tiers?: Array<tiers_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
  }
  export interface update_params {
    name?: string;
    description?: string;
    proration_type?: string;
    price_variant_id?: string;
    status?: string;
    external_name?: string;
    currency_code?: string;
    invoice_notes?: string;
    is_taxable?: boolean;
    free_quantity?: number;
    free_quantity_in_decimal?: string;
    metadata?: any;
    pricing_model?: string;
    price?: number;
    price_in_decimal?: string;
    period_unit?: string;
    period?: number;
    trial_period_unit?: string;
    trial_period?: number;
    shipping_period?: number;
    shipping_period_unit?: string;
    billing_cycles?: number;
    trial_end_action?: string;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    tax_detail?: tax_detail_update_params;
    accounting_detail?: accounting_detail_update_params;
    tiers?: Array<tiers_update_params>;
    tax_providers_fields?: Array<tax_providers_fields_update_params>;
  }
  export interface item_price_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    pricing_model?: filter._enum;
    item_id?: filter._string;
    item_family_id?: filter._string;
    item_type?: filter._enum;
    currency_code?: filter._string;
    price_variant_id?: filter._string;
    trial_period?: filter._number;
    trial_period_unit?: filter._enum;
    status?: filter._enum;
    updated_at?: filter._timestamp;
    period_unit?: filter._enum;
    period?: filter._number;
    channel?: filter._enum;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface item_price_find_applicable_items_params {
    limit?: number;
    offset?: string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface item_price_find_applicable_item_prices_params {
    limit?: number;
    offset?: string;
    item_id?: string;
    "sort_by[asc]"?: string;
    "sort_by[desc]"?: string;
  }
  export interface tax_detail_create_params {
    tax_profile_id?: string;
  }
  export interface tax_detail_create_params {
    avalara_tax_code?: string;
  }
  export interface tax_detail_create_params {
    hsn_code?: string;
  }
  export interface tax_detail_create_params {
    avalara_sale_type?: string;
  }
  export interface tax_detail_create_params {
    avalara_transaction_type?: number;
  }
  export interface tax_detail_create_params {
    avalara_service_type?: number;
  }
  export interface tax_detail_create_params {
    taxjar_product_code?: string;
  }
  export interface accounting_detail_create_params {
    sku?: string;
  }
  export interface accounting_detail_create_params {
    accounting_code?: string;
  }
  export interface accounting_detail_create_params {
    accounting_category1?: string;
  }
  export interface accounting_detail_create_params {
    accounting_category2?: string;
  }
  export interface accounting_detail_create_params {
    accounting_category3?: string;
  }
  export interface accounting_detail_create_params {
    accounting_category4?: string;
  }
  export interface tiers_create_params {
    starting_unit?: number;
  }
  export interface tiers_create_params {
    ending_unit?: number;
  }
  export interface tiers_create_params {
    price?: number;
  }
  export interface tiers_create_params {
    starting_unit_in_decimal?: string;
  }
  export interface tiers_create_params {
    ending_unit_in_decimal?: string;
  }
  export interface tiers_create_params {
    price_in_decimal?: string;
  }
  export interface tax_providers_fields_create_params {
    provider_name: string;
  }
  export interface tax_providers_fields_create_params {
    field_id: string;
  }
  export interface tax_providers_fields_create_params {
    field_value: string;
  }
  export interface tax_detail_update_params {
    tax_profile_id?: string;
  }
  export interface tax_detail_update_params {
    avalara_tax_code?: string;
  }
  export interface tax_detail_update_params {
    hsn_code?: string;
  }
  export interface tax_detail_update_params {
    avalara_sale_type?: string;
  }
  export interface tax_detail_update_params {
    avalara_transaction_type?: number;
  }
  export interface tax_detail_update_params {
    avalara_service_type?: number;
  }
  export interface tax_detail_update_params {
    taxjar_product_code?: string;
  }
  export interface accounting_detail_update_params {
    sku?: string;
  }
  export interface accounting_detail_update_params {
    accounting_code?: string;
  }
  export interface accounting_detail_update_params {
    accounting_category1?: string;
  }
  export interface accounting_detail_update_params {
    accounting_category2?: string;
  }
  export interface accounting_detail_update_params {
    accounting_category3?: string;
  }
  export interface accounting_detail_update_params {
    accounting_category4?: string;
  }
  export interface tiers_update_params {
    starting_unit?: number;
  }
  export interface tiers_update_params {
    ending_unit?: number;
  }
  export interface tiers_update_params {
    price?: number;
  }
  export interface tiers_update_params {
    starting_unit_in_decimal?: string;
  }
  export interface tiers_update_params {
    ending_unit_in_decimal?: string;
  }
  export interface tiers_update_params {
    price_in_decimal?: string;
  }
  export interface tax_providers_fields_update_params {
    provider_name: string;
  }
  export interface tax_providers_fields_update_params {
    field_id: string;
  }
  export interface tax_providers_fields_update_params {
    field_value: string;
  }
}
