import { Component, OnInit } from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';
import {Answer} from '../../../models/Answer';

@Component({
  selector: 'app-divisioni',
  templateUrl: './divisioni.component.html',
  styleUrls: ['./divisioni.component.scss']
})
export class DivisioniComponent implements OnInit {

  static UNDEFINED = 0;

  divisionPair: NumberPair = new NumberPair(0, 0);

  answer: Answer<number> = new Answer<number>(
    false,
    false,
    DivisioniComponent.UNDEFINED);

  constructor() {
  }

  ngOnInit(): void {
    this.next();
  }

  next(): void {
    this.answer.registered = false;
    this.answer.correct = false;
    this.answer.input = DivisioniComponent.UNDEFINED;

    this.generateCalculation();
  }

  // tslint:disable-next-line:typedef
  private generateCalculation() {
    const divisor = Math.ceil(Math.random() * 10) + 1;
    const multiple = Math.ceil(Math.random() * 9) + 1;
    const dividend = multiple * divisor;

    this.divisionPair = new NumberPair(dividend, divisor);
  }

  verifyAnswer(): void {
    // @ts-ignore
    this.answer.registered = true;
    this.answer.correct = this.divisionPair.first / this.divisionPair.second === this.answer.input;
  }

}
