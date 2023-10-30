import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private cartservice: CartService) {}
  items = this.cartservice.getItems();
  tongtien() {
    let tt: number = 0;
    this.items.forEach((item) => (tt += item.soluong * item.giasp));
    return tt;
  }
  tongsoluong() {
    let tsl: number = 0;
    this.items.forEach((item) => (tsl += item.soluong));
    return tsl;
  }
}
