import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Promise<any> {
    let a, b; Number;
    a=333
    b=444 
    const res = this.addTwoNumbers(a, b)
    return res;
  }  
  public async addTwoNumbers(a: number,b : number): Promise<any>{
    if(a == b){
      return "Holoso";
  }
  else{
        return "Ne Holoso";
  }  
  }
}