import {Model} from "./model";

export class CustomerChildAccountAccess extends Model {
  public portal_edit_subscriptions?: string;
  public portal_download_invoices?: string;
  public send_subscription_emails: boolean;
  public send_invoice_emails: boolean;
  public send_payment_emails: boolean;
}
