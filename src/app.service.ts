import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
  
  getNumbers() : number {
    const a = 2078;
    const b = 2028;
    const c = a - b;
    return c;
  }
  
  getString() : string {
    const game = 'Cyberpunk';
    const developer = 'CDPR';
    const AllInfo = game + ' -> ' + developer;
    return AllInfo;
  }
  
  getArrays() : number[] { 
    const list : number[] = [27, 72, 32];
    return list;
  }
  
  getEnum() {
    enum Direction{
      one    =  '1',
      two    =  '2',
      three  =  '3',
      four   =  '4',
      five   =  '5',
      six    =  '6',
      seven  =  '7',
      eight  =  '8',
      nine   =  '9'
    }
  
    const keys = Object.keys(Direction);
    return keys;
  }
  
  getMultipleArrays(){
    const Cities: [string, number] = ['Kharkov', 3];
    return Cities;
  }
  
  getMultiValues() {
    let gNum = [
      ['six', 6 ],
      ['five', 5 ],
      ['four', 4],
      ['three', 3],
      ['two', 2],
      ['one', 1],
      ['zero', 0]
    ];
  
    return gNum;
  }
  }
 



