import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'napthenhanh.component.html',
  styleUrls: ['./napthenhanh.scss']
})
export class NaptheNhanhComponent {

  openModal = true;
  validate = true;
  typeCard = 'viettel';
  transaction = {
    nickname: '',
    pinCard: '',
    serialCard: '',
    captcha: ''
  };
  message = '';




  constructor(
    private router: Router
  ) { }
  ngOninit() {
    console.log('load image captcha');
  }
  checkForm() {
    const listCheck = [
      {
        check: this.transaction.nickname,
        text: 'tên nhân vật'
      },
      {
        check: this.transaction.pinCard,
        text: 'mã thẻ'
      },
      {
        check: this.transaction.serialCard,
        text: 'serial'
      },
      {
        check: this.transaction.captcha,
        text: 'captcha'
      }];
    for (const item of listCheck) {
      if (item.check === '') {
        this.message = 'Vui lòng nhập ' + item.text;
        this.validate = false;
        return;
      }
    }
    console.log('send transaction', this.transaction, this.typeCard);
    alert('send transaction see detail in console');
    this.resetForm();
  }
  resetForm() {
    this.openModal = true;
    this.validate = true;
    // this.typeCard = 'viettel';
    this.transaction = {
      nickname: '',
      pinCard: '',
      serialCard: '',
      captcha: ''
    };
    this.message = '';
  }
  getResult(e) {
    this.validate = e;
  }
}
