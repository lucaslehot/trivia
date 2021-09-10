import { Questions } from './Questions';
export class Cell {
  public question: string;
  public category: string;

  constructor(cell: number, questions: Questions) {
    this.category =
      cell % 4 === 0 ? "Pop" :
        cell % 4 === 1 ? "Science" :
          cell % 4 === 2 ? "Sports" :
            "Rock";
    this.question = questions.getQuestion(this.category);
  }

  public logStatus() {
    console.log("The category is " + this.category);
    console.log(this.question);
  }
}