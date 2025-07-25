### v2.51.0 ( 2025-05-22)
* * * 

### Release Fixes: 
* Resolved issue with empty package being published to npm.

### v2.50.0 (2025-07-18) 
* * * 

### New Resources: 
* BillingConfiguration has been added. 
* Brand has been added. 

### New Attributes: 
* has_children has been added to Hierarchy
* coupon_applicability_mappings has been added to QuotedRamp.

### New Endpoint:
* listHierarchyDetail has been added to Customer.

### New Input parameters: 
* change_reason children has been added to Entitlement#CreateRequest.
* entitlements[apply_grandfathering] has been added to Entitlement#CreateRequest.
* replace_primary_payment_source has been added to Purchase#CreateRequest.
* omnichannel_subscription has been added to RecordedPurchase#CreateRequest.
* contract_term has been added to Subscription#RemoveScheduledCancellationRequest.
* contract_term_billing_cycle_on_renewal has been added to Subscription#RemoveScheduledCancellationRequest.

### New Enums: 
* payconiq_by_bancontact has been added to PaymentMethodType.
* solidgate has been added to Gateway.
* solidgate has been added to PaymentMethod.

### v2.49.0 (2025-06-19) 
* * * 

### New Resources 
* QuotedRamp has been added.

### New Attributes
* chargebee_response_schema_type has been added to Configuration.
* linked_item has been added to OmnichannelSubscriptionItem.
* resumes_at has been added to OmnichannelSubscriptionItem.

### Changed Attributes
* percentage changed to is_percentage_pricing in CreditNote.
* percentage changed to is_percentage_pricing in QuoteLineGroup.
* percentage changed to is_percentage_pricing in CreditNoteEstimate.
* percentage changed to is_percentage_pricing in Invoice.
* percentage changed to is_percentage_pricing in InvoiceEstimate.
* percentage changed to is_percentage_pricing in Quote.


### New Input Parameters
* is_percentage_pricing has been added to Item#UpdateRequest.
* line_item[subscription_id] has been added to CreditNote#RetrieveRequest.
* line_item[customer_id] has been added to CreditNote#RetrieveRequest.
* line_item[subscription_id] has been added to Invoice#RetrieveRequest.
* line_item[customer_id] has been added to Invoice#RetrieveRequest.
* billing_override[max_excess_payment_usage] has been added to Estimate#CreateSubItemForCustomerEstimateRequest.
* billing_override[max_refundable_credits_usage] has been added to Estimate#CreateSubItemForCustomerEstimateRequest.
* billing_override[max_excess_payment_usage] has been added to Estimate#UpdateSubscriptionForItemsRequest.
* billing_override[max_refundable_credits_usage] has been added to Estimate#UpdateSubscriptionForItemsRequest.
* billing_start_option has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* net_term_days has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* billing_address has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* subscription_items has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* discounts has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* billing_start_option has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.
* net_term_days has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.
* billing_address has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.
* subscription_items has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.
* discounts has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.
* net_term_days has been added to Quote#UpdateSubscriptionQuoteForItemsRequest.
* subscription_items has been added to Quote#UpdateSubscriptionQuoteForItemsRequest.
* discount has been added to Quote#UpdateSubscriptionQuoteForItemsRequest.
* coupons has been added to Quote#UpdateSubscriptionQuoteForItemsRequest.
* net_term_days has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* subscription_items has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* discounts has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* coupons has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* billing_address has been added to Quote#CreateForChargeItemsAndChargesRequest.
* billing_address has been added to Quote#EditForChargeItemsAndChargesRequest.
* sort_by[order] has been added to Subscription#SubscriptionContractTermsForSubscriptionRequest.
* item_tiers has been added to Quote#UpdateSubscriptionQuoteForItemsRequest.
* item_tiers has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* item_tiers has been added to Quote#CreateSubItemsForCustomerQuoteRequest.
* item_tiers has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest.

### New Endpoints: 
* PauseDunningRequest has been added to Invoice.
* ResumeDunningRequest has been added to Invoice.

### Enum Attributes: 
* BillingPeriodUnitEnum has been added.
* BillingStartOptionEnum has been added.
* OMNICHANNEL_SUBSCRIPTION_ITEM_RESUMED has been added to EventTypeEnum.

### v2.48.0 (2025-05-15)
* * * 

### New Resources
* UsageFile has been added.

### Input Parameter
* discount[apply_on] has been made optional from required in Estimate#CreateSubItemEstimateRequest.
* discount[apply_on] has been made optional from required in Estimate#CreateSubItemForCustomerEstimateRequest.
* discount[apply_on] has been made optional from required in Estimate#UpdateSubscriptionForItemsRequest.
* discount[apply_on] has been made optional from required in HostedPage#CheckoutNewForItemsRequest.
* discount[apply_on] has been made optional from required in HostedPage#CheckoutNewForItemsRequest.
* discount[apply_on] has been made optional from required in HostedPage#CheckoutNewForItemsRequest.
* discount[apply_on] has been made optional from required in HostedPage#CheckoutNewForItemsRequest.
* discount[apply_on] has been made optional from required in PricingPageSession#CheckoutNewForItemsRequest.
* discount[apply_on] has been made optional from required in PricingPageSession#CreateForExistingSubscriptionRequest.
* discount[apply_on] has been made optional from required in Quote#CreateSubItemsForCustomerQuoteRequest.
* discount[apply_on] has been made optional from required in Quote#EditCreateSubCustomerQuoteForItemsRequest.
* discount[apply_on] has been made optional from required in Quote#UpdateSubscriptionQuoteForItemsRequest.
* discount[apply_on] has been made optional from required in Quote#EditUpdateSubscriptionQuoteForItemsRequest.
* discount[apply_on] has been made optional from required in Subscription#CreateWithItemsRequest.
* discount[apply_on] has been made optional from required in Subscription#UpdateForItemsRequest.
* discount[apply_on] has been made optional from required in Subscription#ImportForItemsRequest.
* line_item_addresses[] has been added to  Invoice#ImportInvoiceRequest.
* source has been added to OmnichannelSubscription#OmnichannelSubscriptionListRequest.

### Attributes: 
* swift_code has been made optional from required in VirtualBankAccount.

### Enum Attributes: 
* OMNICHANNEL_SUBSCRIPTION_ITEM_PAUSED has been added to EventTypeEnum.
* PAUSED has been added to OmnichannelSubscriptionItem#StatusEnum.
* MERCHANT_REVOKED has been added to OmnichannelSubscriptionItem#CancellationReasonEnum.

### v2.47.1 (2025-04-25)
* * * 

### Bug fixes: 
* Fixed an issue where the optional boolean field is_percentage_pricing at Item Model was incorrectly marked as required.
* Fixed an issue where the optional enum field item_applicability at Item Model was incorrectly marked as required.

### v2.47.0 (2025-04-23)
* * * 

### New Resources:
* OmnichannelSubscriptionItemScheduledChange has been added. 

### New Attributes:
* pricing_type has been added to DifferentialPrice#Tier.
* package_size has been added to DifferentialPrice#Tier.
* pricing_type has been added to ItemPrice#Tier.
* package_size has been added to ItemPrice#Tier.
* pricing_type has been added to Addon#Tier.
* package_size has been added to Addon#Tier.
* pricing_type has been added to Plan#Tier.
* package_size has been added to Plan#Tier.
* pricing_type has been added to CreditNote#LineItemTier.
* package_size has been added to CreditNote#LineItemTier.
* pricing_type has been added to CreditNoteEstimate#LineItemTier.
* package_size has been added to CreditNoteEstimate#LineItemTier.
* pricing_type has been added to DifferentialPrice#Tier.
* package_size has been added to DifferentialPrice#Tier.
* pricing_type has been added to Invoice#LineItemTier.
* package_size has been added to Invoice#LineItemTier.
* pricing_type has been added to InvoiceEstimate#LineItemTier.
* package_size has been added to InvoiceEstimate#LineItemTier.
* pricing_type has been added to Quote#LineItemTier.
* package_size has been added to Quote#LineItemTier.
* pricing_type has been added to QuotedCharge#LineItemTier.
* package_size has been added to QuotedCharge#LineItemTier.
* pricing_type has been added to QuotedSubscription#LineItemTier.
* package_size has been added to QuotedSubscription#LineItemTier.
* pricing_type has been added to Ramp#ItemTier.
* package_size has been added to Ramp#ItemTier.
* pricing_type has been added to Subscription#ItemTier.
* package_size has been added to Subscription#ItemTier.
* pricing_type has been added to UnbilledCharges#Tier.
* package_size has been added to UnbilledCharges#Tier.
* metered has been added to CreditNote#LineItem.
* metered has been added to CreditNoteEstimate#LineItem.
* metered has been added to Invoice#LineItem.
* metered has been added to Quote#LineItem.
* metered has been added to QuoteLineGroup#LineItem.
* usage_percentage has been changed to percentage in CreditNote#LineItem.
* usage_percentage has been changed to percentage in CreditNoteEstimate#LineItem.
* usage_percentage has been changed to percentage in Invoice#LineItem.
* usage_percentage has been changed to percentage in Quote#LineItem.
* usage_percentage has been changed to percentage in QuoteLineGroup#LineItem.
* line_item_addresses has been added to CreditNote.
* line_item_addresses has been added to Invoices.
* line_item_addresses has been added to InvoiceEstimate.
* has_scheduled_changes has been added on OmnichannelSubscriptionItem.
* item_parent_id_at_source has been added to OmnichannelSubscriptionItem.
* auto_renew_status has been added to OmnichannelSubscriptionItem.
* upcoming_renewal has been added to OmnichannelSubscriptionItem.
* is_percentage_pricing has been added to Item.

### New Action:
* listOmniSubItemScheduleChanges has been added to OmnichannelSubscriptionItem.

### Optional Attribute: 
* price_currency has been made optional from requried in OmnichannelTransaction. 
* price_units has been made optional from requried in OmnichannelTransaction.
* price_nanos has been made optional from requried in OmnichannelTransaction.
* transacted_at has been made optional from requried in OmnichannelTransaction.

### New Input Params:
* item_tiers[pricing_type] has been added to DifferentialPrice#CreateInputParam.
* item_tiers[package_size] has been added to DifferentialPrice#CreateInputParam.
* item_tiers[pricing_type] has been added to ItemPrice#CreateInputParam.
* item_tiers[package_size] has been added to ItemPrice#CreateInputParam.
* tiers[pricing_type] has been added to DifferentialPrice#CreateInputParam.
* tiers[package_size] has been added to DifferentialPrice#CreateInputParam.
* item_tiers[pricing_type] has been added to Estimate#CreateSubItemEstimateRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CreateSubItemEstimateRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#CreateSubItemForCustomerRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CreateSubItemForCustomerRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#UpdateSubscriptionForItemsRequestInputParam.
* item_tiers[package_size] has been added to Estimate#UpdateSubscriptionForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#CreateInvoiceForItemsRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CreateInvoiceForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#CheckoutNewForItemsRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CheckoutNewForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#CheckoutOneTimeForItemsRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CheckoutOneTimeForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Estimate#CheckoutExistingForItemsRequestInputParam.
* item_tiers[package_size] has been added to Estimate#CheckoutExistingForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Invoice#CreateForChargeItemsAndChargesRequestInputParam.
* item_tiers[package_size] has been added to Invoice#CreateForChargeItemsAndChargesRequestInputParam.
* item_tiers[pricing_type] has been added to Invoice#CreateForChargeItemRequestInputParam.
* item_tiers[package_size] has been added to Invoice#CreateForChargeItemRequestInputParam.
* item_tiers[pricing_type] has been added to Invoice#AddChargeItemRequestInputParam.
* item_tiers[package_size] has been added to Invoice#AddChargeItemRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#CreateSubItemsForCustomerQuoteRequestInputParam.
* item_tiers[package_size] has been added to Quote#CreateSubItemsForCustomerQuoteRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#EditCreateSubCustomerQuoteForItemsRequestInputParam.
* item_tiers[package_size] has been added to Quote#EditCreateSubCustomerQuoteForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#UpdateSubscriptionQuoteForItemsRequestInputParam.
* item_tiers[package_size] has been added to Quote#UpdateSubscriptionQuoteForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequestInputParam.
* item_tiers[package_size] has been added to Quote#EditUpdateSubscriptionQuoteForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#CreateForChargeItemsAndChargesRequestInputParam.
* item_tiers[package_size] has been added to Quote#CreateForChargeItemsAndChargesRequestInputParam.
* item_tiers[pricing_type] has been added to Quote#EditForChargeItemsAndChargesRequestInputParam.
* item_tiers[package_size] has been added to Quote#EditForChargeItemsAndChargesRequestInputParam.
* item_tiers[pricing_type] has been added to Ramp#CreateForSubscriptionRequestInputParam.
* item_tiers[package_size] has been added to Ramp#CreateForSubscriptionRequestInputParam.
* item_tiers[pricing_type] has been added to Ramp#UpdateRequestInputParam.
* item_tiers[package_size] has been added to Ramp#UpdateRequestInputParam.
* item_tiers[pricing_type] has been added to Subscription#CreateWithItemsRequestInputParam.
* item_tiers[package_size] has been added to Subscription#CreateWithItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Subscription#UpdateForItemsRequestInputParam.
* item_tiers[package_size] has been added to Subscription#UpdateForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to Subscription#ImportForItemsRequestInputParam.
* item_tiers[package_size] has been added to Subscription#ImportForItemsRequestInputParam.
* item_tiers[pricing_type] has been added to UnbilledCharged#CreateRequestInputParam.
* item_tiers[package_size] has been added to UnbilledCharged#CreateRequestInputParam.
* billing_address has been added to Estimate#CreateInvoiceForItemsRequestInputParam.
* google_play_store[purchase_token] has been added to RecordedPurchase#CreateRequestInputParam.
* is_percentage_pricing has been added to Item#CreateRequest.
* include_deleted has been added to PaymentSource#ListRequest.

