import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ITypeProduct } from '../itype-product';

@Component({
  selector: 'app-type-product',
  templateUrl: './type-product.component.html',
  styleUrls: ['./type-product.component.scss'],
})
export class TypeProductComponent implements OnInit {
  constructor(private serve: DataService) {}
  listTypeProducts: ITypeProduct[] = [];
  ngOnInit(): void {
    this.serve
      .getTypeProducts()
      .subscribe((res) => (this.listTypeProducts = res));
  }
}
