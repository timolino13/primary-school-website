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

    handleHover(id: string): void {
        const element = document.getElementById(id);
        // @ts-ignore
        element.setAttribute('style', 'color:white; background-color: #614E78;');
    }
}