### New Enums: 
* OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CHANGE has been added to EntityType#Enum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_CHANGE_SCHEDULED has been added to EventType#Enum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CHANGE_REMOVED has been added to EventType#Enum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_REACTIVATED has been added to EventType#Enum.
* GOOGLE_PLAY_STORE has been added to OminchannelSubscription#SourceEnum.
* SPECIFIC_DATE has been added to ContractTermCancelOption.
* END_OF_SUBSCRIPTION_BILLING_TERM has been added to ContractTermCancelOption. 
* PAYSTACK has been added to GatewayEnum.
* PricingType Enum has been added.
* JP_MORGAN has been added to GatewayEnum.

### Deprecated Enums: 
* OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADE_SCHEDULED has been deprecated from EntityType#Enum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_DOWNGRADE_REMOVED has been deprecated from EntityType#Enum.
* REFUNDED_DUE_TO_APP_ISSUE has been added to OmnichannelSubscriptionItem#CancellationReasonEnum. 
* REFUNDED_FOR_OTHER_REASON has been added to OmnichannelSubscriptionItem#CancellationReasonEnum.

### v2.46.0 (2025-03-06)
* * * 

### New Input Params:
* created_at has been added to Invoice#LineItemsImportInputParams.
* PaymentIntent has been added to Purchase#CreateInputParams.

### New Enums:
* SUBSCRIPTION_ENTITLEMENTS_UPDATED has been added to EventType#Enum.

### v2.45.0 (2025-02-10)
* * * 

#### New Resources:
* Rule has been added. 
* UsageEvent has been added.

#### New Attribute: 
* deleted has been added to AttachedItem.
* deleted has been added to Coupon.
* deleted has been added to DifferentialPrice.
* deleted has been added to ItemFamily.
* deleted has been added to ItemPrice.
* deleted has been added to Item.
* deleted has been added to PriceVariant.
* tax_application has abeend added to CreditNote#Allocation.
* tax_application has been added to Invoice#AppliedCredit.
* line_item_credit has been added to Invoice.

#### New Input Params:
* exhausted_coupon_ids has been added to Subscription#ImportForItems.

#### New Enums 
* STORE has been added in CreditNote#TypeEnum.
* STORE has been added in CreditNoteEstimate#TypeEnum.
* STORE has been added in Order#TypeEnum.
* TaxApplicationEnum has been added in CreditNote#Application.
* TaxApplicationEnum has been added in Invoice#AppliedCredit.
* RECORDED_PURCHASE has been added in EntityTypeEnum.
* RECORD_PURCHASE_FAILED, has been added in EventTypeEnum.

#### Deleted Input Params
* tax_providers_fields has been removed from Customer#MoveParams. 
* tax_providers_fields has been removed from Customer#MergeParams

#### Deprecated input params. 
* deprecated label in discount_quantity has been removed from Coupon#CreateParams.
* deprecated label in discount_quantity has been removed from Coupon#UpdateParams.
* deprecated label in discount_quantity has been removed from Coupon#CreateForItemsParams.
* deprecated label in discount_quantity has been removed from Coupon#UpdateForItemsParams.

### v2.44.0 (2024-12-19)
* * * 

#### New Resource: 
* Configuration has been added. 

#### New Attribute:
* discount_type has been added to CreditNote#Discount.
* discount_type has been added to CreditNoteEstimate#Discount.
* discount_type has been added to Invoice#Discount.
* discount_type has been added to InvoiceEstimate#Discount.
* discount_type has been added to QuoteLineGroup#Discount.
* initial_purchase_transaction has been added to OmnichannelSubscription.
* error_cause_id has been added to GatewayErrorDetail.
* error_cause_id has been added to Transaction#GatewayErrorDetail.
* error_cause_id has been added to APIError.
* deleted has been added to Quote. 
* current_term_start has been added to QuotedSubscripiton#SubscriptionItem.
* current_term_end has been added to QuotedSubscripiton#SubscriptionItem.
* next_billing_at has been added to QuotedSubscripiton#SubscriptionItem.
* current_term_start has been added to Subscription#SubscriptionItem.
* current_term_end has been added to Subscription#SubscriptionItem.
* next_billing_at has been added to Subscription#SubscriptionItem.
* billing_override has been added to Subscription. 
* grace_period_expires_at has been added to OmnichannelSubscriptionItem.

#### New Input Params:
* billing_override has been added to Subscription#UpdateForItemsInputParam.
* billing_override has been added to Subscription#CreateWithItemsInputParam.

#### New Enum Values:
* OMNICHANNEL_SUBSCRIPTION_IMPORTED has been added to EventTypeEnum.
* DISABLED has been added to Event#WebhookStatus.
* OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_STARTED has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_GRACE_PERIOD_EXPIRED has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_STARTED has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_DUNNING_EXPIRED has been added to EventTypeEnum. 
* IGNORED has been added to RecordedPurchase#StatusEnum.
* IN_DUNNING & IN_GRACE_PERIOD have been added to OmnichannelSubscriptionItem#StatusEnum.

###  v2.43.0 (2024-11-27)

#### New Resource: 
* OmnichannelSubscriptionItem has been added. 

#### New Attribute: 
* resource_version has been added to OmnichannelSubscription.
* resource_version has been added to OmnichannelTransaction.
* resource_version has been added to RecordedPurchase.

#### New Input Parameters:
* limit has been added to OmnichannelSubscription#ListRequest.
* offset has been added to OmnichannelSubscription#ListRequest.
* customer_id has been added to OmnichannelSubscription#ListRequest.
* replace_coupon_list has been added to HostedPage#CheckoutExistingRequest.
* replace_coupon_list has been added to HostedPage#CheckoutExistingForItemsRequest.
* subscription[po_number] has been added to HostedPage#CheckoutNewForItemsRequest.

#### Removed Subresource: 
* OmnichannelSubscriptionItem subresource has been removed from OmnichannelSubscription and is now a standalone resource.

#### Deprecated Attribute: 
* metadata has been deprecated from subscription. 

### v2.42.0 (2024-11-14)
* * *

#### New Resource: 
* OmnichannelTransaction has been added. 
* OmnichannelSubscription has been added.
* RecordedPurchase has been added.


#### New Attributes: 
* business_entity_id has been added to AttachedItem.
* business_entity_id has been added to DifferentialPrice.
* business_entity_id has been added to Items.
* business_entity_id has been added to ItemFamily.
* business_entity_id has been added to ItemPrice.
* business_entity_id has been added to PriceVariant.
* valid_from has been added to coupon.

#### New Input Parameters:
* business_entity_id has been added to AttachedItem#CreateRequest.
* preferred_scheme has been added to Card#UpdateCardForCustomerRequest.
* valid_from has been added to Coupon#CreateForItem &  Coupon#UpdateForItemsRequest.
* preferred_scheme has been added to Customer#CreateRequest & Customer#CollectPaymentRequest.
* business_entity_id has been added to DifferentialPrice#CreateRequest.
* preferred_scheme has been added to Invoice#CreateRequest & Invoice#CreateForChargeItemsAndChargesRequest.
* business_entity_id has been added to Items#CreateRequest.
* business_entity_id & include_site_level_resources have been added to Items#ListItemParams.
* business_entity_id has been added to ItemFamily#CreateRequest.
* business_entity_id & include_site_level_resources have been added to ItemFamily#ListItemFamilyParams.
* business_entity_id has been added to ItemPrice#CreateRequest.
* business_entity_id & include_site_level_resources have been added to ItemPrice#ListItemPriceParams.
* business_entity_id & include_site_level_resources have been added to PriceVariant#ListItemFamilyParams.
* business_entity_id has been added to PriceVariant#CreateRequest.
* business_entity_id & include_site_level_resources have been added to PriceVariant#ListPriceVariantParams.
* preferred_scheme has been added to Subscription#CreateRequest, Subscription#UpdateRequest.
* preferred_scheme Subscription#UpdateForItemsRequest, & Subscription#ImportSubscriptionRequest.
* business_entity_id & include_site_level_resources have been added to Export#ItemFamiliesRequest & Export#ItemsRequest.
* business_entity_id & include_site_level_resources have been added to Export#ItemPricesRequest Export#PriceVariantsRequest
* name & flexible_schedules[period] have been added to PaymentScheduleScheme#CreateRequest.

#### New Enum Values: 
* FUTURE has been added to Coupon#StatusEnum.
* EXISTING_CUSTOMER & NEW_CUSTOMER have been added to Coupon#TypeEnum.
* LATE_FAILURE has added to Transation#LinkedPaymentEnum & Transation#StatusEnum.
* OMNICHANNEL_SUBSCRIPTION, has been added to EntityTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM, has been added to EntityTypeEnum.
* OMNICHANNEL_TRANSACTION, has been added to EntityTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_RENEWED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_CREATED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADE_SCHEDULED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_DOWNGRADE_REMOVED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_DOWNGRADED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_EXPIRED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLATION_SCHEDULED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_SCHEDULED_CANCELLATION_REMOVED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_RESUBSCRIBED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_UPGRADED, has been added to EventTypeEnum.
* OMNICHANNEL_SUBSCRIPTION_ITEM_CANCELLED, has been added to EventTypeEnum.

###  v2.41.0 (2024-10-17)
* * *

#### New Resource:
* PaymentScheduleEstimate has been added. 

### New Attributes: 
* payment_schedule_estimates has been added to Estimate. 
* usage_accumulation_reset_frequency has been added to ItemPrice.
* name has been added to PaymentScheduleScheme.
* usage_accumulation_reset_frequency has been added to QuotedSubscription#SubscriptionItem.
* usage_accumulation_reset_frequency has been added to Subscription#SubscriptionItem.

### New Endpoints: 
* Estimate#PaymentSchedule has been added. 

### New Input Params: 
* usage_accumulation_reset_frequency has been added to ItemPrice#CreateParams. 
* usage_accumulation_reset_frequency has been added to ItemPrice#UpdateParams. 
* discounts has been added to PricingPageSession#CreateForNewSubscriptionParams.
* discounts has been added to PricingPageSession#CreateForExistingSubscriptionParams.
* invoice_immediately has been added to Quote#ConvertParams.

### v2.40.1 (2024-10-03)
* * *

#### Bug Fixes:
* metadata field not working bug fixed. 
* meta_data field not working bug fixed.

### v2.40.0 (2024-09-19)
* * *

#### New Resource:
* PaymentScheduleScheme has been added. 
* PaymentSchedule has been added. 

### New Endpoints: 
* Invoice#ApplyPaymentScheduleScheme has been added. 
* Invoice#PaymentSchedules has been added. 

### New Attributes 
* bundle_items[] has been added to Items. 
* bundle_configuration has been added to Items.

#### New Input parameters: 
* bundle_configuration has been added to Items#CreateParams, Items#UpdateParams & Items#ListParams.
* bundle_items_to_add[] has been added to Items#CreateParams & Items#UpdateParams.  
* bundle_items_to_update[] has been added to Items#UpdateParams.
* bundle_items_to_remove[] has been added to Items#UpdateParams.
* payment_schedule has been added to Purchase#CreateParams.

### New Enum Values:
* payment_schedules_created has been added to EventTypeEnum.
* payment_schedules_updated has been added to EventTypeEnum.
* payment_schedule_scheme_created has been added to EventTypeEnum.
* payment_schedule_scheme_deleted has been added to EventTypeEnum.

### Removed Resource: 
* Installment has been removed. 
* InstallmentConfig has been removed.
* InstallmentDetail has been removed.

### Removed Endpoints: 
* Invoice#Installments has been removed. 

### Removed Input parameters: 
* installment_info has been removed from Purchase#CreateParams.

### Removed Enum Values: 
* invoice_installments_created has been removed from EventTypeEnum.
* invoice_installment_updated has been removed from EventTypeEnum.
* installment_config_created has been removed from EventTypeEnum.
* installment_config_deleted has been removed from EventTypeEnum.

### v2.39.0 (2024-08-29)
* * *

#### New Resource:
* CustomerEntitlement has been added. 

#### New Endpoints:
* Ramp#UpdateRequest has been added to Ramp resource.
* Transaction#ReconcileRequest has been added to Transaction resource. 

### New Attributes: 
* arr has been added to Subscription. 

### New Enum Values: 
* customer_entitlements_updated has been added to EntityTypeEnum.
* subscription_moved_in has been added in EventType enum.
* subscription_moved_out has been added in EventType enum.
* subscription_movement_failed has been added in EventType enum.

### v2.38.0 (2024-08-14)
* * *

