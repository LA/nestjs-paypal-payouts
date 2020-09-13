import { Inject } from '@nestjs/common';
import { PAYPAL, PAYPAL_CLIENT } from '../constants';

export function InjectPaypalClient() {
  return Inject(PAYPAL_CLIENT);
}
