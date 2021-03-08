import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title: string;
  list: Product[];

  constructor() {
  }

  ngOnInit(): void {
    this.title = 'First App Angular';
    this.list = [
      {id: 1, title: 'T-shirt 1', quantity: 5, price: 10, like: 0},
      {id: 2, title: 'T-shirt 2', quantity: 0, price: 100, like: 10},
      {id: 3, title: 'T-shirt 3', quantity: 10, price: 150, like: 0}
    ];
  }

  incrementLike(product: Product) {
    product.like++;

  }

}
