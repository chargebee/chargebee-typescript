import {Model} from "./model";

export class PortalSessionLinkedCustomer extends Model {
  public customer_id: string;
  public email?: string;
  public has_billing_address: boolean;
  public has_payment_method: boolean;
  public has_active_subscription: boolean;
}
