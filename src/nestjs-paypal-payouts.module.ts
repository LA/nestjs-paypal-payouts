import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestjsPaypalPayoutsService } from './nestjs-paypal-payouts.service';
import { NESTJS_PAYPAL_PAYOUTS_OPTIONS } from './constants';
import {
  NestjsPaypalPayoutsOptions,
  NestjsPaypalPayoutsAsyncOptions,
  NestjsPaypalPayoutsOptionsFactory,
} from './interfaces';
import { createNestjsPaypalPayoutsProviders } from './nestjs-paypal-payouts.providers';
import { paypalClientFactory } from './providers/nestjs-paypal-payouts-paypal-client.provider';
import { paypalFactory } from './providers/nestjs-paypal-payouts-paypal.provider';

@Global()
@Module({
  providers: [NestjsPaypalPayoutsService, paypalClientFactory, paypalFactory],
  exports: [NestjsPaypalPayoutsService, paypalClientFactory, paypalFactory],
})
export class NestjsPaypalPayoutsModule {
  /**
   * Registers a configured NestjsPaypalPayouts Module for import into the current module
   */
  public static register(options: NestjsPaypalPayoutsOptions): DynamicModule {
    return {
      module: NestjsPaypalPayoutsModule,
      providers: createNestjsPaypalPayoutsProviders(options),
    };
  }

  /**
   * Registers a configured NestjsPaypalPayouts Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: NestjsPaypalPayoutsAsyncOptions,
  ): DynamicModule {
    return {
      module: NestjsPaypalPayoutsModule,
      providers: [...this.createProviders(options)],
    };
  }

  private static createProviders(
    options: NestjsPaypalPayoutsAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestjsPaypalPayoutsAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NESTJS_PAYPAL_PAYOUTS_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
      provide: NESTJS_PAYPAL_PAYOUTS_OPTIONS,
      useFactory: async (optionsFactory: NestjsPaypalPayoutsOptionsFactory) =>
        await optionsFactory.createNestjsPaypalPayoutsOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
