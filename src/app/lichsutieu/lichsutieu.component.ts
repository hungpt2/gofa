import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { historyPay } from '../shared/initData';

@Component({
  templateUrl: 'lichsutieu.component.html',
  styleUrls: ['./lichsutieu.scss']
})
export class LichsuTieuComponent {

  lichSuTieu = historyPay;
  constructor( ) { }

}
