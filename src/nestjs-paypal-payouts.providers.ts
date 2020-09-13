import { NestjsPaypalPayoutsOptions } from './interfaces';

import { NESTJS_PAYPAL_PAYOUTS_OPTIONS } from './constants';

export function createNestjsPaypalPayoutsProviders(
  options: NestjsPaypalPayoutsOptions,
) {
  return [
    {
      provide: NESTJS_PAYPAL_PAYOUTS_OPTIONS,
      useValue: options,
    },
  ];
}
