import {Injectable} from '@angular/core';
import {Actor} from '../model/actors';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActorService {
  url = 'https://jsonplaceholder.typicode.com/users';
  // list: Actor[] =  [
  // {firstName: 'Ahmed', lastName: 'Zaki'},
  // {firstName: 'Sofien', lastName: 'Chaari'}
  // ];
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Actor[]>(this.url);
  }

}
