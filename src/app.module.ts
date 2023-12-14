import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
// import { SmsModule } from './sms/sms.module';
import { SendMailerModule } from './mailer/mailer.module';

@Module({
  imports: [ContactModule, SendMailerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
