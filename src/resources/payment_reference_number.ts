import {Model} from "./model";
import { Api } from './api'

export class PaymentReferenceNumber extends Model {
  public id: string;
  public type: string;
  public number: string;
  public invoice_id?: string;
}

// OPERATIONS
//-----------
export class PaymentReferenceNumberApi extends Api {
} // ~PaymentReferenceNumber



  // REQUEST PARAMS
  //---------------

export namespace _payment_reference_number {
}
