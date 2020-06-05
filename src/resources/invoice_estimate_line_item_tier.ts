import {Model} from "./model";

export class InvoiceEstimateLineItemTier extends Model {
  public line_item_id?: string;
  public starting_unit: number;
  public ending_unit?: number;
  public quantity_used: number;
  public unit_amount: number;
}
