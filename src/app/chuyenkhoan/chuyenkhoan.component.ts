import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { agency } from '../shared/initData';
@Component({
  templateUrl: 'chuyenkhoan.component.html',
  styleUrls: ['./chuyenkhoan.scss']
})
export class ChuyenkhoanComponent {

  listAgency = agency;
  constructor( ) { }

}
