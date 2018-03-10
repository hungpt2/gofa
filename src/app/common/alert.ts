import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'alert-validate',
    templateUrl: 'alert.html',
    styleUrls: ['./alert.scss']
})
export class AlertComponent {
    @Input() show: any;
    @Input() message: '';
    @Output() close = new EventEmitter();

    constructor() { }
    ngOninit() {
    }

    closeAlert() {
        this.close.emit(true);
    }
}
