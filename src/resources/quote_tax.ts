import {Model} from "./model";

export class QuoteTax extends Model {
  public name: string;
  public amount: number;
  public description?: string;
}
