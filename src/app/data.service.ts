import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getDataProduct() {
    return this.http.get('http://localhost:3000/products');
  }

  getDataProductItem(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  getLaptopBestSeller() {
    let url =
      'http://localhost:3000/products?idLoai=1&_sort=solanxem&_order=desc&_limit=6';
    return this.http.get<IProduct[]>(url);
  }
}
