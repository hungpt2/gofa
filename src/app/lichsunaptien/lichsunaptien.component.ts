import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { historyCard } from '../shared/initData';

@Component({
  templateUrl: 'lichsunaptien.component.html',
  styleUrls: ['./lichsunaptien.scss']
})
export class LichsuNaptienComponent {

  lichSuNapThe = historyCard;
  constructor( ) { }

}
