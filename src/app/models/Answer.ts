export class Answer<T> {

  registered = false;
  correct = false;
  input: T;

  constructor(registered: boolean, correct: boolean, answer: T) {
    this.registered = registered;
    this.correct = correct;
    this.input = answer;
  }

}