#### New Attributes:
* feature_type has been added in SubscriptionEntitlement.
* business_entity_id has been made optional in Quote.
* business_entity_id has been made optional in CreditNote.

#### New Input parameters: 
* invoice_usages has been added in Subscription#UpdateForItemsRequest.
* invoice_usages has been added in Estimate#UpdateSubscriptionForItemsRequest.

### v2.37.0 (2024-07-31)
* * *

#### New Resource:
* Metadata has been added. 

#### New Attributes:
* variant_group has been added in PriceVariant resource.
* effective_from & schedule_status have been added in EntitlementOverride resource.
* effective_from & schedule_status have been added in SubscriptionEntitlement resource.
* status_transition_reason has been added in Ramp subresource.
* billing_period & billing_period_unit have been added in SubscriptionItem subresource.

#### New Input parameters:
* variant_group has been added to PriceVariant#CreateRequest, PriceVariant#UpdateRequest.
* include_scheduled_overrides has been added to SubscriptionEntitlement#SubscriptionEntitlementsForSubscriptionRequest.
* entitlement_overrides[effective_from] has been added to SubscriptionEntitlement#SubscriptionEntitlementsForSubscriptionRequest.
* entitlement_overrides[effective_from] has been added to EntitlementOverride#AddEntitlementOverrideForSubscriptionRequest.
* include_scheduled_overrides has been added to EntitlementOverride#ListEntitlementOverrideForSubscriptionRequest.
* updated_at has been added to Usage#ListRequest.

#### New Enum values:
* SUBSCRIPTION_ITEMS_RENEWED has been added in EventType enum.
* SUBSCRIPTION_RAMP_DRAFTED has been added in EventType enum.
* SUBSCRIPTION_RAMP_UPDATED has been added in EventType enum.

### Bug Fixes: 
* estimate.invoiceEstimate should return undefined instead of empty object.

### v2.36.0 (2024-07-19)
* * *

#### New Input parameters:
* change_option has been added to HostedPage#CheckoutExistingForItemsRequest.
* changes_scheduled_at has been added to HostedPage#CheckoutExistingForItemsRequest.

### v2.35.0 (2024-07-04)
* * *

* Moved @types/q from dependencies to devDependencies to fix https://github.com/chargebee/chargebee-typescript/issues/55.

### v2.34.0 (2024-07-03)
* * *

#### New resources:
* Currency has been added.
* PricingPageSession Transfer has been added.

#### New Enum 
* cancel_option Enum has been added. 

#### New Enum values:
* ONLINE_BANKING_POLAND has been added in PaymentMethod enum.
* ONLINE_BANKING_POLAND has been added in PaymentMethodType enum.
* ONLINE_BANKING_POLAND has been added in Type enum.
* DRAFT has been added in Ramp enum.

#### New Input parameters:
* cancel_option has been added to Estimate#CancelSubscriptionRequest, Estimate#CancelSubscriptionForItemsRequest.
* cancel_option has been added to Subscription#CancelForItemsRequest, Subscription#CancelRequest.
* statement_descriptor[descriptor] has been added to Purchase#ChargeRequest.

#### New Attributes:
* tax_origin has been added to Invoice.
* tax_origin has been added to CreditNote.


### v2.33.0 (2024-05-28)
* * *

#### New resources:
* BusinessEntity has been added.
* BusinessEntity Transfer has been added.


#### New Enum values:
* NUVEI has been added in Gateway enum.


#### New Attributes:
* site_details_at_creation has been added to CreditNote. 
* site_details_at_creation has been added to Invoice. 


#### New Input parameters:
* tax_providers_fields[provider_name] has been added to Addon#CreateRequest, Addon#UpdateRequest.
* tax_providers_fields[field_id] has been added to Addon#CreateRequest, Addon#UpdateRequest.
* tax_providers_fields[field_value] has been added to Addon#CreateRequest, #UpdateRequest.

* tax_providers_fields[provider_name] has been added to Customer#CreateRequest, Customer#UpdateRequest, Customer#MoveRequest.
* tax_providers_fields[field_id] has been added to Customer#CreateRequest, Customer#UpdateRequest, Customer#MoveRequest.
* tax_providers_fields[field_value] has been added to Customer#CreateRequest, Customer#UpdateRequest, Customer#MoveRequest..

* tax_providers_fields[provider_name] has been added to Estimate#CreateSubscriptionRequest, Estimate#CreateSubItemEstimateRequest, Estimate#CreateInvoiceRequest, CreateInvoiceForItemsRequest.
* tax_providers_fields[field_id] has been added to Estimate#CreateSubscriptionRequest, Estimate#CreateSubItemEstimateRequest, Estimate#CreateInvoiceRequest, CreateInvoiceForItemsRequest.
* tax_providers_fields[field_value] has been added to Estimate#CreateSubscriptionRequest, Estimate#CreateSubItemEstimateRequest, Estimate#CreateInvoiceRequest, CreateInvoiceForItemsRequest.

* tax_providers_fields[provider_name] has been added to Invoice#CreateRequest, Invoice#CreateForChargeItemsAndChargesRequest, Invoice#ChargeRequest.
* tax_providers_fields[field_id] has been added to Invoice#CreateRequest, Invoice#CreateForChargeItemsAndChargesRequest, Invoice#ChargeRequest.
* tax_providers_fields[field_value] has been added to Invoice#CreateRequest, Invoice#CreateForChargeItemsAndChargesRequest, Invoice#ChargeRequest.

* tax_providers_fields[provider_name] has been added to ItemPrice#CreateRequest, ItemPrice#UpdateRequest.
* tax_providers_fields[field_id] has been added to ItemPrice#CreateRequest, ItemPrice#UpdateRequest.
* tax_providers_fields[field_value] has been added to ItemPrice#CreateRequest, ItemPrice#UpdateRequest.

* tax_providers_fields[provider_name] has been added to Plan#CreateRequest, Plan#UpdateRequest.
* tax_providers_fields[field_id] has been added to Plan#CreateRequest, Plan#UpdateRequest.
* tax_providers_fields[field_value] has been added to Plan#CreateRequest, Plan#UpdateRequest.

* tax_providers_fields[provider_name] has been added to Quote#EditOneTimeQuoteRequest, Quote#CreateForOnetimeChargesRequest, Quote#CreateForChargeItemsAndChargesRequest, Quote#EditForChargeItemsAndChargesRequest.
* tax_providers_fields[field_id] has been added to Quote#EditOneTimeQuoteRequest, Quote#CreateForOnetimeChargesRequest, Quote#CreateForChargeItemsAndChargesRequest, Quote#EditForChargeItemsAndChargesRequest.
* tax_providers_fields[field_value] has been added to Quote#EditOneTimeQuoteRequest, Quote#CreateForOnetimeChargesRequest, Quote#CreateForChargeItemsAndChargesRequest, Quote#EditForChargeItemsAndChargesRequest.

* tax_providers_fields[provider_name] has been added to UnbilledCharge#CreateUnbilledChargeRequest, UnbilledCharge#CreateRequest.
* tax_providers_fields[field_id] has been added to UnbilledCharge#CreateUnbilledChargeRequest, UnbilledCharge#CreateRequest.
* tax_providers_fields[field_value] has been added to UnbilledCharge#CreateUnbilledChargeRequest, UnbilledCharge#CreateRequest.

* line_items[entity_type] has been added to CreditNote#CreateRequest.
* line_items[entity_id] has been added to CreditNote#CreateRequest.


### v2.32.1 (2024-05-02)
* * *

#### Removed resources:
* Session has been removed.

### v2.32.0 (2024-04-30)
* * *

#### New resources:
* PriceVariant has been added.
* Ramp has been added.
* InstallmentDetail has been added.
* Session has been added.
* Ramp has been added.

#### New Enum values:
* INVOICE_INSTALLMENTS_CREATED has been added in EventType enum.
* INVOICE_INSTALLMENT_UPDATED has been added in EventType enum.
* INSTALLMENT_CONFIG_CREATED has been added in EventType enum.
* INSTALLMENT_CONFIG_DELETED has been added in EventType enum.
* RAMP_CREATED has been added in EventType enum.
* RAMP_DELETED has been added in EventType enum.
* RAMP_APPLIED has been added in EventType enum.

#### New Attributes:
* tax_providers_fields has been added to Addon resource.
* tax_providers_fields has been added to Customer resource.
* tax_providers_fields has been added to ItemPrice resource.
* tax_providers_fields has been added to Plan resource.
* resource_version has been added to Installment resource.
* resource_version has been added to InstallmentConfig resource.
* KlarnaPayNow has been added to PaymentSource resource.
* business_entity_id has been added to UnbilledCharge resource.

#### New Endpoints:
* Exports#PriceVariantsRequest has been added to Exports resource.

#### New Input parameters:
* changes_scheduled_at, change_option has been added to Estimate#UpdateSubscriptionRequest.
* changes_scheduled_at, change_option has been added to Estimate#UpdateSubscriptionForItemsRequest.
* contract_term[contract_start] has been added to Estimate#CreateSubItemEstimateRequest.
* contract_term[contract_start] has been added to Estimate#CreateSubItemForCustomerEstimateRequest.
* contract_term[contract_start] has been added to Subscription#CreateWithItemsRequest.
* contract_term[contract_start] has been added to Subscription#UpdateForItemsRequest.
* price_variant_id has been added to ItemPrice#CreateRequest.
* price_variant_id has been added to ItemPrice#UpdateRequest.
* price_variant_id has been added to ItemPrice#ListRequest.

#### Removed attributes:
* additional_info has been removed from Invoice#StatmentDescriptor resource.

#### Removed Input parameters:
* additional_info has been removed from Subscription#CreateRequest.
* additional_info has been removed from Subscription#CreateForCustomerRequest.
* additional_info has been removed from Subscription#CreateWithItemsRequest.
* additional_info has been removed from Subscription#UpdateRequest.
* additional_info has been removed from Subscription#UpdateForItemsRequest.
* additional_info has been removed from Subscription#ReactivateRequest.

### v2.31.1 (2024-04-03)
* * *

#### New Input parameters:
* to_customer_id has been added to subscription#MoveRequest.
* copy_payment_source has been added to subscription#MoveRequest.

#### New endpoints:
* Subscription#MoveRequest has been added to the Subscription resource.

### v2.31.0 (2024-03-20)
* * *

#### New resources:
* Attribute has been added.
* ImpactedItemPrice has been added.
* InstallmentConfig has been added.
* Installment has been added.

#### Removed attributes:
* product_id has been removed from ItemPrice resource.

#### New Enum values:
* klarna_pay_now has been added to TypeEnum in Customer resource.
* klarna_pay_now has been added to PaymentMethodEnum.
* klarna_pay_now has been added to PaymentMethodTypeEnum enum.
* klarna_pay_now has been added to TypeEnum.
* price_variant has been added to EntityTypeEnum.
* price_variant_created has been added in EventType enum.
* price_variant_updated has been added in EventType enum.
* price_variant_deleted has been added in EventType enum.

#### Removed Enum values:
* product and variant have been removed from EntityTypeEnum.

#### New Input parameters:
* config_id has been added to Invoice#InstallmentsRequest.
* amount has been added to Invoice#InstallmentsRequest.
* payment_source_id has been added to Purchase#CreateRequest.
* installment_info[config_id] has been added to Purchase#CreateRequest.
* installment_info[amount] has been added to Purchase#CreateRequest.
* subscription_info[contract_term_billing_cycle_on_renewal] has been added to Purchase#CreateRequest.
* contract_terms[index] has been added to Purchase#CreateRequest.
* contract_terms[action_at_term_end] has been added to Purchase#CreateRequest.
* contract_terms[cancellation_cutoff_period] has been added to Purchase#CreateRequest.
* subscription_info[contract_term_billing_cycle_on_renewal] has been added to Purchase#EstimateRequest.
* contract_terms[index] has been added to Purchase#EstimateRequest.
* contract_terms[action_at_term_end] has been added to Purchase#EstimateRequest.
* contract_terms[cancellation_cutoff_period] has been added to Purchase#EstimateRequest.

#### Deprecated input parameters:
* product_created, product_updated, product_deleted, variant_created, variant_updated, variant_deleted has been deprecated in EventTypeEnum.

### v2.30.0(2024-02-29)
* * *

#### New attributes:
* usage_percentage has been added to QuoteLineGroup resource.
* usage_percentage has been added to Quote resource.
* usage_percentage has been added to CreditNoteEstimate resource.
* usage_percentage has been added to CreditNote resource.
* usage_percentage has been added to InvoiceEstimate resource.
* usage_percentage has been added to Invoice resource.
* error_detail of type GatewayErrorDetail has been added to PaymentIntent#PaymentAttempt subResource.
* origin_user has been added to Event resource.
* proration_type has been added to QuotedSubscription#SubscriptionItem and Subscription#SubscriptionItem subResources
* network_error_message, recommendation_message, processor_error_code, processor_error_message has been added to Transaction#GatewayErrorDetail subResource.

#### New Enum values:
* TAX_NOT_CONFIGURED_EXTERNAL_PROVIDER has been added to TaxExemptReasonEnum.

#### New Input parameters:
* billing_address has been added to Estimate#CreateSubItemForCustomerEstimateRequest.
* transactions[amount] has been added to Invoice#ApplyPaymentsRequest.

### v2.29.0 (2024-01-31)
* * *

