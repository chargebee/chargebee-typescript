import {Util} from "./util";
import { SubscriptionApi } from './resources/subscription'
import { CustomerApi } from './resources/customer'
import { ContractTermApi } from './resources/contract_term'
import { DiscountApi } from './resources/discount'
import { AdvanceInvoiceScheduleApi } from './resources/advance_invoice_schedule'
import { HierarchyApi } from './resources/hierarchy'
import { ContactApi } from './resources/contact'
import { BusinessEntityTransferApi } from './resources/business_entity_transfer'
import { TokenApi } from './resources/token'
import { PaymentSourceApi } from './resources/payment_source'
import { ThirdPartyPaymentMethodApi } from './resources/third_party_payment_method'
import { VirtualBankAccountApi } from './resources/virtual_bank_account'
import { CardApi } from './resources/card'
import { PromotionalCreditApi } from './resources/promotional_credit'
import { InvoiceApi } from './resources/invoice'
import { CreditNoteApi } from './resources/credit_note'
import { UnbilledChargeApi } from './resources/unbilled_charge'
import { OrderApi } from './resources/order'
import { GiftApi } from './resources/gift'
import { TransactionApi } from './resources/transaction'
import { HostedPageApi } from './resources/hosted_page'
import { EstimateApi } from './resources/estimate'
import { QuoteApi } from './resources/quote'
import { PlanApi } from './resources/plan'
import { AddonApi } from './resources/addon'
import { CouponApi } from './resources/coupon'
import { CouponSetApi } from './resources/coupon_set'
import { CouponCodeApi } from './resources/coupon_code'
import { AddressApi } from './resources/address'
import { UsageApi } from './resources/usage'
import { EventApi } from './resources/event'
import { CommentApi } from './resources/comment'
import { PortalSessionApi } from './resources/portal_session'
import { SiteMigrationDetailApi } from './resources/site_migration_detail'
import { ResourceMigrationApi } from './resources/resource_migration'
import { TimeMachineApi } from './resources/time_machine'
import { ExportApi } from './resources/export'
import { PaymentIntentApi } from './resources/payment_intent'
import { ItemFamilyApi } from './resources/item_family'
import { ItemApi } from './resources/item'
import { PriceVariantApi } from './resources/price_variant'
import { ItemPriceApi } from './resources/item_price'
import { AttachedItemApi } from './resources/attached_item'
import { DifferentialPriceApi } from './resources/differential_price'
import { FeatureApi } from './resources/feature'
import { ItemEntitlementApi } from './resources/item_entitlement'
import { EntitlementApi } from './resources/entitlement'
import { SubscriptionEntitlementApi } from './resources/subscription_entitlement'
import { InAppSubscriptionApi } from './resources/in_app_subscription'
import { NonSubscriptionApi } from './resources/non_subscription'
import { EntitlementOverrideApi } from './resources/entitlement_override'
import { BusinessEntityApi } from './resources/business_entity'
import { PurchaseApi } from './resources/purchase'
import { PaymentVoucherApi } from './resources/payment_voucher'
import { CurrencyApi } from './resources/currency'
import { RampApi } from './resources/ramp'
import { InstallmentConfigApi } from './resources/installment_config'
import { InstallmentApi } from './resources/installment'
import { PricingPageSessionApi } from './resources/pricing_page_session'
import { InstallmentDetailApi } from './resources/installment_detail'
import { ImpactedItemPriceApi } from './resources/impacted_item_price'
import { ImpactedSubscriptionApi } from './resources/impacted_subscription'
import { ImpactedItemApi } from './resources/impacted_item'
import { AttributeApi } from './resources/attribute'
import { GatewayErrorDetailApi } from './resources/gateway_error_detail'
import { DownloadApi } from './resources/download'
import { QuotedSubscriptionApi } from './resources/quoted_subscription'
import { QuotedChargeApi } from './resources/quoted_charge'
import { QuoteLineGroupApi } from './resources/quote_line_group'
import { TaxWithheldApi } from './resources/tax_withheld'
import { PaymentReferenceNumberApi } from './resources/payment_reference_number'
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
export {_feature} from "./resources/feature";
export {_impacted_subscription} from "./resources/impacted_subscription";
export {_impacted_item} from "./resources/impacted_item";
export {_impacted_item_price} from "./resources/impacted_item_price";
export {_subscription_entitlement} from "./resources/subscription_entitlement";
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
export {_installment_config} from "./resources/installment_config";
export {_installment} from "./resources/installment";
export {_installment_detail} from "./resources/installment_detail";
export {_pricing_page_session} from "./resources/pricing_page_session";

interface Conf {
    api_key: string
    site: string
}

export interface Environment extends Conf {
    readonly protocol: string,
    readonly hostSuffix: string,
    readonly apiPath: string,
    readonly timeout: number,
    readonly clientVersion: string,
    readonly port: number,
    readonly timemachineWaitInMillis: number,
    readonly exportWaitInMillis: number
}

export class ChargeBee {
    static _api_version = 'v2';

    _env = require('./environment');

    public configure(conf: Partial<Environment>) {
        Util.extend(true, this._env, conf)
    }

    public updateRequestTimeoutInMillis(timeout){
        this._env.timeout = timeout;
    }

