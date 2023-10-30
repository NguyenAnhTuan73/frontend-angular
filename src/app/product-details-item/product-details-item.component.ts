import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-product-details-item',
  templateUrl: './product-details-item.component.html',
  styleUrls: ['./product-details-item.component.scss'],
})
export class ProductDetailsItemComponent implements OnInit {
  constructor(private d: DataService, private route: ActivatedRoute) {}
  productDetails: any;
  idSP: number = 0;
  idLoai: number = 0;
  tenLoai: string = '';
  ngOnInit(): void {
    this.idSP = Number(this.route.snapshot.params['id']);
    this.d.getProductDetails(this.idSP).subscribe(
      (res) => {
        this.productDetails = res[0];
        this.idLoai = this.productDetails.idLoai;
        this.d
          .getNameTypeProduct(this.idLoai)
          .subscribe((d) => (this.tenLoai = d[0]['tenLoai']));
      } //res
    );
  }
}