#### New Enum values:
* item_price_entitlements_updated has been added to EventTypeEnum.
* item_price_entitlements_removed has been added to EventTypeEnum.

#### New Input parameters:
* layout has been added to HostedPage#AcceptQuoteRequest in HostedPage resource.

### v2.28.0 (2024-01-04)
* * *

#### New resources:
* Entitlements has been added.

#### New attributes:
* date_to, date_from, prorated_taxable_amount has been added to quote_line_group.
* date_to, date_from, prorated_taxable_amount has been added to quote.
* date_to, date_from, prorated_taxable_amount has been added to credit_note_estimate.
* date_to, date_from, prorated_taxable_amount has been added to credit_note.
* date_to, date_from, prorated_taxable_amount has been added to invoice_estimate.
* date_to, date_from, prorated_taxable_amount has been added to order.
* date_to, date_from, prorated_taxable_amount has been added to invoice.
* active_id has been added to customers.
* active_id has been added to subscriptions.
* reference_id has been made optional for payment_sources/create_using_permanent_token
* custom_payment_method_id has been added to transactions.
* custom_payment_method_name has been added to transactions.
* error_detail has been added to transactions.


#### New Enum values:
* CMR_FALABELLA, TARJETA_NARANJA, NATIVA, CENCOSUD, CABAL, ARGENCARD, ELO, HIPERCARD, CARNET, RUPAY, MAESTRO has been added to Card#CardTypeEnum
* Transferred has been added to Subscription#StatusEnum.
* Transferred has been added to SubscriptionEstimate#StatusEnum.
* AutomatedBankTransfer has been added to PaymentMethodEnum.
* UsAutomatedBankTransfer, GbAutomatedBankTransfer, EuAutomatedBankTransfer, JpAutomatedBankTransfer, MxAutomatedBankTransfer has been added to VirtualBankAccount#SchemeEnum.
* CustomerBusinessEntityChanged, SubscriptionBusinessEntityChanged has been added to EventTypeEnum.
* Dlocal has been added to GatewayEnum.
* UsAutomatedBankTransfer, UkAutomatedBankTransfer, EuAutomatedBankTransfer, JpAutomatedBankTransfer, MxAutomatedBankTransfer, Custom has been added to OfflinePaymentMethodEnum.
* AutomatedBankTransfer has been added to PaymentMethodEnum.
* AutomatedBankTransfer has been added to PaymentMethodTypeEnum.

#### New Input parameters:
* custom_payment_method_name has been added to Transactions#RecordRefundRequest.
* proration_type has been added to Subscription#UpdateForItemsRequest.
* proration_type has been added to ItemPrice.
* payment_initiator has been added to Invoice.
* payment_method_token, customer_profile_token, network_transaction_id, mandate_id, skip_retrieval, card, billing_address has been added to PaymentSource#CreateUsingPermanentTokenRequest.
* subscription_items[proration_type] has been added to Estimate#UpdateSubscriptionForItemsRequest.
* transaction[custom_payment_method_id] has been added to Customer#RecordExcessPaymentRequest.
* transaction[custom_payment_method_id] has been added to CreditNote#RecordRefundRequest.

### v2.27.0 (2023-11-30)
* * *

#### New Enum values:
* swiss_reference has been added to PaymentReferenceNumber#TypeEnum.

#### New Input parameters:
* subscription[po_number] has been added to Quote#EditCreateSubForCustomerQuoteRequest in Quote resource. 
* subscription[po_number] has been added to Quote#EditCreateSubCustomerQuoteForItemsRequest in Quote resource.

* * * 

### v2.26.0 (2023-10-31)
* * *

#### New attributes:
* statement_descriptor has been added to invoice resource.
* source has been added to the Hosted_Pages resource.

#### New Enum values:
* pay_com has been added to Gateway.
* pay_to, faster_payments, sepa_instant_transfer has been added to Customer#TypeEnum.
* pay_to, faster_payments, sepa_instant_transfer has been added to PaymentMethodEnum.
* pay_to, faster_payments, sepa_instant_transfer has been added to PaymentMethodTypeEnum.
* pay_to, faster_payments, sepa_instant_transfer has been added to TypeEnum.
* pay_to, faster_payments, sepa_instant_transfer, amazon_payments has been added to PaymentIntent#PaymentMethodTypeEnum.

#### New Input parameters:
* source has been added to HostedPage#CheckoutOneTimeForItemsRequest.
* source has been added to HostedPage#CheckoutNewForItemsRequest.
* source has been added to HostedPage#CheckoutExistingForItemsRequest.
* statement_descriptor_descriptor has been added to Invoice#CreateRequest.
* statement_descriptor_descriptor has been added to Invoice#CreateForChargeItemsAndChargesRequest.
* statement_descriptor_descriptor has been added to Invoice#UpdateDetailsRequest.
* statement_descriptor_additional_info has been added to Invoice#CreateRequest.
* statement_descriptor_additional_info has been added to Invoice#CreateForChargeItemsAndChargesRequest.
* statement_descriptor_additional_info has been added to Invoice#UpdateDetailsRequest.
* statement_descriptor_descriptor has been added to Subscription#CreateRequest.
* statement_descriptor_descriptor has been added to Subscription#CreateForCustomerRequest.
* statement_descriptor_descriptor has been added to Subscription#CreateWithItemsRequest.
* statement_descriptor_descriptor has been added to Subscription#UpdateRequest.
* statement_descriptor_descriptor has been added to Subscription#UpdateForItemsRequest.
* statement_descriptor_descriptor has been added to Subscription#ReactivateRequest.
* statement_descriptor_additional_info has been added to Subscription#CreateRequest.
* statement_descriptor_additional_info has been added to Subscription#CreateForCustomerRequest.
* statement_descriptor_additional_info has been added to Subscription#CreateWithItemsRequest.
* statement_descriptor_additional_info has been added to Subscription#UpdateRequest.
* statement_descriptor_additional_info has been added to Subscription#UpdateForItemsRequest.
* statement_descriptor_additional_info has been added to Subscription#ReactivateRequest.

#### Updates to old parameters:
* duration_type, discount_type in coupons has been made optional.
* proration_type in addons is now supported.
* csv_tax_rule has been removed.
* Tax1JurisTypeEnum has been removed.
* Tax2JurisTypeEnum has been removed.
* Tax3JurisTypeEnum has been removed.
* Tax4JurisTypeEnum has been removed.

### v2.25.0 (2023-09-26)
* * *

#### New attributes:
* venmo has been added to the PaymentSource resource.
* proration_type has been added to the QuotedCharge, QuotedSubscription and Subscription resource.

#### New Enum values:
* ebanx has been added to Gateway.
* venmo has been added to Customer#TypeEnum.
* venmo has been added to PaymentMethodEnum.
* venmo has been added to PaymentMethodTypeEnum.
* venmo has been added to TypeEnum.
* venmo has been added to PaymentIntent#PaymentMethodTypeEnum.

#### New Input parameters:
* einvoicing_method has been added to HostedPage#CheckoutOneTimeForItemsRequest.
* einvoicing_method has been added to HostedPage#CheckoutNewForItemsRequest.
* additional_information has been added to PaymentSource#CardAdditionalInformation.

### v2.24.0 (2023-09-05)
* * *

#### New Resource:
* CsvTaxRule has been added.

#### New attributes:
* direct_debit_scheme has been added to the PaymentSource#PaymentSourceBankAccount resource. 

#### New Enum :
* DirectDebitSchemeEnum has been added.
* Tax1JurisTypeEnum has been added.
* Tax2JurisTypeEnum has been added.
* Tax3JurisTypeEnum has been added.
* Tax4JurisTypeEnum has been added.

#### New Input parameters:
* avalara_tax_code, hsn_code, taxjar_product_code has been added to Invoice#AddChargeRequest. 


### v2.23.0 (2023-07-31)
* * *

#### New Attributes:
* tax_category has been added to the CreditNote, Quote and Invoice resource. 
* proration_type has been added in Addon resource.

#### New Enum values:
* tax has been added to EntityType enum in Invoice resource.
* payment_source_locally_deleted has been added to EventType.

#### New Input parameters:

* CouponId and CouponApplyTill has been added to Subscritpion#CreateRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#CreateForCustomerRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#CreateWithItemsRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#UpdateRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#UpdateForItemsRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#ImportSubscriptionRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#ImportForCustomerRequest in Subscritpion resource. 
* CouponId and CouponApplyTill has been added to Subscritpion#ImportForItemsRequest in Subscritpion resource. 
* cancel_reason_code has been added to Subscritpion#ImportForItemsRequest in Subscritpion resource.
* proration_type has been added in addon#createRequest and addon#UpdateRequest in Addon resource.
* addons[proration_type] has been added in Estimate#UpdateSubscriptionRequest in Estimate resource.
* addons[proration_type]  has been added in Subscription#UpdateRequest in Subscritpion resource.

#### New Enum Class:
* ProrationType enum has been added to addon resource.
* ProrationType enum has been added.


### v2.22.0 (2023-06-30)
* * *

#### New endpoints:
* ViewVoucher#ViewVoucherRequest has been added to the HostedPage resource.
* InvoiceListPaymentReferenceNumbers#InvoiceListPaymentReferenceNumbersRequest has been added to the Invoice resource.

#### New Resource:
* PaymentReferenceNumber has been added.

#### New attributes:
* local_currency_exchange_rate has been added to the CreditNote and Invoice resource. 

#### New Enum values:
* view_voucher has been added to Type enum in HostedPage resource.
* paused has been added in StoreStatus enum in InAppSubscription resource.
* metrics_global and windcave has been added in Gateway enum. 


#### New Input parameters:
* payment_initiator has been added to Customers#CollectPaymentRequest. 
* payment_initiator has been added to Invoice#CreateRequest.
* payment_initiator has been added to Invoice#ChargeRequest.
* payment_initiator has been added to Invoice#ChargeAddonRequest.
* payment_initiator has been added to Invoice#CollectPaymentRequest.
* payment_initiator has been added to Subscription#CreateRequest.
* payment_initiator has been added to Invoice#CreateForChargeItemRequest.
* payment_initiator has been added to Subscription#CreateForCustomerRequest.
* payment_initiator has been added to Subscription#CreateWithItemsRequest.
* payment_initiator has been added to Subscription#UpdateForItemsRequest.
* payment_initiator has been added to Subscription#ReactivateRequest.
* payment_initiator has been added to Subscription#ResumeRequest.
* payment_reference_numbers[id] has been added to Invoice#ImportInvoiceRequest.
* payment_reference_numbers[type] has been added to Invoice#ImportInvoiceRequest.
* payment_reference_numbers[number] has been added to Invoice#ImportInvoiceRequest.


### v2.21.0 (2023-05-31)
* * *

#### New endpoints:
* PaymentSource#CreateVoucherPaymentSource has been added to the PaymentSource resource.
* EventsRequest#HostedPage has been added to the PaymentSource resource.

#### New Resource:
* PaymentVoucher has been added.

#### New attributes:
* boleto and billing_address has been added to the PaymentSource resource.
* product_id has been added to the ItemPrice resource.

#### New Enum Class:
* EventNameEnum has been added.
* PaymentVoucherTypeEnum has been added.
* VoucherTypeEnum has been added.

#### New Enum values:
* product and variant has been added to EntityType enum.
* product_created, product_updated, product_deleted, variant_created, variant_updated and variant_deleted enums have been added in EventType enum.
* voucher_created, voucher_expired and voucher_create_failed have been added in EventType enum.
* boleto has been added in PaymentMethod and OfflinePaymentMethod  and PaymentMethodTypeEnum#PaymentIntent.


### v2.20.0 (2023-05-16)
* * *

#### New Feature:
* Added setIdempotencyKey("UUID") utility to pass **Idempotency key** along with request headers to allow a safe retry of POST requests.
* Added isIdempotencyReplayed() utility to differentiate between original and replayed requests.
* Added getResponseHeaders() utility to to fetch the response headers.

### v2.19.0 (2023-04-28)
* * *

#### Fixes:
* SubscriptionId attribute has been maid as required in InAppSubscription resource.

#### New Attributes: 
* TotalContractValueBeforeTax has been added to the ContractTerm resource.
* TotalContractValueBeforeTax#SubscriptionContractTerm has been added to the Subscription resource.
* TotalContractValueBeforeTax#SubscriptionEstimateContractTerm has been addded to the SubscriptionEstimate resource.
* CouponConstraints has been added to the Coupon resource.

#### New Resource:
* NonSubscription have been added.

#### Added Input Parameters:
* contract_term[total_amount_raised_before_tax]#ImportSubscriptionRequest, contract_term[total_amount_raised_before_tax]#ImportForItemsRequest, contract_term[total_amount_raised_before_tax]#ImportContractTermRequest and contract_term[total_amount_raised_before_tax]#ImportForCustomerRequest parameter has been added to Subscription resource.
* contract_term[total_contract_value_before_tax]#ImportContractTermRequest parameter has been added to Subscription resource.
* coupon_constraints[entity_type]#CreateForItemsRequestParams, coupon_constraints[type]#CreateForItemsRequestParams and coupon_constraints[value]#CreateForItemsRequestParams parameter has been added to the Coupon resource.
* coupon_constraints[entity_type]#UpdateForItemsRequestParams, coupon_constraints[type]#UpdateForItemsRequestParams and coupon_constraints[value]#UpdateForItemsRequestParams parameter has been added to the Coupon resource.
* export_type#CustomersRequest and export_type#SubscriptionsRequest parameter has been added to the Export resource.

