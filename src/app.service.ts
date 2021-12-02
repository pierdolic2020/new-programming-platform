import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Person  {
    const person = new Person ('Jesus Christ','Hallelujah');
    return person;
  }  }
  export class Person {
    lastNameEn: string;
    firstNameEn: string;
    middleNameEn: string;
    birtDate: string;
    constructor(firstNameEn,lastNameEn) {
 this.firstNameEn = firstNameEn;
 this.lastNameEn = lastNameEn;    
    }
  }
   
  
