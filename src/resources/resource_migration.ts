import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class ResourceMigration extends Model {
  public from_site: string;
  public entity_type: string;
  public entity_id: string;
  public status: string;
  public errors?: string;
  public created_at: number;
  public updated_at: number;
}

// OPERATIONS
//-----------
export class ResourceMigrationApi extends Api {
  public retrieve_latest(params?: _resource_migration.retrieve_latest_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'retrieve_latest',
      'httpMethod': 'GET',
      'urlPrefix': '/resource_migrations',
      'urlSuffix': '/retrieve_latest',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~ResourceMigration



  // REQUEST PARAMS
  //---------------

export namespace _resource_migration {
  export interface retrieve_latest_params {
    from_site: string;
    entity_type: string;
    entity_id: string;
  }
}
