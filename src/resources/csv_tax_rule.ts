import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import { Api } from './api'

export class CsvTaxRule extends Model {
  public tax_profile_name?: string;
  public country?: string;
  public state?: string;
  public zip_code?: string;
  public zip_code_start?: number;
  public zip_code_end?: number;
  public tax1_name: string;
  public tax1_rate: number;
  public tax1_juris_type?: string;
  public tax1_juris_name?: string;
  public tax1_juris_code?: string;
  public tax2_name?: string;
  public tax2_rate?: number;
  public tax2_juris_type?: string;
  public tax2_juris_name?: string;
  public tax2_juris_code?: string;
  public tax3_name?: string;
  public tax3_rate?: number;
  public tax3_juris_type?: string;
  public tax3_juris_name?: string;
  public tax3_juris_code?: string;
  public tax4_name?: string;
  public tax4_rate?: number;
  public tax4_juris_type?: string;
  public tax4_juris_name?: string;
  public tax4_juris_code?: string;
  public status?: string;
  public time_zone?: string;
  public valid_from?: number;
  public valid_till?: number;
  public service_type?: string;
  public rule_weight?: number;
  public overwrite: boolean;
}

// OPERATIONS
//-----------
export class CsvTaxRuleApi extends Api {
  public create(params?: _csv_tax_rule.create_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'create',
      'httpMethod': 'POST',
      'urlPrefix': '/csv_tax_rules',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~CsvTaxRule



  // REQUEST PARAMS
  //---------------

export namespace _csv_tax_rule {
  export interface create_params {
    tax_profile_name?: string;
    country?: string;
    state?: string;
    zip_code?: string;
    zip_code_start?: number;
    zip_code_end?: number;
    tax1_name?: string;
    tax1_rate?: number;
    tax1_juris_type?: string;
    tax1_juris_name?: string;
    tax1_juris_code?: string;
    tax2_name?: string;
    tax2_rate?: number;
    tax2_juris_type?: string;
    tax2_juris_name?: string;
    tax2_juris_code?: string;
    tax3_name?: string;
    tax3_rate?: number;
    tax3_juris_type?: string;
    tax3_juris_name?: string;
    tax3_juris_code?: string;
    tax4_name?: string;
    tax4_rate?: number;
    tax4_juris_type?: string;
    tax4_juris_name?: string;
    tax4_juris_code?: string;
    service_type?: string;
    time_zone?: string;
    valid_from?: number;
    valid_till?: number;
    overwrite?: boolean;
  }
}
