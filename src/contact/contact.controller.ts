import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

 // @Post()
//  create(@Body() data: ContactDto) {
   // return this.contactService.create(data);
   @Post('submit')
  async submit(@Body() createContactDto: ContactDto) {
    await this.contactService.submitForm(createContactDto);
  }
  
  }

