import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conoscenze-generali',
  templateUrl: './conoscenze-generali.component.html',
  styleUrls: ['./conoscenze-generali.component.scss']
})
export class ConoscenzeGeneraliComponent implements OnInit {

  cards = [
    {path: '/conoscenze-generali/leggere-orologio', image: 'assets/conoscenzeGenerali/leggere-orologio.png', title: 'Leggere l\'orologio'},
    {path: '/conoscenze-generali/misure-lunghezza', image: 'assets/conoscenzeGenerali/righello.png', title: 'Misure di lunghezza'},
    {path: '/conoscenze-generali/misure-peso', image: 'assets/conoscenzeGenerali/bilancia.png', title: 'Misure di peso'},
    {path: '/conoscenze-generali/riconoscere-soldi', image: 'assets/conoscenzeGenerali/money.png', title: 'Riconoscere i soldi'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
