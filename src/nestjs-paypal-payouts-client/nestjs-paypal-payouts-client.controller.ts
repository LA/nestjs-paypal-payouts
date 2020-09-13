/**
 *  NestjsPaypalPayoutsClientController is a testing controller that verifies that
 *  NestjsPaypalPayoutsModule was generated properly.
 *
 *  You can quickly verify this by running `npm run start:dev`, and then
 *  connecting to `http://localhost:3000` with your browser.  It should return
 *  a custom message like `Hello from NestjsPaypalPayoutsModule`.
 *
 *  Once you begin customizing NestjsPaypalPayoutsModule, you'll probably want
 *  to delete this controller.
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { NestjsPaypalPayoutsService } from '../nestjs-paypal-payouts.service';
import { PAYPAL_CLIENT, PAYPAL } from '../constants';

@Controller()
export class NestjsPaypalPayoutsClientController {
  constructor(
    @Inject(PAYPAL_CLIENT)
    private readonly paypalClient,
    @Inject(PAYPAL)
    private readonly paypal,
  ) {}

  @Get()
  async index() {
    const available = '<b>available</b>';
    const missing = '<b>missing</b>';

    let statusString = '';

    statusString += `paypal.payouts.PayoutsPostRequest: ${
      this.paypal.payouts.PayoutsPostRequest ? available : missing
    }<br /><br />`;

    const postRequest = new this.paypal.payouts.PayoutsPostRequest();
    statusString += `paypal.payouts.PayoutsPostRequest.requestBody: ${
      postRequest.requestBody && typeof postRequest.requestBody === 'function'
        ? available
        : missing
    }<br /><br />`;

    statusString += `client.execute: ${
      this.paypalClient.execute &&
      typeof this.paypalClient.execute === 'function'
        ? available
        : missing
    }<br /><br />`;

    statusString += `paypal.payouts.PayoutsGetRequest: ${
      this.paypal.payouts.PayoutsGetRequest ? available : missing
    }<br /><br />`;

    return statusString;
  }
}
