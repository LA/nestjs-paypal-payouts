import { PAYPAL_CLIENT } from '../constants';
import { NestjsPaypalPayoutsService } from '../nestjs-paypal-payouts.service';

export const paypalClientFactory = {
  provide: PAYPAL_CLIENT,
  useFactory: async (
    nestjsPaypalPayoutsService: NestjsPaypalPayoutsService,
  ) => {
    return nestjsPaypalPayoutsService.getPaypalClient();
  },
  inject: [NestjsPaypalPayoutsService],
};
