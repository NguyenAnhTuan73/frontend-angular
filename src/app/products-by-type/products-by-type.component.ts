import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-by-type',
  templateUrl: './products-by-type.component.html',
  styleUrls: ['./products-by-type.component.scss'],
})
export class ProductsByTypeComponent implements OnInit {
  listProductByType: IProduct[] = [];
  typeName: string = '';
  idType: number = 0;
  pageNum: number = 1;
  pageSize: number = 2;
  total: number = 0;

  constructor(
    private serve: DataService,
    private route: ActivatedRoute,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.idType = Number(this.route.snapshot.params['id']);
    this.serve
      .getNameTypeProduct(this.idType)
      .subscribe((type) => (this.typeName = type[0].tenLoai));
    this.serve
      .getProductByType(this.idType, this.pageSize, this.pageNum)
      .subscribe((res) => {
        this.listProductByType = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      });
  }

  addToCart(product: IProduct) {
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    // alert('Đã thêm vào giỏ hàng');
  }

  nextToPage(p: number) {
    this.pageNum = p;
    this.serve
      .getProductByType(this.idType, this.pageSize, this.pageNum)
      .subscribe((res) => {
        this.listProductByType = res.body;
        this.total = Number(res.headers.get('X-Total-Count'));
      });
  }
}
