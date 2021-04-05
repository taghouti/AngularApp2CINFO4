import { Component, OnInit } from '@angular/core';
import {Actor} from '../model/actors';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {
  actor: Actor;

  constructor() { }

  ngOnInit(): void {
    this.actor = new Actor();
  }

}
