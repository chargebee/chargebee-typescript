import {Model} from "./model";

export class InvoiceTax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
}
