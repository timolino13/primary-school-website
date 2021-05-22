import {Component, OnInit} from '@angular/core';
import {NumberPair} from '../../../models/NumberPair';
import {Answer} from '../../../models/Answer';
import {mathRandom} from '../../../models/Random';

@Component({
  selector: 'app-misure-lunghezza',
  templateUrl: './misure-lunghezza.component.html',
  styleUrls: ['./misure-lunghezza.component.scss']
})
export class MisureLunghezzaComponent implements OnInit {

  declare unit: string;
  declare secondUnit: string;
  declare questionAndAnswer: NumberPair;
  declare answers: Answer<number>[];

  units: string[] = ['km', 'm', 'dm', 'cm', 'mm'];

  constructor() {
    this.newGame();
  }

  newGame(): void {
    this.initializeMeasureUnits();
    this.initializeMeasures();
    this.createAnswers();
  }

  private initializeMeasureUnits(): void {
    const index = mathRandom(Math.round, 0, this.units.length - 1);

    this.unit = this.units[index];
    this.units.splice(index, 1);

    const index2 = mathRandom(Math.round, 0, this.units.length - 1);
    this.secondUnit = this.units[index2];
    this.units.splice(index, 0, this.unit);
  }

  private initializeMeasures(): void {
    const measure = mathRandom(Math.round, 1, 100);

    this.questionAndAnswer = new NumberPair(1, 1);
    this.questionAndAnswer.first = measure;

    const index1 = this.units.indexOf(this.unit);
    const index2 = this.units.indexOf(this.secondUnit);

    // questa condizione per via dei chilometri che distano di più dalle altre unità
    const weight1 = index1 === 0 ? -2 : index1;
    // questa condizione per via dei chilometri che distano di più dalle altre unità
    const weight2 = index2 === 0 ? -2 : index2;

    const diff = weight2 - weight1;
    const conversionRatio = Math.pow(10, diff);

    this.questionAndAnswer.second = measure * conversionRatio;
  }

  createAnswers(): void {
    this.answers = [];
    for (let i = 0; i < 3; i++) {
      const isGreaterThanZero = mathRandom(Math.round, 0, 1) === 0;
      const falseMultiplier = isGreaterThanZero ? mathRandom(Math.round, 1, 3) : -mathRandom(Math.round, 1, 3);
      const falseAnswer = this.questionAndAnswer.second * Math.pow(10, falseMultiplier);
      this.answers.push(new Answer(false, false, parseFloat(falseAnswer.toFixed(6))));
    }
    this.answers.push(new Answer(false, true, parseFloat(this.questionAndAnswer.second.toFixed(6))));
  }

  ngOnInit(): void {
  }

}
