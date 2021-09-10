import { Board } from './Board';
import { Player } from './Player';

export class Game {
  private players: Array<Player> = [];
  private currentPlayer: number = 0;
  private board: Board;

  constructor() {
    // console.log("Game has started");
    this.board = new Board();
  }

  public didPlayerWin() {
    return this.players[this.currentPlayer].score === 6;
  }

  public add(name: string): void {
    this.players.push(new Player(name, this.board));
    console.log(name + " was added");
    console.log("They are player number " + this.players.length);
  }

  public roll(roll): void {
    this.players[this.currentPlayer].roll(roll);
  }

  public wasCorrectlyAnswered(): void {
    this.players[this.currentPlayer].giveRightAnswer();
    this.setNextPlayer();
  }

  public wrongAnswer(): void {
    this.players[this.currentPlayer].giveWrongAnswer();
    this.setNextPlayer();
  }

  private setNextPlayer(): void {
    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
  }
}