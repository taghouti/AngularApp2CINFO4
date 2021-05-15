import {Component, OnInit} from '@angular/core';
import {Actor} from '../model/actors';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.css']
})
export class ListActorsComponent implements OnInit {
  list: Actor[];

  constructor(private service: ActorService) {
  }

  ngOnInit(): void {
    this.list = this.service.list;
  }

  deleteActor(actor: Actor) {
    let i = this.list.indexOf(actor);
    this.list.splice(i, 1);
  }
}
