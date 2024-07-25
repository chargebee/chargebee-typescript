import {ListResult} from '../list_result';
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import { Api } from './api'

export class SiteMigrationDetail extends Model {
  public entity_id: string;
  public other_site_name: string;
  public entity_id_at_other_site: string;
  public migrated_at: number;
  public entity_type: string;
  public status: string;
}

// OPERATIONS
//-----------
export class SiteMigrationDetailApi extends Api {
  public list(params?: _site_migration_detail.site_migration_detail_list_params):RequestWrapper<ListResult> {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/site_migration_details',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, this._env)
  }
} // ~SiteMigrationDetail



  // REQUEST PARAMS
  //---------------

export namespace _site_migration_detail {
  export interface site_migration_detail_list_params {
    limit?: number;
    offset?: string;
    entity_id_at_other_site?: filter._string;
    other_site_name?: filter._string;
    entity_id?: filter._string;
    entity_type?: filter._enum;
    status?: filter._enum;
  }
}
