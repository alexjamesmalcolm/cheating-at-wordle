import { describe, it, expect } from "@jest/globals";
import {
  cheatAtWordle,
  doesWordFulfilConstraint,
  getAllWordsUsingConstraints,
} from "./cheating-at-wordle";
import { getWordsOfNLength } from "./dictionary";
// import { getWordsOfNLength } from "./dictionary";
import { playFixedWordle } from "./wordle";

describe("cheatAtWordle", () => {
  it("should guess WANGO", () => {
    const word = "WANGO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
  it("should guess TAPIR", () => {
    const word = "TAPIR";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
  it("should guess BIRCH", () => {
    const word = "BIRCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
  it("should guess LURCH", () => {
    const word = "LURCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
  it("should guess PORCH", () => {
    const word = "PORCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
  it("should guess POETRY", () => {
    const word = "POETRY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result.guesses).toMatchSnapshot();
  });
});

describe("doesWordFulfilConstraint", () => {
  it("should do something", () => {
    const result = doesWordFulfilConstraint("ZEQUIN", [
      "ZEQUIN",
      ["Gray", "Yellow", "Gray", "Gray", "Yellow", "Gray"],
    ]);
    expect(result).toBe(false);
  });
});

describe("Able to solve every 5 letter word", () => {
  // const fiveLetterWords = getWordsOfNLength(5);
  // const inRange = fiveLetterWords.slice(0, 50);
  // inRange.forEach((word) => {
  //   it(`should solve for ${word}`, () => {
  //     const game = playFixedWordle(word);
  //     const result = cheatAtWordle(game, word.length);
  //     expect(result.won).toBeTruthy();
  //   });
  // });
  it("should solve BERBE", () => {
    const word = "BERBE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result.guesses);
    expect(result.won).toBeTruthy();
  });
});

describe("getAllWordsUsingConstraints", () => {
  it("should find good word", () => {
    const words = getAllWordsUsingConstraints(5, [
      ["AROSE", ["Gray", "Gray", "Green", "Yellow", "Gray"]],
      ["SLOTH", ["Green", "Gray", "Green", "Gray", "Gray"]],
      ["SPOON", ["Green", "Yellow", "Green", "Green", "Gray"]],
    ]);
    console.log(words);
    // expect(words).toMatchSnapshot();
  });
  it("should have BLD in the word", () => {
    const words = getWordsOfNLength(5);
    const goodLetters = ["B", "L", "D"];
    const wordsWithCorrectLetters = words.filter((word) =>
      goodLetters.every((goodLetter) => word.includes(goodLetter))
    );
    console.log("words with letters", wordsWithCorrectLetters);
  });
});
