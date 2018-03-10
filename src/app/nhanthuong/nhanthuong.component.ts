import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { card } from '../shared/initData';

@Component({
  templateUrl: 'nhanthuong.component.html',
  styleUrls: ['./nhanthuong.scss']
})
export class NhanthuongComponent {

  listCard = card;
  constructor( ) { }

  doithuong(count, company) {
    alert(count + company);
  }
}
