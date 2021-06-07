import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moltiplicazioni-virgola',
  templateUrl: './moltiplicazioni-virgola.component.html',
  styleUrls: ['./moltiplicazioni-virgola.component.scss']
})
export class MoltiplicazioniVirgolaComponent implements OnInit {

  valueOne = 0;
  valueTwo = 0;
  operator = '';
  correctAnswer = 0;
  answers: number[] = [];
  selectedAnswer = 0;
  answered = false;
  answeredCorrectly = false;

  constructor() {
  }

  ngOnInit(): void {
    this.next();
  }

  generateCalculation(): void {
    this.valueOne = Math.round((Math.random() * (10)) * 10) / 10;
    this.operator = 'x';
    this.valueTwo = Math.round((Math.random() * (10)) * 10) / 10;
    this.correctAnswer = Math.round((this.valueOne * this.valueTwo) * 100) / 100;

    console.log('valueOne ', this.valueOne);
    console.log('operator ', this.operator);
    console.log('valueTwo ', this.valueTwo);
    console.log('correctResult ', this.correctAnswer);
  }

  generateAnswers(): void {
    this.answers = [];
    this.answers.push(this.correctAnswer);
    for (let i = 0; i < 3; i++) {
      const val = Math.round(Math.random() * (100) + 100) / 10;
      if (val !== this.correctAnswer) {
        this.answers.push(val);
        console.log(val);
      } else {
        i--;
      }
    }
  }

  shuffleArray(): void {
    for (let i = this.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.answers[i];
      this.answers[i] = this.answers[j];
      this.answers[j] = temp;
    }
  }

  verifyAnswer(answer: number): void {
    this.answeredCorrectly = answer === this.correctAnswer;
    console.log(this.answeredCorrectly);
    this.selectedAnswer = answer;
    this.answered = true;
  }

  next(): void {
    this.generateCalculation();
    this.generateAnswers();
    this.shuffleArray();
    this.answered = false;
    this.answeredCorrectly = false;
  }

}
