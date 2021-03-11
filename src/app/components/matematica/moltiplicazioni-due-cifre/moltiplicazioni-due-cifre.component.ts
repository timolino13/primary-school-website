import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-moltiplicazioni-due-cifre',
  templateUrl: './moltiplicazioni-due-cifre.component.html',
  styleUrls: ['./moltiplicazioni-due-cifre.component.scss']
})
export class MoltiplicazioniDueCifreComponent implements OnInit {

  valueOne = 0;
  valueTwo = 0;
  result = null;
  correctResult = 0;
  answered = false;
  answeredCorrectly = false;

  constructor() {
  }

  ngOnInit(): void {
    this.generateMultiplication();
  }

  generateMultiplication(): void {
    this.valueOne = Math.round(Math.random() * (100 - 10) + 10);
    this.valueTwo = Math.round(Math.random() * (100 - 10) + 10);
    this.correctResult = this.valueOne * this.valueTwo;
  }

  verifyAnswer(): void {
    this.answeredCorrectly = this.result === this.correctResult;
    this.answered = true;
  }

  next(): void {
    this.generateMultiplication();
    this.result = null;
    this.answered = false;
    this.answeredCorrectly = false;
  }
}