#### New Enum Class:
* ExportType has been added.

#### New Enum values:
* pending_authorization has been added to StatusEnum#PaymentIntentPaymentAttempt to the PaymentIntent resource.


### v2.18.0 (2023-03-24)
* * *

#### Fixes:
* Fixed list_discounts subscriptions API error.

#### New Attributes: 
* Einvoice#reference_number has been added to the credit_note resource.
* Einvoice#reference_number has been added to the invoice resource.
* einvoicing_method has been added to the customer resource.
* store_status and invoice_id have been addded to the in_app_subscriptions resource.

#### Added Input Parameters:
* update_for_items_params#discount_quantity and update_params#discount_quantity parameter has been added to the coupon resource.
* create_params#einvoicing_method and update_billing_info_params#einvoicing_method parameter has been added to the customer resource.
* customer_create_params#einvoicing_method , customer_update_params#einvoicing_metho and  customer_update_for_items_params#einvoicing_method parameter has been added to the Subscription resource.
* subscription_info_create_params#meta_data parameter has been added to the purchase resource.

#### New Endpoints:
* credit_note#send_einvoice has been added to the CreditNote resource. 
* invoice#send_einvoice has been added to the Invoice resource.
* in_app_subscriptions#import_subscription and in_app_subscriptions#retrieve_store_subs requests have been added to the in_app_subscriptions resource.

#### New Enum Class:
* EinvoicingMethod has been added.
* StoreStatus has been added in in_app_subscriptions resource.


### v2.17.1 (2023-03-02)

#### Fixes:
* Fixed Subscription_Discount param parsing issue. 

### v2.17.0 (2023-02-17)

#### Fixes:
* Fixed Serialization issue for invoice#business_entity_id, CreditNoteLineItem#entity_description  CreditNoteEstimateLineItem#entity_description, InvoiceLineItem#entity_description, InvoiceEstimateLineItem#entity_description, QuoteLineItem#entity_description and QuoteLineGroupLineItem#entity_description attributes.

#### New Attributes:
* resource_version and updated_at parameter has been added to the tax_withheld resource.

#### Added input parameters:
* ListRequestParams#updated_at parameter has been added to attached_item resource.
* attached_item_attached_items_params#updated_at parameter has been added to export resource.
* CheckoutGiftRequestParams#coupon_ids parameter has been added to hosted_page resource.
* customer_process_receipt_params#email, customer_process_receipt_params#first_name and  customer_process_receipt_params#last_name parameters has been added to in_app_subscription resource.

#### New endpoints:
* invoice#record_tax_withheld and invoice#remove_tax_withheld has been added to the invoice resource.
* credit_note#remove_tax_withheld_refund has been added to the credit_note resource.

#### New Enum values:
* custom has been added to payment_method Enum.
* ecentric has been added to gateway Enum.

#### Removed input parameters:
* estimate_params#invoice_info_estimate_params parameter has been removed from purchase resource.

#### Deprecated input parameters:
* CheckoutGiftRequest#coupon parameter have been deprecated in hosted_page resource.

### v2.16.0 (2023-01-13)
* * *

#### New Attributes:
* ShippingAddress and BillingAddress parameter has been added to the CreditNote.
* is_advance_charge has been added to the UnbilledCharge.

#### Added input parameters:
* subscription_create_sub_for_customer_quote_params#po_number and subscription_create_sub_items_for_customer_quote_params#po_number parameter has been added to Quote resource.
* unbilled_charges_import_unbilled_charges_params#is_advance_charge parameter has been added to Subscription resource.
* import_invoice_params#has_advance_charges parameter has been added to Invoice resource.

#### New endpoints:
* Invoice#delete_line_items has been added to the Invoice resource.

#### New Enum values:
* SUBSCRIPTION_TRIAL_EXTENDED has been added to EventTypeEnum.
* ZERO_VALUE_ITEM has been added to TaxExemptReasonEnum.
* BANK_OF_AMERICA has been added to GatewayEnum.


### v2.15.0 (2022-11-21)
* * *

#### New Attributes:
* business_entity_id filter parameter has been added to the Customer.
* is_written_off, write_off_amount, write_off_date and credit_note parameter have been added to the Invoice.

#### Added input parameters:
* business_entity_id filter parameter has been added to the  Export#revenue_recognition_params, Export#deferred_revenue_params, Export#customers_params and Subscription#subscription_list_params API.
* skip_billing_cycles parameter has been added to the Estimate#subscription_pause_subscription_params API.
* skip_billing_cycles parameter has been added to the  Subscription#pause_params.
* id have been added to the Invoices#credit_note_import_invoice_params API.

#### New Enum values:
* billing_cycles has been added to pause_option.


### v2.14.0 (2022-11-10)
* * *

#### New endpoints:
* credit_notes#import_credit_note has been added to the credit_notes resource.
* subscriptions#import_unbilled_charges has been added to the subscriptions resource.

#### New attributes:
* shipped_at parameter has been added to the orders#list_orders API.

#### Added input parameters:
* voided_at and void_reason_code have been added to the invoices#import_invoice API.

#### New attributes:
* business_entity_id has been added to the orders resource.

#### New Enum values:
* registered has been added to the status enum in credit_note_einvoice and invoice_einvoice subresources.
* type enum has been added to the subscription_discount subresource.
* subscription_entitlements_created has been added to the event_type enum.


### v2.13.0 (2022-09-20)

#### New Resource:
* discount has been added.

#### New Enum values:
* apply_on, duration_type and operation_type enums have been added.

### v2.12.0 (2022-09-20)
* * *

#### New endpoints:
* subscriptions#list_discounts has been added to the subscriptions resource.

#### New attributes:
* billing_month has been added to the customer resource.

#### Added input parameters:
* billing_month has been added to the customers#change_billing_date API.
* line_items[subscription_id] has been added to the invoices#import_invoice API.
* layout has been added to hosted_pages#checkout_onetime_for_items, hosted_pages#checkout_new_for_items and hosted_pages#checkout_existing_for_items APIs.
* discounts[apply_on], discounts[percentage], discounts[amount] and discounts[item_price_id] have been added to estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#update_subscription_for_items, hosted_pages#checkout_onetime_for_items, hosted_pages#checkout_new_for_items, hosted_pages#checkout_existing_for_items, invoices#create_for_charge_items_and_charges, quotes#create_subscription_for_items, quotes#edit_create_subscription_quote_for_items, quotes#update_subscription_quote_for_items, quotes#edit_update_subscription_quote_for_items, quotes#create_for_charge_items_and_charges, quotes#edit_for_charge_items_and_charges, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items and subscriptions#import_subscription_for_items APIs.
* discounts[duration_type], discounts[period], discounts[period_unit] and discounts[included_in_mrr] have been added to estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#update_subscription_for_items, hosted_pages#checkout_new_for_items, hosted_pages#checkout_existing_for_items, quotes#create_subscription_for_items, quotes#edit_create_subscription_quote_for_items, quotes#update_subscription_quote_for_items, quotes#edit_update_subscription_quote_for_items, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items and subscriptions#import_subscription_for_items APIs.
* discounts[operation_type] and discounts[id] have been added to estimates#update_subscription_for_items, quotes#update_subscription_quote_for_items, hosted_pages#checkout_existing_for_items, quotes#edit_update_subscription_quote_for_items, subscriptions#update_subscription_for_items and subscriptions#import_subscription_for_items APIs.

#### New Enum values:
* global_payments has been added to gateway enum.
* layout enum has been added.

### v2.11.0 (2022-08-22)
* * *

#### New endpoints:
* Purchase#Retrieve has been added to the Purchase resource.

#### New attributes:
* ResourceVersion has been added to the Token resource.
* UpdatedAt has been added to the Token and UnbilledCharge resources.
* ReferenceLineItemId has been added to the CreditNote#LineItem, CreditNoteEstimate#LineItem, Quote#LineItem, QuoteLineGroup#LineItem, InvoiceEstimate#LineItem and Invoice#LineItem subResources.
* Index has been added to the Order#ShippingAddress, Invoice#ShippingAddress, Quote#ShippingAddress, QuotedCharge#ItemTier, QuotedSubscription#ItemTier, Subscription#ItemTier, Subscription#ShippingAddress and SubscriptionEstimate#ShippingAddress subResources.
* VoidWithCreditNote has been added to the Invoice#VoidInvoiceRequest subresources.
* PaymentMethodDetails has been added to the Transaction resource.

#### New Resource:
* InAppSubscription have been added.

#### Removed input parameters:
* BusinessEntityId has been removed from Purchase#CreateRequest and Purchase#EstimateRequest.


### v2.10.0 (2022-07-08)
* * *

### Fixes:
* Fixed Status Enum related issues
* Fixed EmbeddedResource related issues 

#### New endpoints:
* hostedpage#PreCancel has been added to the hostedpage resource.

#### New attributes:
* business_entity_id have been added to the CreditNote, Customer,HostedPage, Invoice, PaymentIntent, Quote, Subscription and Transaction resources.
* coupon_set_code have been added to the CreditNote, CreditNoteEstimate, Invoice, InvoiceEstimate, Quote and QuoteLineGroup resources.
* List of SubscriptionEstimate have been added to Estimate resource.

#### New Resource:
* ImpactedSubscription, ImpactedItem, Purchase have been added.

#### New Enum values:
* direct_debit has been added to payment_method_type enum.
* bancontact, not_applicable added to payment_source_card_brand enum.
* business_entity added to entity_type Enum
* business_entity_created, business_entity_updated, business_entity_deleted, purchase_created added to event_type Enum
* chargebee_payments added to gateway Enum


### v2.9.0 (2022-05-23)
* * *

#### New endpoints:
* invoice#sync_usages and invoice#resend_einvoice have been added to the invoice resource.
* credit_notes#resend_einvoice has been added to the credit_notes resource.
* features#list_features, features#create_a_feature, features#update_a_feature, features#retrieve_a_feature, features#delete_a_feature, features#activate_a_feature, features#archive_a_feature and features#reactivate_a_feature have  been added to the features resource.
* subscription_entitlements#subscription_entitlements_for_subscription and subscription_entitlements#set_subscription_entitlement_availability have been added to the subscription_entitlements resource.
* item_entitlements#item_entitlements_for_an_item, item_entitlements#item_entitlements_for_a_feature, item_entitlements#add_an_item_entitlements and item_entitlements#upsert_or_remove_an_item_entitlements_for_item have been added to the item_entitlements resource.
* entitlement_overrides#add_entitlement_override_for_a_subscription and entitlement_overrides#list_entitlement_override_for_a_subscription have been added to the entitlement_overrides resource.

#### New Resource:
* features, subscription_entitlements, item_entitlements and entitlement_overrides have been added.

#### New filter parameters:
* einvoice[status] filter parameter has been added in credit_notes#list_credit_notes api.

#### New Enum values:
* paypal_express_checkout has been added to payment_method_type enum.
* feature_created, feature_updated, feature_deleted, feature_activated, feature_reactivated, feature_archived, item_entitlements_updated, entitlement_overrides_updated, entitlement_overrides_removed, item_entitlements_removed and entitlement_overrides_auto_removed have been added to the event_type enum.
* action enum has been added.

### v2.8.0 (2022-04-25)
* * *

### Fixes:
* Fixed return type of Subscription#contract_terms_for_subscription, Customer#contacts_for_customer, ItemPrice#find_applicable_items and ItemPrice#find_applicable_item_prices.

#### New endpoints:
* UnbilledCharge#CreateUnbilledCharge has been added to UnbilledCharge resource. Applicable only for PC1.0.

#### New attributes:
* channel have been added to the Addon, AttachedItem, CreditNote, Customer, Invoice, ItemFamily, ItemPrice, Plan and Subscription resources.
* external_name and channel have been added to the Item resource.

#### New input parameters:
* external_name have been added to Item#CreateRequest and Item#UpdateRequest.
* channel have been added to Addon#AddonListRequest.
* channel have been added to CreditNote#CreditNoteListRequest.
* channel have been added to Customer#CustomerListRequest.
* invoice[channel], subscription[channel] and customer[channel] have been added to Export#RevenueRecognitionRequest and Export#DeferredRevenueRequest.
* plan[channel] have been added to Export#PlansRequest.
* addon[channel] have been added to Export#AddonsRequest.
* customer[channel] have been added to Export#CustomersRequest.
* subscription[channel] have been added to Export#SubscriptionsRequest.
* invoice[channel] have been added to Export#InvoicesRequest. 
* credit_note[channel] have been added to Export#CreditNotesRequest.
* item[channel] have been added to Export#ItemsRequest.
* item_price[channel] have been added to Export#ItemPricesRequest.
* channel have been added to Invoice#InvoiceListRequest.
* channel have been added to Item#ItemListRequest.
* channel have been added to ItemPrice#ItemPriceListRequest.
* channel have been added to Plan#PlanListRequest.
* channel have been added to Subscription#SubscriptionListRequest.

### Existing input parameter changes:
* item_family_id in Item#CreateRequest has been made as required field.

