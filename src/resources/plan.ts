import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class Plan extends Model {
  public id: string;
  public name: string;
  public invoice_name?: string;
  public description?: string;
  public price?: number;
  public currency_code: string;
  public period: number;
  public period_unit: string;
  public trial_period?: number;
  public trial_period_unit?: string;
  public trial_end_action?: string;
  public pricing_model: string;
  public charge_model: string;
  public free_quantity: number;
  public setup_cost?: number;
  public downgrade_penalty?: number;
  public status: string;
  public archived_at?: number;
  public billing_cycles?: number;
  public redirect_url?: string;
  public enabled_in_hosted_pages: boolean;
  public enabled_in_portal: boolean;
  public addon_applicability: string;
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
  public giftable: boolean;
  public claim_url?: string;
  public free_quantity_in_decimal?: string;
  public price_in_decimal?: string;
  public channel?: string;
  public invoice_notes?: string;
  public taxable?: boolean;
  public tax_profile_id?: string;
  public meta_data?: any;
  public tiers?: Array<Tier>;
  public tax_providers_fields?: Array<TaxProvidersField>;
  public applicable_addons?: Array<ApplicableAddon>;
  public attached_addons?: Array<AttachedAddon>;
  public event_based_addons?: Array<EventBasedAddon>;
  public show_description_in_invoices?: boolean;
  public show_description_in_quotes?: boolean;
}

// OPERATIONS
//-----------
export class PlanApi extends Api {
  public create(params?: _plan.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/plans',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(plan_id: string, params?: _plan.update_params):RequestWrapper {
    return new RequestWrapper([plan_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/plans',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public list(params?: _plan.plan_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/plans',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }

  public retrieve(plan_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([plan_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/plans',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete(plan_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([plan_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/plans',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public copy(params?: _plan.copy_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'copy',
      'httpMethod': 'POST',
      'urlPrefix': '/plans',
      'urlSuffix': '/copy',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public unarchive(plan_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([plan_id, params], {
      'methodName': 'unarchive',
      'httpMethod': 'POST',
      'urlPrefix': '/plans',
      'urlSuffix': '/unarchive',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Plan

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

export class ApplicableAddon extends Model {
  public id: string;
} // ~ApplicableAddon

export class AttachedAddon extends Model {
  public id: string;
  public quantity: number;
  public billing_cycles?: number;
  public type: string;
  public quantity_in_decimal?: string;
} // ~AttachedAddon

export class EventBasedAddon extends Model {
  public id: string;
  public quantity: number;
  public on_event: string;
  public charge_once: boolean;
  public quantity_in_decimal?: string;
} // ~EventBasedAddon



  // REQUEST PARAMS
  //---------------

export namespace _plan {
  export interface create_params {
    id: string;
    name: string;
    invoice_name?: string;
    description?: string;
    trial_period?: number;
    trial_period_unit?: string;
    trial_end_action?: string;
    period?: number;
    period_unit?: string;
    setup_cost?: number;
    price?: number;
    price_in_decimal?: string;
    currency_code?: string;
    billing_cycles?: number;
    pricing_model?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    charge_model?: string;
    free_quantity?: number;
    free_quantity_in_decimal?: string;
    addon_applicability?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    downgrade_penalty?: number;
    redirect_url?: string;
    enabled_in_hosted_pages?: boolean;
    enabled_in_portal?: boolean;
    taxable?: boolean;
    tax_profile_id?: string;
    tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    accounting_category3?: string;
    accounting_category4?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    invoice_notes?: string;
    meta_data?: any;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    giftable?: boolean;
    status?: string;
    claim_url?: string;
    tiers?: Array<tiers_create_params>;
    tax_providers_fields?: Array<tax_providers_fields_create_params>;
    applicable_addons?: Array<applicable_addons_create_params>;
    event_based_addons?: Array<event_based_addons_create_params>;
    attached_addons?: Array<attached_addons_create_params>;
  }
  export interface update_params {
    name?: string;
    invoice_name?: string;
    description?: string;
    trial_period?: number;
    trial_period_unit?: string;
    trial_end_action?: string;
    period?: number;
    period_unit?: string;
    setup_cost?: number;
    price?: number;
    price_in_decimal?: string;
    currency_code?: string;
    billing_cycles?: number;
    pricing_model?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    charge_model?: string;
    free_quantity?: number;
    free_quantity_in_decimal?: string;
    addon_applicability?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    downgrade_penalty?: number;
    redirect_url?: string;
    enabled_in_hosted_pages?: boolean;
    enabled_in_portal?: boolean;
    taxable?: boolean;
    tax_profile_id?: string;
    tax_code?: string;
    hsn_code?: string;
    taxjar_product_code?: string;
    avalara_sale_type?: string;
    avalara_transaction_type?: number;
    avalara_service_type?: number;
    sku?: string;
    accounting_code?: string;
    accounting_category1?: string;
    accounting_category2?: string;
    accounting_category3?: string;
    accounting_category4?: string;
    is_shippable?: boolean;
    shipping_frequency_period?: number;
    shipping_frequency_period_unit?: string;
    invoice_notes?: string;
    meta_data?: any;
    show_description_in_invoices?: boolean;
    show_description_in_quotes?: boolean;
    tiers?: Array<tiers_update_params>;
    tax_providers_fields?: Array<tax_providers_fields_update_params>;
    applicable_addons?: Array<applicable_addons_update_params>;
    attached_addons?: Array<attached_addons_update_params>;
    event_based_addons?: Array<event_based_addons_update_params>;
  }
  export interface plan_list_params {
    limit?: number;
    offset?: string;
    id?: filter._string;
    name?: filter._string;
    price?: filter._number;
    period?: filter._number;
    period_unit?: filter._enum;
    trial_period?: filter._number;
    trial_period_unit?: filter._enum;
    addon_applicability?: filter._enum;
    giftable?: filter._boolean;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    charge_model?: filter._enum;
    pricing_model?: filter._enum;
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
  export interface applicable_addons_create_params {
    id?: string;
  }
  export interface event_based_addons_create_params {
    id?: string;
  }
  export interface event_based_addons_create_params {
    quantity?: number;
  }
  export interface event_based_addons_create_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_create_params {
    on_event?: string;
  }
  export interface event_based_addons_create_params {
    charge_once?: boolean;
  }
  export interface attached_addons_create_params {
    id?: string;
  }
  export interface attached_addons_create_params {
    quantity?: number;
  }
  export interface attached_addons_create_params {
    quantity_in_decimal?: string;
  }
  export interface attached_addons_create_params {
    billing_cycles?: number;
  }
  export interface attached_addons_create_params {
    type?: string;
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
  export interface applicable_addons_update_params {
    id?: string;
  }
  export interface attached_addons_update_params {
    id?: string;
  }
  export interface attached_addons_update_params {
    quantity?: number;
  }
  export interface attached_addons_update_params {
    quantity_in_decimal?: string;
  }
  export interface attached_addons_update_params {
    billing_cycles?: number;
  }
  export interface attached_addons_update_params {
    type?: string;
  }
  export interface event_based_addons_update_params {
    id?: string;
  }
  export interface event_based_addons_update_params {
    quantity?: number;
  }
  export interface event_based_addons_update_params {
    quantity_in_decimal?: string;
  }
  export interface event_based_addons_update_params {
    on_event?: string;
  }
  export interface event_based_addons_update_params {
    charge_once?: boolean;
  }
}