    get subscription() {
        return new SubscriptionApi(this._env);
    }
    get contract_term() {
        return new ContractTermApi(this._env);
    }
    get discount() {
        return new DiscountApi(this._env);
    }
    get advance_invoice_schedule() {
        return new AdvanceInvoiceScheduleApi(this._env);
    }
    get customer() {
        return new CustomerApi(this._env);
    }
    get hierarchy() {
        return new HierarchyApi(this._env);
    }
    get contact() {
        return new ContactApi(this._env);
    }
    get business_entity_transfer() {
        return new BusinessEntityTransferApi(this._env);
    }
    get token() {
        return new TokenApi(this._env);
    }
    get payment_source() {
        return new PaymentSourceApi(this._env);
    }
    get third_party_payment_method() {
        return new ThirdPartyPaymentMethodApi(this._env);
    }
    get virtual_bank_account() {
        return new VirtualBankAccountApi(this._env);
    }
    get card() {
        return new CardApi(this._env);
    }
    get promotional_credit() {
        return new PromotionalCreditApi(this._env);
    }
    get invoice() {
        return new InvoiceApi(this._env);
    }
    get payment_reference_number() {
        return new PaymentReferenceNumberApi(this._env);
    }
    get tax_withheld() {
        return new TaxWithheldApi(this._env);
    }
    get credit_note() {
        return new CreditNoteApi(this._env);
    }
    get unbilled_charge() {
        return new UnbilledChargeApi(this._env);
    }
    get order() {
        return new OrderApi(this._env);
    }
    get gift() {
        return new GiftApi(this._env);
    }
    get transaction() {
        return new TransactionApi(this._env);
    }
    get hosted_page() {
        return new HostedPageApi(this._env);
    }
    get estimate() {
        return new EstimateApi(this._env);
    }
    get quote() {
        return new QuoteApi(this._env);
    }
    get quoted_subscription() {
        return new QuotedSubscriptionApi(this._env);
    }
    get quoted_charge() {
        return new QuotedChargeApi(this._env);
    }
    get quote_line_group() {
        return new QuoteLineGroupApi(this._env);
    }
    get plan() {
        return new PlanApi(this._env);
    }
    get addon() {
        return new AddonApi(this._env);
    }
    get coupon() {
        return new CouponApi(this._env);
    }
    get coupon_set() {
        return new CouponSetApi(this._env);
    }
    get coupon_code() {
        return new CouponCodeApi(this._env);
    }
    get address() {
        return new AddressApi(this._env);
    }
    get usage() {
        return new UsageApi(this._env);
    }
    get event() {
        return new EventApi(this._env);
    }
    get comment() {
        return new CommentApi(this._env);
    }
    get download() {
        return new DownloadApi(this._env);
    }
    get portal_session() {
        return new PortalSessionApi(this._env);
    }
    get site_migration_detail() {
        return new SiteMigrationDetailApi(this._env);
    }
    get resource_migration() {
        return new ResourceMigrationApi(this._env);
    }
    get time_machine() {
        return new TimeMachineApi(this._env);
    }
    get export() {
        return new ExportApi(this._env);
    }
    get payment_intent() {
        return new PaymentIntentApi(this._env);
    }
    get gateway_error_detail() {
        return new GatewayErrorDetailApi(this._env);
    }
    get item_family() {
        return new ItemFamilyApi(this._env);
    }
    get item() {
        return new ItemApi(this._env);
    }
    get price_variant() {
        return new PriceVariantApi(this._env);
    }
    get attribute() {
        return new AttributeApi(this._env);
    }
    get item_price() {
        return new ItemPriceApi(this._env);
    }
    get attached_item() {
        return new AttachedItemApi(this._env);
    }
    get differential_price() {
        return new DifferentialPriceApi(this._env);
    }
    get feature() {
        return new FeatureApi(this._env);
    }
    get impacted_subscription() {
        return new ImpactedSubscriptionApi(this._env);
    }
    get impacted_item() {
        return new ImpactedItemApi(this._env);
    }
    get impacted_item_price() {
        return new ImpactedItemPriceApi(this._env);
    }
    get subscription_entitlement() {
        return new SubscriptionEntitlementApi(this._env);
    }
    get item_entitlement() {
        return new ItemEntitlementApi(this._env);
    }
    get entitlement() {
        return new EntitlementApi(this._env);
    }
    get in_app_subscription() {
        return new InAppSubscriptionApi(this._env);
    }
    get non_subscription() {
        return new NonSubscriptionApi(this._env);
    }
    get entitlement_override() {
        return new EntitlementOverrideApi(this._env);
    }
    get business_entity() {
        return new BusinessEntityApi(this._env);
    }
    get purchase() {
        return new PurchaseApi(this._env);
    }
    get payment_voucher() {
        return new PaymentVoucherApi(this._env);
    }
    get currency() {
        return new CurrencyApi(this._env);
    }
    get ramp() {
        return new RampApi(this._env);
    }
    get installment_config() {
        return new InstallmentConfigApi(this._env);
    }
    get installment() {
        return new InstallmentApi(this._env);
    }
    get installment_detail() {
        return new InstallmentDetailApi(this._env)
    }
    get pricing_page_session() {
        return new PricingPageSessionApi(this._env);
    }
}
