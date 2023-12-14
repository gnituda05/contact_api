import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { MailerDto } from './dto/mailer.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NodeMailService {
    private transporter: nodemailer.Transporter;
  
    constructor() {
      this.transporter = nodemailer.createTransport({
        // SMTP configuration
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }
  
    async sendConfirmationEmail(email: string): Promise<void> {
      const mailOptions = {
        from: 'gnituda05@gmail.com',
        to: email,
        subject: 'Form Submission Confirmation',
        text: 'Your form has been successfully submitted.',
      };
  
      await this.transporter.sendMail(mailOptions);
    }
}
