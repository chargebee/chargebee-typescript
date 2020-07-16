import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

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
  public tiers?: Array<Tier>;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static invoice_unbilled_charges(params?: _unbilled_charge.invoice_unbilled_charges_params) {
    return new RequestWrapper([params], {
      'methodName': 'invoice_unbilled_charges',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/invoice_unbilled_charges',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(unbilled_charge_id: string, params?: any) {
    return new RequestWrapper([unbilled_charge_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _unbilled_charge.unbilled_charge_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static invoice_now_estimate(params?: _unbilled_charge.invoice_now_estimate_params) {
    return new RequestWrapper([params], {
      'methodName': 'invoice_now_estimate',
      'httpMethod': 'POST',
      'urlPrefix': '/unbilled_charges',
      'urlSuffix': '/invoice_now_estimate',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~UnbilledCharge

export class Tier extends Model {
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
} // ~Tier



  // REQUEST PARAMS
  //---------------

export namespace _unbilled_charge {
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
}
