import { Inject } from '@nestjs/common';
import { PAYPAL } from '../constants';

export function InjectPaypal() {
  return Inject(PAYPAL);
}
