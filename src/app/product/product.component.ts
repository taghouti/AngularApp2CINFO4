import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() pChild: Product;
  @Input() price: number;
  @Output() likeEvent = new EventEmitter<Product>();

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
}
