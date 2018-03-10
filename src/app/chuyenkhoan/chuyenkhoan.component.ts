import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { agency } from '../shared/initData';
import { tilechuyentien } from '../shared/initData';

@Component({
  templateUrl: 'chuyenkhoan.component.html',
  styleUrls: ['./chuyenkhoan.scss']
})
export class ChuyenkhoanComponent {

  validate = true;
  message = '';
  listAgency = agency;
  name = '';
  rename = '';
  count = '';
  reason = '';
  tile = tilechuyentien;

  constructor() { }

  ngOninit() {
    console.log(this.tile);
  }

  getResult(e) {
    this.validate = e;
  }
  chuyenkhoan(id) {
    let listCheck = [
      { value: this.name, mess: 'Vui lòng nhập tên hiển thị' },
      { value: this.rename, mess: 'Vui lòng nhập lại tên hiển thị' },
      { value: this.count, mess: 'Vui lòng nhập số GOFA cần chuyển' },
      { value: this.reason, mess: 'Vui lòng nhập lý do chuyển' },
    ]
    for (const item of listCheck) {
      if (item.value === '') {
        this.message = item.mess;
        this.validate = false;
        return;
      }
    }
    if (this.name !== this.rename) {
      this.message = 'Tên nhập lại không khớp';
      this.validate = false;
      return;
    }
    alert(id + '-' + this.name + '-' + this.count + '-' + this.reason);
  }
  validNumber(number) {
    if (!/^[0-9]*$/.test(this.count.slice(-1))) {
      setTimeout(() => {
        this.count = this.count.replace(this.count.slice(-1), '');
      }, 0);
    }
  }
}