### Removed enum values:
* coupon_expired has been removed from EventTypeEnum. 

### v2.7.1 (2022-03-31)
* * *

### Fixes:
* Fixed serialization issue.

### v2.7.0 (2022-03-14)
* * *

#### New Input parameters:
* net_term_days has been added to subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items, subscriptions#import_subscription_for_items endpoints.


### v2.6.0 (2022-03-08)
* * *

### Fixes:
* Fixed serialization issue for nested array attributes

#### New attributes:
* upi, mandates and their subresources have been added to the payment_source resource.

#### New Input parameters:
* bank_account[phone] have been added to customers#create_bank_account
* payment_intent[payment_method_type] have been added to customers#create_payment_intent, customers#collect_payment_intent
* payment_intent[payment_method_type] have been added to estimate#gift_subscription and estimate#gift_subscription_for_items.
* payment_intent[payment_method_type] have been added to gift#create_payment_intent and gift#create_gift_for_items_payment_intent.
* customer[is_einvoice_enabled], customer[entity_identifier_scheme], customer[entity_identifier_standard], entity_identifiers[id], entity_identifiers[scheme], entity_identifiers[value], entity_identifiers[operation], entity_identifiers[standard] have been added to hosted_page#checkout_onetime_for_items, hosted_page#checkout_new_for_items and hosted_page#checkout_existing_for_items.
* bank_account[phone] have been added to invoice#create_bank_account, invoice#create_bank_account_for_chargeitems_and_charges
* payment_intent[payment_method_type] have been added to invoice#create_payment_intent, invoice#create_payment_intent_for_chargeitems_and_charges
* bank_account[phone] have been added to payment_source#create_bank_account
* payment_intent[payment_method_type] have been added to payment_source#create_using_payment_intent
* subscription_id have been added to payment_source#list_payment_source
* bank_account[phone] have been added to subscription#create_bank_account
* payment_intent[payment_method_type] have been added to subscription#create_payment_intent, subscription#create_payment_intent_for_customer, subscription#create_payment_intent_with_items, subscription#update_payment_intent, subscription#update_payment_intent_for_items, subscription#reactivate_payment_intent, subscription#resume_payment_intent
* activated_at have been added to subscription#import_subscription, subscription#import_subscription_for_customer, subscription#import_subscription_for_items

#### New Enum values:
* upi, netbanking_emandates enum has been added in customer_payment_method_type subresource of customer resource
* current enum has been added in account_type.  
* quickbooks, razorpay enum has been added in gateway.
* upi, netbanking_emandates enum has been added in payment_method,payment_method_type, type
* upi, netbanking_emandates, apple_pay enum has been added in payment_method_type subresource of payment_intent resource
* current enum has been added in bank_account_type subresource of payment_source.

#### Deprecated attributes:
* coupon attribute have been added and deprecated in hosted_page resource.

#### Deprecated enums:
* NetdPaymentDueReminder have been deprecated in event_type.


### v2.5.0 (2022-01-21)
* * *

### Fixes:
* Added return types to all requests.
* Updated readme to include lazy loading process and removed trailing spaces.

#### New endpoints:
* credit_notes#download_einvoice has been added to the credit_notes resource.
* invoice#download_einvoice has been added to the invoice resource.

#### New attributes:
* is_einvoice_enabled, entity_identifier_scheme, entity_identifier_standard and entity_identifiers[] have been added to the customer resource.
* einvoice has been added to the invoice resource.
* einvoice has been added to the credit_notes resource.
* mime_type has been added to the download resource.

#### New Input parameters:
* entity_identifier_scheme, entity_identifier_standard, is_einvoice_enabled, entity_identifiers[id][0..N], entity_identifiers[scheme][0..N], entity_identifiers[value][0..N], entity_identifiers[standard][0..N] have been added to customers#create_a_customer, customers#update_billing_info_for_a_customer apis.
* customer[entity_identifier_scheme], customer[entity_identifier_standard], customer[is_einvoice_enabled], entity_identifiers[id][0..N], entity_identifiers[scheme][0..N], entity_identifiers[value][0..N], entity_identifiers[standard][0..N] have been added to the subscriptions#create_a_subscription api.
* customer[entity_identifier_scheme], customer[entity_identifier_standard], customer[is_einvoice_enabled] have been added to subscriptions#update_a_subscription and subscriptions#update_subscription_for_items apis.

#### New Enum values:
* operation enum has been added.
* status enum has been added in credit_notes_einvoice subresource of credit_notes resource.

#### Deprecated attributes:
* user, type, payment_method and exchange_rate have been deprecated from TaxWithHeld resource.

#### Deprecated enums:
* type and payment_method have been deprecated in TaxWithHeld resource.

#### Updated parameters:
* hierarchy_operation_type has been made mandatory in customers#get_hierarchy api.

#### Removed Filter parameters:
* create_pending_invoices has been removed from subscriptions#list_subscriptions api.


### v2.4.1 (2022-01-05)
* * *

#### Fixes:
* Improved error message for Invalid JSON response.

### v2.4.0 (2021-12-08)
* * *

#### Fixes:
* Added return types to all api requests.
* Fixed validation logic for IDparam.
* Included typescript related packages to devDependencies.
* Exposed function chargebee#updateRequestTimeoutInMillis to set custom time out.
* Updated default request timeout to 80000ms.

#### New endpoints:
* payment_sources#update_bank_account have been added in payment_sources resource.
* item_price#item_price_find_applicable_items and item_price#item_price_find_applicable_item_prices have been added in item_price resource.

#### New Attributes:
* hsn_code have been added to the resource addon, item_price and plan.
* first_name, last_name and email have been added to the resource payment_sources.

#### New Resource:
* TaxWithheld has been added.Applicable only for API V2. 

#### New Input parameters:
* hsn_code have been added to addons#create_an_addon, addons#update_an_addon, plan#create_an_plan and plan#update_an_plan  apis.
* bank_account[first_name],bank_account[last_name] and bank_account[email] have been added to payment_sources#update_bank_account api.
* charges[hsn_code] have been added in estimate#Create_Invoice, estimate#Create_Invoice_For_Items, hosted_pages#Checkout_One_Time, hosted_pages#Checkout_One_Time_For_Items, invoice#create_an_invoice, invoice#Create_For_Charge_Items_And_Charges and unbilledCharge#create_an_unbilledCharge apis.
* tax_detail[hsn_code] have been added in item_price#create_an_itemPrice and item_price#update_an_itemPrice apis.
* include_deleted have been added in plan#plan_list and addon#addon_list apis.Applicable only for Product Catalog V1.

#### New Enum values:
* subscription_activated_with_backdating, tax_withheld_recorded, tax_withheld_deleted and tax_withheld_refunded has been added to event_type enum.

### v2.3.0 (2021-10-14)
* * *

#### New Attributes:
* entity_id has been added in order_line_item_discounts resource.

#### New Input parameters:
* line_items[tax5_name], line_items[tax5_amount], line_items[tax6_name], line_items[tax6_amount], line_items[tax7_name], line_items[tax7_amount], line_items[tax8_name], line_items[tax8_amount], line_items[tax9_name],  line_items[tax9_amount], line_items[tax10_name], line_items[tax10_amount] have been added in import_invoice api.
* replace_primary_payment_source has been added in create_subscription_for_customer and create_subscription_for_items apis.

#### New Enum values:
* coupon_expired has been added to event_type enum.
* mollie has been added to gateway enum.
* item_level_discount and document_level_discount has been added to discount_type.

### v2.2.0 (2021-08-16)
* * *
* moved types to dev dependencies.
* made default callback value to undefined to make it optional.

#### New Attributes:
* generated_at has been added in credit_note and invoice resources.
* change_option have been added in quoted_subscription resource.
* changes_scheduled_at has been added in subscription and quoted_subscription resources.
* iin and last4 have been added in transaction resource.

#### New Resource:
* quoted_charge has been added. 

#### New Input parameters:
* invoice_date has been added in estimates##create_subscription_estimate, estimates#estimate_for_creating_a_customer_and_subscription, estimates#estimate_for_creating_a_subscription, estimates#create_subscription_for_a_customer_estimate, estimates#update_subscription_estimate, estimates#estimate_for_updating_a_subscription, estimates#cancel_subscription_estimate, estimates#cancel_subscription_for_items_estimate, estimates#create_invoice_for_items_estimate, estimates#create_invoice_estimate, hosted_pages#checkout_existing_subscription, hosted_pages#create_checkout_to_update_a_subscription, invoices#create_an_invoice, invoices#create_invoice_for_items_and_one-time_charges, subscriptions#create_a_subscription, subscriptions#create_subscription_for_customer, subscriptions#update_a_subscription, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items, subscriptions#reactivate_a_subscription, subscriptions#cancel_subscription_for_items and subscriptions#cancel_a_subscription endpoints.
* coupon_ids has been added to invoices#create_invoice_for_a_one-time_charge, invoice#create_invoice_for_a_non-recurring_addon, quotes#create_quote_for_one-time_charges, quotes#edit_quote_for_one-time_charges, quotes#create_a_quote_for_charge_and_charge_items, quotes#edit_quote_for_charge_items_and_charges endpoints.
* change_option and changes_scheduled_at have been added in quotes#create_quote_for_updating_a_subscription, quotes#edit_quote_for_updating_a_subscription, quotes#create_a_quote_for_update_subscription_items, quotes#edit_update_subscription_quote_for_items, subscriptions#update_a_subscription and subscriptions#create_subscription_for_items endpoints.
* invoice_date, create_pending_invoices and first_invoice_pending have been added in quotes#convert_a_quote endpoint.
* subscription[auto_close_invoices] has been added in quotes#convert_a_quote endpoint.

#### New Enum values:
* subscription_cancel has been added to charge_event enum in quote_line_groups resource.
* subscription_created_with_backdating, subscription_changed_with_backdating, subscription_canceled_with_backdating, subscription_reactivated_with_backdating, invoice_generated_with_backdating and credit_note_created_with_backdating have been added to event_type enum 
* change_option enum has been added.

#### Deprecated parameters:
* coupon has been deprecated in invoices#create_invoice_for_a_one-time_charge and invoices#create_invoice_for_a_non-recurring_addon endpoints.

### v2.1.0 (2021-07-22)
* * *
#### Fixes:
* Changed use of deprecated Buffer allocation from `new Buffer()` to `Buffer.from()`.
#### New endpoints:
* hosted_pages#checkout_one_time_for_items and hosted_pages#checkout_gift_for_items have been added in hosted_pages resource. 
* orders#resend_an_order has been added in orders resource.
* quotes#edit_create_subscription_quote_for_items, quotes#edit_update_subscription_quote_for_items and quotes#edit_quote_for_charge_items_and_charges have been added in quotes resource. Applicable only for Product Catalog V2.

#### New attributes:
* accounting_category3 and accounting_category4 have been added to addon, item_price and plan resources. 
* quantity_in_decimal has been added to attached_item resource.
* period and period_unit have been added to coupon resource.
* entity_id has been added to line_item_discounts object of credit_note, credit_note_estimate, invoice, invoice_estimate, quote and quote_line_group resources. 
* vat_number_prefix has been added to credit_note, customer, invoice and quote resources.
* price_in_decimal has been added to differential_price and item_price resources. 
* exchange_rate and new_sales_amount have been added to invoice resource.
* archived_at has been added to item and item_price resources.
* trial_end_action has been added to item_price, plan, subscription and subscription_estimate resources.
* resent_orders, tracking_url, resent_status, is_resent, original_order_id and resend_reasons have been added to order resource. 
* line_item_tiers have been added to quote resource.
* plan_quantity_in_decimal and plan_unit_price_in_decimal have been added to quoted_subscription and subscription resources. Applicable only for Product Catalog V1.
* contract_term_billing_cycle_on_renewal and quoted_contract_term have been added to quoted_subscription resource.
* quantity_in_decimal, metered_quantity, last_calculated_at, unit_price_in_decimal, amount_in_decimal and free_quantity_in_decimal have been added to subscription_items object of quoted_subscription and subscription resources.
* starting_unit_in_decimal, ending_unit_in_decimal and price_in_decimal have been added to item_tiers object in quoted_subscription resources.
* cancel_schedule_created_at has been added to subscription resource.
* exchange_rate and merchant_reference_id have been added to transaction resource.

