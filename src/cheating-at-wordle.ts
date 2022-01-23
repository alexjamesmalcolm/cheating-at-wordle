import { Result, Game } from "./wordle";
import { getWordsOfNLength } from "./dictionary";
import { groupBy, last, reverse, sortBy, uniq } from "rambda";

export const getWordWithAllUniqueLetters = (wordLength: number): string => {
  const words = getWordsOfNLength(wordLength);
  const word = words.find(
    (word) => uniq(word.split("")).length === word.length
  );
  if (!word)
    throw new Error(
      `Could not find a word of length ${wordLength} with all unique characters`
    );
  return word;
};

const rankLettersByCount = (words: string[]): [string, number][] => {
  const letters = words.flatMap((word) => word.split("")).sort();
  return Object.entries(
    groupBy((letter) => {
      return letter;
    }, letters)
  ).map((entry): [string, number] => {
    return [entry[0], entry[1].length];
  });
};

const rankWords = (words: string[]): string[] => {
  const letterRanks = Object.fromEntries(rankLettersByCount(words));
  const gradeWord = (word: string): number => {
    const letters = uniq(word.split(""));
    return letters.reduce((total, letter) => {
      const letterRank = letterRanks[letter] || 0;
      return total + letterRank;
    }, 0);
  };
  const wordsSortedByGrade = reverse(sortBy(gradeWord, words));
  return wordsSortedByGrade;
};

export const getWordWithAllUniqueCommonLetters = (
  wordLength: number
): string => {
  const words = getWordsOfNLength(wordLength);
  const wordsWithUniqueLetters = words.filter(
    (word) => uniq(word.split("")).length === word.length
  );
  const word = rankWords(wordsWithUniqueLetters)[0];
  if (!word)
    throw new Error(
      `Could not find a word of length ${wordLength} with all unique characters`
    );
  return word;
};

type Constraint = [string, Result];

export const doesWordFulfilConstraint = (
  word: string,
  constraint: Constraint
): boolean => {
  const alreadyGuessed = constraint[0];
  if (word === alreadyGuessed) return false;
  return constraint[1].every((color, index): boolean => {
    const alreadyGuessedLetter = alreadyGuessed.charAt(index);
    if (color === "Gray") {
      return !word.includes(alreadyGuessedLetter);
    } else if (color === "Yellow") {
      if (!word.includes(alreadyGuessedLetter)) return false;
      const letter = word.charAt(index);
      return letter !== alreadyGuessedLetter;
    } else {
      if (!word.includes(alreadyGuessedLetter)) return false;
      const letter = word.charAt(index);
      return letter === alreadyGuessedLetter;
    }
  });
};

export const getAllWordsUsingConstraints = (
  wordLength: number,
  constraints: Constraint[]
): string[] => {
  const words = getWordsOfNLength(wordLength);
  const wordsThatMeetConstraints = words.filter((word) =>
    constraints.every((constraint) =>
      doesWordFulfilConstraint(word, constraint)
    )
  );
  const wordsRanked = rankWords(wordsThatMeetConstraints);
  return wordsRanked;
};

export const getWordUsingConstraints = (
  wordLength: number,
  constraints: Constraint[]
): string => {
  const words = getAllWordsUsingConstraints(wordLength, constraints);
  const word = words[0];
  if (!word) throw new Error("No good word found lol");
  return word;
};

const recursivelyCheatAtWordle = (
  game: Game,
  constraints: Constraint[],
  wordLength: number
): string[] => {
  const lastConstraint = last(constraints);
  if (lastConstraint && lastConstraint[1].every((color) => color === "Green"))
    return constraints.map(([guess]) => guess);
  const guess = getWordUsingConstraints(wordLength, constraints);
  console.log("guess", guess);
  const result = game(guess);
  console.log("result", result);
  return recursivelyCheatAtWordle(
    game,
    [...constraints, [guess, result]],
    wordLength
  );
};

interface GameResult {
  guesses: string[];
  won: boolean;
}

export const cheatAtWordle = (game: Game, wordLength: number): GameResult => {
  const firstGuess = getWordWithAllUniqueCommonLetters(wordLength);
  const firstResult = game(firstGuess);

  const guesses = recursivelyCheatAtWordle(
    game,
    [[firstGuess, firstResult]],
    wordLength
  );
  return {
    guesses,
    won: guesses.length <= 6,
  };
};
