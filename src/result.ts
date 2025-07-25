import * as resources from "./resources";
import {Util} from "./util";
import { IdempotencyConstants } from "./idempotency_constants";

export class Result {
    readonly #_response: any;
    readonly responseHeaders: any;
    readonly responseStatusCode: number | string;

    get subscription(): resources.Subscription {
        let _subscription = this.get(
            'subscription',
            'Subscription',
            {'subscription_items': 'SubscriptionSubscriptionItem', 'item_tiers': 'SubscriptionItemTier', 'charged_items': 'SubscriptionChargedItem', 'addons': 'SubscriptionAddon', 'event_based_addons': 'SubscriptionEventBasedAddon', 'charged_event_based_addons': 'SubscriptionChargedEventBasedAddon', 'coupons': 'SubscriptionCoupon', 'shipping_address': 'SubscriptionShippingAddress', 'referral_info': 'SubscriptionReferralInfo', 'billing_override': 'SubscriptionBillingOverride', 'contract_term': 'SubscriptionContractTerm', 'discounts': 'SubscriptionDiscount'}
        );
        return _subscription;
    }
    get contract_term(): resources.ContractTerm {
        let _contract_term = this.get(
            'contract_term',
            'ContractTerm'
        );
        return _contract_term;
    }
    get discount(): resources.Discount {
        let _discount = this.get(
            'discount',
            'Discount'
        );
        return _discount;
    }
    get advance_invoice_schedule(): resources.AdvanceInvoiceSchedule {
        let _advance_invoice_schedule = this.get(
            'advance_invoice_schedule',
            'AdvanceInvoiceSchedule',
            {'fixed_interval_schedule': 'AdvanceInvoiceScheduleFixedIntervalSchedule', 'specific_dates_schedule': 'AdvanceInvoiceScheduleSpecificDatesSchedule'}
        );
        return _advance_invoice_schedule;
    }
    get customer(): resources.Customer {
        let _customer = this.get(
            'customer',
            'Customer',
            {'billing_address': 'CustomerBillingAddress', 'referral_urls': 'CustomerReferralUrl', 'contacts': 'CustomerContact', 'payment_method': 'CustomerPaymentMethod', 'balances': 'CustomerBalance', 'entity_identifiers': 'CustomerEntityIdentifier', 'tax_providers_fields': 'CustomerTaxProvidersField', 'relationship': 'CustomerRelationship', 'parent_account_access': 'CustomerParentAccountAccess', 'child_account_access': 'CustomerChildAccountAccess'}
        );
        return _customer;
    }
    get hierarchy(): resources.Hierarchy {
        let _hierarchy = this.get(
            'hierarchy',
            'Hierarchy'
        );
        return _hierarchy;
    }
    get contact(): resources.Contact {
        let _contact = this.get(
            'contact',
            'Contact'
        );
        return _contact;
    }
    get business_entity_transfer(): resources.BusinessEntityTransfer {
        let _business_entity_transfer = this.get(
            'business_entity_transfer',
            'BusinessEntityTransfer'
        );
        return _business_entity_transfer;
    }
    get token(): resources.Token {
        let _token = this.get(
            'token',
            'Token'
        );
        return _token;
    }
    get payment_source(): resources.PaymentSource {
        let _payment_source = this.get(
            'payment_source',
            'PaymentSource',
            {'card': 'PaymentSourceCard', 'bank_account': 'PaymentSourceBankAccount', 'cust_voucher_source': 'PaymentSourceCustVoucherSource', 'billing_address': 'PaymentSourceBillingAddress', 'amazon_payment': 'PaymentSourceAmazonPayment', 'upi': 'PaymentSourceUpi', 'paypal': 'PaymentSourcePaypal', 'venmo': 'PaymentSourceVenmo', 'klarna_pay_now': 'PaymentSourceKlarnaPayNow', 'mandates': 'PaymentSourceMandate'}
        );
        return _payment_source;
    }
    get third_party_payment_method(): resources.ThirdPartyPaymentMethod {
        let _third_party_payment_method = this.get(
            'third_party_payment_method',
            'ThirdPartyPaymentMethod'
        );
        return _third_party_payment_method;
    }
    get virtual_bank_account(): resources.VirtualBankAccount {
        let _virtual_bank_account = this.get(
            'virtual_bank_account',
            'VirtualBankAccount'
        );
        return _virtual_bank_account;
    }
    get card(): resources.Card {
        let _card = this.get(
            'card',
            'Card'
        );
        return _card;
    }
    get promotional_credit(): resources.PromotionalCredit {
        let _promotional_credit = this.get(
            'promotional_credit',
            'PromotionalCredit'
        );
        return _promotional_credit;
    }
    get invoice(): resources.Invoice {
        let _invoice = this.get(
            'invoice',
            'Invoice',
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_credits': 'InvoiceLineItemCredit', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'statement_descriptor': 'InvoiceStatementDescriptor', 'billing_address': 'InvoiceBillingAddress', 'einvoice': 'InvoiceEinvoice', 'site_details_at_creation': 'InvoiceSiteDetailsAtCreation', 'tax_origin': 'InvoiceTaxOrigin', 'line_item_addresses': 'InvoiceLineItemAddress'}
        );
        return _invoice;
    }
    get payment_reference_number(): resources.PaymentReferenceNumber {
        let _payment_reference_number = this.get(
            'payment_reference_number',
            'PaymentReferenceNumber'
        );
        return _payment_reference_number;
    }
    get payment_schedule(): resources.PaymentSchedule {
        let _payment_schedule = this.get(
            'payment_schedule',
            'PaymentSchedule',
            {'schedule_entries': 'PaymentScheduleScheduleEntry'}
        );
        return _payment_schedule;
    }
    get tax_withheld(): resources.TaxWithheld {
        let _tax_withheld = this.get(
            'tax_withheld',
            'TaxWithheld'
        );
        return _tax_withheld;
    }
    get credit_note(): resources.CreditNote {
        let _credit_note = this.get(
            'credit_note',
            'CreditNote',
            {'einvoice': 'CreditNoteEinvoice', 'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation', 'shipping_address': 'CreditNoteShippingAddress', 'billing_address': 'CreditNoteBillingAddress', 'site_details_at_creation': 'CreditNoteSiteDetailsAtCreation', 'tax_origin': 'CreditNoteTaxOrigin', 'line_item_addresses': 'CreditNoteLineItemAddress'}
        );
        return _credit_note;
    }
    get unbilled_charge(): resources.UnbilledCharge {
        let _unbilled_charge = this.get(
            'unbilled_charge',
            'UnbilledCharge',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _unbilled_charge;
    }
    get order(): resources.Order {
        let _order = this.get(
            'order',
            'Order',
            {'order_line_items': 'OrderOrderLineItem', 'shipping_address': 'OrderShippingAddress', 'billing_address': 'OrderBillingAddress', 'line_item_taxes': 'OrderLineItemTax', 'line_item_discounts': 'OrderLineItemDiscount', 'linked_credit_notes': 'OrderLinkedCreditNote', 'resent_orders': 'OrderResentOrder'}
        );
        return _order;
    }
    get gift(): resources.Gift {
        let _gift = this.get(
            'gift',
            'Gift',
            {'gifter': 'GiftGifter', 'gift_receiver': 'GiftGiftReceiver', 'gift_timelines': 'GiftGiftTimeline'}
        );
        return _gift;
    }
    get transaction(): resources.Transaction {
        let _transaction = this.get(
            'transaction',
            'Transaction',
            {'linked_invoices': 'TransactionLinkedInvoice', 'linked_credit_notes': 'TransactionLinkedCreditNote', 'linked_refunds': 'TransactionLinkedRefund', 'linked_payments': 'TransactionLinkedPayment', 'gateway_error_detail': 'TransactionGatewayErrorDetail'}
        );
        return _transaction;
    }
    get hosted_page(): resources.HostedPage {
        let _hosted_page = this.get(
            'hosted_page',
            'HostedPage'
        );
        return _hosted_page;
    }
    get estimate(): resources.Estimate {
        let _estimate = this.get(
            'estimate',
            'Estimate',
            {},
            {'subscription_estimate': 'SubscriptionEstimate', 'subscription_estimates': 'SubscriptionEstimate', 'invoice_estimate': 'InvoiceEstimate', 'invoice_estimates': 'InvoiceEstimate', 'payment_schedule_estimates': 'PaymentScheduleEstimate', 'next_invoice_estimate': 'InvoiceEstimate', 'credit_note_estimates': 'CreditNoteEstimate', 'unbilled_charge_estimates': 'UnbilledCharge'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'subscription_estimate',
            {'shipping_address': 'SubscriptionEstimateShippingAddress', 'contract_term': 'SubscriptionEstimateContractTerm'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'invoice_estimate',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_credits': 'InvoiceEstimateLineItemCredit', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount', 'line_item_addresses': 'InvoiceEstimateLineItemAddress'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'next_invoice_estimate',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_credits': 'InvoiceEstimateLineItemCredit', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount', 'line_item_addresses': 'InvoiceEstimateLineItemAddress'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'subscription_estimates',
            {'shipping_address': 'SubscriptionEstimateShippingAddress', 'contract_term': 'SubscriptionEstimateContractTerm'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'invoice_estimates',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_credits': 'InvoiceEstimateLineItemCredit', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount', 'line_item_addresses': 'InvoiceEstimateLineItemAddress'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'payment_schedule_estimates',
            {'schedule_entries': 'PaymentScheduleEstimateScheduleEntry'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'credit_note_estimates',
            {'line_items': 'CreditNoteEstimateLineItem', 'discounts': 'CreditNoteEstimateDiscount', 'taxes': 'CreditNoteEstimateTax', 'line_item_taxes': 'CreditNoteEstimateLineItemTax', 'line_item_discounts': 'CreditNoteEstimateLineItemDiscount', 'line_item_tiers': 'CreditNoteEstimateLineItemTier'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'unbilled_charge_estimates',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _estimate;
    }
    get quote(): resources.Quote {
        let _quote = this.get(
            'quote',
            'Quote',
            {'line_items': 'QuoteLineItem', 'discounts': 'QuoteDiscount', 'line_item_discounts': 'QuoteLineItemDiscount', 'taxes': 'QuoteTax', 'line_item_taxes': 'QuoteLineItemTax', 'line_item_tiers': 'QuoteLineItemTier', 'shipping_address': 'QuoteShippingAddress', 'billing_address': 'QuoteBillingAddress'}
        );
        return _quote;
    }
    get quoted_subscription(): resources.QuotedSubscription {
        let _quoted_subscription = this.get(
            'quoted_subscription',
            'QuotedSubscription',
            {'addons': 'QuotedSubscriptionAddon', 'event_based_addons': 'QuotedSubscriptionEventBasedAddon', 'coupons': 'QuotedSubscriptionCoupon', 'subscription_items': 'QuotedSubscriptionSubscriptionItem', 'item_tiers': 'QuotedSubscriptionItemTier', 'quoted_contract_term': 'QuotedSubscriptionQuotedContractTerm'}
        );
        return _quoted_subscription;
    }
    get quoted_charge(): resources.QuotedCharge {
        let _quoted_charge = this.get(
            'quoted_charge',
            'QuotedCharge',
            {'charges': 'QuotedChargeCharge', 'addons': 'QuotedChargeAddon', 'invoice_items': 'QuotedChargeInvoiceItem', 'item_tiers': 'QuotedChargeItemTier', 'coupons': 'QuotedChargeCoupon'}
        );
        return _quoted_charge;
    }
    get quoted_ramp(): resources.QuotedRamp {
        let _quoted_ramp = this.get(
            'quoted_ramp',
            'QuotedRamp',
            {'line_items': 'QuotedRampLineItem', 'discounts': 'QuotedRampDiscount', 'item_tiers': 'QuotedRampItemTier', 'coupon_applicability_mappings': 'QuotedRampCouponApplicabilityMapping'}
        );
        return _quoted_ramp;
    }
    get billing_configuration(): resources.BillingConfiguration {
        let _billing_configuration = this.get(
            'billing_configuration',
            'BillingConfiguration',
            {'billing_dates': 'BillingConfigurationBillingDate'}
        );
        return _billing_configuration;
    }
    get quote_line_group(): resources.QuoteLineGroup {
        let _quote_line_group = this.get(
            'quote_line_group',
            'QuoteLineGroup',
            {'line_items': 'QuoteLineGroupLineItem', 'discounts': 'QuoteLineGroupDiscount', 'line_item_discounts': 'QuoteLineGroupLineItemDiscount', 'taxes': 'QuoteLineGroupTax', 'line_item_taxes': 'QuoteLineGroupLineItemTax'}
        );
        return _quote_line_group;
    }
    get plan(): resources.Plan {
        let _plan = this.get(
            'plan',
            'Plan',
            {'tiers': 'PlanTier', 'tax_providers_fields': 'PlanTaxProvidersField', 'applicable_addons': 'PlanApplicableAddon', 'attached_addons': 'PlanAttachedAddon', 'event_based_addons': 'PlanEventBasedAddon'}
        );
        return _plan;
    }
    get addon(): resources.Addon {
        let _addon = this.get(
            'addon',
            'Addon',
            {'tiers': 'AddonTier', 'tax_providers_fields': 'AddonTaxProvidersField'}
        );
        return _addon;
    }
    get coupon(): resources.Coupon {
        let _coupon = this.get(
            'coupon',
            'Coupon',
            {'item_constraints': 'CouponItemConstraint', 'item_constraint_criteria': 'CouponItemConstraintCriteria', 'coupon_constraints': 'CouponCouponConstraint'}
        );
        return _coupon;
    }
    get coupon_set(): resources.CouponSet {
        let _coupon_set = this.get(
            'coupon_set',
            'CouponSet'
        );
        return _coupon_set;
    }
    get coupon_code(): resources.CouponCode {
        let _coupon_code = this.get(
            'coupon_code',
            'CouponCode'
        );
        return _coupon_code;
    }
    get address(): resources.Address {
        let _address = this.get(
            'address',
            'Address'
        );
        return _address;
    }
    get usage(): resources.Usage {
        let _usage = this.get(
            'usage',
            'Usage'
        );
        return _usage;
    }
    get event(): resources.Event {
        let _event = this.get(
            'event',
            'Event',
            {'webhooks': 'EventWebhook'}
        );
        return _event;
    }
    get comment(): resources.Comment {
        let _comment = this.get(
            'comment',
            'Comment'
        );
        return _comment;
    }
    get download(): resources.Download {
        let _download = this.get(
            'download',
            'Download'
        );
        return _download;
    }
    get portal_session(): resources.PortalSession {
        let _portal_session = this.get(
            'portal_session',
            'PortalSession',
            {'linked_customers': 'PortalSessionLinkedCustomer'}
        );
        return _portal_session;
    }
    get site_migration_detail(): resources.SiteMigrationDetail {
        let _site_migration_detail = this.get(
            'site_migration_detail',
            'SiteMigrationDetail'
        );
        return _site_migration_detail;
    }
    get resource_migration(): resources.ResourceMigration {
        let _resource_migration = this.get(
            'resource_migration',
            'ResourceMigration'
        );
        return _resource_migration;
    }
    get time_machine(): resources.TimeMachine {
        let _time_machine = this.get(
            'time_machine',
            'TimeMachine'
        );
        return _time_machine;
    }
    get export(): resources.Export {
        let _export = this.get(
            'export',
            'Export',
            {'download': 'ExportDownload'}
        );
        return _export;
    }
    get payment_intent(): resources.PaymentIntent {
        let _payment_intent = this.get(
            'payment_intent',
            'PaymentIntent',
            {'payment_attempt': 'PaymentIntentPaymentAttempt'}
        );
        return _payment_intent;
    }
    get gateway_error_detail(): resources.GatewayErrorDetail {
        let _gateway_error_detail = this.get(
            'gateway_error_detail',
            'GatewayErrorDetail'
        );
        return _gateway_error_detail;
    }
    get item_family(): resources.ItemFamily {
        let _item_family = this.get(
            'item_family',
            'ItemFamily'
        );
        return _item_family;
    }
    get item(): resources.Item {
        let _item = this.get(
            'item',
            'Item',
            {'applicable_items': 'ItemApplicableItem', 'bundle_items': 'ItemBundleItem', 'bundle_configuration': 'ItemBundleConfiguration'}
        );
        return _item;
    }
    get price_variant(): resources.PriceVariant {
        let _price_variant = this.get(
            'price_variant',
            'PriceVariant',
            {'attributes': 'PriceVariantAttribute'}
        );
        return _price_variant;
    }
    get attribute(): resources.Attribute {
        let _attribute = this.get(
            'attribute',
            'Attribute'
        );
        return _attribute;
    }
    get item_price(): resources.ItemPrice {
        let _item_price = this.get(
            'item_price',
            'ItemPrice',
            {'tiers': 'ItemPriceTier', 'tax_detail': 'ItemPriceTaxDetail', 'tax_providers_fields': 'ItemPriceTaxProvidersField', 'accounting_detail': 'ItemPriceAccountingDetail'}
        );
        return _item_price;
    }
    get attached_item(): resources.AttachedItem {
        let _attached_item = this.get(
            'attached_item',
            'AttachedItem'
        );
        return _attached_item;
    }
    get differential_price(): resources.DifferentialPrice {
        let _differential_price = this.get(
            'differential_price',
            'DifferentialPrice',
            {'tiers': 'DifferentialPriceTier', 'parent_periods': 'DifferentialPriceParentPeriod'}
        );
        return _differential_price;
    }
    get configuration(): resources.Configuration {
        let _configuration = this.get(
            'configuration',
            'Configuration'
        );
        return _configuration;
    }
    get feature(): resources.Feature {
        let _feature = this.get(
            'feature',
            'Feature',
            {'levels': 'FeatureLevel'}
        );
        return _feature;
    }
    get impacted_subscription(): resources.ImpactedSubscription {
        let _impacted_subscription = this.get(
            'impacted_subscription',
            'ImpactedSubscription',
            {'download': 'ImpactedSubscriptionDownload'}
        );
        return _impacted_subscription;
    }
    get impacted_item(): resources.ImpactedItem {
        let _impacted_item = this.get(
            'impacted_item',
            'ImpactedItem',
            {'download': 'ImpactedItemDownload'}
        );
        return _impacted_item;
    }
    get impacted_item_price(): resources.ImpactedItemPrice {
        let _impacted_item_price = this.get(
            'impacted_item_price',
            'ImpactedItemPrice',
            {'download': 'ImpactedItemPriceDownload'}
        );
        return _impacted_item_price;
    }
    get metadata(): resources.Metadata {
        let _metadata = this.get(
            'metadata',
            'Metadata'
        );
        return _metadata;
    }
    get subscription_entitlement(): resources.SubscriptionEntitlement {
        let _subscription_entitlement = this.get(
            'subscription_entitlement',
            'SubscriptionEntitlement',
            {'component': 'SubscriptionEntitlementComponent'}
        );
        return _subscription_entitlement;
    }
    get customer_entitlement(): resources.CustomerEntitlement {
        let _customer_entitlement = this.get(
            'customer_entitlement',
            'CustomerEntitlement'
        );
        return _customer_entitlement;
    }
    get item_entitlement(): resources.ItemEntitlement {
        let _item_entitlement = this.get(
            'item_entitlement',
            'ItemEntitlement'
        );
        return _item_entitlement;
    }
    get entitlement(): resources.Entitlement {
        let _entitlement = this.get(
            'entitlement',
            'Entitlement'
        );
        return _entitlement;
    }
    get in_app_subscription(): resources.InAppSubscription {
        let _in_app_subscription = this.get(
            'in_app_subscription',
            'InAppSubscription'
        );
        return _in_app_subscription;
    }
    get non_subscription(): resources.NonSubscription {
        let _non_subscription = this.get(
            'non_subscription',
            'NonSubscription'
        );
        return _non_subscription;
    }
    get entitlement_override(): resources.EntitlementOverride {
        let _entitlement_override = this.get(
            'entitlement_override',
            'EntitlementOverride'
        );
        return _entitlement_override;
    }
    get business_entity(): resources.BusinessEntity {
        let _business_entity = this.get(
            'business_entity',
            'BusinessEntity'
        );
        return _business_entity;
    }
    get purchase(): resources.Purchase {
        let _purchase = this.get(
            'purchase',
            'Purchase'
        );
        return _purchase;
    }
    get payment_voucher(): resources.PaymentVoucher {
        let _payment_voucher = this.get(
            'payment_voucher',
            'PaymentVoucher',
            {'linked_invoices': 'PaymentVoucherLinkedInvoice'}
        );
        return _payment_voucher;
    }
    get currency(): resources.Currency {
        let _currency = this.get(
            'currency',
            'Currency'
        );
        return _currency;
    }
    get ramp(): resources.Ramp {
        let _ramp = this.get(
            'ramp',
            'Ramp',
            {'items_to_add': 'RampItemsToAdd', 'items_to_update': 'RampItemsToUpdate', 'coupons_to_add': 'RampCouponsToAdd', 'discounts_to_add': 'RampDiscountsToAdd', 'item_tiers': 'RampItemTier', 'status_transition_reason': 'RampStatusTransitionReason'}
        );
        return _ramp;
    }
    get payment_schedule_scheme(): resources.PaymentScheduleScheme {
        let _payment_schedule_scheme = this.get(
            'payment_schedule_scheme',
            'PaymentScheduleScheme',
            {'preferred_schedules': 'PaymentScheduleSchemePreferredSchedule'}
        );
        return _payment_schedule_scheme;
    }
    get pricing_page_session(): resources.PricingPageSession {
        let _pricing_page_session = this.get(
            'pricing_page_session',
            'PricingPageSession'
        );
        return _pricing_page_session;
    }
    get omnichannel_subscription(): resources.OmnichannelSubscription {
        let _omnichannel_subscription = this.get(
            'omnichannel_subscription',
            'OmnichannelSubscription',
            {},
            {'omnichannel_subscription_items': 'OmnichannelSubscriptionItem'}
        );
        _omnichannel_subscription.init_dependant_list(
            this.response['omnichannel_subscription'],
            'omnichannel_subscription_items',
            {'upcoming_renewal': 'OmnichannelSubscriptionItemUpcomingRenewal', 'linked_item': 'OmnichannelSubscriptionItemLinkedItem'}
        );
        return _omnichannel_subscription;
    }
    get omnichannel_transaction(): resources.OmnichannelTransaction {
        let _omnichannel_transaction = this.get(
            'omnichannel_transaction',
            'OmnichannelTransaction'
        );
        return _omnichannel_transaction;
    }
    get omnichannel_subscription_item(): resources.OmnichannelSubscriptionItem {
        let _omnichannel_subscription_item = this.get(
            'omnichannel_subscription_item',
            'OmnichannelSubscriptionItem',
            {'upcoming_renewal': 'OmnichannelSubscriptionItemUpcomingRenewal', 'linked_item': 'OmnichannelSubscriptionItemLinkedItem'}
        );
        return _omnichannel_subscription_item;
    }
    get recorded_purchase(): resources.RecordedPurchase {
        let _recorded_purchase = this.get(
            'recorded_purchase',
            'RecordedPurchase',
            {'linked_omnichannel_subscriptions': 'RecordedPurchaseLinkedOmnichannelSubscription', 'error_detail': 'RecordedPurchaseErrorDetail'}
        );
        return _recorded_purchase;
    }
    get rule(): resources.Rule {
        let _rule = this.get(
            'rule',
            'Rule'
        );
        return _rule;
    }
    get usage_event(): resources.UsageEvent {
        let _usage_event = this.get(
            'usage_event',
            'UsageEvent'
        );
        return _usage_event;
    }
    get omnichannel_subscription_item_scheduled_change(): resources.OmnichannelSubscriptionItemScheduledChange {
        let _omnichannel_subscription_item_scheduled_change = this.get(
            'omnichannel_subscription_item_scheduled_change',
            'OmnichannelSubscriptionItemScheduledChange',
            {'current_state': 'OmnichannelSubscriptionItemScheduledChangeCurrentState', 'scheduled_state': 'OmnichannelSubscriptionItemScheduledChangeScheduledState'}
        );
        return _omnichannel_subscription_item_scheduled_change;
    }
    get usage_file(): resources.UsageFile {
        let _usage_file = this.get(
            'usage_file',
            'UsageFile',
            {'upload_detail': 'UsageFileUploadDetail'}
        );
        return _usage_file;
    }
    get brand(): resources.Brand {
        let _brand = this.get(
            'brand',
            'Brand'
        );
        return _brand;
    }

    get advance_invoice_schedules(): resources.AdvanceInvoiceSchedule[] {
        let _advance_invoice_schedules = this.get_list(
            'advance_invoice_schedules',
            'AdvanceInvoiceSchedule',
            {'fixed_interval_schedule': 'AdvanceInvoiceScheduleFixedIntervalSchedule', 'specific_dates_schedule': 'AdvanceInvoiceScheduleSpecificDatesSchedule'}
        );
        return _advance_invoice_schedules;
    }
    get hierarchies(): resources.Hierarchy[] {
        let _hierarchies = this.get_list(
            'hierarchies',
            'Hierarchy',
            {}
        );
        return _hierarchies;
    }
    get invoices(): resources.Invoice[] {
        let _invoices = this.get_list(
            'invoices',
            'Invoice',
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_credits': 'InvoiceLineItemCredit', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'statement_descriptor': 'InvoiceStatementDescriptor', 'billing_address': 'InvoiceBillingAddress', 'einvoice': 'InvoiceEinvoice', 'site_details_at_creation': 'InvoiceSiteDetailsAtCreation', 'tax_origin': 'InvoiceTaxOrigin', 'line_item_addresses': 'InvoiceLineItemAddress'}
        );
        return _invoices;
    }
    get payment_schedules(): resources.PaymentSchedule[] {
        let _payment_schedules = this.get_list(
            'payment_schedules',
            'PaymentSchedule',
            {'schedule_entries': 'PaymentScheduleScheduleEntry'}
        );
        return _payment_schedules;
    }
    get credit_notes(): resources.CreditNote[] {
        let _credit_notes = this.get_list(
            'credit_notes',
            'CreditNote',
            {'einvoice': 'CreditNoteEinvoice', 'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation', 'shipping_address': 'CreditNoteShippingAddress', 'billing_address': 'CreditNoteBillingAddress', 'site_details_at_creation': 'CreditNoteSiteDetailsAtCreation', 'tax_origin': 'CreditNoteTaxOrigin', 'line_item_addresses': 'CreditNoteLineItemAddress'}
        );
        return _credit_notes;
    }
    get unbilled_charges(): resources.UnbilledCharge[] {
        let _unbilled_charges = this.get_list(
            'unbilled_charges',
            'UnbilledCharge',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _unbilled_charges;
    }
    get downloads(): resources.Download[] {
        let _downloads = this.get_list(
            'downloads',
            'Download',
            {}
        );
        return _downloads;
    }
    get configurations(): resources.Configuration[] {
        let _configurations = this.get_list(
            'configurations',
            'Configuration',
            {}
        );
        return _configurations;
    }
    get in_app_subscriptions(): resources.InAppSubscription[] {
        let _in_app_subscriptions = this.get_list(
            'in_app_subscriptions',
            'InAppSubscription',
            {}
        );
        return _in_app_subscriptions;
    }

    get response() {
        return this.#_response;
    }

    constructor(response, responseHeaders?, responseStatusCode?) {
        this.#_response = response;
        if (responseHeaders) {
          this.responseHeaders = responseHeaders;
        }
        if(responseStatusCode){
            this.responseStatusCode = responseStatusCode;
        }
    }

    getResponseHeaders(){
        return this.responseHeaders;
    }

    isIdempotencyReplayed(): boolean {
        const headers = this.responseHeaders;
        const replayedHeader = headers[IdempotencyConstants.IDEMPOTENCY_REPLAY_HEADER];
        if (replayedHeader === undefined) {
            return false;
        }
        return Boolean(replayedHeader);
    }

    private get<T = any>(type, klass, sub_types = {}, dependant_types = {}): T {
        return new (resources)[klass](this.response[type], sub_types, dependant_types)
    }

    private get_list<T = any>(type, klass, sub_types = {}, dependant_types = {}, dependant_sub_types = {}): T[] {
        if(Util.isEmptyObject(this.response) || Util.isEmptyObject(this.response[type])) {
            return null;
        }

        let set_val = [];
        for(let obj of this.response[type]) {
            let model = new (resources)[klass](obj, sub_types, dependant_types);
            for(let k in dependant_sub_types) {
                let v = dependant_sub_types[k];
                model.init_dependant(obj, k, v);
            }
            set_val.push(model);
        }
        return set_val;
    }

    private toString(...args) {
        return JSON.stringify(this.response, null, 2);
    }
    getResponseStatusCode(){
        return this.responseStatusCode;
    }
}
