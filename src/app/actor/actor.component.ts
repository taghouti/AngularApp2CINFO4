import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../model/actors';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;
  @Output() eventDelete = new EventEmitter<Actor>();

  constructor() {
  }

  ngOnInit(): void {

  }
  sendNotifParent() {
    this.eventDelete.emit(this.actor);
  }

}
