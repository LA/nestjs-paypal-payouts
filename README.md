
# nestjs-paypal-payouts

NestJS module for integrating PayPal Payouts using the official [PayPal Payouts Node.js SDK](https://github.com/paypal/Payouts-NodeJS-SDK). This module provides an injectable client and easy configuration to make PayPal Payouts straightforward in any NestJS application.

## Installation

Before installing, ensure you have Node.js and Yarn installed. This module requires a NestJS project setup.

```bash
yarn add nestjs-paypal-payouts
```

## Configuration

Configure the module in your NestJS application module (e.g., `AppModule`):

```js
import { Module } from '@nestjs/common';
import { NestjsPaypalPayoutsModule } from 'nestjs-paypal-payouts';

@Module({
  imports: [
    NestjsPaypalPayoutsModule.register({
      environment: process.env.PAYPAL_ENVIRONMENT as 'sandbox' | 'live', // Choose 'sandbox' for testing and 'live' for production
      clientId: process.env.PAYPAL_CLIENT_ID, // Your PayPal client ID
      clientSecret: process.env.PAYPAL_CLIENT_SECRET, // Your PayPal client secret
    }),
  ],
})
export class AppModule {}
```

For asynchronous configuration, use `registerAsync` and provide a factory method:

```js
NestjsPaypalPayoutsModule.registerAsync({
  useFactory: async () => ({
    environment: await getPayPalEnvironment(),
    clientId: await getPayPalClientId(),
    clientSecret: await getPayPalClientSecret(),
  }),
})
```

## Usage

Inject the PayPal client into your services to start making payouts:

```js
import { Injectable } from '@nestjs/common';
import { InjectPaypalClient, InjectPaypal } from 'nestjs-paypal-payouts';

@Injectable()
export class PaymentService {
  constructor(
    @InjectPaypalClient() private readonly paypalClient,
    @InjectPaypal() private readonly paypal,
  ) {}

  async payout() {
    const request = this.paypal.payouts.PayoutsPostRequest();
    request.requestBody({
      /* Payouts request body */
    });

    const response = await this.paypalClient.execute(request);
    console.log(`Payouts Create Response: ${JSON.stringify(response.result)}`);
  }
}
```


## API Reference

A detailed API reference is available to guide you through the available methods in the `paypal` and `paypalClient` objects, including parameters, return types, and example calls.

## Contributing

Contributions are welcome!


## About

Built with [NestJS](https://nestjs.com) and [@nestjsplus/dyn-schematics](https://github.com/nestjsplus/dyn-schematics). Inspired by [nestjs-stripe](https://github.com/dhaspden/nestjs-stripe) and the work of John Biundo.

<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
</div>
