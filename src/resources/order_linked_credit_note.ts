import {Model} from "./model";

export class OrderLinkedCreditNote extends Model {
  public amount?: number;
  public type: string;
  public id: string;
  public status: string;
  public amount_adjusted?: number;
  public amount_refunded?: number;
}
