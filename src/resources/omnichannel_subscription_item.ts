import * as resources from ".";
import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class OmnichannelSubscriptionItem extends Model {
  public id: string;
  public item_id_at_source: string;
  public item_parent_id_at_source?: string;
  public status: string;
  public auto_renew_status?: string;
  public current_term_start?: number;
  public current_term_end?: number;
  public expired_at?: number;
  public expiration_reason?: string;
  public cancelled_at?: number;
  public cancellation_reason?: string;
  public grace_period_expires_at?: number;
  public has_scheduled_changes: boolean;
  public resource_version?: number;
  public upcoming_renewal?: UpcomingRenewal;

  

  // OPERATIONS
  //-----------

  public static list_omni_sub_item_schedule_changes(omnichannel_subscription_item_id: string, params?: any):RequestWrapper<ListResult> {
    return new RequestWrapper([omnichannel_subscription_item_id, params], {
      'methodName': 'list_omni_sub_item_schedule_changes',
      'httpMethod': 'GET',
      'urlPrefix': '/omnichannel_subscription_items',
      'urlSuffix': '/scheduled_changes',
      'hasIdInUrl': true,
      'isListReq': true,
      'subDomain': null,
      'isOperationNeedsJsonInput': false,
      'jsonKeys': { 
      }
    }, ChargeBee._env)
  }

} // ~OmnichannelSubscriptionItem

export class UpcomingRenewal extends Model {
  public price_currency?: string;
  public price_units?: number;
  public price_nanos?: number;
} // ~UpcomingRenewal



  // REQUEST PARAMS
  //---------------

export namespace _omnichannel_subscription_item {
}
