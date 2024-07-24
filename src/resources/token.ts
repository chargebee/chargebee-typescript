import {Model} from "./model";
import { Api } from './api'

export class Token extends Model {
  public id: string;
  public gateway: string;
  public gateway_account_id: string;
  public payment_method_type: string;
  public status: string;
  public id_at_vault: string;
  public vault: string;
  public ip_address?: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public expired_at?: number;
}

// OPERATIONS
//-----------
export class TokenApi extends Api {
} // ~Token



  // REQUEST PARAMS
  //---------------

export namespace _token {
}
