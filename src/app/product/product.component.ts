import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() pChild: Product;
  @Input() price: number;
  constructor() { }

  ngOnInit(): void {

  }
  incrementLike(product: Product) {
    product.like++;
  }

  getColor(p: Product) {
    if (p.quantity === 0) {
      return 'red';
    }
  }
}
