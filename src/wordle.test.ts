import { describe, it, expect } from "@jest/globals";
import { getResultsOfGuess } from "./wordle";

describe("getResultsOfGuess", () => {
  it("should get all green", () => {
    const correctWord = "STRING";
    const guess = "STRING";
    const expected: ReturnType<typeof getResultsOfGuess> = [
      "Green",
      "Green",
      "Green",
      "Green",
      "Green",
      "Green",
    ];
    const results = getResultsOfGuess(correctWord, guess);

    expect(results).toStrictEqual(expected);
  });
  it("should get all green except first 2 letters should be gray", () => {
    const correctWord = "STRING";
    const guess = "BORING";
    const expected: ReturnType<typeof getResultsOfGuess> = [
      "Gray",
      "Gray",
      "Green",
      "Green",
      "Green",
      "Green",
    ];
    const results = getResultsOfGuess(correctWord, guess);

    expect(results).toStrictEqual(expected);
  });
  it("should get all yellow except last letter which should be gray", () => {
    const correctWord = "STRING";
    const guess = "GRINGO";
    const expected: ReturnType<typeof getResultsOfGuess> = [
      "Yellow",
      "Yellow",
      "Yellow",
      "Yellow",
      "Yellow",
      "Gray",
    ];
    const results = getResultsOfGuess(correctWord, guess);

    expect(results).toStrictEqual(expected);
  });
});
