import {Model} from "./model";
import { Api } from './api'

export class ImpactedSubscription extends Model {
  public count?: number;
  public download?: Download;
  public subscription_ids?: any;
}

// OPERATIONS
//-----------
export class ImpactedSubscriptionApi extends Api {
} // ~ImpactedSubscription

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _impacted_subscription {
}
