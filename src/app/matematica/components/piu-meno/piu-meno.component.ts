import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piu-meno',
  templateUrl: './piu-meno.component.html',
  styleUrls: ['./piu-meno.component.scss']
})
export class PiuMenoComponent implements OnInit {

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
    this.valueOne = Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000;
    switch (Math.round(Math.random())) {
      case 0:
        this.operator = '+';
        this.valueTwo = Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000;
        this.correctAnswer = this.valueOne + this.valueTwo;
        break;
      case 1:
        this.operator = '-';
        this.valueTwo = Math.floor(Math.random() * (this.valueOne - 1000 + 1) ) + 1000;
        this.correctAnswer = Math.round((this.valueOne - this.valueTwo) * 10) / 10;
        break;
      default:
        this.operator = '+';
        console.error('There was an error generating operator, using default operator +');
        this.valueTwo = Math.floor(Math.random() * (10000 - 1000 + 1) ) + 1000;
        this.correctAnswer = this.valueOne + this.valueTwo;
        break;
    }

    console.log('valueOne ', this.valueOne);
    console.log('operator ', this.operator);
    console.log('valueTwo ', this.valueTwo);
    console.log('correctResult ', this.correctAnswer);
  }

  generateAnswers(): void {
    this.answers = [];
    this.answers.push(this.correctAnswer);
    for (let i = 0; i < 3; i++) {
      const val = Math.floor(Math.random() * (20000) );
      if (val !== this.correctAnswer) {
        this.answers.push(val);
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
