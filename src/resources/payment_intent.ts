import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class PaymentIntent extends Model {
  public id: string;
  public status: string;
  public currency_code?: string;
  public amount: number;
  public gateway_account_id: string;
  public expires_at: number;
  public reference_id?: string;
  public payment_method_type?: string;
  public success_url?: string;
  public failure_url?: string;
  public created_at: number;
  public modified_at: number;
  public resource_version?: number;
  public updated_at?: number;
  public customer_id: string;
  public gateway?: string;
  public active_payment_attempt?: PaymentAttempt;
  public business_entity_id?: string;
}

// OPERATIONS
//-----------
export class PaymentIntentApi extends Api {
  public create(params?: _payment_intent.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public update(payment_intent_id: string, params?: _payment_intent.update_params):RequestWrapper {
    return new RequestWrapper([payment_intent_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public retrieve(payment_intent_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([payment_intent_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }
} // ~PaymentIntent

export class PaymentAttempt extends Model {
  public id?: string;
  public status: string;
  public payment_method_type?: string;
  public id_at_gateway?: string;
  public error_code?: string;
  public error_text?: string;
  public created_at: number;
  public modified_at: number;
  public error_detail?: resources.GatewayErrorDetail;
} // ~PaymentAttempt



  // REQUEST PARAMS
  //---------------

export namespace _payment_intent {
  export interface create_params {
    business_entity_id?: string;
    customer_id?: string;
    amount: number;
    currency_code: string;
    gateway_account_id?: string;
    reference_id?: string;
    payment_method_type?: string;
    success_url?: string;
    failure_url?: string;
  }
  export interface update_params {
    amount?: number;
    currency_code?: string;
    gateway_account_id?: string;
    payment_method_type?: string;
    success_url?: string;
    failure_url?: string;
  }
}
