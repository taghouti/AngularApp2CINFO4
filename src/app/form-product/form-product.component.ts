import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product: Product;
  @Output() saveEvent = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
    this.product = new Product();
  }

  notify() {

    this.saveEvent.emit(this.product);
  }
}
