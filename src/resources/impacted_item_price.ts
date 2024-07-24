import {Model} from "./model";
import { Api } from './api'

export class ImpactedItemPrice extends Model {
  public count?: number;
  public download?: Download;
  public item_prices?: any;
}

// OPERATIONS
//-----------
export class ImpactedItemPriceApi extends Api {
} // ~ImpactedItemPrice

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _impacted_item_price {
}
