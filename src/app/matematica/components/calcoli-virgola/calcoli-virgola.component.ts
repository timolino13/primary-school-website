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
        this.valueOne = Math.round((Math.random() * (100 - 1) + 1) * 10) / 10;
        switch (Math.round(Math.random())) {
            case 0:
                this.operator = '+';
                this.valueTwo = Math.round((Math.random() * (100)) * 10) / 10;
                this.correctAnswer = Math.round((this.valueOne + this.valueTwo) * 10) / 10;
                break;
            case 1:
                this.operator = '-';
                this.valueTwo = Math.round((Math.random() * (this.valueOne)) * 10) / 10;
                this.correctAnswer = Math.round((this.valueOne - this.valueTwo) * 10) / 10;
                break;
            default:
                this.operator = '+';
                console.error('There was an error generating operator, using default operator +');
                this.valueTwo = Math.round((Math.random() * (100)) * 10) / 10;
                this.correctAnswer = Math.round((this.valueOne + this.valueTwo) * 10) / 10;
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
            const val = Math.round((Math.random() * (200)) * 10) / 10;
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