#### New parameters:
* accounting_category3 and accounting_category4 have been added in addons#create_an_addon, addons#update_an_addon, plans#create_a_plan and plans#update_a_plan endpoints.
* quantity_in_decimal has been added in attached_items#create_an_attached_item, attached_items#update_an_attached_item and gifts#create_a_gift_subscription_for_items endpoints.
* period and period_unit have been added in coupons#create_a_coupon, coupons#update_a_coupon, coupons#create_a_coupon_for_items and coupons#update_a_coupon_for_items endpoints.
* vat_number_prefix has been added in customers#create_a_customer, customers#update_billing_info_for_a_customer, estimates#create_subscription, estimates#create_subscription_estimate, estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#update_subscription_for_items, estimates#update_subscription, hosted_pages#checkout_new_subscription, hosted_pages#checkout_one-time_payments, hosted_pages#create_checkout_for_a_new_subscription hosted_pages#checkout_existing_subscription, hosted_pages#create_checkout_to_update_a_subscription, invoices#import_invoice, invoices#update_invoice_details, subscriptions#create_a_subscription, subscriptions#update_a_subscription, subscriptions#update_subscription_for_items and subscriptions#import_a_subscription endpoints.
* payment_method[additional_information] has been added in customers#create_a_customer, customers#update_payment_method_for_a_customer,  customers#collect_payment_for_customer, invoices#create_an_invoice, invoices#create_invoice_for_items_and_one-time_charges, subscriptions#create_a_subscription, subscriptions#update_a_subscription, subscriptions#update_subscription_for_items and subscriptions#import_a_subscription endpoints.
* card[additional_information] has been added in customers#create_a_customer, customers#collect_payment_for_customer, invoices#create_an_invoice, invoices#create_invoice_for_items_and_one-time_charges, payment_sources#create_a_card_payment_source, subscriptions#create_a_subscription, subscriptions#update_a_subscription, subscriptions#update_subscription_for_items and subscriptions#import_a_subscription endpoints.
* bank_account[billing_address] has been added in customers#create_a_customer, invoices#create_an_invoice, invoices#create_invoice_for_items_and_one-time_charges, payment_sources#create_a_bank_account_payment_source and subscriptions#create_a_subscription endpoints.
* price_in_decimal has been added in differential_prices#create_a_differential_price and differential_prices#update_a_differential_price endpoints.
* tiers[starting_unit_in_decimal][0..N], tiers[ending_unit_in_decimal][0..N] and tiers[price_in_decimal][0..N] have been added in differential_prices#create_a_differential_price, differential_prices#update_a_differential_price, item_prices#create_an_item_price and item_prices#update_an_item_price endpoints.
* remove_general_note and notes_to_remove been added in estimates#create_invoice_estimate, estimates#create_invoice_for_items_estimate and invoices#create_invoice_for_items_and_one-time_charges endpoints.
* trial_end_action has been added in estimates#create_subscription, estimates#create_subscription_estimate, estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#update_subscription_for_items, estimates#update_subscription, plans#create_a_plan, plans#update_a_plan, item_prices#create_an_item_price, item_prices#update_an_item_price, subscriptions#create_a_subscription, subscriptions#create_subscription_for_customer, subscriptions#create_subscription_for_items, subscriptions#update_a_subscription and subscriptions#update_subscription_for_items endpoints.
* subscription_items[unit_price_in_decimal][0..N], item_tiers[starting_unit][0..N], item_tiers[ending_unit][0..N] and item_tiers[price_in_decimal][0..N] have been added in estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#update_subscription_for_items, estimates#update_subscription, estimates#cancel_subscription_for_items_estimate, hosted_pages#create_checkout_for_a_new_subscription, hosted_pages#create_checkout_to_update_a_subscription, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items and subscriptions#import_subscription_for_items endpoints.
* subscription_items[quantity_in_decimal][0..N] has been added in estimates#create_subscription_for_items, estimates#create_subscription_for_items_estimate, estimates#cancel_subscription_for_items_estimate, estimates#update_subscription_for_items, estimates#update_subscription, estimates#gift_subscription_for_items, estimates#cancel_subscription_for_items_estimate, gifts#create_a_gift_subscription_for_items, hosted_pages#create_checkout_for_a_new_subscription, hosted_pages#create_checkout_to_update_a_subscription, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items, subscriptions#import_subscription_for_items and subscriptions#cancel_subscription_for_items endpoints.
* notes_to_remove[entity_type][0..N] and notes_to_remove[entity_id][0..N] have been added in estimates#create_invoice, estimates#create_invoice_for_items and invoices#create_invoice_for_items_and_one-time_charges endpoints.
* item_prices[quantity_in_decimal][0..N] and item_prices[unit_price_in_decimal][0..N] have been added in estimates#create_invoice_for_items, invoices#create_invoice_for_items_and_one-time_charges and unbilled_charges#create_unbilled_charges_for_a_subscription endpoints.
* item_tiers[starting_unit_in_decimal][0..N], item_tiers[ending_unit_in_decimal][0..N] and item_tiers[price_in_decimal][0..N] have been added in estimates#create_invoice_for_items, invoices#create_invoice_for_items_and_one-time_charges and unbilled_charges#create_unbilled_charges_for_a_subscription endpoints.
* payment_intent[additional_information] has been added in customers#create_a_customer, customers#collect_payment_for_customer, gifts#create_a_gift_subscription_for_items, gifts#create_a_gif and payment_sources#create_using_payment_intent endpoints.
* invoice_note has been added in hosted_pages#checkout_one-time_payments endpoint.
* allow_offline_payment_methods has been added in hosted_pages#create_checkout_for_a_new_subscription and hosted_pages#create_checkout_to_update_a_subscription endpoints.
* free_quantity_in_decimal, price_in_decimal and trial_end_action have been added in item_prices#create_an_item_price and item_prices#update_an_item_price endpoints.
* tracking_url has been added in orders#create_an_order, orders#update_an_order and orders#import_an_order endpoints.
* additional_information has been added in payment_sources#create_using_gateway_temporary_token and payment_sources#create_using_permanent_token endpoints.

#### New enum values:
* bancontact has been added to card_type enum.
* card and latam_local_card have been added to powered_by enum.
* item_level_discount and document_level_discount have been added to entity_type enum of credit_note_discount, credit_note_estimate_discount, invoice_discount, line_item_discount and invoice_estimate_discount resources.
* item_level_discount and document_level_discount have been added to discount_type enum.
* add_usages_reminder and order_resent have been added to event_type enum.
* ingenico_direct and exact have been added to gateway enum. 
* max_usage has been added to usage_calculation enum.
* trial_end_action enum has been added.
* order_resent has been added to cancellation_reason enum.
* resent_status enum has been added.
* custom_discount has been added in discount_type enum of order_line_item_discount. 

#### New filter parameters:
* resent_status, is_resent and original_order_id filter parameters have been added in exports#orders and orders#list_orders enpoints.
* updated_at filter parameter has been added in exports#item_families and item_families#list_item_families endpoints.

#### New sort parameters:
* name, id and updated_at sort parameters are added to items#list_items and item_prices#list_item_prices endpoints.
* created_at and updated_at sort parameters are added to payment_sources#list_payment_sources endpoint.
* usage_date sort parameter has been added to usages#list_usages endpoint.

#### Deprecated parameters:
* duration_month parameter has been deprecated in coupon resource.

### v2.0.9 (2021-03-31)
* * *
* Bug fix: Issue with request parameters serialization

### v2.0.8 (2021-01-19)
* * *
##### New resources:
* Usages is added. Applicable only for Product Catalog V2

##### New end points:
* hosted_pages#checkout_one-time_payments has been added in hosted_pages resource

##### New attributes:
* auto_close_invoices has been added to customers, subscriptions resources
* metered, usage_calculation have been added to items resources
* create_pending_invoices, auto_close_invoices have been added to subscriptions resources

##### New parameters:
* auto_close_invoices has been added to the endpoint: customers#create_a_customer, customers#list_customers, customers#update_a_customer
* invoice_allocations[invoice_id] has been added to the endpoint: customers#collect_payment_for_customer
* coupon_ids has been added to the endpoint: estimates#create_invoice_for_items_estimate. Applicable only for Product Catalog V2
* subscription[auto_close_invoices] has been added to the endpoint: exports#export_revenue_recognition_reports, exports#export_deferred_revenue_reports, exports#export_subscriptions
* customer[auto_close_invoices] has been added to the endpoint: exports#export_revenue_recognition_reports, exports#export_deferred_revenue_reports, exports#export_customers
* item[metered], item[usage_calculation] have been added to the endpoint: exports#export_items. Applicable only for Product Catalog V2
* subscription_id has been added to the endpoint: invoices#add_one-time_charge_to_a_pending_invoice, invoices#add_non-recurring_addon_to_a_pending_invoice
* subscription_id has been added to the endpoint: invoices#add_a_charge-item_to_a_pending_invoice. Applicable only for Product Catalog V2
* metered, usage_calculation have been added to the endpoint: items#create_an_item, items#list_item. Applicable only for Product Catalog V2
* create_pending_invoices, auto_close_invoices, first_invoice_pending have been added to the endpoint: subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items,subscriptions#import_subscription_for_items. Applicable only for Product Catalog V2
* create_pending_invoices, auto_close_invoices have been added to the endpoint: subscriptions#list_subscriptions

### v2.0.7 (2020-12-15)
* * *
##### New end points:
* estimate_for_creating_a_customer_and_subscription, cancel_subscription_for_items_estimate, gift_subscription_estimate_for_items have been added in estimate resource. Applicable only for Product Catalog V2
* regenerate_invoice_estimate has been added in estimate resource
* create_a_gift_subscription_for_items has been added in gift resource. Applicable only for Product Catalog V2
* regenerate_invoice has been added in subscription resource

##### New attributes:
* show_description_in_invoices, show_description_in_quotes have been added to the resource item_prices
* tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[price_in_decimal] have been added to the resource differential_prices
* show_description_in_invoices, show_description_in_quotes have been added to the resource item_prices. Applicable only for Product Catalog V2

##### New parameters:
* payment_intent[additional_info] has been added to the endpoints customers#create_a_customer, invoices#create_an_invoice, payment_sources#create_using_payment_intent, subscriptions#create_a_subscription, subscriptions#update_a_subscription, subscriptions#create_subscription_for_customer, subscriptions#reactivate_a_subscription, subscriptions#resume_a_subscription
* payment_intent[additional_info] has been added to the endpoints gifts#create_a_gift_subscription_for_items, invoices#create_invoice_for_items_and_one-time_charges, subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items. Applicable only for Product Catalog V2
* contract_term[action_at_term_end], contract_term[cancellation_cutoff_period], subscription[contract_term_billing_cycle_on_renewal] has been added to the endpoint estimates#estimate_for_creating_a_subscription. Applicable only for Product Catalog V2
* cancel_at, contract_term_cancel_option, cancel_reason_code have been added to the endpoint estimates#cancel_subscription_for_items_estimate
* event_based_addons has been added to the endpoint estimates#cancel_subscription_for_items_estimate
* redirect_url has been added to the endpoint hosted_pages#accept_a_quote
* token_id, retain_payment_source, card, bank_account, payment_method added have been added to the endpoint invoices#create_an_invoice
* token_id, retain_payment_source, card, bank_account, payment_method added have been added to the endpoint invoices#create_invoice_for_items_and_one-time_charges. Applicable only for Product Catalog V2
* show_description_in_invoices, show_description_in_quotes have been added to the endpoints item_prices#create_an_item_price, item_prices#update_an_item_price. Applicable only for Product Catalog V2

### v2.0.6 (2020-11-26)
* * *
##### New resources:
item_family, item, item_price, attached_item and differential_price are added. Applicable only for Product Catalog V2

##### New end points:
* coupons#create_a_coupon_for_items and coupons#update_a_coupon_for_items have been added in coupon resource. Applicable only for Product Catalog V2
* estimates#estimate_for_creating_a_subscription, estimates#estimate_for_updating_a_subscription and estimates#create_invoice_for_items_estimate have been added in estimate resource. Applicable only for Product Catalog V2
* estimates#advance_invoice_estimate has been added in estimate resource
* exports#export_item_families, exports#export_items, exports#export_item_prices, exports#export_attached_items and exports#export_differential_price have been added in export api. Applicable only for Product Catalog V2
* checkout_new_for_items and checkout_existing_for_items have been added in hosted_pages api. Applicable only for Product Catalog V2
* invoices#create_invoice_for_items_and_one-time_charges, invoices#create_invoice_for_a_charge-item and invoices#add_a_charge-item_to_a_pending_invoice have been added in invoice resource. Applicable only for Product Catalog V2
* quotes#create_a_quote_for_a_new_subscription_items, quotes#create_a_quote_for_update_subscription_items and quotes#create_a_quote_for_charge_and_charge_items have been added in quote resource. Applicable only for Product Catalog V2
* subscriptions#create_subscription_for_items, subscriptions#update_subscription_for_items, subscriptions#import_subscription_for_items and subscriptions#cancel_subscription_for_items have been added in subscription resource. Applicable only for Product Catalog V2
* subscriptions#edit_advance_invoice_schedule, subscriptions#retrieve_advance_invoice and subscriptions#remove_an_advance_invoice_schedules have been added in subscription resource
* unbilled_charges#create_an_invoice_for_unbilled_charges has been added to unbilled_charge resource

##### New attributes:
* item_constraints and item_constraint_criteria have been added in coupon resource. Applicable only for Product Catalog V2
* success_url and failure_url have been added in payment_intent resource
* subscription_items and item_tiers have been added in quoted_subscription resource. Applicable only for Product Catalog V2
* has_scheduled_advance_invoices has been added in subscription resource
* subscription_items, item_tiers and charged_items have been added in subscription resource. Applicable only for Product Catalog V2

##### New parameters:
* item_id and item_price_id have been added to the end point: subscriptions#list_subscriptions, exports#export_revenue_recognition_reports, exports#export_deferred_revenue_reports, exports#export_subscriptions. Applicable only for Product Catalog V2
* invoice_immediately, schedule_type and fixed_interval_schedule have been added to the end point: subscriptions#charge_future_renewals
*  success_url and failure_url have been added to the end points: payment_intents#create_a_payment_intent, payment_intents#update_a_payment_intent

