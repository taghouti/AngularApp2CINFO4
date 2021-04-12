import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {CalculateSumService} from '../services/calculate-sum.service';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title: string;
  list: Product[];
  priceMax: number;
  somme: number;

  constructor(private calculator: CalculateSumService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.title = 'First App Angular';
    // this.list = [
    // {id: 1, title: 'T-shirt 1', quantity: 5, price: 10, like: 0},
    // {id: 2, title: 'T-shirt 2', quantity: 0, price: 100, like: 10},
    // {id: 3, title: 'T-shirt 3', quantity: 10, price: 150, like: 0}
    // ];

    this.productService.getAll().subscribe((data: Product[]) =>
      this.list = data);

  }

  incrementLike(product: Product) {
    let i = this.list.indexOf(product);
    this.list[i].like++;
  }

  save(p: Product) {
    //this.list.push(p);
    p.like = 0;
    this.productService.addProduct(p).subscribe(
      () => this.list = [p, ...this.list]
  )
    ;
  }

  sum() {
    this.somme = this.calculator.getBilan(this.list, 'quantity', 0);
  }

}
