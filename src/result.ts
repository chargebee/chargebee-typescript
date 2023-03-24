import * as resources from "./resources";
import {Util} from "./util";

export class Result {
    readonly #_response: any;

    get subscription(): resources.Subscription {
        let _subscription = this.get(
            'subscription',
            'Subscription',
            {'subscription_items': 'SubscriptionSubscriptionItem', 'item_tiers': 'SubscriptionItemTier', 'charged_items': 'SubscriptionChargedItem', 'addons': 'SubscriptionAddon', 'event_based_addons': 'SubscriptionEventBasedAddon', 'charged_event_based_addons': 'SubscriptionChargedEventBasedAddon', 'coupons': 'SubscriptionCoupon', 'shipping_address': 'SubscriptionShippingAddress', 'referral_info': 'SubscriptionReferralInfo', 'contract_term': 'SubscriptionContractTerm', 'discounts': 'SubscriptionDiscount'}
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
            {'billing_address': 'CustomerBillingAddress', 'referral_urls': 'CustomerReferralUrl', 'contacts': 'CustomerContact', 'payment_method': 'CustomerPaymentMethod', 'balances': 'CustomerBalance', 'entity_identifiers': 'CustomerEntityIdentifier', 'relationship': 'CustomerRelationship', 'parent_account_access': 'CustomerParentAccountAccess', 'child_account_access': 'CustomerChildAccountAccess'}
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
            {'card': 'PaymentSourceCard', 'bank_account': 'PaymentSourceBankAccount', 'amazon_payment': 'PaymentSourceAmazonPayment', 'upi': 'PaymentSourceUpi', 'paypal': 'PaymentSourcePaypal', 'mandates': 'PaymentSourceMandate'}
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
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'billing_address': 'InvoiceBillingAddress', 'einvoice': 'InvoiceEinvoice'}
        );
        return _invoice;
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
            {'einvoice': 'CreditNoteEinvoice', 'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation', 'shipping_address': 'CreditNoteShippingAddress', 'billing_address': 'CreditNoteBillingAddress'}
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
            {'linked_invoices': 'TransactionLinkedInvoice', 'linked_credit_notes': 'TransactionLinkedCreditNote', 'linked_refunds': 'TransactionLinkedRefund', 'linked_payments': 'TransactionLinkedPayment'}
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
            {'subscription_estimate': 'SubscriptionEstimate', 'subscription_estimates': 'SubscriptionEstimate', 'invoice_estimate': 'InvoiceEstimate', 'invoice_estimates': 'InvoiceEstimate', 'next_invoice_estimate': 'InvoiceEstimate', 'credit_note_estimates': 'CreditNoteEstimate', 'unbilled_charge_estimates': 'UnbilledCharge'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'subscription_estimate',
            {'shipping_address': 'SubscriptionEstimateShippingAddress', 'contract_term': 'SubscriptionEstimateContractTerm'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'invoice_estimate',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount'}
        );
        _estimate.init_dependant(
            this.response['estimate'],
            'next_invoice_estimate',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'subscription_estimates',
            {'shipping_address': 'SubscriptionEstimateShippingAddress', 'contract_term': 'SubscriptionEstimateContractTerm'}
        );
        _estimate.init_dependant_list(
            this.response['estimate'],
            'invoice_estimates',
            {'line_items': 'InvoiceEstimateLineItem', 'discounts': 'InvoiceEstimateDiscount', 'taxes': 'InvoiceEstimateTax', 'line_item_taxes': 'InvoiceEstimateLineItemTax', 'line_item_tiers': 'InvoiceEstimateLineItemTier', 'line_item_discounts': 'InvoiceEstimateLineItemDiscount'}
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
            {'tiers': 'PlanTier', 'applicable_addons': 'PlanApplicableAddon', 'attached_addons': 'PlanAttachedAddon', 'event_based_addons': 'PlanEventBasedAddon'}
        );
        return _plan;
    }
    get addon(): resources.Addon {
        let _addon = this.get(
            'addon',
            'Addon',
            {'tiers': 'AddonTier'}
        );
        return _addon;
    }
    get coupon(): resources.Coupon {
        let _coupon = this.get(
            'coupon',
            'Coupon',
            {'item_constraints': 'CouponItemConstraint', 'item_constraint_criteria': 'CouponItemConstraintCriteria'}
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
            {'applicable_items': 'ItemApplicableItem'}
        );
        return _item;
    }
    get item_price(): resources.ItemPrice {
        let _item_price = this.get(
            'item_price',
            'ItemPrice',
            {'tiers': 'ItemPriceTier', 'tax_detail': 'ItemPriceTaxDetail', 'accounting_detail': 'ItemPriceAccountingDetail'}
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
    get subscription_entitlement(): resources.SubscriptionEntitlement {
        let _subscription_entitlement = this.get(
            'subscription_entitlement',
            'SubscriptionEntitlement',
            {'component': 'SubscriptionEntitlementComponent'}
        );
        return _subscription_entitlement;
    }
    get item_entitlement(): resources.ItemEntitlement {
        let _item_entitlement = this.get(
            'item_entitlement',
            'ItemEntitlement'
        );
        return _item_entitlement;
    }
    get in_app_subscription(): resources.InAppSubscription {
        let _in_app_subscription = this.get(
            'in_app_subscription',
            'InAppSubscription'
        );
        return _in_app_subscription;
    }
    get entitlement_override(): resources.EntitlementOverride {
        let _entitlement_override = this.get(
            'entitlement_override',
            'EntitlementOverride'
        );
        return _entitlement_override;
    }
    get purchase(): resources.Purchase {
        let _purchase = this.get(
            'purchase',
            'Purchase'
        );
        return _purchase;
    }

    get unbilled_charges(): resources.UnbilledCharge[] {
        let _unbilled_charges = this.get_list(
            'unbilled_charges',
            'UnbilledCharge',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _unbilled_charges;
    }
    get credit_notes(): resources.CreditNote[] {
        let _credit_notes = this.get_list(
            'credit_notes',
            'CreditNote',
            {'einvoice': 'CreditNoteEinvoice', 'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation', 'shipping_address': 'CreditNoteShippingAddress', 'billing_address': 'CreditNoteBillingAddress'}
        );
        return _credit_notes;
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
    get downloads(): resources.Download[] {
        let _downloads = this.get_list(
            'downloads',
            'Download',
            {}
        );
        return _downloads;
    }
    get invoices(): resources.Invoice[] {
        let _invoices = this.get_list(
            'invoices',
            'Invoice',
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'billing_address': 'InvoiceBillingAddress', 'einvoice': 'InvoiceEinvoice'}
        );
        return _invoices;
    }
    get differential_prices(): resources.DifferentialPrice[] {
        let _differential_prices = this.get_list(
            'differential_prices',
            'DifferentialPrice',
            {'tiers': 'DifferentialPriceTier', 'parent_periods': 'DifferentialPriceParentPeriod'}
        );
        return _differential_prices;
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

    constructor(response) {
        this.#_response = response;
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
}
