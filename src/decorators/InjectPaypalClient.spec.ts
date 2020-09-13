import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
const paypal = require('@paypal/payouts-sdk');
import {} from '../constants';
import { NestjsPaypalPayoutsModule } from '../nestjs-paypal-payouts.module';
import { InjectPaypalClient } from './InjectPaypalClient.decorator';

describe('InjectPaypal', () => {
  let module: TestingModule;

  @Injectable()
  class TestService {
    public constructor(
      @InjectPaypalClient() public readonly paypalClient: any,
    ) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        NestjsPaypalPayoutsModule.register({
          environment: 'sandbox',
          clientId: '',
          clientSecret: '',
        }),
      ],
      providers: [TestService],
    }).compile();
  });

  describe('when decorating a class constructor parameter', () => {
    it('should inject the paypal module', () => {
      const testService = module.get(TestService);
      expect(testService).toHaveProperty('paypalClient');
      expect(testService.paypalClient).toBeTruthy();
    });
  });
});
