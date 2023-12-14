import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerDto } from './dto/mailer.dto';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaClient } from '@prisma/client';
import { NodeMailService } from './nodemail.service';

const prisma = new PrismaClient();

@Injectable()
export class MailerService {
    private prisma = new PrismaClient();
  
    constructor(private emailService: NodeMailService) {}
  
    async handleFormSubmission(data: any): Promise<void> {
      // Save the submission data to the database
      await this.prisma.message.create({ data });
  
      // Send a confirmation email
      await this.emailService.sendConfirmationEmail(data.email);
    }
}
