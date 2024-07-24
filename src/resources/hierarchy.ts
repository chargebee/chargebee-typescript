import {Model} from "./model";
import { Api } from './api'

export class Hierarchy extends Model {
  public customer_id: string;
  public parent_id?: string;
  public payment_owner_id: string;
  public invoice_owner_id: string;
  public children_ids?: Array<string>;
}

// OPERATIONS
//-----------
export class HierarchyApi extends Api {
} // ~Hierarchy



  // REQUEST PARAMS
  //---------------

export namespace _hierarchy {
}
