import * as resources from "./resources";
import {Util} from "./util";

export class Result {
    readonly #_response: any;

    get subscription() {
        let _subscription = this.get(
            'subscription',
            'Subscription',
            {'subscription_items': 'SubscriptionSubscriptionItem', 'item_tiers': 'SubscriptionItemTier', 'charged_items': 'SubscriptionChargedItem', 'addons': 'SubscriptionAddon', 'event_based_addons': 'SubscriptionEventBasedAddon', 'charged_event_based_addons': 'SubscriptionChargedEventBasedAddon', 'coupons': 'SubscriptionCoupon', 'shipping_address': 'SubscriptionShippingAddress', 'referral_info': 'SubscriptionReferralInfo', 'contract_term': 'SubscriptionContractTerm'}
        );
        return _subscription;
    }
    get contract_term() {
        let _contract_term = this.get(
            'contract_term',
            'ContractTerm'
        );
        return _contract_term;
    }
    get advance_invoice_schedule() {
        let _advance_invoice_schedule = this.get(
            'advance_invoice_schedule',
            'AdvanceInvoiceSchedule',
            {'fixed_interval_schedule': 'AdvanceInvoiceScheduleFixedIntervalSchedule', 'specific_dates_schedule': 'AdvanceInvoiceScheduleSpecificDatesSchedule'}
        );
        return _advance_invoice_schedule;
    }
    get customer() {
        let _customer = this.get(
            'customer',
            'Customer',
            {'billing_address': 'CustomerBillingAddress', 'referral_urls': 'CustomerReferralUrl', 'contacts': 'CustomerContact', 'payment_method': 'CustomerPaymentMethod', 'balances': 'CustomerBalance', 'relationship': 'CustomerRelationship', 'parent_account_access': 'CustomerParentAccountAccess', 'child_account_access': 'CustomerChildAccountAccess'}
        );
        return _customer;
    }
    get hierarchy() {
        let _hierarchy = this.get(
            'hierarchy',
            'Hierarchy'
        );
        return _hierarchy;
    }
    get contact() {
        let _contact = this.get(
            'contact',
            'Contact'
        );
        return _contact;
    }
    get token() {
        let _token = this.get(
            'token',
            'Token'
        );
        return _token;
    }
    get payment_source() {
        let _payment_source = this.get(
            'payment_source',
            'PaymentSource',
            {'card': 'PaymentSourceCard', 'bank_account': 'PaymentSourceBankAccount', 'amazon_payment': 'PaymentSourceAmazonPayment', 'paypal': 'PaymentSourcePaypal'}
        );
        return _payment_source;
    }
    get third_party_payment_method() {
        let _third_party_payment_method = this.get(
            'third_party_payment_method',
            'ThirdPartyPaymentMethod'
        );
        return _third_party_payment_method;
    }
    get virtual_bank_account() {
        let _virtual_bank_account = this.get(
            'virtual_bank_account',
            'VirtualBankAccount'
        );
        return _virtual_bank_account;
    }
    get card() {
        let _card = this.get(
            'card',
            'Card'
        );
        return _card;
    }
    get promotional_credit() {
        let _promotional_credit = this.get(
            'promotional_credit',
            'PromotionalCredit'
        );
        return _promotional_credit;
    }
    get invoice() {
        let _invoice = this.get(
            'invoice',
            'Invoice',
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'billing_address': 'InvoiceBillingAddress'}
        );
        return _invoice;
    }
    get tax_withheld() {
        let _tax_withheld = this.get(
            'tax_withheld',
            'TaxWithheld'
        );
        return _tax_withheld;
    }
    get credit_note() {
        let _credit_note = this.get(
            'credit_note',
            'CreditNote',
            {'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation'}
        );
        return _credit_note;
    }
    get unbilled_charge() {
        let _unbilled_charge = this.get(
            'unbilled_charge',
            'UnbilledCharge',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _unbilled_charge;
    }
    get order() {
        let _order = this.get(
            'order',
            'Order',
            {'order_line_items': 'OrderOrderLineItem', 'shipping_address': 'OrderShippingAddress', 'billing_address': 'OrderBillingAddress', 'line_item_taxes': 'OrderLineItemTax', 'line_item_discounts': 'OrderLineItemDiscount', 'linked_credit_notes': 'OrderLinkedCreditNote', 'resent_orders': 'OrderResentOrder'}
        );
        return _order;
    }
    get gift() {
        let _gift = this.get(
            'gift',
            'Gift',
            {'gifter': 'GiftGifter', 'gift_receiver': 'GiftGiftReceiver', 'gift_timelines': 'GiftGiftTimeline'}
        );
        return _gift;
    }
    get transaction() {
        let _transaction = this.get(
            'transaction',
            'Transaction',
            {'linked_invoices': 'TransactionLinkedInvoice', 'linked_credit_notes': 'TransactionLinkedCreditNote', 'linked_refunds': 'TransactionLinkedRefund', 'linked_payments': 'TransactionLinkedPayment'}
        );
        return _transaction;
    }
    get hosted_page() {
        let _hosted_page = this.get(
            'hosted_page',
            'HostedPage'
        );
        return _hosted_page;
    }
    get estimate() {
        let _estimate = this.get(
            'estimate',
            'Estimate',
            {},
            {'subscription_estimate': 'SubscriptionEstimate', 'invoice_estimate': 'InvoiceEstimate', 'invoice_estimates': 'InvoiceEstimate', 'next_invoice_estimate': 'InvoiceEstimate', 'credit_note_estimates': 'CreditNoteEstimate', 'unbilled_charge_estimates': 'UnbilledCharge'}
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
    get quote() {
        let _quote = this.get(
            'quote',
            'Quote',
            {'line_items': 'QuoteLineItem', 'discounts': 'QuoteDiscount', 'line_item_discounts': 'QuoteLineItemDiscount', 'taxes': 'QuoteTax', 'line_item_taxes': 'QuoteLineItemTax', 'line_item_tiers': 'QuoteLineItemTier', 'shipping_address': 'QuoteShippingAddress', 'billing_address': 'QuoteBillingAddress'}
        );
        return _quote;
    }
    get quoted_subscription() {
        let _quoted_subscription = this.get(
            'quoted_subscription',
            'QuotedSubscription',
            {'addons': 'QuotedSubscriptionAddon', 'event_based_addons': 'QuotedSubscriptionEventBasedAddon', 'coupons': 'QuotedSubscriptionCoupon', 'subscription_items': 'QuotedSubscriptionSubscriptionItem', 'item_tiers': 'QuotedSubscriptionItemTier', 'quoted_contract_term': 'QuotedSubscriptionQuotedContractTerm'}
        );
        return _quoted_subscription;
    }
    get quoted_charge() {
        let _quoted_charge = this.get(
            'quoted_charge',
            'QuotedCharge',
            {'charges': 'QuotedChargeCharge', 'addons': 'QuotedChargeAddon', 'invoice_items': 'QuotedChargeInvoiceItem', 'item_tiers': 'QuotedChargeItemTier', 'coupons': 'QuotedChargeCoupon'}
        );
        return _quoted_charge;
    }
    get quote_line_group() {
        let _quote_line_group = this.get(
            'quote_line_group',
            'QuoteLineGroup',
            {'line_items': 'QuoteLineGroupLineItem', 'discounts': 'QuoteLineGroupDiscount', 'line_item_discounts': 'QuoteLineGroupLineItemDiscount', 'taxes': 'QuoteLineGroupTax', 'line_item_taxes': 'QuoteLineGroupLineItemTax'}
        );
        return _quote_line_group;
    }
    get plan() {
        let _plan = this.get(
            'plan',
            'Plan',
            {'tiers': 'PlanTier', 'applicable_addons': 'PlanApplicableAddon', 'attached_addons': 'PlanAttachedAddon', 'event_based_addons': 'PlanEventBasedAddon'}
        );
        return _plan;
    }
    get addon() {
        let _addon = this.get(
            'addon',
            'Addon',
            {'tiers': 'AddonTier'}
        );
        return _addon;
    }
    get coupon() {
        let _coupon = this.get(
            'coupon',
            'Coupon',
            {'item_constraints': 'CouponItemConstraint', 'item_constraint_criteria': 'CouponItemConstraintCriteria'}
        );
        return _coupon;
    }
    get coupon_set() {
        let _coupon_set = this.get(
            'coupon_set',
            'CouponSet'
        );
        return _coupon_set;
    }
    get coupon_code() {
        let _coupon_code = this.get(
            'coupon_code',
            'CouponCode'
        );
        return _coupon_code;
    }
    get address() {
        let _address = this.get(
            'address',
            'Address'
        );
        return _address;
    }
    get usage() {
        let _usage = this.get(
            'usage',
            'Usage'
        );
        return _usage;
    }
    get event() {
        let _event = this.get(
            'event',
            'Event',
            {'webhooks': 'EventWebhook'}
        );
        return _event;
    }
    get comment() {
        let _comment = this.get(
            'comment',
            'Comment'
        );
        return _comment;
    }
    get download() {
        let _download = this.get(
            'download',
            'Download'
        );
        return _download;
    }
    get portal_session() {
        let _portal_session = this.get(
            'portal_session',
            'PortalSession',
            {'linked_customers': 'PortalSessionLinkedCustomer'}
        );
        return _portal_session;
    }
    get site_migration_detail() {
        let _site_migration_detail = this.get(
            'site_migration_detail',
            'SiteMigrationDetail'
        );
        return _site_migration_detail;
    }
    get resource_migration() {
        let _resource_migration = this.get(
            'resource_migration',
            'ResourceMigration'
        );
        return _resource_migration;
    }
    get time_machine() {
        let _time_machine = this.get(
            'time_machine',
            'TimeMachine'
        );
        return _time_machine;
    }
    get export() {
        let _export = this.get(
            'export',
            'Export',
            {'download': 'ExportDownload'}
        );
        return _export;
    }
    get payment_intent() {
        let _payment_intent = this.get(
            'payment_intent',
            'PaymentIntent',
            {'payment_attempt': 'PaymentIntentPaymentAttempt'}
        );
        return _payment_intent;
    }
    get item_family() {
        let _item_family = this.get(
            'item_family',
            'ItemFamily'
        );
        return _item_family;
    }
    get item() {
        let _item = this.get(
            'item',
            'Item',
            {'applicable_items': 'ItemApplicableItem'}
        );
        return _item;
    }
    get item_price() {
        let _item_price = this.get(
            'item_price',
            'ItemPrice',
            {'tiers': 'ItemPriceTier', 'tax_detail': 'ItemPriceTaxDetail', 'accounting_detail': 'ItemPriceAccountingDetail'}
        );
        return _item_price;
    }
    get attached_item() {
        let _attached_item = this.get(
            'attached_item',
            'AttachedItem'
        );
        return _attached_item;
    }
    get differential_price() {
        let _differential_price = this.get(
            'differential_price',
            'DifferentialPrice',
            {'tiers': 'DifferentialPriceTier', 'parent_periods': 'DifferentialPriceParentPeriod'}
        );
        return _differential_price;
    }

    get unbilled_charges() {
        let _unbilled_charges = this.get_list(
            'unbilled_charges',
            'UnbilledCharge',
            {'tiers': 'UnbilledChargeTier'}
        );
        return _unbilled_charges;
    }
    get credit_notes() {
        let _credit_notes = this.get_list(
            'credit_notes',
            'CreditNote',
            {'line_items': 'CreditNoteLineItem', 'discounts': 'CreditNoteDiscount', 'line_item_discounts': 'CreditNoteLineItemDiscount', 'line_item_tiers': 'CreditNoteLineItemTier', 'taxes': 'CreditNoteTax', 'line_item_taxes': 'CreditNoteLineItemTax', 'linked_refunds': 'CreditNoteLinkedRefund', 'allocations': 'CreditNoteAllocation'}
        );
        return _credit_notes;
    }
    get advance_invoice_schedules() {
        let _advance_invoice_schedules = this.get_list(
            'advance_invoice_schedules',
            'AdvanceInvoiceSchedule',
            {'fixed_interval_schedule': 'AdvanceInvoiceScheduleFixedIntervalSchedule', 'specific_dates_schedule': 'AdvanceInvoiceScheduleSpecificDatesSchedule'}
        );
        return _advance_invoice_schedules;
    }
    get hierarchies() {
        let _hierarchies = this.get_list(
            'hierarchies',
            'Hierarchy',
            {}
        );
        return _hierarchies;
    }
    get invoices() {
        let _invoices = this.get_list(
            'invoices',
            'Invoice',
            {'line_items': 'InvoiceLineItem', 'discounts': 'InvoiceDiscount', 'line_item_discounts': 'InvoiceLineItemDiscount', 'taxes': 'InvoiceTax', 'line_item_taxes': 'InvoiceLineItemTax', 'line_item_tiers': 'InvoiceLineItemTier', 'linked_payments': 'InvoiceLinkedPayment', 'dunning_attempts': 'InvoiceDunningAttempt', 'applied_credits': 'InvoiceAppliedCredit', 'adjustment_credit_notes': 'InvoiceAdjustmentCreditNote', 'issued_credit_notes': 'InvoiceIssuedCreditNote', 'linked_orders': 'InvoiceLinkedOrder', 'notes': 'InvoiceNote', 'shipping_address': 'InvoiceShippingAddress', 'billing_address': 'InvoiceBillingAddress'}
        );
        return _invoices;
    }
    get differential_prices() {
        let _differential_prices = this.get_list(
            'differential_prices',
            'DifferentialPrice',
            {'tiers': 'DifferentialPriceTier', 'parent_periods': 'DifferentialPriceParentPeriod'}
        );
        return _differential_prices;
    }

    get response() {
        return this.#_response;
    }

    constructor(response) {
        this.#_response = response;
    }

    private get(type, klass, sub_types = {}, dependant_types = {}) {
        return new (resources)[klass](this.response[type], sub_types, dependant_types)
    }

    private get_list(type, klass, sub_types = {}, dependant_types = {}, dependant_sub_types = {}) {
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
