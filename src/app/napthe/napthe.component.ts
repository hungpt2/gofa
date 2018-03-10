import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { conversionRate } from '../shared/initData';

@Component({
  templateUrl: 'napthe.component.html',
  styleUrls: ['./napthe.scss']
})
export class NaptheComponent {

  tilequydoi = conversionRate;
  typeCard = 'viettel';
  validate = true;
  message = '';
  serialCard = '';
  pinCard = '';

  constructor() { }

  resetForm() {
    // this.typeCard = 'viettel';
    this.validate = true;
    this.message = '';
    this.serialCard = '';
    this.pinCard = '';
  }

  getResult(e) {
    this.validate = e;
  }

  checkForm() {
    if (this.serialCard === '') {
      this.message = 'Vui lòng nhập serial';
      this.validate = false;
      return;
    }
    if (this.pinCard === '') {
      this.message = 'Vui lòng nhập Mã thẻ';
      this.validate = false;
      return;
    }
    console.log('send transaction', this.serialCard, this.pinCard, this.typeCard);
    alert('send transaction see detail in console');
    this.resetForm();
  }
}
