import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  public name: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public services: string;

  @IsNotEmpty()
  @IsString()
  public company: string;

  @IsNotEmpty()
  public message: string;
}
