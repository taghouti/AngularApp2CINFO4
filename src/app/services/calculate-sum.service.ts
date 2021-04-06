import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateSumService {

  constructor() {
  }

  getBilan(list: any[], attribute: string, value: any) {
    let n = 0;
    for (let i in list) {
      if (list[i][attribute] === value) {
        n++;
      }
    }
    return n;

  }

}
