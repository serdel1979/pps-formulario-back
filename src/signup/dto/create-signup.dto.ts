import { IsNotEmpty, IsString, MinLength, IsEmail } from "class-validator";

export class CreateSignupDto {
 //   @IsNotEmpty()
 //   @IsEmail()
    email: string;
 //   @IsNotEmpty()
 //   @IsString()
 //   @MinLength(6)
    password: string;
 //   @IsNotEmpty()
 //   @IsString()
 //   @MinLength(6)
    repeatPass: string;
}