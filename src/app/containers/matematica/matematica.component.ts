import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.scss']
})
export class MatematicaComponent implements OnInit {

  cards = [
    {path: '/matematica/calcoli-virgola', image: '', title: 'Calcoli con numeri con la virgola'},
    {path: '/matematica/divisioni', image: '', title: 'Divisioni intere semplici'},
    {path: '/matematica/frazioni', image: '', title: 'Frazioni'},
    {path: '/matematica/moltiplicazioni-due-cifre', image: '', title: 'Moltiplicazioni a due cifre'},
    {path: '/matematica/moltiplicazioni-virgola', image: '', title: 'Moltiplicazioni con la virgola'},
    {path: '/matematica/piu-meno', image: '', title: 'Più, meno oltre il mille'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
