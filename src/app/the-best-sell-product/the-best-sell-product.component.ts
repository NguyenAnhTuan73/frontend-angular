import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from './../iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-the-best-sell-product',
  templateUrl: './the-best-sell-product.component.html',
  styleUrls: ['./the-best-sell-product.component.scss'],
})
export class TheBestSellProductComponent implements OnInit {
  constructor(private serve: DataService, private cartservice: CartService) {}
  listProduct: IProduct[] = [];

  addToCart(product: IProduct) {
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng');
  }

  ngOnInit(): void {
    this.serve
      .getLaptopBestSeller()
      .subscribe((res) => (this.listProduct = res));
  }
}
