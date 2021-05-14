import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public toggle = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    burgerEvent(): void {
        this.toggle = !this.toggle;
    }
}
