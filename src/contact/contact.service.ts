import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';
import { MailService } from './mail.service';
import { PrismaService } from 'prisma/prisma.service';
import * as nodemailer from 'nodemailer';
import * as twilio from 'twilio';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

@Injectable()
export class ContactService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  //*  async create(data: ContactDto) {
  // await this.mailService.sendEmail(data.name, data.email,  data.company, data.message);
  // return this.prisma.message.create({ data });

  async submitForm(createContactDto: ContactDto): Promise<void> {
    // Save form data in the database
    await prisma.message.create({
      data: {
        ...createContactDto,
      },
    });

    // await client.messages.create({
    //   to: createContactDto.mobile_num,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   body: 'Your contact form has been submitted. Thank you!',
    // });

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    let mailOptions = {
      from: process.env.EMAIL_FROM_ADDRESS,
      to: createContactDto.email,
      subject: 'Contact Form Submission',
      text: 'Thank you for submitting the contact form.',
      // You can also use html: to send HTML emails
    };
    console.log('gooods');
    await transporter.sendMail(mailOptions);
  }
}
