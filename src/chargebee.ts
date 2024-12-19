import {Util} from "./util";
import * as resources from "./resources";
export {_subscription} from "./resources/subscription";
export {_contract_term} from "./resources/contract_term";
export {_discount} from "./resources/discount";
export {_advance_invoice_schedule} from "./resources/advance_invoice_schedule";
export {_customer} from "./resources/customer";
export {_hierarchy} from "./resources/hierarchy";
export {_contact} from "./resources/contact";
export {_business_entity_transfer} from "./resources/business_entity_transfer";
export {_token} from "./resources/token";
export {_payment_source} from "./resources/payment_source";
export {_third_party_payment_method} from "./resources/third_party_payment_method";
export {_virtual_bank_account} from "./resources/virtual_bank_account";
export {_card} from "./resources/card";
export {_promotional_credit} from "./resources/promotional_credit";
export {_invoice} from "./resources/invoice";
export {_payment_reference_number} from "./resources/payment_reference_number";
export {_payment_schedule} from "./resources/payment_schedule";
export {_tax_withheld} from "./resources/tax_withheld";
export {_credit_note} from "./resources/credit_note";
export {_unbilled_charge} from "./resources/unbilled_charge";
export {_order} from "./resources/order";
export {_gift} from "./resources/gift";
export {_transaction} from "./resources/transaction";
export {_hosted_page} from "./resources/hosted_page";
export {_estimate} from "./resources/estimate";
export {_quote} from "./resources/quote";
export {_quoted_subscription} from "./resources/quoted_subscription";
export {_quoted_charge} from "./resources/quoted_charge";
export {_quote_line_group} from "./resources/quote_line_group";
export {_plan} from "./resources/plan";
export {_addon} from "./resources/addon";
export {_coupon} from "./resources/coupon";
export {_coupon_set} from "./resources/coupon_set";
export {_coupon_code} from "./resources/coupon_code";
export {_address} from "./resources/address";
export {_usage} from "./resources/usage";
export {_event} from "./resources/event";
export {_comment} from "./resources/comment";
export {_download} from "./resources/download";
export {_portal_session} from "./resources/portal_session";
export {_site_migration_detail} from "./resources/site_migration_detail";
export {_resource_migration} from "./resources/resource_migration";
export {_time_machine} from "./resources/time_machine";
export {_export} from "./resources/export";
export {_payment_intent} from "./resources/payment_intent";
export {_gateway_error_detail} from "./resources/gateway_error_detail";
export {_item_family} from "./resources/item_family";
export {_item} from "./resources/item";
export {_price_variant} from "./resources/price_variant";
export {_attribute} from "./resources/attribute";
export {_item_price} from "./resources/item_price";
export {_attached_item} from "./resources/attached_item";
export {_differential_price} from "./resources/differential_price";
export {_configuration} from "./resources/configuration";
export {_feature} from "./resources/feature";
export {_impacted_subscription} from "./resources/impacted_subscription";
export {_impacted_item} from "./resources/impacted_item";
export {_impacted_item_price} from "./resources/impacted_item_price";
export {_metadata} from "./resources/metadata";
export {_subscription_entitlement} from "./resources/subscription_entitlement";
export {_customer_entitlement} from "./resources/customer_entitlement";
export {_item_entitlement} from "./resources/item_entitlement";
export {_entitlement} from "./resources/entitlement";
export {_in_app_subscription} from "./resources/in_app_subscription";
export {_non_subscription} from "./resources/non_subscription";
export {_entitlement_override} from "./resources/entitlement_override";
export {_business_entity} from "./resources/business_entity";
export {_purchase} from "./resources/purchase";
export {_payment_voucher} from "./resources/payment_voucher";
export {_currency} from "./resources/currency";
export {_ramp} from "./resources/ramp";
export {_payment_schedule_scheme} from "./resources/payment_schedule_scheme";
export {_pricing_page_session} from "./resources/pricing_page_session";
export {_omnichannel_subscription} from "./resources/omnichannel_subscription";
export {_omnichannel_transaction} from "./resources/omnichannel_transaction";
export {_omnichannel_subscription_item} from "./resources/omnichannel_subscription_item";
export {_recorded_purchase} from "./resources/recorded_purchase";

interface Conf {
    api_key: string
    site: string
}

export class ChargeBee {
    static _env = require('./environment');
    static _api_version = 'v2';
    public configure(conf: Partial<typeof ChargeBee._env & Conf>) {
        Util.extend(true, ChargeBee._env, conf)
    }

    public updateRequestTimeoutInMillis(timeout){
        ChargeBee._env.timeout = timeout;
    }

