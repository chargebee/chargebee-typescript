import {Model} from "./model";

export class TransactionLinkedPayment extends Model {
  public id: string;
  public status?: string;
  public amount?: number;
  public date?: number;
}
