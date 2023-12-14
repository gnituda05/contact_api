import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';
import { NodeMailService } from './nodemail.service';

@Module({
    imports: [PrismaModule],
    controllers: [MailerController],
    providers: [MailerService , NodeMailService]
})
export class SendMailerModule {}
