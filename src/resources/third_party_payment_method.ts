import {Model} from "./model";
import { Api } from './api'

export class ThirdPartyPaymentMethod extends Model {
  public type: string;
  public gateway: string;
  public gateway_account_id?: string;
  public reference_id: string;
}

// OPERATIONS
//-----------
export class ThirdPartyPaymentMethodApi extends Api {
} // ~ThirdPartyPaymentMethod



  // REQUEST PARAMS
  //---------------

export namespace _third_party_payment_method {
}
