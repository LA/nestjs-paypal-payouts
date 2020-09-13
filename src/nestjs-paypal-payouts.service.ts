// tslint:disable: variable-name
import { Injectable, Inject, Logger } from '@nestjs/common';
import { NESTJS_PAYPAL_PAYOUTS_OPTIONS } from './constants';
import { NestjsPaypalPayoutsOptions } from './interfaces';
const paypal = require('@paypal/payouts-sdk');

interface INestjsPaypalPayoutsService {}

@Injectable()
/**
 *  You can remove the dependencies on the Logger if you don't need it.  You can also
 *  remove the `async test()` method.
 *
 *  The only thing you need to leave intact is the `@Inject(NESTJS_PAYPAL_PAYOUTS_OPTIONS) private _nestjs-paypal-payoutsOptions`.
 *
 *  That injected dependency gives you access to the options passed in to
 *  NestjsPaypalPayoutsService.
 *
 */
export class NestjsPaypalPayoutsService implements INestjsPaypalPayoutsService {
  private readonly logger: Logger;
  private _paypalClient: any;
  constructor(
    @Inject(NESTJS_PAYPAL_PAYOUTS_OPTIONS)
    private _NestjsPaypalPayoutsOptions: NestjsPaypalPayoutsOptions,
  ) {
    this.logger = new Logger('NestjsPaypalPayoutsService');
    this.logger.log(
      `Options: ${JSON.stringify(this._NestjsPaypalPayoutsOptions)}`,
    );
  }

  getPaypal() {
    return paypal;
  }

  getPaypalClient() {
    if (!this._paypalClient) {
      const {
        clientId,
        clientSecret,
        environment: paypalEnv,
      } = this._NestjsPaypalPayoutsOptions;

      const environment = new paypal.core[
        paypalEnv === 'live' ? 'LiveEnvironment' : 'SandboxEnvironment'
      ](clientId, clientSecret);

      this._paypalClient = new paypal.core.PayPalHttpClient(environment);
    }
    return this._paypalClient;
  }
}
