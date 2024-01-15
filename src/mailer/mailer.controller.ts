import { Body, Controller, Post } from '@nestjs/common';
import { MailerDto } from './dto/mailer.dto';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly submissionService: MailerService) {}

  @Post()
  async create(@Body() body: MailerDto) {
    await this.submissionService.handleFormSubmission(body);
    return { message: 'Submission received successfully' };
  }
}
