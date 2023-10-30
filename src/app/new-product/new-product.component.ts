import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from '../iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  listNewProducts: IProduct[] = [];
  constructor(private server: DataService, private cartservice: CartService) {}
  ngOnInit(): void {
    this.server
      .getNewProducts()
      .subscribe((res) => (this.listNewProducts = res));
    console.log(this.listNewProducts);
  }
  addToCart(product: IProduct) {
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
  }
}
