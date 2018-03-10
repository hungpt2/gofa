import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { historyPay } from '../shared/initData';

@Component({
  templateUrl: 'giftcode.component.html',
  styleUrls: ['./giftcode.scss']
})
export class GiftCodeComponent {

  giftcode = '';
  captcha = '';
  validate = true;
  message = '';

  constructor() { }

  napthe() {
    if (this.giftcode === '') {
      this.message = 'Vui lòng nhập gifcode';
      this.validate = false;
      return;
    }
    if (this.captcha === '') {
      this.message = 'Vui lòng nhập captcha';
      this.validate = false;
      return;
    }
    alert(this.giftcode + '-' + this.captcha);
    this.resetForm();
  }
  getResult(e) {
    this.validate = e;
  }
  resetForm() {
    this.giftcode = '';
    this.captcha = '';
    this.validate = true;
    this.message = '';
  }
}
