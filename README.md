# Chargebee Typescript Client Library - API V2

[![npm](https://img.shields.io/npm/v/chargebee-typescript.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee-typescript)
[![npm](https://img.shields.io/npm/dt/chargebee-typescript.svg?maxAge=2592000)](https://www.npmjs.com/package/chargebee-typescript)

This is the [typescript](https://www.typescriptlang.org/) Library for integrating with Chargebee. Sign up for a Chargebee account [here](https://www.chargebee.com).

## Installation

Install the latest version 2.x.x of the library with the following commands:

	$ npm install chargebee-typescript@">=2"

Then import the library as:

    import {ChargeBee} from 'chargebee-typescript';
	var chargebee = new ChargeBee();

## Usage

### Before getting started
This library lazily requests data only upon trying to access it. This means that if you are trying to get back a list of subscriptions for a customer, you need to access the parent of every field you want.
```typescript
chargebee.subscription.list({/* params */})
.request(function(error,result) {
  if(error){
    //handle error
    console.log(error);
  }else{
    // An empty Result object
    console.log(result)
    // A list of empty Result objects
    console.log(result.list)
    // A list of Subscription objects
    console.log(result.list.map((obj) => obj.subscription))
    }
  });
```

If you have a `result` (or children further down the line) and are unsure what properties are available, you can use `Object.keys` to get a list of available accessor properties. Using `Object.keys` in the previous example would yield
```typescript
    // ['list', 'next_offset']
    console.log(Object.keys(result))
    // ['1', '2', '3'], e.g. `result.list` is an array with 3 entries
    console.log(Object.keys(result.list))
    // ['activated_at', 'base_currency_code', ...]
    // ['activated_at', 'base_currency_code', ...]
    // ['activated_at', 'base_currency_code', ...]
    // Which means we've reached the bottom and should have all the information available from this request
    console.log(result.list.map((obj) => obj.subscription))
```

### To create a customer & subscription
```typescript
import {
     ChargeBee,
     _subscription
   } from 'chargebee-typescript';

   var chargebee = new ChargeBee();

   chargebee.configure({site : "mannar-test",
     api_key : "test___dev__2d2aopx6Dh6tzq5qI3FuV7TuWMbxaudy"});
   chargebee.subscription.create({
     plan_id : "basic",
     auto_collection : "off",
     billing_address : {
       first_name : "John",
       last_name : "Doe",
       line1 : "PO Box 9999",
       city : "Walnut",
       state : "California",
       zip : "91789",
       country : "US"
       },
     customer : {
       first_name : "John",
       last_name : "Doe",
       email : "john@user.com"
       }
   }).request(function(error,result) {
     if(error){
       //handle error
       console.log(error);
     }else{
       console.log(`${result}`);
       var subscription: typeof chargebee.subscription = result.subscription;
       var customer: typeof chargebee.customer = result.customer;
       var card: typeof chargebee.card = result.card;
       var invoice: typeof chargebee.invoice = result.invoice;
       var unbilled_charges: Array<typeof chargebee.unbilled_charge> = result.unbilled_charges;
     }
   });

```

### Use of Filters In List API
```typescript
import {
  ChargeBee,
  _subscription
} from 'chargebee-typescript';

var chargebee = new ChargeBee();

chargebee.configure({site : "mannar-test",
  api_key : "test___dev__2d2aopx6Dh6tzq5qI3FuV7TuWMbxaudy"});
chargebee.subscription.list({
  limit : 2,
  plan_id : { in : ["basic","no-trial"] }
}).request(function(error,result) {
  if(error){
    //handle error
    console.log(error);
  }else{
    for(var i = 0; i < result.list.length;i++){
        var entry=result.list[i]
        console.log(`${entry}`);
        var subscription: typeof chargebee.subscription = entry.subscription;
        var customer: typeof chargebee.customer = entry.customer;
        var card: typeof chargebee.card = entry.card;
        /*
            For pagination: offset is the paramter that is being used.
            The value used for this parameter must be the value returned for next_offset parameter in the previous API call.
            usage: result.next_offset
        */
      }
    }
  });
```

### To create subscription with custom headers and custom fields:
```typescript
import {
  ChargeBee,
  _subscription
} from 'chargebee-typescript';

var chargebee = new ChargeBee();

chargebee.subscription.create({
    plan_id : "basic"
}).param({
    "cf_host_url" : "http://xyz.com",
    "customer[cf_host_url]" : "http://xyz.com"
}).headers({
    "chargebee-event-email" : "all-disabled", // To disable webhooks
    "chargebee-request-origin-ip": "192.168.1.2"
}).request(function(error,result) {
    if(error){
        console.log(error);
    }else{
        var subscription = result.subscription
        var customer = result.customer
        console.log(subscription.cf_host_url);
        console.log(customer.cf_host_url);
    }
});
```

### Error handling:
```typescript
import {
  ChargeBee,
  _subscription
} from 'chargebee-typescript';

var chargebee = new ChargeBee();

//The callback function that you provide needs to take in two arguments. The first being error object and the
//second being the response. Incase of error, the error object is passed.
chargebee.subscription.create({
  //create params...
}).request(function(error, result) {
  if (error) {
    handleCreateSubscriptionError(error);
  } else {
    console.log(result);
  }
});

function handleCreateSubscriptionError(ex) {
  if (ex.type == "payment") {    
    // First check for card parameters entered by the user.
    // We recommend you to validate the input at the client side itself to catch simple mistakes.
    if ("card[number]" == ex.param) {
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

  } else if (ex.type == "invalid_request") {
    // For coupons you could decide to provide specific messages by using
    // the 'api_error_code' attribute in the ex.
    if ("coupon" == ex.param) {
      if ("resource_not_found" == ex.api_error_code) {
        // Inform user to recheck his coupon code.
      } else if ("resource_limit_exhausted" == ex.api_error_code) {
        // Inform user that the coupon code has expired.
      } else if ("invalid_request" == ex.api_error_code) {
        // Inform user that the coupon code is not applicable for his plan(/addons).
      } else {
        // Inform user to recheck his coupon code.
      }
    } else {
      // Since you would have validated all other parameters on your side itself,
      // this could probably be a bug in your code. Provide a generic message to your users.
    }
  } else if (ex.type == "operation_failed") {
    // Indicates that the request parameters were right but the request couldn't be completed.
    // The reasons might be "api_request_limit_exceeded" or could be due to an issue in ChargeBee side.
    // These should occur very rarely and mostly be of temporary nature.
    // You could ask your user to retry after some time.
  } else if (ex.type == "io_error") {
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

The full documentation can be found on the chargebee site here:

[https://apidocs.chargebee.com/docs/api?lang=typescript](https://apidocs.chargebee.com/docs/api?lang=typescript)


## License

See the LICENSE file.

