import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class Purchase extends Model {
  public id?: string;
  public customer_id: string;
  public created_at?: number;
  public modified_at?: number;
  public subscription_ids?: Array<string>;
  public invoice_ids?: Array<string>;
}

// OPERATIONS
//-----------
export class PurchaseApi extends Api {
  public create(params?: _purchase.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/purchases',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public estimate(params?: _purchase.estimate_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/purchases',
      'urlSuffix': '/estimate',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

} // ~Purchase



  // REQUEST PARAMS
  //---------------

export namespace _purchase {
  export interface create_params {
    customer_id: string;
    payment_source_id?: string;
    invoice_info?: invoice_info_create_params;
    statement_descriptor?: statement_descriptor_create_params;
    installment_info?: installment_info_create_params;
    purchase_items?: Array<purchase_items_create_params>;
    item_tiers?: Array<item_tiers_create_params>;
    shipping_addresses?: Array<shipping_addresses_create_params>;
    discounts?: Array<discounts_create_params>;
    subscription_info?: Array<subscription_info_create_params>;
    contract_terms?: Array<contract_terms_create_params>;
  }
  export interface estimate_params {
    client_profile_id?: string;
    customer_id?: string;
    customer?: customer_estimate_params;
    billing_address?: billing_address_estimate_params;
    purchase_items?: Array<purchase_items_estimate_params>;
    item_tiers?: Array<item_tiers_estimate_params>;
    shipping_addresses?: Array<shipping_addresses_estimate_params>;
    discounts?: Array<discounts_estimate_params>;
    subscription_info?: Array<subscription_info_estimate_params>;
    contract_terms?: Array<contract_terms_estimate_params>;
  }
  export interface invoice_info_create_params {
    po_number?: string;
  }
  export interface invoice_info_create_params {
    notes?: string;
  }
  export interface statement_descriptor_create_params {
    descriptor?: string;
  }
  export interface installment_info_create_params {
    config_id?: string;
  }
  export interface installment_info_create_params {
    amount?: number;
  }
  export interface purchase_items_create_params {
    index: number;
  }
  export interface purchase_items_create_params {
    item_price_id: string;
  }
  export interface purchase_items_create_params {
    quantity?: number;
  }
  export interface purchase_items_create_params {
    unit_amount?: number;
  }
  export interface purchase_items_create_params {
    unit_amount_in_decimal?: string;
  }
  export interface purchase_items_create_params {
    quantity_in_decimal?: string;
  }
  export interface item_tiers_create_params {
    index: number;
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
  export interface shipping_addresses_create_params {
    first_name?: string;
  }
  export interface shipping_addresses_create_params {
    last_name?: string;
  }
  export interface shipping_addresses_create_params {
    email?: string;
  }
  export interface shipping_addresses_create_params {
    company?: string;
  }
  export interface shipping_addresses_create_params {
    phone?: string;
  }
  export interface shipping_addresses_create_params {
    line1?: string;
  }
  export interface shipping_addresses_create_params {
    line2?: string;
  }
  export interface shipping_addresses_create_params {
    line3?: string;
  }
  export interface shipping_addresses_create_params {
    city?: string;
  }
  export interface shipping_addresses_create_params {
    state?: string;
  }
  export interface shipping_addresses_create_params {
    state_code?: string;
  }
  export interface shipping_addresses_create_params {
    country?: string;
  }
  export interface shipping_addresses_create_params {
    zip?: string;
  }
  export interface shipping_addresses_create_params {
    validation_status?: string;
  }
  export interface discounts_create_params {
    index?: number;
  }
  export interface discounts_create_params {
    coupon_id?: string;
  }
  export interface discounts_create_params {
    percentage?: number;
  }
  export interface discounts_create_params {
    amount?: number;
  }
  export interface discounts_create_params {
    included_in_mrr?: boolean;
  }
  export interface subscription_info_create_params {
    index: number;
  }
  export interface subscription_info_create_params {
    subscription_id?: string;
  }
  export interface subscription_info_create_params {
    billing_cycles?: number;
  }
  export interface subscription_info_create_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface contract_terms_create_params {
    index: number;
  }
  export interface contract_terms_create_params {
    action_at_term_end?: string;
  }
  export interface contract_terms_create_params {
    cancellation_cutoff_period?: number;
  }
  export interface subscription_info_create_params {
    meta_data?: any;
  }
  export interface customer_estimate_params {
    vat_number?: string;
  }
  export interface customer_estimate_params {
    vat_number_prefix?: string;
  }
  export interface customer_estimate_params {
    registered_for_gst?: boolean;
  }
  export interface customer_estimate_params {
    taxability?: string;
  }
  export interface customer_estimate_params {
    entity_code?: string;
  }
  export interface customer_estimate_params {
    exempt_number?: string;
  }
  export interface customer_estimate_params {
    exemption_details?: any;
  }
  export interface customer_estimate_params {
    customer_type?: string;
  }
  export interface billing_address_estimate_params {
    line1?: string;
  }
  export interface billing_address_estimate_params {
    line2?: string;
  }
  export interface billing_address_estimate_params {
    line3?: string;
  }
  export interface billing_address_estimate_params {
    city?: string;
  }
  export interface billing_address_estimate_params {
    state_code?: string;
  }
  export interface billing_address_estimate_params {
    zip?: string;
  }
  export interface billing_address_estimate_params {
    country?: string;
  }
  export interface billing_address_estimate_params {
    validation_status?: string;
  }
  export interface purchase_items_estimate_params {
    index: number;
  }
  export interface purchase_items_estimate_params {
    item_price_id: string;
  }
  export interface purchase_items_estimate_params {
    quantity?: number;
  }
  export interface purchase_items_estimate_params {
    unit_amount?: number;
  }
  export interface purchase_items_estimate_params {
    unit_amount_in_decimal?: string;
  }
  export interface purchase_items_estimate_params {
    quantity_in_decimal?: string;
  }
  export interface item_tiers_estimate_params {
    index: number;
  }
  export interface item_tiers_estimate_params {
    item_price_id?: string;
  }
  export interface item_tiers_estimate_params {
    starting_unit?: number;
  }
  export interface item_tiers_estimate_params {
    ending_unit?: number;
  }
  export interface item_tiers_estimate_params {
    price?: number;
  }
  export interface item_tiers_estimate_params {
    starting_unit_in_decimal?: string;
  }
  export interface item_tiers_estimate_params {
    ending_unit_in_decimal?: string;
  }
  export interface item_tiers_estimate_params {
    price_in_decimal?: string;
  }
  export interface shipping_addresses_estimate_params {
    first_name?: string;
  }
  export interface shipping_addresses_estimate_params {
    last_name?: string;
  }
  export interface shipping_addresses_estimate_params {
    email?: string;
  }
  export interface shipping_addresses_estimate_params {
    company?: string;
  }
  export interface shipping_addresses_estimate_params {
    phone?: string;
  }
  export interface shipping_addresses_estimate_params {
    line1?: string;
  }
  export interface shipping_addresses_estimate_params {
    line2?: string;
  }
  export interface shipping_addresses_estimate_params {
    line3?: string;
  }
  export interface shipping_addresses_estimate_params {
    city?: string;
  }
  export interface shipping_addresses_estimate_params {
    state?: string;
  }
  export interface shipping_addresses_estimate_params {
    state_code?: string;
  }
  export interface shipping_addresses_estimate_params {
    country?: string;
  }
  export interface shipping_addresses_estimate_params {
    zip?: string;
  }
  export interface shipping_addresses_estimate_params {
    validation_status?: string;
  }
  export interface discounts_estimate_params {
    index?: number;
  }
  export interface discounts_estimate_params {
    coupon_id?: string;
  }
  export interface discounts_estimate_params {
    percentage?: number;
  }
  export interface discounts_estimate_params {
    amount?: number;
  }
  export interface discounts_estimate_params {
    included_in_mrr?: boolean;
  }
  export interface subscription_info_estimate_params {
    index: number;
  }
  export interface subscription_info_estimate_params {
    subscription_id?: string;
  }
  export interface subscription_info_estimate_params {
    billing_cycles?: number;
  }
  export interface subscription_info_estimate_params {
    contract_term_billing_cycle_on_renewal?: number;
  }
  export interface contract_terms_estimate_params {
    index: number;
  }
  export interface contract_terms_estimate_params {
    action_at_term_end?: string;
  }
  export interface contract_terms_estimate_params {
    cancellation_cutoff_period?: number;
  }
}
