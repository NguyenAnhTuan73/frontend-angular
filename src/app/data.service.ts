import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './iproduct';
import { ITypeProduct } from './itype-product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getDataProduct() {
    return this.http.get('http://localhost:3000/products');
  }

  getDataProductItem(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  getLaptopBestSeller() {
    let url =
      'http://localhost:3000/products?idLoai=1&_sort=solanxem&_order=desc&_limit=6';
    return this.http.get<IProduct[]>(url);
  }
  getNewProducts() {
    let url =
      'http://localhost:3000/products?idLoai=1&_sort=ngay&_order=desc&_limit=6';
    return this.http.get<IProduct[]>(url);
  }
  getTypeProducts() {
    let url = 'http://localhost:3000/typeProducts';
    return this.http.get<ITypeProduct[]>(url);
  }
  getProductByType(id: Number = 0, pageSize: number = 1, pageNum: number = 1) {
    let url = `http://localhost:3000/products?idLoai=${id}&_sort=ngay&_order=desc&_page=${pageNum}&_limit=${pageSize}`;

    return this.http.get<any>(url, { observe: 'response' });
  }
  getNameTypeProduct(id: Number = 0) {
    const url = `http://localhost:3000/typeProducts?id=${id}`;
    return this.http.get<ITypeProduct[]>(url);
  }
  getProductDetails(idSP: Number = 0) {
    let url = `http://localhost:3000/products?id=${idSP}`;
    return this.http.get<ITypeProduct[]>(url);
  }
  getProductRealated(idLoai: number = 0, soSP: number = 0) {
    var url = `http://localhost:3000/products?idLoai=${idLoai}&_limit=${soSP}`;
    return this.http.get<IProduct[]>(url);
  }
}
