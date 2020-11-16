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