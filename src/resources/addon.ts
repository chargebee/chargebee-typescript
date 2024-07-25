import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Addon extends Model {
  public id: string;
  public name: string;
  public invoice_name?: string;
  public description?: string;
  public pricing_model: string;
  public type: string;
  public charge_type: string;
  public price?: number;
  public currency_code: string;
  public period?: number;
  public period_unit: string;
  public unit?: string;
  public status: string;
  public archived_at?: number;
  public enabled_in_portal: boolean;
  public tax_code?: string;
  public hsn_code?: string;
  public taxjar_product_code?: string;
  public avalara_sale_type?: string;
  public avalara_transaction_type?: number;
  public avalara_service_type?: number;
  public sku?: string;
  public accounting_code?: string;
  public accounting_category1?: string;
  public accounting_category2?: string;
  public accounting_category3?: string;
  public accounting_category4?: string;
  public is_shippable?: boolean;
  public shipping_frequency_period?: number;
  public shipping_frequency_period_unit?: string;
  public resource_version?: number;
  public updated_at?: number;
  public price_in_decimal?: string;
  public included_in_mrr?: boolean;
  public channel?: string;
  public proration_type?: string;
  public invoice_notes?: string;
  public taxable?: boolean;
  public tax_profile_id?: string;
  public meta_data?: any;
  public tiers?: Array<Tier>;
  public tax_providers_fields?: Array<TaxProvidersField>;
  public show_description_in_invoices?: boolean;
  public show_description_in_quotes?: boolean;
}

// Addon operations
//-----------
export class AddonApi extends Api {
  public create(params?: _addon.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(addon_id: string, params?: _addon.update_params):RequestWrapper {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _addon.addon_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(addon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(addon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public copy(params?: _addon.copy_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'copy',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/copy',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public unarchive(addon_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'unarchive',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/unarchive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Addon

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
  public starting_unit_in_decimal?: string;
  public ending_unit_in_decimal?: string;
  public price_in_decimal?: string;
} // ~Tier

export class TaxProvidersField extends Model {
  public provider_name: string;
  public field_id: string;
  public field_value: string;
} // ~TaxProvidersField



  // REQUEST PARAMS
  //---------------

export namespace _addon {
  export interface create_params {
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    charge_type: string;
    price?: number;
    currency_code?: string;
    period?: number;
    period_unit?: string;
    pricing_model?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    type?: string;
    unit?: string;
    enabled_in_portal?: boolean;
    taxable?: boolean;
    tax_profile_id?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    invoice_notes?: string;
    meta_data?: any;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    accounting_category3?: string;
    accounting_category4?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    included_in_mrr?: boolean;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    price_in_decimal?: string;
    proration_type?: string;
    status?: string;
    tiers?: Array<tiers_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
  }
  export interface update_params {
    name?: string;
    invoice_name?: string;
    description?: string;
    charge_type?: string;
    price?: number;
    currency_code?: string;
    period?: number;
    period_unit?: string;
    pricing_model?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    type?: string;
    unit?: string;
    enabled_in_portal?: boolean;
    taxable?: boolean;
    tax_profile_id?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    invoice_notes?: string;
    meta_data?: any;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    accounting_category3?: string;
    accounting_category4?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    included_in_mrr?: boolean;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    price_in_decimal?: string;
    proration_type?: string;
    tiers?: Array<tiers_update_params>;
    tax_providers_fields?: Array<tax_providers_fields_update_params>;
  }
  export interface addon_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    pricing_model?: filter._enum;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    type?: filter._enum;
    charge_type?: filter._enum;
    price?: filter._number;
    period?: filter._number;
    period_unit?: filter._enum;
    status?: filter._enum;
    updated_at?: filter._timestamp;
    currency_code?: filter._string;
    channel?: filter._enum;
    include_deleted?: boolean;
  }
  export interface copy_params {
    from_site: string;
    id_at_from_site: string;
    id?: string;
    for_site_merging?: boolean;
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
