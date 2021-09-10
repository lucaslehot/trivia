import { Board } from './Board';

export class Player {
  public name: string;
  public score: number;
  public currentCellIndex: number;
  public inPenaltyBox: boolean;
  private board: Board;

  constructor(name, board: Board) {
    this.name = name;
    this.score = 0;
    this.currentCellIndex = 0;
    this.inPenaltyBox = false;
    this.board = board;
  }

  public giveRightAnswer() {
    this.score += 1;
    console.log("Answer was correct!!!!");
    console.log(this.name + " now has " + this.score + " Gold Coins.");
  }

  public giveWrongAnswer() {
    console.log("Question was incorrectly answered");
    console.log(this.name + " was sent to the penalty box");
    this.inPenaltyBox = true;
  }

  public roll(roll) {
    console.log(this.name + " is the current player");
    console.log("They have rolled a " + roll);

    if (this.inPenaltyBox && roll % 2 == 0) {
      console.log(this.name + " is not getting out of the penalty box")
    } else {
      if (this.inPenaltyBox) console.log(this.name + " is getting out of the penalty box")

      this.currentCellIndex = this.board.movePlayer(this.currentCellIndex, roll);
      console.log(this.name + "'s new location is " + this.currentCellIndex);
      this.board.currentCell.logStatus();
    }
  }
}