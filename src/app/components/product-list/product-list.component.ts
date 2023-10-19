import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    { name: 'A', code: 'AB23', star: 3.4 },
    { name: 'B', code: 'CD33', star: 2.4 },
    { name: 'C', code: 'EF53', star: 4 },
  ];
  constructor() {}
  changeStarRating(message: string) {
    console.log('message', message);
  }
  ngOnInit(): void {}
}
