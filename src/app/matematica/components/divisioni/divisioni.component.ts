import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-divisioni',
    templateUrl: './divisioni.component.html',
    styleUrls: ['./divisioni.component.scss']
})
export class DivisioniComponent implements OnInit {

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

    private generateCalculation(): void {
        const divisor = Math.ceil(Math.random() * 10) + 1;
        const multiple = Math.ceil(Math.random() * 9) + 1;
        this.valueOne = multiple * divisor;
        this.valueTwo = divisor;

        this.correctAnswer = this.valueOne / this.valueTwo;
    }

    private generateAnswers(): void {
        this.answers = [];
        this.answers.push(this.correctAnswer);
        for (let i = 0; i < 3; i++) {
            const val = Math.round(Math.random() * (9)) + 1;
            if (this.answers.indexOf(val) === -1) {
                this.answers.push(val);
            } else {
                i--;
            }
        }
    }

    private shuffleArray(): void {
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
        this.selectedAnswer = 0;
    }
}
