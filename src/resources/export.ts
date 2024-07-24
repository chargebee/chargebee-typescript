import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {filter} from "../filter";
import {ProcessWait} from "../process_wait";
import { Api } from './api'

export class Export extends Model {
  public id: string;
  public operation_type: string;
  public mime_type: string;
  public status: string;
  public created_at: number;
  public download?: Download;
}

// OPERATIONS
//-----------
export class ExportApi extends Api {
  public wait_for_export_completion(exportId: string): ProcessWait {
    let count = 0;
    let export_retrieve = this.retrieve(exportId);

    let ret = function (deferred, _self) {
      export_retrieve.request(
        function (error, result) {
          if (error) {
            deferred.reject(error);
          } else {
            let exportObj = result.export;
            if (exportObj.status === 'completed') {
              deferred.resolve(result);
            } else if (exportObj.status === 'in_process') {
              if (count++ > 30) {
                throw new Error("Export is taking too long");
              }
              setTimeout(function () {
                ret(deferred, _self);
              }, _self.env.exportWaitInMillis);
            } else {
              deferred.reject(result);
            }
          }
        });
    };
    return new ProcessWait(ret, this._env);
  }

  public retrieve(export_id: string, params?: any):RequestWrapper {
    return new RequestWrapper([export_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/exports',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, this._env)
  }

  public revenue_recognition(params?: _export.revenue_recognition_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'revenue_recognition',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/revenue_recognition',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public deferred_revenue(params?: _export.deferred_revenue_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'deferred_revenue',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/deferred_revenue',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public plans(params?: _export.plans_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'plans',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/plans',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public addons(params?: _export.addons_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'addons',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/addons',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public coupons(params?: _export.coupons_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'coupons',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/coupons',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public customers(params?: _export.customers_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'customers',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/customers',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public subscriptions(params?: _export.subscriptions_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'subscriptions',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/subscriptions',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public invoices(params?: _export.invoices_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'invoices',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/invoices',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public credit_notes(params?: _export.credit_notes_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'credit_notes',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/credit_notes',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public transactions(params?: _export.transactions_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'transactions',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/transactions',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public orders(params?: _export.orders_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'orders',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/orders',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public item_families(params?: _export.item_families_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'item_families',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/item_families',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public items(params?: _export.items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'items',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public item_prices(params?: _export.item_prices_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'item_prices',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/item_prices',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public attached_items(params?: _export.attached_items_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'attached_items',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/attached_items',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public differential_prices(params?: _export.differential_prices_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'differential_prices',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/differential_prices',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }

  public price_variants(params?: _export.price_variants_params):RequestWrapper {
    return new RequestWrapper([params], {
      'methodName': 'price_variants',
      'httpMethod': 'POST',
      'urlPrefix': '/exports',
      'urlSuffix': '/price_variants',
      'hasIdInUrl': false,
      'isListReq': false,
    }, this._env)
  }
} // ~Export

export class Download extends Model {
  public download_url: string;
  public valid_till: number;
  public mime_type?: string;
} // ~Download



  // REQUEST PARAMS
  //---------------

export namespace _export {
  export interface revenue_recognition_params {
    report_by: string;
    currency_code?: string;
    report_from_month: number;
    report_from_year: number;
    report_to_month: number;
    report_to_year: number;
    include_discounts?: boolean;
    payment_owner?: filter._string;
    item_id?: filter._string;
    item_price_id?: filter._string;
    cancel_reason_code?: filter._string;
    business_entity_id?: filter._string;
    invoice?: invoice_revenue_recognition_params;
    subscription?: subscription_revenue_recognition_params;
    customer?: customer_revenue_recognition_params;
    relationship?: relationship_revenue_recognition_params;
  }
  export interface deferred_revenue_params {
    report_by: string;
    currency_code?: string;
    report_from_month: number;
    report_from_year: number;
    report_to_month: number;
    report_to_year: number;
    include_discounts?: boolean;
    payment_owner?: filter._string;
    item_id?: filter._string;
    item_price_id?: filter._string;
    cancel_reason_code?: filter._string;
    business_entity_id?: filter._string;
    invoice?: invoice_deferred_revenue_params;
    subscription?: subscription_deferred_revenue_params;
    customer?: customer_deferred_revenue_params;
    relationship?: relationship_deferred_revenue_params;
  }
  export interface plans_params {
    currency_code?: filter._string;
    plan?: plan_plans_params;
  }
  export interface addons_params {
    currency_code?: filter._string;
    addon?: addon_addons_params;
  }
  export interface coupons_params {
    currency_code?: filter._string;
    coupon?: coupon_coupons_params;
  }
  export interface customers_params {
    export_type?: string;
    business_entity_id?: filter._string;
    customer?: customer_customers_params;
    relationship?: relationship_customers_params;
  }
  export interface subscriptions_params {
    export_type?: string;
    item_id?: filter._string;
    item_price_id?: filter._string;
    cancel_reason_code?: filter._string;
    subscription?: subscription_subscriptions_params;
  }
  export interface invoices_params {
    payment_owner?: filter._string;
    invoice?: invoice_invoices_params;
  }
  export interface credit_notes_params {
    credit_note?: credit_note_credit_notes_params;
  }
  export interface transactions_params {
    transaction?: transaction_transactions_params;
  }
  export interface orders_params {
    total?: filter._number;
    order?: order_orders_params;
  }
  export interface item_families_params {
    item_family?: item_family_item_families_params;
  }
  export interface items_params {
    item?: item_items_params;
  }
  export interface item_prices_params {
    item_family_id?: filter._string;
    item_type?: filter._enum;
    currency_code?: filter._string;
    item_price?: item_price_item_prices_params;
  }
  export interface attached_items_params {
    item_type?: filter._enum;
    attached_item?: attached_item_attached_items_params;
  }
  export interface differential_prices_params {
    differential_price?: differential_price_differential_prices_params;
    item_id?: filter._string;
  }
  export interface price_variants_params {
    price_variant?: price_variant_price_variants_params;
  }
  export interface invoice_revenue_recognition_params {
    id?: filter._string;
  }
  export interface invoice_revenue_recognition_params {
    recurring?: filter._boolean;
  }
  export interface invoice_revenue_recognition_params {
    status?: filter._enum;
  }
  export interface invoice_revenue_recognition_params {
    price_type?: filter._enum;
  }
  export interface invoice_revenue_recognition_params {
    date?: filter._timestamp;
  }
  export interface invoice_revenue_recognition_params {
    paid_at?: filter._timestamp;
  }
  export interface invoice_revenue_recognition_params {
    total?: filter._number;
  }
  export interface invoice_revenue_recognition_params {
    amount_paid?: filter._number;
  }
  export interface invoice_revenue_recognition_params {
    amount_adjusted?: filter._number;
  }
  export interface invoice_revenue_recognition_params {
    credits_applied?: filter._number;
  }
  export interface invoice_revenue_recognition_params {
    amount_due?: filter._number;
  }
  export interface invoice_revenue_recognition_params {
    dunning_status?: filter._enum;
  }
  export interface invoice_revenue_recognition_params {
    updated_at?: filter._timestamp;
  }
  export interface invoice_revenue_recognition_params {
    channel?: filter._enum;
  }
  export interface subscription_revenue_recognition_params {
    id?: filter._string;
  }
  export interface subscription_revenue_recognition_params {
    customer_id?: filter._string;
  }
  export interface subscription_revenue_recognition_params {
    status?: filter._enum;
  }
  export interface subscription_revenue_recognition_params {
    cancel_reason?: filter._enum;
  }
  export interface subscription_revenue_recognition_params {
    remaining_billing_cycles?: filter._number;
  }
  export interface subscription_revenue_recognition_params {
    created_at?: filter._timestamp;
  }
  export interface subscription_revenue_recognition_params {
    activated_at?: filter._timestamp;
  }
  export interface subscription_revenue_recognition_params {
    next_billing_at?: filter._timestamp;
  }
  export interface subscription_revenue_recognition_params {
    cancelled_at?: filter._timestamp;
  }
  export interface subscription_revenue_recognition_params {
    has_scheduled_changes?: filter._boolean;
  }
  export interface subscription_revenue_recognition_params {
    updated_at?: filter._timestamp;
  }
  export interface subscription_revenue_recognition_params {
    offline_payment_method?: filter._enum;
  }
  export interface subscription_revenue_recognition_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface subscription_revenue_recognition_params {
    channel?: filter._enum;
  }
  export interface subscription_revenue_recognition_params {
    plan_id?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    id?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    first_name?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    last_name?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    email?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    company?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    phone?: filter._string;
  }
  export interface customer_revenue_recognition_params {
    auto_collection?: filter._enum;
  }
  export interface customer_revenue_recognition_params {
    taxability?: filter._enum;
  }
  export interface customer_revenue_recognition_params {
    created_at?: filter._timestamp;
  }
  export interface customer_revenue_recognition_params {
    updated_at?: filter._timestamp;
  }
  export interface customer_revenue_recognition_params {
    offline_payment_method?: filter._enum;
  }
  export interface customer_revenue_recognition_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface customer_revenue_recognition_params {
    channel?: filter._enum;
  }
  export interface relationship_revenue_recognition_params {
    parent_id?: filter._string;
  }
  export interface relationship_revenue_recognition_params {
    payment_owner_id?: filter._string;
  }
  export interface relationship_revenue_recognition_params {
    invoice_owner_id?: filter._string;
  }
  export interface invoice_deferred_revenue_params {
    id?: filter._string;
  }
  export interface invoice_deferred_revenue_params {
    recurring?: filter._boolean;
  }
  export interface invoice_deferred_revenue_params {
    status?: filter._enum;
  }
  export interface invoice_deferred_revenue_params {
    price_type?: filter._enum;
  }
  export interface invoice_deferred_revenue_params {
    date?: filter._timestamp;
  }
  export interface invoice_deferred_revenue_params {
    paid_at?: filter._timestamp;
  }
  export interface invoice_deferred_revenue_params {
    total?: filter._number;
  }
  export interface invoice_deferred_revenue_params {
    amount_paid?: filter._number;
  }
  export interface invoice_deferred_revenue_params {
    amount_adjusted?: filter._number;
  }
  export interface invoice_deferred_revenue_params {
    credits_applied?: filter._number;
  }
  export interface invoice_deferred_revenue_params {
    amount_due?: filter._number;
  }
  export interface invoice_deferred_revenue_params {
    dunning_status?: filter._enum;
  }
  export interface invoice_deferred_revenue_params {
    updated_at?: filter._timestamp;
  }
  export interface invoice_deferred_revenue_params {
    channel?: filter._enum;
  }
  export interface subscription_deferred_revenue_params {
    id?: filter._string;
  }
  export interface subscription_deferred_revenue_params {
    customer_id?: filter._string;
  }
  export interface subscription_deferred_revenue_params {
    status?: filter._enum;
  }
  export interface subscription_deferred_revenue_params {
    cancel_reason?: filter._enum;
  }
  export interface subscription_deferred_revenue_params {
    remaining_billing_cycles?: filter._number;
  }
  export interface subscription_deferred_revenue_params {
    created_at?: filter._timestamp;
  }
  export interface subscription_deferred_revenue_params {
    activated_at?: filter._timestamp;
  }
  export interface subscription_deferred_revenue_params {
    next_billing_at?: filter._timestamp;
  }
  export interface subscription_deferred_revenue_params {
    cancelled_at?: filter._timestamp;
  }
  export interface subscription_deferred_revenue_params {
    has_scheduled_changes?: filter._boolean;
  }
  export interface subscription_deferred_revenue_params {
    updated_at?: filter._timestamp;
  }
  export interface subscription_deferred_revenue_params {
    offline_payment_method?: filter._enum;
  }
  export interface subscription_deferred_revenue_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface subscription_deferred_revenue_params {
    channel?: filter._enum;
  }
  export interface subscription_deferred_revenue_params {
    plan_id?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    id?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    first_name?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    last_name?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    email?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    company?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    phone?: filter._string;
  }
  export interface customer_deferred_revenue_params {
    auto_collection?: filter._enum;
  }
  export interface customer_deferred_revenue_params {
    taxability?: filter._enum;
  }
  export interface customer_deferred_revenue_params {
    created_at?: filter._timestamp;
  }
  export interface customer_deferred_revenue_params {
    updated_at?: filter._timestamp;
  }
  export interface customer_deferred_revenue_params {
    offline_payment_method?: filter._enum;
  }
  export interface customer_deferred_revenue_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface customer_deferred_revenue_params {
    channel?: filter._enum;
  }
  export interface relationship_deferred_revenue_params {
    parent_id?: filter._string;
  }
  export interface relationship_deferred_revenue_params {
    payment_owner_id?: filter._string;
  }
  export interface relationship_deferred_revenue_params {
    invoice_owner_id?: filter._string;
  }
  export interface plan_plans_params {
    id?: filter._string;
  }
  export interface plan_plans_params {
    name?: filter._string;
  }
  export interface plan_plans_params {
    price?: filter._number;
  }
  export interface plan_plans_params {
    period?: filter._number;
  }
  export interface plan_plans_params {
    period_unit?: filter._enum;
  }
  export interface plan_plans_params {
    trial_period?: filter._number;
  }
  export interface plan_plans_params {
    trial_period_unit?: filter._enum;
  }
  export interface plan_plans_params {
    addon_applicability?: filter._enum;
  }
  export interface plan_plans_params {
    giftable?: filter._boolean;
  }
  export interface plan_plans_params {
    status?: filter._enum;
  }
  export interface plan_plans_params {
    updated_at?: filter._timestamp;
  }
  export interface plan_plans_params {
    channel?: filter._enum;
  }
  export interface addon_addons_params {
    id?: filter._string;
  }
  export interface addon_addons_params {
    name?: filter._string;
  }
  export interface addon_addons_params {
    charge_type?: filter._enum;
  }
  export interface addon_addons_params {
    price?: filter._number;
  }
  export interface addon_addons_params {
    period?: filter._number;
  }
  export interface addon_addons_params {
    period_unit?: filter._enum;
  }
  export interface addon_addons_params {
    status?: filter._enum;
  }
  export interface addon_addons_params {
    updated_at?: filter._timestamp;
  }
  export interface addon_addons_params {
    channel?: filter._enum;
  }
  export interface coupon_coupons_params {
    id?: filter._string;
  }
  export interface coupon_coupons_params {
    name?: filter._string;
  }
  export interface coupon_coupons_params {
    discount_type?: filter._enum;
  }
  export interface coupon_coupons_params {
    duration_type?: filter._enum;
  }
  export interface coupon_coupons_params {
    status?: filter._enum;
  }
  export interface coupon_coupons_params {
    apply_on?: filter._enum;
  }
  export interface coupon_coupons_params {
    created_at?: filter._timestamp;
  }
  export interface coupon_coupons_params {
    updated_at?: filter._timestamp;
  }
  export interface customer_customers_params {
    id?: filter._string;
  }
  export interface customer_customers_params {
    first_name?: filter._string;
  }
  export interface customer_customers_params {
    last_name?: filter._string;
  }
  export interface customer_customers_params {
    email?: filter._string;
  }
  export interface customer_customers_params {
    company?: filter._string;
  }
  export interface customer_customers_params {
    phone?: filter._string;
  }
  export interface customer_customers_params {
    auto_collection?: filter._enum;
  }
  export interface customer_customers_params {
    taxability?: filter._enum;
  }
  export interface customer_customers_params {
    created_at?: filter._timestamp;
  }
  export interface customer_customers_params {
    updated_at?: filter._timestamp;
  }
  export interface customer_customers_params {
    offline_payment_method?: filter._enum;
  }
  export interface customer_customers_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface customer_customers_params {
    channel?: filter._enum;
  }
  export interface relationship_customers_params {
    parent_id?: filter._string;
  }
  export interface relationship_customers_params {
    payment_owner_id?: filter._string;
  }
  export interface relationship_customers_params {
    invoice_owner_id?: filter._string;
  }
  export interface subscription_subscriptions_params {
    id?: filter._string;
  }
  export interface subscription_subscriptions_params {
    customer_id?: filter._string;
  }
  export interface subscription_subscriptions_params {
    status?: filter._enum;
  }
  export interface subscription_subscriptions_params {
    cancel_reason?: filter._enum;
  }
  export interface subscription_subscriptions_params {
    remaining_billing_cycles?: filter._number;
  }
  export interface subscription_subscriptions_params {
    created_at?: filter._timestamp;
  }
  export interface subscription_subscriptions_params {
    activated_at?: filter._timestamp;
  }
  export interface subscription_subscriptions_params {
    next_billing_at?: filter._timestamp;
  }
  export interface subscription_subscriptions_params {
    cancelled_at?: filter._timestamp;
  }
  export interface subscription_subscriptions_params {
    has_scheduled_changes?: filter._boolean;
  }
  export interface subscription_subscriptions_params {
    updated_at?: filter._timestamp;
  }
  export interface subscription_subscriptions_params {
    offline_payment_method?: filter._enum;
  }
  export interface subscription_subscriptions_params {
    auto_close_invoices?: filter._boolean;
  }
  export interface subscription_subscriptions_params {
    channel?: filter._enum;
  }
  export interface subscription_subscriptions_params {
    plan_id?: filter._string;
  }
  export interface invoice_invoices_params {
    id?: filter._string;
  }
  export interface invoice_invoices_params {
    subscription_id?: filter._string;
  }
  export interface invoice_invoices_params {
    customer_id?: filter._string;
  }
  export interface invoice_invoices_params {
    recurring?: filter._boolean;
  }
  export interface invoice_invoices_params {
    status?: filter._enum;
  }
  export interface invoice_invoices_params {
    price_type?: filter._enum;
  }
  export interface invoice_invoices_params {
    date?: filter._timestamp;
  }
  export interface invoice_invoices_params {
    paid_at?: filter._timestamp;
  }
  export interface invoice_invoices_params {
    total?: filter._number;
  }
  export interface invoice_invoices_params {
    amount_paid?: filter._number;
  }
  export interface invoice_invoices_params {
    amount_adjusted?: filter._number;
  }
  export interface invoice_invoices_params {
    credits_applied?: filter._number;
  }
  export interface invoice_invoices_params {
    amount_due?: filter._number;
  }
  export interface invoice_invoices_params {
    dunning_status?: filter._enum;
  }
  export interface invoice_invoices_params {
    updated_at?: filter._timestamp;
  }
  export interface invoice_invoices_params {
    channel?: filter._enum;
  }
  export interface credit_note_credit_notes_params {
    id?: filter._string;
  }
  export interface credit_note_credit_notes_params {
    customer_id?: filter._string;
  }
  export interface credit_note_credit_notes_params {
    subscription_id?: filter._string;
  }
  export interface credit_note_credit_notes_params {
    reference_invoice_id?: filter._string;
  }
  export interface credit_note_credit_notes_params {
    type?: filter._enum;
  }
  export interface credit_note_credit_notes_params {
    reason_code?: filter._enum;
  }
  export interface credit_note_credit_notes_params {
    create_reason_code?: filter._string;
  }
  export interface credit_note_credit_notes_params {
    status?: filter._enum;
  }
  export interface credit_note_credit_notes_params {
    date?: filter._timestamp;
  }
  export interface credit_note_credit_notes_params {
    total?: filter._number;
  }
  export interface credit_note_credit_notes_params {
    price_type?: filter._enum;
  }
  export interface credit_note_credit_notes_params {
    amount_allocated?: filter._number;
  }
  export interface credit_note_credit_notes_params {
    amount_refunded?: filter._number;
  }
  export interface credit_note_credit_notes_params {
    amount_available?: filter._number;
  }
  export interface credit_note_credit_notes_params {
    voided_at?: filter._timestamp;
  }
  export interface credit_note_credit_notes_params {
    updated_at?: filter._timestamp;
  }
  export interface credit_note_credit_notes_params {
    channel?: filter._enum;
  }
  export interface transaction_transactions_params {
    id?: filter._string;
  }
  export interface transaction_transactions_params {
    customer_id?: filter._string;
  }
  export interface transaction_transactions_params {
    subscription_id?: filter._string;
  }
  export interface transaction_transactions_params {
    payment_source_id?: filter._string;
  }
  export interface transaction_transactions_params {
    payment_method?: filter._enum;
  }
  export interface transaction_transactions_params {
    gateway?: filter._enum;
  }
  export interface transaction_transactions_params {
    gateway_account_id?: filter._string;
  }
  export interface transaction_transactions_params {
    id_at_gateway?: filter._string;
  }
  export interface transaction_transactions_params {
    reference_number?: filter._string;
  }
  export interface transaction_transactions_params {
    type?: filter._enum;
  }
  export interface transaction_transactions_params {
    date?: filter._timestamp;
  }
  export interface transaction_transactions_params {
    amount?: filter._number;
  }
  export interface transaction_transactions_params {
    amount_capturable?: filter._number;
  }
  export interface transaction_transactions_params {
    status?: filter._enum;
  }
  export interface transaction_transactions_params {
    updated_at?: filter._timestamp;
  }
  export interface order_orders_params {
    id?: filter._string;
  }
  export interface order_orders_params {
    subscription_id?: filter._string;
  }
  export interface order_orders_params {
    customer_id?: filter._string;
  }
  export interface order_orders_params {
    status?: filter._enum;
  }
  export interface order_orders_params {
    price_type?: filter._enum;
  }
  export interface order_orders_params {
    order_date?: filter._timestamp;
  }
  export interface order_orders_params {
    shipping_date?: filter._timestamp;
  }
  export interface order_orders_params {
    shipped_at?: filter._timestamp;
  }
  export interface order_orders_params {
    delivered_at?: filter._timestamp;
  }
  export interface order_orders_params {
    cancelled_at?: filter._timestamp;
  }
  export interface order_orders_params {
    amount_paid?: filter._number;
  }
  export interface order_orders_params {
    refundable_credits?: filter._number;
  }
  export interface order_orders_params {
    refundable_credits_issued?: filter._number;
  }
  export interface order_orders_params {
    updated_at?: filter._timestamp;
  }
  export interface order_orders_params {
    resent_status?: filter._enum;
  }
  export interface order_orders_params {
    is_resent?: filter._boolean;
  }
  export interface order_orders_params {
    original_order_id?: filter._string;
  }
  export interface item_family_item_families_params {
    id?: filter._string;
  }
  export interface item_family_item_families_params {
    name?: filter._string;
  }
  export interface item_family_item_families_params {
    updated_at?: filter._timestamp;
  }
  export interface item_items_params {
    id?: filter._string;
  }
  export interface item_items_params {
    item_family_id?: filter._string;
  }
  export interface item_items_params {
    type?: filter._enum;
  }
  export interface item_items_params {
    name?: filter._string;
  }
  export interface item_items_params {
    item_applicability?: filter._enum;
  }
  export interface item_items_params {
    status?: filter._enum;
  }
  export interface item_items_params {
    is_giftable?: filter._boolean;
  }
  export interface item_items_params {
    updated_at?: filter._timestamp;
  }
  export interface item_items_params {
    enabled_for_checkout?: filter._boolean;
  }
  export interface item_items_params {
    enabled_in_portal?: filter._boolean;
  }
  export interface item_items_params {
    metered?: filter._boolean;
  }
  export interface item_items_params {
    usage_calculation?: filter._enum;
  }
  export interface item_items_params {
    channel?: filter._enum;
  }
  export interface item_price_item_prices_params {
    id?: filter._string;
  }
  export interface item_price_item_prices_params {
    name?: filter._string;
  }
  export interface item_price_item_prices_params {
    pricing_model?: filter._enum;
  }
  export interface item_price_item_prices_params {
    item_id?: filter._string;
  }
  export interface item_price_item_prices_params {
    price_variant_id?: filter._string;
  }
  export interface item_price_item_prices_params {
    trial_period?: filter._number;
  }
  export interface item_price_item_prices_params {
    trial_period_unit?: filter._enum;
  }
  export interface item_price_item_prices_params {
    status?: filter._enum;
  }
  export interface item_price_item_prices_params {
    updated_at?: filter._timestamp;
  }
  export interface item_price_item_prices_params {
    period_unit?: filter._enum;
  }
  export interface item_price_item_prices_params {
    period?: filter._number;
  }
  export interface item_price_item_prices_params {
    channel?: filter._enum;
  }
  export interface attached_item_attached_items_params {
    id?: filter._string;
  }
  export interface attached_item_attached_items_params {
    item_id?: filter._string;
  }
  export interface attached_item_attached_items_params {
    type?: filter._enum;
  }
  export interface attached_item_attached_items_params {
    charge_on_event?: filter._enum;
  }
  export interface attached_item_attached_items_params {
    updated_at?: filter._timestamp;
  }
  export interface attached_item_attached_items_params {
    parent_item_id?: filter._string;
  }
  export interface differential_price_differential_prices_params {
    item_price_id?: filter._string;
  }
  export interface differential_price_differential_prices_params {
    id?: filter._string;
  }
  export interface differential_price_differential_prices_params {
    parent_item_id?: filter._string;
  }
  export interface price_variant_price_variants_params {
    id?: filter._string;
  }
  export interface price_variant_price_variants_params {
    name?: filter._string;
  }
  export interface price_variant_price_variants_params {
    status?: filter._enum;
  }
  export interface price_variant_price_variants_params {
    updated_at?: filter._timestamp;
  }
  export interface price_variant_price_variants_params {
    created_at?: filter._timestamp;
  }
}
