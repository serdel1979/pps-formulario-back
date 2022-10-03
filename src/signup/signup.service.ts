import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }


  async create(createSignupDto: CreateSignupDto):Promise<CreateSignupDto>{
    if (createSignupDto.password !== createSignupDto.repeatPass){
      throw new NotFoundException('Invalid data'); 
    }
    const hash = await this.hashPassword(createSignupDto.password);
    let user = {email: createSignupDto.email, password: hash}
    console.log("Guardado en base de datos ",user);
    return user;
  }


}
