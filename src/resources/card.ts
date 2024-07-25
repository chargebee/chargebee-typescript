import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class Card extends Model {
  public payment_source_id: string;
  public status: string;
  public gateway: string;
  public gateway_account_id?: string;
  public ref_tx_id?: string;
  public first_name?: string;
  public last_name?: string;
  public iin: string;
  public last4: string;
  public card_type?: string;
  public funding_type: string;
  public expiry_month: number;
  public expiry_year: number;
  public issuing_country?: string;
  public billing_addr1?: string;
  public billing_addr2?: string;
  public billing_city?: string;
  public billing_state_code?: string;
  public billing_state?: string;
  public billing_country?: string;
  public billing_zip?: string;
  public created_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public ip_address?: string;
  public powered_by?: string;
  public customer_id: string;
  public masked_number?: string;
}

// OPERATIONS
//-----------
export class CardApi extends Api {
  public retrieve(card_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([card_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/cards',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public update_card_for_customer(customer_id: string, params?: _card.update_card_for_customer_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'update_card_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/credit_card',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public switch_gateway_for_customer(customer_id: string, params?: _card.switch_gateway_for_customer_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'switch_gateway_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/switch_gateway',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public copy_card_for_customer(customer_id: string, params?: _card.copy_card_for_customer_params):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'copy_card_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/copy_card',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public delete_card_for_customer(customer_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([customer_id, params], {
      'methodName': 'delete_card_for_customer',
      'httpMethod': 'POST',
      'urlPrefix': '/customers',
      'urlSuffix': '/delete_card',
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~Card



  // REQUEST PARAMS
  //---------------

export namespace _card {
  export interface update_card_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
    gateway_account_id?: string;
    tmp_token?: string;
    first_name?: string;
    last_name?: string;
    number: string;
    expiry_month: number;
    expiry_year: number;
    cvv?: string;
    billing_addr1?: string;
    billing_addr2?: string;
    billing_city?: string;
    billing_state_code?: string;
    billing_state?: string;
    billing_zip?: string;
    billing_country?: string;
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    ip_address?: string;
    customer?: customer_update_card_for_customer_params;
  }
  export interface switch_gateway_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gateway?: string;
    gateway_account_id: string;
  }
  export interface copy_card_for_customer_params {
    gateway_account_id: string;
  }
  export interface customer_update_card_for_customer_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    vat_number?: string;
  }
}
