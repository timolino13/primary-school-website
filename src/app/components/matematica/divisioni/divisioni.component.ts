import { Component, OnInit } from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';

@Component({
  selector: 'app-divisioni',
  templateUrl: './divisioni.component.html',
  styleUrls: ['./divisioni.component.scss']
})
export class DivisioniComponent implements OnInit {

  divisionPair: NumberPair | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.initPair();
  }

  initPair(): void {
    const dividend = Math.ceil(Math.random() * 10);
    const multiple = Math.ceil(Math.random() * 10);
    const divisor = multiple * dividend;

    this.divisionPair = new NumberPair(divisor, divisor);
  }

}
