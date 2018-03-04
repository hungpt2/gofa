import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'napthenhanh.component.html',
  styleUrls: ['./napthenhanh.scss']
})
export class NaptheNhanhComponent {

  openModal = true;
  typeCard = 'viettel';
  constructor(
    private router: Router
  ) { }

}
