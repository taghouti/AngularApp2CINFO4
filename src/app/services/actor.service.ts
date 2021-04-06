import { Injectable } from '@angular/core';
import {Actor} from '../model/actors';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  list: Actor[] =  [
    {firstName: 'Ahmed', lastName: 'Zaki'},
    {firstName: 'Sofien', lastName: 'Chaari'}
  ];
  constructor() { }
}
