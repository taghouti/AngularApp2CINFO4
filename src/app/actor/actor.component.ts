import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../model/actors';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;
  @Output() eventDelete = new EventEmitter<Actor>();
  list: Actor[];
  constructor(private actorService: ActorService) {
  }

  ngOnInit(): void {
    this.actorService.getAll().subscribe((data: Actor[]) =>
      this.list = data);
  }
  sendNotifParent() {
    this.eventDelete.emit(this.actor);
  }

}
