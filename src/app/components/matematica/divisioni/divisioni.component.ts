import { Component, OnInit } from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';

@Component({
  selector: 'app-divisioni',
  templateUrl: './divisioni.component.html',
  styleUrls: ['./divisioni.component.scss']
})
export class DivisioniComponent implements OnInit {

  divisionPair: NumberPair = new NumberPair(0, 0);
  result = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.initPair();
  }

  initPair(): void {
    const divisor = Math.ceil(Math.random() * 10) + 1;
    const multiple = Math.ceil(Math.random() * 10) + 1;
    const dividend = multiple * divisor;

    this.divisionPair = new NumberPair(dividend, divisor);
  }

  verifyAnswer(): boolean {
    // @ts-ignore
    return this.divisionPair.first / this.divisionPair.second === this.result;
  }

}
