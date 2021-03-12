import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conoscenze-generali',
  templateUrl: './conoscenze-generali.component.html',
  styleUrls: ['./conoscenze-generali.component.scss']
})
export class ConoscenzeGeneraliComponent implements OnInit {

  cards = [
    {path: '/conoscenzeGenerali/leggere-orologio', image: '', title: 'Leggere l\'orologio'},
    {path: '/conoscenzeGenerali/misure-lunghezza', image: '', title: 'Misure di lunghezza'},
    {path: '/conoscenzeGenerali/misure-peso', image: '', title: 'Misure di peso'},
    {path: '/conoscenzeGenerali/riconoscere-soldi', image: '', title: 'Riconoscere i soldi'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
