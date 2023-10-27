import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
})
export class DetailsProductComponent implements OnInit {
  sp1 = <IProduct>{};
  sp2: IProduct = {
    id: 1,
    tensp: 'Iphone 14',
    giasp: 32000000,
    solanxem: 420,
    hot: 1,
    mota: '',
    hinh: '',
    ngay: '',
    idLoai: 1,
  };
  listsp: IProduct[] = [
    {
      id: 1,
      tensp: 'AA',
      giasp: 11,
      solanxem: 1,
      hot: 1,
      mota: '',
      hinh: '',
      ngay: '',
      idLoai: 1,
    },
    {
      id: 2,
      tensp: 'BB',
      giasp: 22,
      solanxem: 1,
      hot: 0,
      mota: '',
      hinh: '',
      ngay: '',
      idLoai: 1,
    },
    {
      id: 3,
      tensp: 'CC',
      giasp: 33,
      solanxem: 1,
      hot: 1,
      mota: '',
      hinh: '',
      ngay: '',
      idLoai: 1,
    },
  ];
  dataProductItem: any;
  idProductItem: number | undefined;
  constructor(private serve: DataService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.sp1.tensp = 'Samsung Galaxy S8';
    console.log(this.route.snapshot.params['id']);
    console.log('sp1:', this.sp1);
    console.log('sp2:', this.sp2);
    this.serve
      .getDataProductItem(this.route.snapshot.params['id'])
      .subscribe((res) => (this.dataProductItem = res));
  } //ngOnInit
}
