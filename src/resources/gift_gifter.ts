import {Model} from "./model";

export class GiftGifter extends Model {
  public customer_id: string;
  public invoice_id?: string;
  public signature?: string;
  public note?: string;
}
