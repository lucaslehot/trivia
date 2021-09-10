import { Cell } from './Cell';
import { Questions } from './Questions';

export class Board {
  public cellsCount = 12;
  public questions = new Questions();
  public currentCell: Cell;

  public movePlayer(currentCellIndex: number, roll: number): number {
    currentCellIndex = (currentCellIndex + roll) % this.cellsCount;

    this.currentCell = new Cell(currentCellIndex, this.questions)

    return currentCellIndex;
  }
}