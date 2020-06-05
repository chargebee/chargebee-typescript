import {Model} from "./model";

export class CreditNoteTax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
}