##### New Enum values:
* PLAN_ITEM_PRICE, ADDON_ITEM_PRICE, CHARGE_ITEM_PRICE are added to Entitytype Enum
* ITEM_FAMILY_CREATED, ITEM_FAMILY_UPDATED, ITEM_FAMILY_DELETED, ITEM_CREATED, ITEM_UPDATED, ITEM_DELETED, ITEM_PRICE_CREATED, ITEM_PRICE_UPDATED, ITEM_PRICE_DELETED, ATTACHED_ITEM_CREATED, ATTACHED_ITEM_UPDATED, ATTACHED_ITEM_DELETED, DIFFERENTIAL_PRICE_CREATED, DIFFERENTIAL_PRICE_UPDATED, DIFFERENTIAL_PRICE_DELETED are added to EventType Enum

### v2.0.5 (2020-11-16)
* * *
* New attributes price_in_decimal, tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[price_in_decimal] have been added to the resource addon
* New input parameters price_in_decimal, tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[price_in_decimal] have been added to addons#create_an_addon, addons#update_an_addon apis.
* New attributes unit_amount_in_decimal, quantity_in_decimal, amount_in_decimal, line_item_tiers[starting_unit_in_decimal], line_item_tiers[ending_unit_in_decimal], line_item_tiers[quantity_used_in_decimal], line_item_tiers[unit_amount_in_decimal] have been added to the resources credit_note, credit_note_estimate, invoice, invoice_estimate
* New input parameters line_items[unit_amount_in_decimal], line_items[quantity_in_decimal] have been added to credit_notes#create_credit_note api.
* New input parameters subscription[plan_unit_price_in_decimal], subscription[plan_quantity_in_decimal], addons[quantity_in_decimal], addons[unit_price_in_decimal], event_based_addons[quantity_in_decimal], event_based_addons[unit_price_in_decimal] have been added to estimates#create_subscription_estimate, estimates#create_subscription_for_a_customer_estimate, estimates#update_subscription_estimate, hosted_pages#checkout_new_subscription, hosted_pages#checkout_existing_subscription, quotes#create_a_quote_for_a_new_subscription,  quotes#edit_create_subscription_quote, quotes#create_a_quote_for_update_subscription, quotes#edit_update_subscription_quote,  apis
* New input parameters subscription[plan_quantity_in_decimal], addons[quantity_in_decimal] have been added to estimates#gift_subscription_estimate, gifts#create_a_gift, hosted_pages#checkout_gift_subscription apis
* New input parameters addons[quantity_in_decimal], addons[unit_price_in_decimal], charges[amount_in_decimal] have been added to estimates#create_invoice_estimate, invoices#create_an_invoice, quotes#create_a_quote_for_one-time_charges, quotes#edit_one-time_quote apis
* New input parameter amount_in_decimal has been added to invoices#create_invoice_for_a_one-time_charge api
* Input parameter amount has been made optional to invoices#create_invoice_for_a_one-time_charge api
* New input parameters addon_quantity_in_decimal, addon_unit_price_in_decimal have been added to invoices#create_invoice_for_a_non-recurring_addon
* New input parameters line_items[unit_amount_in_decimal], line_items[quantity_in_decimal], line_items[amount_in_decimal], line_item_tiers[starting_unit_in_decimal], line_item_tiers[ending_unit_in_decimal], line_item_tiers[quantity_used_in_decimal], line_item_tiers[unit_amount_in_decimal] have been added to invoices#import_invoice api
* Input parameters line_item_tiers[starting_unit], line_item_tiers[ending_unit], line_item_tiers[quantity_used], line_item_tiers[unit_amount] have beed made optional in invoices#import_invoice api
* New input parameters addon_quantity_in_decimal, addon_unit_price_in_decimal have been added to invoices#add_non-recurring_addon_to_a_pending_invoice api
* New input parameter invoice_date has been added to invoices#close_a_pending_invoice api
* New attributes tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[price_in_decimal], attached_addons[quantity_in_decimal], event_based_addons[quantity_in_decimal], free_quantity_in_decimal, price_in_decimal have been added to the resource plan
* New input parameters tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[price_in_decimal], attached_addons[quantity_in_decimal], event_based_addons[quantity_in_decimal], free_quantity_in_decimal, price_in_decimal have been added to plans#create_a_plan, plans#update_a_plan apis
* New attribute amount_in_decimal has been added to the resource promotional_credit
* New input parameter amount_in_decimal has been added to promotional_credits#add_promotional_credits, promotional_credits#deduct_promotional_credits, promotional_credits#set_promotional_credits apis
* Input parameter amount has been made optional in promotional_credits#add_promotional_credits, promotional_credits#deduct_promotional_credits, promotional_credits#set_promotional_credits apis
* New attributes unit_amount_in_decimal, quantity_in_decimal, amount_in_decimal have been added to the resource quote
* New attributes addons[quantity_in_decimal], addons[unit_price_in_decimal], addons[amount_in_decimal], event_based_addons[quantity_in_decimal], event_based_addons[unit_price_in_decimal] have been added to the sub resource quoted_subscription
* New attributes unit_amount_in_decimal, quantity_in_decimal, amount_in_decimal have been added to the sub resource quoted_line_group
* New attributes addons[quantity_in_decimal], addons[unit_price_in_decimal], addons[amount_in_decimal], event_based_addons[quantity_in_decimal], event_based_addons[unit_price_in_decimal], plan_free_quantity_in_decimal, plan_quantity_in_decimal, plan_unit_price_in_decimal, plan_amount_in_decimal have been added to the resource subscription
* New input parameters plan_unit_price_in_decimal, plan_quantity_in_decimal, addons[quantity_in_decimal], addons[unit_price_in_decimal], event_based_addons[quantity_in_decimal], event_based_addons[unit_price_in_decimal] have been added to subscriptions#create_a_subscription, subscriptions#create_subscription_for_customer, subscriptions#update_a_subscription, subscriptions#import_a_subscription, subscriptions#import_subscription_for_customer apis
* New input parameter amount_in_decimal has been added to subscriptions#add_charge_at_term_end apis
* Input parameter amount has been made optional in subscriptions#add_charge_at_term_end apis
* New input parameters addon_quantity_in_decimal, addon_unit_price_in_decimal have been added to subscriptions#charge_addon_at_term_end api
* New attributes tiers[starting_unit_in_decimal], tiers[ending_unit_in_decimal], tiers[quantity_used_in_decimal], tiers[unit_amount_in_decimal], unit_amount_in_decimal, quantity_in_decimal, amount_in_decimal have been added to the resource unbilled_charge
* New endpoint transactions#refund_a_payment has been added to the resource transaction
### v2.0.4 (2020-10-19)
* * *
* New optional attribute quoted_subscriptions has been added to the resource quote
* New optional attributes resource_version and updated_at are added to the resource payment_intent
### v2.0.3 (2020-09-29)
* * *

* New attribute included_in_mrr has been added in addon and coupon resource
* New attribute offline_payment_method has been added in subscription and customer resource
* New input parameter included_in_mrr has been added in create_an_addon, update_an_addon, create_a_coupon and update_a_coupon apis.
* New input parameter offline_payment_method has been added in create_a_customer, list_customers, update_a_customer, create_a_subscription, create_subscription_for_customer and list_subscriptions apis
* New input parameter auto_collection has been added in update_a_subscription
* New input parameter subscription[offline_payment_method] has been added in create_subscription_estimate, create_subscription_for_a_customer_estimate, update_subscription_estimate, export_revenue_recognition_reports, export_deferred_revenue_reports, export_subscriptions, checkout_new_subscription and checkout_existing_subscription apis
* New input parameter subscription[auto_collection] has been added in checkout_existing_subscription and update_subscription_estimate apis
* New input parameter customer[offline_payment_method] has been added in export_revenue_recognition_reports, export_deferred_revenue_reports, export_customers and create_a_subscription

### v2.0.2 (2020-09-09)
* * *

* New input parameter currency_code is added in list_addons, list_coupons, list_plans, export_plans, export_addons, export_coupons apis
* New attributes powered_by has been added in card resource
* New input parameters subscription[free_period], subscription[free_period_unit] have been added in create_subscription_estimate, create_subscription_for_a_customer_estimate, update_subscription_estimate apis
* Input parameter invoice[customer_id] is made optional in create_invoice_estimate api
* Input parameter customer_id is made optional in create_an_invoice
* Attribute created_at in dunning_attempts is made optional in the invoice resource
* New attributes free_period and free_period_unit have been added in the Subscription resource
* New enum type free_period_unit has been added with the values:
	DAY,
	WEEK,
	MONTH,
	YEAR
* New enum type powered_by has been added in card resource with the values: 
	IDEAL,
    SOFORT,
    BANCONTACT,
    GIROPAY,
    NOT_APPLICABLE
* New endpoint import_contract_term has been added to the subscription resource
* Attributes status, amount and date inside the linked_payment are made optional in the transaction resource
* New endpoint delete has been added to the virtual_bank_account resource
* New values GIROPAY and DOTPAY have been added to the payment_method_types enum
* New values PAYMENT_SOURCE_EXPIRING and PAYMENT_SOURCE_EXPIRED have been added to the event_type enums
* New value PAYPAL has been added to the gateway enum

### v2.0.1 (2020-07-15)
* * * 

* New attributes show_description_in_invoices, show_description_in_quotes have been added in Addon, Plan resource
* New input parameters show_description_in_invoices, show_description_in_quotes have been added for create_an_addon, update_an_addon, create_a_plan, update_a_plan apis
* New attribute create_reason_code has been added in Credit notes resource
* Attribute reason_code is made optional in the Credit notes resource
* New filter parameter create_reason_code is added in list_credit_notes api
* New input parameter refund_reason_code has been added in Credit notes' Refund, Record a refund apis
* Sub-resources parent_account_access and child_account_access have been added in Customer resource
* New attribute use_default_hierarchy_settings has been added in Customer resource
* New endpoint update_hierarchy_settings has been added in Customer resource
* New input parameters use_default_hierarchy_settings,  parent_account_access, child_account_access have been added in link_a_customer api
* New input parameter invoice_notes, coupon_ids, invoice[subscription_id], charges[taxable], charges[tax_profile_id], charges[avalara_tax_code], charges[taxjar_product_code] has been added to create_invoice_estimate api
* New input param cancel_reason_code has been added to export_revenue_recognition_reports, export_deferred_revenue_reports, export_subscriptions, export_credit_notes apis
* New input param coupon_ids has been added to checkout_new_subscription, checkout_existing_subscription apis
* Input param subscription_coupon has been deprecated in checkout_new_subscription, checkout_existing_subscription apis
* New attribute void_reason_code has been added to the Invoice resource
* Attribute cn_reason_code has been made optional in applied_credits, adjustment_credit_notes, issued_credit_notes, linked_credit_note sub-resources
* New attribute cn_create_reason_code has been added in applied_credits, adjustment_credit_notes, issued_credit_notes, linked_credit_note sub-resources
* New input parameter subscription_id, invoice_note, remove_general_note, coupon_ids, charges[taxable], charges[tax_profile_id], charges[avalara_tax_code], charges[taxjar_product_code] have been added to create_an_invoice api
* Input parameter coupon is deprecated from create_an_invoice api
* New filter parameter void_reason_code has been added to list_invoices api
* New input parameter invoice_note, remove_general_note, notes_to_remove[entity_type], notes_to_remove[entity_id] have been added to close_a_pending_invoice api
* New input parameter void_reason_code has been added to void_an_invoice api
* New input parameter credit_note[create_reason_code] has been added to refund_an_invoice, record_refund_for_an_invoice api
* New endpoints import_an_order and delete_an_imported_order have been added to Order resource
* New filter parameter exclude_deleted_credit_notes has been added to list_orders api
* New attribute payment_method_type has been added to payment_intent resource and active_payment_attempt sub-resource
* New input parameter payment_method_type has been added to create_a_payment_intent, update_a_payment_intent api
* New attributes version, contract_term_start, contract_term_end, contract_term_termination_fee have been added to Quotes resource
* New endpoints edit_create_subscription_quote, edit_update_subscription_quote, edit_one_time_quote, extend_expiry_date have beed added to Quotes resource
* New input parameters contract_term[action_at_term_end], contract_term[cancellation_cutoff_period], subscription[contract_term_billing_cycle_on_renewal] have been added to create_a_quote_for_a_new_subscription, create_a_quote_for_update_subscription apis
* New attribute version has been added to quote_line_group sub-resource
* New attribute cancel_reason_code has been added to Subscriptions resource
* New filter parameter cancel_reason_code has been added to list_subscriptions, cancel_a_subscription apis
* New input parameter contract_term_billing_cycle_on_renewal has been added to import_a_subscription, import_subscription_for_customer apis
* New input parameter event_based_addon has been added to cancel_a_subscription api
* New filter parameter is_voided has been added to list_unbilled_charges api
* New event_types MRR_UPDATED, ORDER_DELETED have been added
* New values SOFORT, BANCONTACT have been added to the payment_method_types enum
* New attributes entity_type_description has been added to the line_items sub-resource

### v2.0.0 (2019-01-10)
 * * *

 Chargebee [API V2](https://apidocs.chargebee.com/docs/api#versions) for typescript is now live!
