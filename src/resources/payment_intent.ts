import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PaymentIntent extends Model {
  public id: string;
  public status: string;
  public currency_code?: string;
  public amount: number;
  public gateway_account_id: string;
  public expires_at: number;
  public reference_id?: string;
  public payment_method_type?: string;
  public created_at: number;
  public modified_at: number;
  public customer_id: string;
  public gateway?: string;
  public active_payment_attempt?: PaymentAttempt;

  

  // OPERATIONS
  //-----------

  public static create(params?: _payment_intent.create_params) {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update(payment_intent_id: string, params?: _payment_intent.update_params) {
    return new RequestWrapper([payment_intent_id, params], {
      'methodName': 'update',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(payment_intent_id: string, params?: any) {
    return new RequestWrapper([payment_intent_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_intents',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
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
} // ~PaymentAttempt



  // REQUEST PARAMS
  //---------------

export namespace _payment_intent {
  export interface create_params {
    customer_id?: string;
    amount: number;
    currency_code: string;
    gateway_account_id?: string;
    reference_id?: string;
    payment_method_type?: string;
  }
  export interface update_params {
    amount?: number;
    currency_code?: string;
    gateway_account_id?: string;
    payment_method_type?: string;
  }
}
