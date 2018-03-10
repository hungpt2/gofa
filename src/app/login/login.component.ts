import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  validate = true;
  message = '';
  username = '';
  password = '';

  constructor(private route: Router) { }

  getResult(e) {
    this.validate = e;
  }

  checkForm() {
    console.log('check');
    if (this.username === '') {
      this.message = 'Vui lòng nhập tên tài khoản';
      this.validate = false;
      return;
    }
    if (this.password === '') {
      this.message = 'Vui lòng nhập mật khẩu';
      this.validate = false;
      return;
    }
    console.log('send transaction', this.username, this.password);
    alert('send transaction see detail in console');
    this.resetForm();
    this.route.navigateByUrl('/nap-the');
  }

  resetForm() {
    this.validate = true;
    this.message = '';
    this.username = '';
    this.password = '';
  }
}