    get subscription() {
        return resources.Subscription;
    }
    get contract_term() {
        return resources.ContractTerm;
    }
    get discount() {
        return resources.Discount;
    }
    get advance_invoice_schedule() {
        return resources.AdvanceInvoiceSchedule;
    }
    get customer() {
        return resources.Customer;
    }
    get hierarchy() {
        return resources.Hierarchy;
    }
    get contact() {
        return resources.Contact;
    }
    get business_entity_transfer() {
        return resources.BusinessEntityTransfer;
    }
    get token() {
        return resources.Token;
    }
    get payment_source() {
        return resources.PaymentSource;
    }
    get third_party_payment_method() {
        return resources.ThirdPartyPaymentMethod;
    }
    get virtual_bank_account() {
        return resources.VirtualBankAccount;
    }
    get card() {
        return resources.Card;
    }
    get promotional_credit() {
        return resources.PromotionalCredit;
    }
    get invoice() {
        return resources.Invoice;
    }
    get payment_reference_number() {
        return resources.PaymentReferenceNumber;
    }
    get payment_schedule() {
        return resources.PaymentSchedule;
    }
    get tax_withheld() {
        return resources.TaxWithheld;
    }
    get credit_note() {
        return resources.CreditNote;
    }
    get unbilled_charge() {
        return resources.UnbilledCharge;
    }
    get order() {
        return resources.Order;
    }
    get gift() {
        return resources.Gift;
    }
    get transaction() {
        return resources.Transaction;
    }
    get hosted_page() {
        return resources.HostedPage;
    }
    get estimate() {
        return resources.Estimate;
    }
    get quote() {
        return resources.Quote;
    }
    get quoted_subscription() {
        return resources.QuotedSubscription;
    }
    get quoted_charge() {
        return resources.QuotedCharge;
    }
    get quote_line_group() {
        return resources.QuoteLineGroup;
    }
    get plan() {
        return resources.Plan;
    }
    get addon() {
        return resources.Addon;
    }
    get coupon() {
        return resources.Coupon;
    }
    get coupon_set() {
        return resources.CouponSet;
    }
    get coupon_code() {
        return resources.CouponCode;
    }
    get address() {
        return resources.Address;
    }
    get usage() {
        return resources.Usage;
    }
    get event() {
        return resources.Event;
    }
    get comment() {
        return resources.Comment;
    }
    get download() {
        return resources.Download;
    }
    get portal_session() {
        return resources.PortalSession;
    }
    get site_migration_detail() {
        return resources.SiteMigrationDetail;
    }
    get resource_migration() {
        return resources.ResourceMigration;
    }
    get time_machine() {
        return resources.TimeMachine;
    }
    get export() {
        return resources.Export;
    }
    get payment_intent() {
        return resources.PaymentIntent;
    }
    get gateway_error_detail() {
        return resources.GatewayErrorDetail;
    }
    get item_family() {
        return resources.ItemFamily;
    }
    get item() {
        return resources.Item;
    }
    get price_variant() {
        return resources.PriceVariant;
    }
    get attribute() {
        return resources.Attribute;
    }
    get item_price() {
        return resources.ItemPrice;
    }
    get attached_item() {
        return resources.AttachedItem;
    }
    get differential_price() {
        return resources.DifferentialPrice;
    }
    get configuration() {
        return resources.Configuration;
    }
    get feature() {
        return resources.Feature;
    }
    get impacted_subscription() {
        return resources.ImpactedSubscription;
    }
    get impacted_item() {
        return resources.ImpactedItem;
    }
    get impacted_item_price() {
        return resources.ImpactedItemPrice;
    }
    get metadata() {
        return resources.Metadata;
    }
    get subscription_entitlement() {
        return resources.SubscriptionEntitlement;
    }
    get customer_entitlement() {
        return resources.CustomerEntitlement;
    }
    get item_entitlement() {
        return resources.ItemEntitlement;
    }
    get entitlement() {
        return resources.Entitlement;
    }
    get in_app_subscription() {
        return resources.InAppSubscription;
    }
    get non_subscription() {
        return resources.NonSubscription;
    }
    get entitlement_override() {
        return resources.EntitlementOverride;
    }
    get business_entity() {
        return resources.BusinessEntity;
    }
    get purchase() {
        return resources.Purchase;
    }
    get payment_voucher() {
        return resources.PaymentVoucher;
    }
    get currency() {
        return resources.Currency;
    }
    get ramp() {
        return resources.Ramp;
    }
    get payment_schedule_scheme() {
        return resources.PaymentScheduleScheme;
    }
    get pricing_page_session() {
        return resources.PricingPageSession;
    }
    get omnichannel_subscription() {
        return resources.OmnichannelSubscription;
    }
    get omnichannel_transaction() {
        return resources.OmnichannelTransaction;
    }
    get omnichannel_subscription_item() {
        return resources.OmnichannelSubscriptionItem;
    }
    get recorded_purchase() {
        return resources.RecordedPurchase;
    }
}

