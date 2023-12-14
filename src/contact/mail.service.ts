import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gnituda05@gmail.com',
        pass: 'yxyknmcqhzcwbiyd',
      },
    });
  }

  async sendEmail(name: string, email: string, company: string, message: string) {
    const mailOptions = {
      to: email,
      subject: `New message from ${name} at ${company}`,
      text:'This is a test email',
    };

    await this.transporter.sendMail(mailOptions);
  }
}
