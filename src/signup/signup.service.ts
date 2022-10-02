import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';

@Injectable()
export class SignupService {
  async create(createSignupDto: CreateSignupDto):Promise<CreateSignupDto>{
    console.log(createSignupDto);
    return createSignupDto;
  }


}
