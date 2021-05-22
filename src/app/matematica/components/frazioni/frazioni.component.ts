import {Component, OnInit} from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';
import {Answer} from '../../../models/Answer';
import {mathRandom} from '../../../models/Random';

@Component({
  selector: 'app-frazioni',
  templateUrl: './frazioni.component.html',
  styleUrls: ['./frazioni.component.scss']
})
export class FrazioniComponent implements OnInit {

  declare fraction1: NumberPair;
  declare multiple: number;
  declare rightFraction: NumberPair;

  declare answers: Answer<NumberPair>[];

  constructor() {
    this.initialize();
  }

  ngOnInit(): void {
  }

  initialize(): void {
    this.answers = [];
    this.fraction1 = new NumberPair(mathRandom(Math.ceil, 1, 40), mathRandom(Math.ceil, 1, 40));
    this.multiple = mathRandom(Math.ceil, 1, 10);
    this.rightFraction = this.simplifiedFraction(this.fraction1);
    this.createAnswers();
  }

  createAnswers(): void {
    const rightAns = new Answer(false, true, this.rightFraction);
    for (let i = 0; i < 3; i++) {
      const plusOrSubtract = mathRandom(Math.round, 0, 1) === 1 ? 1 : -1;
      const plusOrSubtract2 = mathRandom(Math.round, 0, 1) === 1 ? 1 : -1;
      const first = Math.max(this.fraction1.first + plusOrSubtract * (mathRandom(Math.round, 1, this.rightFraction.first)), 1);
      const second = Math.max(this.fraction1.second + plusOrSubtract2 * (mathRandom(Math.round, 1, this.rightFraction.second)), 1);
      const areEqualToAns = first === this.fraction1.first && second === this.rightFraction.second;
      const numberPair = areEqualToAns ? new NumberPair(this.rightFraction.first - 1, this.rightFraction.first - 1)
        : new NumberPair(first, second);
      this.answers.push(new Answer(false, false, numberPair));
    }
    this.answers.splice(mathRandom(Math.floor, 0, this.answers.length), 0, rightAns);
  }

  simplifiedFraction(fraction: NumberPair): NumberPair {
    const divisors1 = this.getDivisorsFor(fraction.first);
    const divisors2 = this.getDivisorsFor(fraction.second);

    const commonDivisors = this.intersection(divisors1, divisors2);
    const mcd = commonDivisors.reduce((prev, curr) => prev * curr);

    return new NumberPair(fraction.first / mcd, fraction.second / mcd);
  }

  intersection(array1: number[], array2: number[]): number[] {
    const firstIntersect = new Set(array1.filter(value => array2.includes(value)));
    const final: number[] = [];
    firstIntersect.forEach(value => {
      const recurrenceIn1 = array1.filter(array1Val => array1Val === value).length;
      const recurrenceIn2 = array2.filter(array2Val => array2Val === value).length;
      for (let i = 0; i < Math.min(recurrenceIn1, recurrenceIn2); i++) {
        final.push(value);
      }
    });
    return final;
  }

  getDivisorsFor(num: number): number[] {
    if (num <= 2) {
      return [1, num];
    }
    const divisors = [1];
    for (let currDivisor = 2; currDivisor <= num;) {
      if (num % currDivisor === 0) {
        divisors.push(currDivisor);
        num /= currDivisor;
      } else {
        currDivisor++;
      }
    }
    return divisors;
  }

  next(): void {
    this.initialize();
  }

}
