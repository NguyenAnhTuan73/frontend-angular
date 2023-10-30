import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from './icart';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  items: ICart[] = [];

  addToCart(sp: IProduct) {
    let index = this.items.findIndex((item) => item.idsp == sp.id);
    if (index >= 0) {
      this.items[index].soluong++;
    } else {
      let c: ICart;
      c = {
        idsp: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1,
      };
      this.items.push(c);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
