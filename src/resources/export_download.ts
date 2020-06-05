import {Model} from "./model";

export class ExportDownload extends Model {
  public download_url: string;
  public valid_till: number;
}
