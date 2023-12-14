import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import * as twilio from 'twilio';

@Injectable()
export class SmsService {
  private twilioClient: Twilio;
  private readonly client: twilio.Twilio

  constructor() {
    this.twilioClient = new Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }
  
  async sendSMS(to: string, body: string): Promise<void> {
    await this.twilioClient.messages.create({ 
        body: "Hello this is from LAP IT x TBGC",
      from: `+639105877285`,
      to: `+639105877285`,
    });
  }
}
