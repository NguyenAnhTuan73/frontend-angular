import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  // xulyDN(data: any) {
  //   this.auth.login(data).subscribe((res) => {
  //     if (res) {
  //       console.log('Đăng nhập thành công');
  //       this.router.navigateByUrl('/');
  //     }
  //   });
  // }
  xulyDN(data: any) {
    console.log(data, data.un, data.pw);
    this.auth.login(data.un, data.pw).subscribe(
      (res) => {
        let d = JSON.parse(res);
        console.log('Đăng nhập thành công ', res);
        const expiresAt = moment().add(d.expiresIn, 'second');
        localStorage.setItem('id_token', d.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log('Bạn không có quyền truy cập', error);
        this.router.navigateByUrl('/login');
      }
    );
  } //xulyDN
}
