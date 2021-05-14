import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.scss']
})
export class MatematicaComponent implements OnInit {

  cards = [
    {path: '/matematica/calcoli-virgola', image: 'assets/matematica/calcoli-virgola.png', title: 'Calcoli con numeri con la virgola'},
    {path: '/matematica/divisioni', image: 'assets/matematica/divisioni.jpg', title: 'Divisioni intere semplici'},
    {path: '/matematica/frazioni', image: 'assets/matematica/frazioni.png', title: 'Frazioni'},
    {path: '/matematica/moltiplicazioni-due-cifre', image: 'assets/matematica/moltiplicazioni-due-cifre.png', title: 'Moltiplicazioni a due cifre'},
    {path: '/matematica/moltiplicazioni-virgola', image: 'assets/matematica/moltiplicazioni-virgola.png', title: 'Moltiplicazioni con la virgola'},
    {path: '/matematica/piu-meno', image: 'assets/matematica/piu-meno.png', title: 'Più, meno oltre il mille'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
