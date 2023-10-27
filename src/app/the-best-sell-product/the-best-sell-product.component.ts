import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IProduct } from './../iproduct';

@Component({
  selector: 'app-the-best-sell-product',
  templateUrl: './the-best-sell-product.component.html',
  styleUrls: ['./the-best-sell-product.component.scss'],
})
export class TheBestSellProductComponent implements OnInit {
  constructor(private serve: DataService) {}
  listProduct: IProduct[] = [];

  ngOnInit(): void {
    this.serve
      .getLaptopBestSeller()
      .subscribe((res) => (this.listProduct = res));
  }
}
