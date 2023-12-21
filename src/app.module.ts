import { Module } from '@nestjs/common';

import { ContactModule } from './contact/contact.module';
// import { SmsModule } from './sms/sms.module';
import { SendMailerModule } from './mailer/mailer.module';

@Module({
  imports: [ContactModule, SendMailerModule],
})
export class AppModule {}
