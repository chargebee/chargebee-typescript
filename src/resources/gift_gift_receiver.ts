import {Model} from "./model";

export class GiftGiftReceiver extends Model {
  public customer_id: string;
  public subscription_id: string;
  public first_name?: string;
  public last_name?: string;
  public email?: string;
}
