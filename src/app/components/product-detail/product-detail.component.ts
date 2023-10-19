import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;
  constructor() {
    this.product = { code: '', name: '', star: 0 };
  }
  ngOnInit(): void {}
  updateFn(form: NgForm) {
    console.log('>>>>>', form.value);
    this.product.code = form.value.productCode;
    this.product.name = form.value.productName?.toUpperCase();
  }
}
