import {Model} from "./model";
import { Api } from './api'

export class BusinessEntityTransfer extends Model {
  public id: string;
  public resource_type: string;
  public resource_id: string;
  public active_resource_id: string;
  public destination_business_entity_id: string;
  public source_business_entity_id: string;
  public reason_code: string;
  public created_at: number;
}

// OPERATIONS
//-----------
export class BusinessEntityTransferApi extends Api {
} // ~BusinessEntityTransfer



  // REQUEST PARAMS
  //---------------

export namespace _business_entity_transfer {
}
