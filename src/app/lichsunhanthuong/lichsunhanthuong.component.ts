import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { historyPay } from '../shared/initData';

@Component({
  templateUrl: 'lichsunhanthuong.component.html',
  styleUrls: ['./lichsunhanthuong.scss']
})
export class LichsuNhanthuongComponent {

  lichSuNhanthuong = historyPay;
  constructor( ) { }

}
