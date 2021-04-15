import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.scss']
})
export class MatematicaComponent implements OnInit {

  cards = [
    {path: '/matematica/calcoli-virgola', image: 'assets/matematica/Matematica.jpeg', title: 'Calcoli con numeri con la virgola'},
    {path: '/matematica/divisioni', image: 'assets/matematica/Matematica.jpeg', title: 'Divisioni intere semplici'},
    {path: '/matematica/frazioni', image: 'assets/matematica/Matematica.jpeg', title: 'Frazioni'},
    {path: '/matematica/moltiplicazioni-due-cifre', image: 'assets/matematica/Matematica.jpeg', title: 'Moltiplicazioni a due cifre'},
    {path: '/matematica/moltiplicazioni-virgola', image: 'assets/matematica/Matematica.jpeg', title: 'Moltiplicazioni con la virgola'},
    {path: '/matematica/piu-meno', image: 'assets/matematica/Matematica.jpeg', title: 'Più, meno oltre il mille'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
