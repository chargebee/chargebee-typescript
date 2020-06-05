import {Model} from "./model";

export class InvoiceEstimateTax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
}
