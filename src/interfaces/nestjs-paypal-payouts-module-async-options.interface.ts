/* Dependencies */
import { ModuleMetadata, Type } from '@nestjs/common/interfaces';

/* Interfaces */
import {
  NestjsPaypalPayoutsOptions,
} from './nestjs-paypal-payouts-options.interface';
import {
  NestjsPaypalPayoutsOptionsFactory,
} from './nestjs-paypal-payouts-options-factory.interface';

export interface NestjsPaypalPayoutsAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<NestjsPaypalPayoutsOptionsFactory>;
  useClass?: Type<NestjsPaypalPayoutsOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestjsPaypalPayoutsOptions> | NestjsPaypalPayoutsOptions;
}