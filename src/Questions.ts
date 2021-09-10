export class Questions {
  private popQuestions: Array<string> = [];
  private scienceQuestions: Array<string> = [];
  private sportsQuestions: Array<string> = [];
  private rockQuestions: Array<string> = [];
  private popQuestionsIndex: number = 0;
  private scienceQuestionsIndex: number = 0;
  private sportsQuestionsIndex: number = 0;
  private rockQuestionsIndex: number = 0;

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.popQuestions.push("Pop Question " + i);
      this.scienceQuestions.push("Science Question " + i);
      this.sportsQuestions.push("Sports Question " + i);
      this.rockQuestions.push("Rock Question " + i);
    }
  }

  public getQuestion(Category: string) {
    let question;
    switch (Category) {
      case "Pop":
        question = this.popQuestions[this.popQuestionsIndex];
        this.popQuestionsIndex += 1;
        return question;
      case "Science":
        question = this.scienceQuestions[this.scienceQuestionsIndex];
        this.scienceQuestionsIndex += 1;
        return question;
      case "Sports":
        question = this.sportsQuestions[this.sportsQuestionsIndex];
        this.sportsQuestionsIndex += 1;
        return question;
      case "Rock":
        question = this.rockQuestions[this.rockQuestionsIndex];
        this.rockQuestionsIndex += 1;
        return question;
    }
  }
}