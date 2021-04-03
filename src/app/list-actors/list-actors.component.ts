import {Component, OnInit} from '@angular/core';
import {Actor} from '../model/actors';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {
  list: Actor[];

  constructor() {
  }

  ngOnInit(): void {
    this.list = [
      {firstName: 'Ahmed', lastName: 'Zaki'},
      {firstName: 'Sofien', lastName: 'Chaari'}
    ];
  }

  deleteActor(actor: Actor) {
    let i = this.list.indexOf(actor);
    this.list.splice(i,1);
  }
}
