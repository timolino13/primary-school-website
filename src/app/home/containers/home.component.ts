import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    {path: '/matematica', image: 'assets/matematica/Matematica.jpeg', title: 'Matematica'},
    {path: '/conoscenze-generali', image: 'assets/conoscenzeGenerali/ConoscenzeGenerali.jpeg', title: 'Cultura Generale'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
