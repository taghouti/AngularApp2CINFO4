import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://127.0.0.1:8000/api/project/add';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(this.url);
  }

  addProduct(p: Product) {
    return this.http.post(this.url, p);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  update(id: number, p: Product) {
    return this.http.put(this.url + id, p);
  }
}
