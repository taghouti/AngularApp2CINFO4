import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() pChild: Product;
  @Input() price: number;
  @Output() likeEvent = new EventEmitter<Product>();
  @Output() deleteEvent = new EventEmitter<Product>();
  constructor() {
  }
  ngOnInit(): void {
  }

  getColor(p: Product) {
    if (p.quantity === 0) {
      return 'red';
    }
  }
  sendNotifParent(){
    this.likeEvent.emit(this.pChild);
  }
  delete(){
    this.deleteEvent.emit(this.pChild);
  }
}
