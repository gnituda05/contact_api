// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { SmsService } from './sms.service';


// @Controller('sms')
// export class SmsController {
//   constructor(private readonly twilioService: SmsService) {}

//   @Post()
//   async sendSMS(@Body() body: { to: string; message: string }): Promise<void> {
//     await this.twilioService.sendSMS(body.to, body.message);
//   }
// }
