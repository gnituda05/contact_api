import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class MailerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsString()
  mobile?: string;
}
