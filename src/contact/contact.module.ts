import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MailService } from './mail.service';

@Module({
  imports: [PrismaModule],
  controllers: [ContactController],
  providers: [ContactService, MailService]
})
export class ContactModule{}
