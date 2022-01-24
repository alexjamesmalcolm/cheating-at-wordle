import { getWordsOfNLength } from "./dictionary";
import { getRandomElementFromList } from "./getRandomElementFromList";

export type Color = "Yellow" | "Green" | "Gray";
export type Result = Color[];

export type Game = (guess: string) => Result;

export const getResultsOfGuess = (correctWord: string, guess: string): Result =>
  guess
    .split("")
    .map((letter) => letter.toUpperCase())
    .map((letter, index): Color => {
      const correctLetter = correctWord.charAt(index);
      if (letter === correctLetter) return "Green";
      if (correctWord.includes(letter)) return "Yellow";
      return "Gray";
    });

export const playWordle = (wordLength: number): Game => {
  const correctWord: string = getRandomElementFromList(
    getWordsOfNLength(wordLength)
  );
  console.log("correct word", correctWord);
  return playFixedWordle(correctWord);
};

export const playFixedWordle = (correctWord: string): Game => {
  const game: Game = (guess) => {
    return getResultsOfGuess(correctWord, guess);
  };
  return game;
};
