/**
 *  If you're building a standalone npm package hosting a dynamic module, you
 *  should delete this file.  Its only purpose is to bootstrap the app so that
 *  you can run the quick verification test (see nestjs-paypal-payouts-client/nestjs-paypal-payouts-client.module.ts)
 */
import { NestFactory } from '@nestjs/core';
import { NestjsPaypalPayoutsClientModule } from './nestjs-paypal-payouts-client/nestjs-paypal-payouts-client.module';

async function bootstrap() {
  const app = await NestFactory.create(NestjsPaypalPayoutsClientModule);
  await app.listen(3000);
}
bootstrap();
