import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(private cartservice: CartService) {}
  hoten: string = '';
  email: string = '';
  diachi: string = '';
  dienthoai: string = '';

  // taodonhang() {
  //   this.cartservice
  //     .createOrder(this.hoten, this.diachi, this.dienthoai, this.email)
  //     .subscribe((response) => {
  //       console.log(response);
  //       console.log(response.body); //trong body có biến id của order mới chèn
  //       console.log(response.ok); //biến od=k =true là request ok
  //     });
  // } //taodonhang
}
