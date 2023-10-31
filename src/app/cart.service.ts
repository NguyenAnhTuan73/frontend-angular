import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from './icart';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) { }
  items: ICart[] = [];

  addToCart(sp: IProduct) {
    let index = this.items.findIndex((item) => item.idsp == sp.id);
    if (index >= 0) {
      this.items[index].soluong++;
    } else {
      let c: ICart;
      c = {
        idsp: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1,
      };
      this.items.push(c);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  taoDonHang(hoten: string, diachi: string, dienthoai: string, email: string) {
    return this.http.post("http://localhost:3000/donhang",
      { hoten: hoten, diachi: diachi, dienthoai: dienthoai, email: email },
      { observe: 'response' }
    )
  }
  luuChiTietDonhang(idDH: number, item: ICart) {
    return this.http.post<any>(
      "http://localhost:3000/donhangchitiet",
      { "iddh": idDH, "idsp": item.idsp, "tensp": item.tensp, "giasp": item.giasp, "soluong": item.soluong },
      { observe: 'response' }
    )
  }
}
