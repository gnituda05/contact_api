import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class ContactDto {
    
    @IsNotEmpty()
    public name: string;

    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @IsEmail()
    @IsNotEmpty()
    public mobile_num: string;

    @IsNotEmpty()
    @IsString()
    public company: string;

    @IsNotEmpty()
    public message: string;
  }
  