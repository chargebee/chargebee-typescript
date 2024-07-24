import {Model} from "./model";
import { Api } from './api'

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
}

// OPERATIONS
//-----------
export class DownloadApi extends Api {
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _download {
}
