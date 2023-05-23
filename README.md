# Chargebee Typescript Client Library - API V2

[![npm](https://img.shields.io/npm/v/chargebee-typescript.svg?maxAge=25920000)](https://www.npmjs.com/package/chargebee-typescript)
[![npm](https://img.shields.io/npm/dt/chargebee-typescript.svg?maxAge=25920000)](https://www.npmjs.com/package/chargebee-typescript)

This is a server-side [typescript](https://www.typescriptlang.org/) library for integrating with Chargebee. Sign up for a Chargebee account [here](https://www.chargebee.com).

## Requirements

Node 8 or higher.

## Installation

Install the latest version of the library with:

```sh
npm install chargebee-typescript
# or
yarn add chargebee-typescript
# or
pnpm install chargebee-typescript
```

## Usage

The package needs to be configured with your site's API key, which is available under Configure Chargebee Section. Refer [here](https://www.chargebee.com/docs/2.0/api_keys.html) for more details.

```typescript
import { ChargeBee } from 'chargebee-typescript';
const chargebee = new ChargeBee();

chargebee.configure({
  site: 'YOUR_SITE_NAME',
  api_key: 'YOUR_API_KEY',
});
```

### Using Async / Await

```typescript
try {
  const { customer } = await chargebee.customer
    .create({
      email: 'john@test.com',
      // other params
    })
    .request();
} catch (err) {
  // handle error
}
```

### Using Promises

```typescript
chargebee.customer
  .create({
    email: 'john@test.com',
    // other params
  })
  .request()
  .then((result) => {
    // handle result
    // access customer as result.customer;
  })
  .catch((err) => {
    // handle error
  });
```

### Using callbacks

```typescript
chargebee.customer
  .create({
    email: 'john@test.com',
    // other params
  })
  .request(function (error, result) {
    if (error) {
      // handle error
    } else {
      // handle result
    }
  });
```

### Using typings

```typescript
import { ChargeBee, _customer } from 'chargebee-typescript';
const chargebee = new ChargeBee();

chargebee.configure({
  site: 'YOUR_SITE_NAME',
  api_key: 'YOUR_API_KEY',
});

const createCustomer = async () => {
  const params: _customer.create_params = {
    email: 'john@test.com',
    first_name: 'John',
    last_name: 'Doe',
  };

  const { customer } = await chargebee.customer.create(params).request();
  console.log(customer);
};

createCustomer();
```

### Accessing the response object

The response object returned by the `request()` method is generic response wrapper. You need to access the resource from it. For example,

- To access customer object.

```typescript
const result = await chargebee.customer.create({ email: 'john@test.com' }).request();
console.log(result.customer);
```

Other resources can be accessed by the same approach. For subscription, it will be `result.subscription`

- To access list response.

```typescript
const result = await chargebee.subscription
  .list({
    /* params */
  })
  .request();

// A list of Subscription objects
console.log(result.list.map((obj) => obj.subscription));
```

**Note**

If you have a `result` (or children further down the line) and are unsure what properties are available, you can use `Object.keys` to get a list of available accessor properties. Using `Object.keys` in the previous example would yield

```typescript
// ['list', 'next_offset']
console.log(Object.keys(result));
// ['1', '2', '3'], e.g. `result.list` is an array with 3 entries
console.log(Object.keys(result.list));
// ['activated_at', 'base_currency_code', ...]
// ['activated_at', 'base_currency_code', ...]
// ['activated_at', 'base_currency_code', ...]
// Which means we've reached the bottom and should have all the information available from this request
console.log(result.list.map((obj) => obj.subscription));
```

#### Using filters in the List API

For pagination: `offset` is the parameter that is being used. The value used for this parameter must be the value returned for `next_offset` parameter in the previous API call.

```typescript
const fetchCustomers = async (offset?: any) => {
  const params: _customer.customer_list_params = {
    offset,
    limit: 2,
    first_name: {
      is: 'John',
    },
  };

  const result = await chargebee.customer.list(params).request();

  return {
    customers: result.list.map((obj) => obj.customer),
    next_offset: result.next_offset,
  };
};

const { customers, next_offset } = fetchCustomers();

// Fetching next set of customers
fetchCustomers(next_offset);
```

#### Using custom headers and custom fields:

```typescript
chargebee.customer
  .create({ email: 'john@test.com' })
  .param({
    cf_host_url: 'http://xyz.com',
  })
  .headers({
    'chargebee-event-email': 'all-disabled', // To disable webhooks
    'chargebee-request-origin-ip': '192.168.1.2',
  })
  .request()
  .then((result) => {
    const customer = result.customer;
    console.log(customer.cf_host_url);
  });
```

#### Create an idempotent request

[Idempotency keys](https://apidocs.chargebee.com/docs/api/idempotency?prod_cat_ver=2) are passed along with request headers to allow a safe retry of POST requests.

```typescript
import { ChargeBee } from 'chargebee-typescript';

chargebee.customer
  .create({
    email: 'john@test.com',
  })
  .setIdempotencyKey('<<UUID>>') // Replace <<UUID>> with a unique string
  .request()
  .then((result) => {
    const customer: typeof chargebee.customer = result.customer;
    const responseHeaders = result.getResponseHeaders(); // Retrieves response headers
    console.log(responseHeaders);
    const idempotencyReplayedValue = result.isIdempotencyReplayed(); // Retrieves idempotency replayed header value
    console.log(idempotencyReplayedValue);
  });
```

Note: `isIdempotencyReplayed()` method can be accessed to differentiate between original and replayed requests.

### Error handling:

All asynchronous errors will be available as the first argument of `request()` method's callback or in the form of a rejected promise. Detailed documentation on error handling is available [here](https://apidocs.chargebee.com/docs/api/error-handling?prod_cat_ver=2).

```typescript
//The callback function that you provide needs to take in two arguments. The first being error object and the
//second being the response. Incase of error, the error object is passed.
chargebee.subscription
  .create({
    //create params...
  })
  .request(function (error, result) {
    if (error) {
      handleCreateSubscriptionError(error);
    } else {
      console.log(result.subscription);
    }
  });

function handleCreateSubscriptionError(ex) {
  if (ex.type == 'payment') {
    // First check for card parameters entered by the user.
    // We recommend you to validate the input at the client side itself to catch simple mistakes.
    if ('card[number]' == ex.param) {
      // Ask your user to recheck the card number. A better way is to use
      // Stripe's https://github.com/stripe/jquery.payment for validating it in the client side itself.
      //}else if(<other card params> == ex.param){
      //Similarly check for other card parameters entered by the user.
      //....
    } else {
      // Verfication or processing failures.
      // Provide a standard message to your user to recheck his card details or provide a different card.
      // Like  'Sorry,there was a problem when processing your card, please check the details and try again'.
    }
  } else if (ex.type == 'invalid_request') {
    // For coupons you could decide to provide specific messages by using
    // the 'api_error_code' attribute in the ex.
    if ('coupon' == ex.param) {
      if ('resource_not_found' == ex.api_error_code) {
        // Inform user to recheck his coupon code.
      } else if ('resource_limit_exhausted' == ex.api_error_code) {
        // Inform user that the coupon code has expired.
      } else if ('invalid_request' == ex.api_error_code) {
        // Inform user that the coupon code is not applicable for his plan(/addons).
      } else {
        // Inform user to recheck his coupon code.
      }
    } else {
      // Since you would have validated all other parameters on your side itself,
      // this could probably be a bug in your code. Provide a generic message to your users.
    }
  } else if (ex.type == 'operation_failed') {
    // Indicates that the request parameters were right but the request couldn't be completed.
    // The reasons might be "api_request_limit_exceeded" or could be due to an issue in ChargeBee side.
    // These should occur very rarely and mostly be of temporary nature.
    // You could ask your user to retry after some time.
  } else if (ex.type == 'io_error') {
    // Handle IO exceptions such as connection timeout, request timeout etc.
    // You could give a generic message to the customer retry after some time.
  } else {
    // These are unhandled exceptions (Could be due to a bug in your code or very rarely in client library).
    // The errors from ChargeBee such as authentication failures will come here.
    // You could ask users contact your support.
  }
}
```

## Documentation

The full documentation can be found on the Chargebee API Docs:

[https://apidocs.chargebee.com/docs/api?lang=typescript](https://apidocs.chargebee.com/docs/api?lang=typescript)

## License

See the [LICENSE](./LICENSE) file.
