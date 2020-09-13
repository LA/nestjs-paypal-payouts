/**
 *  NestjsPaypalPayoutsClientModule is a testing module that verifies that
 *  NestjsPaypalPayoutsModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestjsPaypalPayoutsModule`.
 *
 *  Once you begin customizing NestjsPaypalPayoutsModule, you'll probably want
 *  to delete this module.
 */
import { Module } from '@nestjs/common';
import { NestjsPaypalPayoutsClientController } from './nestjs-paypal-payouts-client.controller';
import { NestjsPaypalPayoutsModule } from '../nestjs-paypal-payouts.module';

@Module({
  controllers: [NestjsPaypalPayoutsClientController],
  imports: [
    NestjsPaypalPayoutsModule.register({
      environment: 'sandbox',
      clientId: '',
      clientSecret: '',
    }),
  ],
})
export class NestjsPaypalPayoutsClientModule {}
