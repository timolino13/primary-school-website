import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.scss']
})
export class MatematicaComponent implements OnInit {

  cards = [
    {path: '/matematica/calcoli-virgola', title: 'Calcoli con numeri con la virgola'},
    {path: '/matematica/divisioni', title: 'Divisioni intere semplici'},
    {path: '/matematica/frazioni', title: 'Frazioni'},
    {path: '/matematica/moltiplicazioni-due-cifre', title: 'Moltiplicazioni a due cifre'},
    {path: '/matematica/moltiplicazioni-virgola', title: 'Moltiplicazioni con la virgola'},
    {path: '/matematica/piu-meno', title: 'Più, meno oltre il mille'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
