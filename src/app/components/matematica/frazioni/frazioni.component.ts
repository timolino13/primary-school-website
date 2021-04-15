import {Component, OnInit} from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';
import {Answer} from '../../../models/Answer';
import {MathQuestion} from '../../../models/MathQuestion';

@Component({
  selector: 'app-frazioni',
  templateUrl: './frazioni.component.html',
  styleUrls: ['./frazioni.component.scss']
})
export class FrazioniComponent implements OnInit, MathQuestion {

  static UNDEFINED: NumberPair = new NumberPair(0, 0);

  numPair: NumberPair = FrazioniComponent.UNDEFINED;

  answer: Answer<NumberPair> = new Answer<NumberPair>(false,
    false, FrazioniComponent.UNDEFINED);

  constructor() {}

  ngOnInit(): void {
    this.next();
  }

  next(): void {
    this.answer.registered = false;
    this.answer.correct = false;
    this.answer.input = FrazioniComponent.UNDEFINED;

    this.generateCalculation();
  }

  generateCalculation(): void {
    const numerator = Math.ceil(Math.random() * 30) + 1;
    const denominator = Math.ceil(Math.random() * (numerator + 10)) + 1;

    this.numPair = new NumberPair(numerator, denominator);
  }

  verifyAnswer(): void {
  }

}
