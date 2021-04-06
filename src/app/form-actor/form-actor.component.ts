import { Component, OnInit } from '@angular/core';
import {Actor} from '../model/actors';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {
  actor: Actor;
  constructor(private service: ActorService) { }
  ngOnInit(): void {
    this.actor = new Actor();
  }
  save(){
    this.service.list.push(this.actor);
  }

}
