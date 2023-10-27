import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  dataProduct: any;
  constructor(private serve: DataService) {}
  ngOnInit(): void {
    this.serve.getDataProduct().subscribe((res) => (this.dataProduct = res));
  }
}
