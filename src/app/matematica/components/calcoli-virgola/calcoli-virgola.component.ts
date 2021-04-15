import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calcoli-virgola',
  templateUrl: './calcoli-virgola.component.html',
  styleUrls: ['./calcoli-virgola.component.scss']
})
export class CalcoliVirgolaComponent implements OnInit {

  valueOne = 0;
  valueTwo = 0;
  operator = '';
  result = null;
  correctResult = 0;
  answered = false;
  answeredCorrectly = false;

  constructor() {
  }

  ngOnInit(): void {
    this.generateCalculation();
  }

  generateCalculation(): void {
    this.valueOne = Math.round((Math.random() * (100 - 1) + 1) * 10) / 10;
    switch (Math.round(Math.random())) {
      case 0:
        this.operator = '+';
        this.valueTwo = Math.round((Math.random() * (100)) * 10) / 10;
        this.correctResult = Math.round((this.valueOne + this.valueTwo) * 10) / 10;
        break;
      case 1:
        this.operator = '-';
        this.valueTwo = Math.round((Math.random() * (this.valueOne)) * 10) / 10;
        this.correctResult = Math.round((this.valueOne - this.valueTwo) * 10) / 10;
        break;
      default:
        this.operator = '+';
        console.error('There was an error generating operator, using default operator +');
        break;
    }

    console.log('valueOne ', this.valueOne);
    console.log('valueTwo ', this.valueTwo);
    console.log('correctResult ', this.correctResult);
    console.log('operator ', this.operator);
  }

  verifyAnswer(): void {
    this.answeredCorrectly = this.result === this.correctResult;
    this.answered = true;
  }

  next(): void {
    this.generateCalculation();
    this.result = null;
    this.answered = false;
    this.answeredCorrectly = false;
  }

}
