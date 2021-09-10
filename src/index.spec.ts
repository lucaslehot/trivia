import * as fs from "fs";
import { Game } from ".";

const ROOT_PATH = "./src/logs";

function generateFilePaths(testIndex: number) {
  return {
    master: `${ROOT_PATH}/master_${testIndex}.txt`,
    actual: `${ROOT_PATH}/actual_${testIndex}.txt`,
  };
}

function redirectLogsToFile(path: string): void {
  console.log = function (text: string): void {
    fs.appendFileSync(
      path,
      `${text}`
    );
  };
}

function eraseFile(path: string): void {
  fs.writeFileSync(path, "");
}

function runGoldenMaster(testIndex: number, scenario: () => void): void {
  const { master, actual } = generateFilePaths(testIndex);

  function createMaster(): void {
    redirectLogsToFile(master);
    scenario();
  }

  function compareActualToMaster(): void {
    eraseFile(actual);
    redirectLogsToFile(actual);
    scenario();
    expect(fs.readFileSync(actual)).toEqual(fs.readFileSync(master));
  }

  if (!fs.existsSync(master)) {
    createMaster();
  } else {
    compareActualToMaster();
  }
}

it("Scenario #0", function () {
  runGoldenMaster(0, function () {
    const game = new Game();
    game.add("Anna");
    game.add("Thomas");
    game.add("Pauline");
    game.roll(3);
    game.wasCorrectlyAnswered();
  });
});

it("Scenario #1", function () {
  runGoldenMaster(1, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.add("Sebastian");
    game.roll(1);
    game.wrongAnswer();
  });
});

it("won't leave prison if rolled odd", function () {
  runGoldenMaster(2, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
  });
});

it("leaves prison if rolled even", function () {
  runGoldenMaster(3, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
  });
});

it("wins the game when scored 6 points", function () {
  runGoldenMaster(4, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    for (let i = 0; i < 12; i++) {
      game.roll(1);
      game.wasCorrectlyAnswered();
    }
    console.log(game.didPlayerWin());
  });
});

it("gets a pop question", function () {
  runGoldenMaster(5, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(4);
  });
});

it("gets a science question", function () {
  runGoldenMaster(6, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(5);
  });
});

it("gets a sport question", function () {
  runGoldenMaster(7, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(6);
  });
});

it("gets a rock question", function () {
  runGoldenMaster(8, function () {
    const game = new Game();
    game.add("Chloe");
    game.add("Omar");
    game.roll(11);
  });
});