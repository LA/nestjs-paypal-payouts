import { PAYPAL } from '../constants';
import { NestjsPaypalPayoutsService } from '../nestjs-paypal-payouts.service';

export const paypalFactory = {
  provide: PAYPAL,
  useFactory: async (
    nestjsPaypalPayoutsService: NestjsPaypalPayoutsService,
  ) => {
    return nestjsPaypalPayoutsService.getPaypal();
  },
  inject: [NestjsPaypalPayoutsService],
};
