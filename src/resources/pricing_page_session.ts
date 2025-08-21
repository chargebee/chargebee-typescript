import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PricingPageSession extends Model {
  public id?: string;
  public url?: string;
  public created_at?: number;
  public expires_at?: number;

  

  // OPERATIONS
  //-----------

  public static create_for_new_subscription(params?: _pricing_page_session.create_for_new_subscription_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_new_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/pricing_page_sessions',
      'urlSuffix': '/create_for_new_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

  public static create_for_existing_subscription(params?: _pricing_page_session.create_for_existing_subscription_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create_for_existing_subscription',
      'httpMethod': 'POST',
      'urlPrefix': '/pricing_page_sessions',
      'urlSuffix': '/create_for_existing_subscription',
      'hasIdInUrl': false,
      'isListReq': false,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~PricingPageSession



  // REQUEST PARAMS
  //---------------

export namespace _pricing_page_session {
  export interface create_for_new_subscription_params {
    redirect_url?: string;
    business_entity_id?: string;
    pricing_page?: pricing_page_create_for_new_subscription_params;
    subscription?: subscription_create_for_new_subscription_params;
    customer?: customer_create_for_new_subscription_params;
    billing_address?: billing_address_create_for_new_subscription_params;
    shipping_address?: shipping_address_create_for_new_subscription_params;
    discounts?: Array<discounts_create_for_new_subscription_params>;
  }
  export interface create_for_existing_subscription_params {
    redirect_url?: string;
    pricing_page?: pricing_page_create_for_existing_subscription_params;
    subscription?: subscription_create_for_existing_subscription_params;
    discounts?: Array<discounts_create_for_existing_subscription_params>;
  }
  export interface pricing_page_create_for_new_subscription_params {
    id: string;
  }
  export interface subscription_create_for_new_subscription_params {
    id?: string;
  }
  export interface customer_create_for_new_subscription_params {
    id?: string;
  }
  export interface customer_create_for_new_subscription_params {
    email?: string;
  }
  export interface customer_create_for_new_subscription_params {
    first_name?: string;
  }
  export interface customer_create_for_new_subscription_params {
    last_name?: string;
  }
  export interface customer_create_for_new_subscription_params {
    company?: string;
  }
  export interface customer_create_for_new_subscription_params {
    phone?: string;
  }
  export interface customer_create_for_new_subscription_params {
    locale?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    first_name?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    last_name?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    email?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    company?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    phone?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    line1?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    line2?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    line3?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    city?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    state_code?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    state?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    zip?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    country?: string;
  }
  export interface billing_address_create_for_new_subscription_params {
    validation_status?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    first_name?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    last_name?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    email?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    company?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    phone?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    line1?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    line2?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    line3?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    city?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    state_code?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    state?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    zip?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    country?: string;
  }
  export interface shipping_address_create_for_new_subscription_params {
    validation_status?: string;
  }
  export interface discounts_create_for_new_subscription_params {
    apply_on?: string;
  }
  export interface discounts_create_for_new_subscription_params {
    duration_type: string;
  }
  export interface discounts_create_for_new_subscription_params {
    percentage?: number;
  }
  export interface discounts_create_for_new_subscription_params {
    amount?: number;
  }
  export interface discounts_create_for_new_subscription_params {
    period?: number;
  }
  export interface discounts_create_for_new_subscription_params {
    period_unit?: string;
  }
  export interface discounts_create_for_new_subscription_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_create_for_new_subscription_params {
    item_price_id?: string;
  }
  export interface discounts_create_for_new_subscription_params {
    quantity?: number;
  }
  export interface discounts_create_for_new_subscription_params {
    label?: string;
  }
  export interface pricing_page_create_for_existing_subscription_params {
    id: string;
  }
  export interface subscription_create_for_existing_subscription_params {
    id: string;
  }
  export interface discounts_create_for_existing_subscription_params {
    apply_on?: string;
  }
  export interface discounts_create_for_existing_subscription_params {
    duration_type: string;
  }
  export interface discounts_create_for_existing_subscription_params {
    percentage?: number;
  }
  export interface discounts_create_for_existing_subscription_params {
    amount?: number;
  }
  export interface discounts_create_for_existing_subscription_params {
    period?: number;
  }
  export interface discounts_create_for_existing_subscription_params {
    period_unit?: string;
  }
  export interface discounts_create_for_existing_subscription_params {
    included_in_mrr?: boolean;
  }
  export interface discounts_create_for_existing_subscription_params {
    item_price_id?: string;
  }
  export interface discounts_create_for_existing_subscription_params {
    quantity?: number;
  }
  export interface discounts_create_for_existing_subscription_params {
    label?: string;
  }
}
