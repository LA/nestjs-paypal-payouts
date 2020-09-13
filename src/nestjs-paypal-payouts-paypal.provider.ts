import { PAYPAL_CLIENT } from './constants';
import { NestjsPaypalPayoutsService } from './nestjs-paypal-payouts.service';

export const paypalFactory = {
  provide: PAYPAL_CLIENT,
  useFactory: async (
    nestjsPaypalPayoutsService: NestjsPaypalPayoutsService,
  ) => {
    return nestjsPaypalPayoutsService.getPaypal();
  },
  inject: [NestjsPaypalPayoutsService],
};
