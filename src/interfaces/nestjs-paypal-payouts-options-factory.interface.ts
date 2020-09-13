import {
  NestjsPaypalPayoutsOptions,
} from './nestjs-paypal-payouts-options.interface';

export interface NestjsPaypalPayoutsOptionsFactory {
  createNestjsPaypalPayoutsOptions():
    | Promise<NestjsPaypalPayoutsOptions>
    | NestjsPaypalPayoutsOptions;
}
