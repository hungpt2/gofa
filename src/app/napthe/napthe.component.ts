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
  constructor( ) { }

}
