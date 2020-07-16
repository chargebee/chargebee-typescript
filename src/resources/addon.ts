import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

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
  public taxjar_product_code?: string;
  public avalara_sale_type?: string;
  public avalara_transaction_type?: number;
  public avalara_service_type?: number;
  public sku?: string;
  public accounting_code?: string;
  public accounting_category1?: string;
  public accounting_category2?: string;
  public is_shippable?: boolean;
  public shipping_frequency_period?: number;
  public shipping_frequency_period_unit?: string;
  public resource_version?: number;
  public updated_at?: number;
  public invoice_notes?: string;
  public taxable?: boolean;
  public tax_profile_id?: string;
  public meta_data?: any;
  public tiers?: Array<Tier>;
  public show_description_in_invoices?: boolean;
  public show_description_in_quotes?: boolean;

  

  // OPERATIONS
  //-----------

  public static create(params?: _addon.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(addon_id: string, params?: _addon.update_params) {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _addon.addon_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static retrieve(addon_id: string, params?: any) {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/addons',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(addon_id: string, params?: any) {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static copy(params?: _addon.copy_params) {
    return new RequestWrapper([params], {
      'methodName': 'copy',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/copy',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static unarchive(addon_id: string, params?: any) {
    return new RequestWrapper([addon_id, params], {
      'methodName': 'unarchive',
      'httpMethod': 'POST',
      'urlPrefix': '/addons',
      'urlSuffix': '/unarchive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~Addon

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public price: number;
} // ~Tier



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
    taxjar_product_code?: string;
    invoice_notes?: string;
    meta_data?: any;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    status?: string;
    tiers?: Array<tiers_create_params>;
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
    taxjar_product_code?: string;
    invoice_notes?: string;
    meta_data?: any;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    tiers?: Array<tiers_update_params>;
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
  export interface tiers_update_params {
    starting_unit?: number;
  }
  export interface tiers_update_params {
    ending_unit?: number;
  }
  export interface tiers_update_params {
    price?: number;
  }
}
