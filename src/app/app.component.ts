import { Component, OnInit } from '@angular/core';
import { Product } from './common/product';
import { Inventor } from './common/inventor';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  [x: string]: any;
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  nameBook: string = 'Nói với tuổi 20'; //khai báo biến string
  priceBook: number = 25000; //khai báo biến số
  students = {
    //khai báo biến kiểu object
    name: 'Mai Anh Tới',
    birth: '2004-3-24',
  };
  numberBook = 888;
  tinhTuoi() {
    //định nghĩa 1 hàm
    let ns: Date = new Date(this.students.birth);
    return new Date().getFullYear() - ns.getFullYear();
  }
}
