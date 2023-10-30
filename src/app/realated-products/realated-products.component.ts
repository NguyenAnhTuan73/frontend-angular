import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { DataService } from '../data.service';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-realated-products',
  templateUrl: './realated-products.component.html',
  styleUrls: ['./realated-products.component.scss'],
})
export class RealatedProductsComponent implements OnInit {
  @Input() idLoai: number = 0;
  @Input() soSP: number = 0;
  listSanPham: IProduct[] = [];
  constructor(private serve: DataService) {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.serve.getProductRealated(this.idLoai, this.soSP).subscribe((data) => {
      this.listSanPham = data;
      console.log(data);
    });
  }
}
