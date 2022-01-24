import { Result, Game, Color, getResultsOfGuess } from "./wordle";
import { getWordsOfNLength } from "./dictionary";
import { groupBy, last, reverse, sortBy, uniq } from "rambda";

export const getWordThatOnAverageEliminatesTheMostWordsOptimized = (
  wordLength: number,
  constraints: Constraint[],
  threshold: number
): string => {
  const possiblyCorrectWords = getAllWordsUsingConstraints(
    wordLength,
    constraints
  );
  console.log("possibly correct words", possiblyCorrectWords.length);
  const initialSplittingWords = getGoodSplittingWords(wordLength, constraints)
    .filter((word) => constraints.every((constraint) => constraint[0] !== word))
    .slice(0, 10);
  console.log("all possible guesses", initialSplittingWords.length);
  let isFound = false;
  const allPossibleGuessesWithAverageRemainingSubsequentWords: [
    string,
    number
  ][] = initialSplittingWords.map((guess, i) => {
    const rank = isFound
      ? initialSplittingWords.length
      : possiblyCorrectWords.reduce((accumulator, possiblyCorrectWord) => {
          const result = getResultsOfGuess(possiblyCorrectWord, guess);
          const updatedConstraints: Constraint[] = constraints.concat([
            [guess, result],
          ]);
          const remainingWords = getAllWordsUsingConstraints(
            wordLength,
            updatedConstraints
          );
          return accumulator + remainingWords.length;
        }, 0);
    console.log(
      initialSplittingWords.length,
      possiblyCorrectWords.length,
      i,
      guess,
      Math.round(rank)
    );
    if (rank / initialSplittingWords.length < threshold) {
      isFound = true;
    }
    return [guess, rank];
  });
  const allPossibleGuessesSortedByHowManyWordsTheyEliminateOnAverage = sortBy(
    ([, subsequentWordCount]) => {
      return subsequentWordCount;
    },
    allPossibleGuessesWithAverageRemainingSubsequentWords
  );
  const guessThatEliminatesMostWords =
    allPossibleGuessesSortedByHowManyWordsTheyEliminateOnAverage[0];
  if (!guessThatEliminatesMostWords) {
    throw new Error(`There are not correct answers`);
  }
  return guessThatEliminatesMostWords[0];
};

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

export const rankLettersByCount = (words: string[]): [string, number][] => {
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

export const rankWordsBy = (
  rankBy: (letter: string) => number,
  words: string[]
): string[] => {
  const gradeWord = (word: string): number => {
    const letters = uniq(word.split(""));
    return letters.reduce((total, letter) => {
      const letterRank = rankBy(letter);
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

export type Constraint = [string, Result];

export const doesWordFulfilConstraint = (
  word: string,
  constraint: Constraint
): boolean => {
  try {
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
  } catch (error) {
    console.log("There was an issue with doesWordFulfilConstraint", {
      word,
      constraint,
    });
    throw error;
  }
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

export const getLettersFromConstraintsOfColor = (
  constraints: Constraint[],
  color: Color
): string[] => {
  return constraints.reduce(
    (colorMatchingLetters: string[], constraint): string[] => {
      const newColorMatchingLetters = constraint[0]
        .split("")
        .filter((_letter, index) => {
          return constraint[1][index] === color;
        });
      return colorMatchingLetters.concat(newColorMatchingLetters);
    },
    []
  );
};

export const getGoodSplittingWords = (
  wordLength: number,
  constraints: Constraint[]
) => {
  const words = getAllWordsUsingConstraints(wordLength, constraints);
  const yellowLetters = getLettersFromConstraintsOfColor(constraints, "Yellow");
  const greenLetters = getLettersFromConstraintsOfColor(constraints, "Green");
  const grayLetters = getLettersFromConstraintsOfColor(constraints, "Gray");
  const lettersWithRanks = rankLettersByCount(words).filter(([letter]) => {
    if (yellowLetters.includes(letter)) return false;
    if (greenLetters.includes(letter)) return false;
    return true;
  });
  return rankWordsBy((letter) => {
    const letterRank = lettersWithRanks.find(([l]) => {
      return l === letter;
    });
    if (grayLetters.includes(letter)) return -1;
    if (!letterRank) {
      return 0;
    }
    return letterRank[1];
  }, getWordsOfNLength(wordLength));
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

// const getThreshold = (constraints: Constraint[]): number => {
//   if (constraints.length === 1) return 0.3;
//   if (constraints.length === 2) return 0.15;
//   if (constraints.length === 3) return 0.075;
//   if (constraints.length === 4) return 0.0375;
//   return 0;
//   // return Math.pow(constraints.length - 5, 2) / 50;
// };

const recursivelyCheatAtWordle = (
  game: Game,
  constraints: Constraint[],
  wordLength: number
): { constraints: Constraint[]; guesses: string[]; colors: Result[] } => {
  const lastConstraint = last(constraints);
  if (lastConstraint && lastConstraint[1].every((color) => color === "Green"))
    return {
      constraints,
      colors: constraints.map(([, colors]) => colors),
      guesses: constraints.map(([guess]) => guess),
    };
  const getNextGuess = (): string => {
    const validGuesses = getAllWordsUsingConstraints(wordLength, constraints);
    if (validGuesses.length <= 2) {
      const guess = validGuesses[0];
      if (!guess) throw new Error("No valid guesses");
      return guess;
    }
    const goodSplittingGuess =
      getWordThatOnAverageEliminatesTheMostWordsOptimized(
        wordLength,
        constraints,
        0
      );
    return goodSplittingGuess;
  };
  const guess = getNextGuess();
  if (!guess || guess.length !== wordLength)
    throw new Error("No valid guesses");
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
  colors: Result[];
}

export const cheatAtWordle = (game: Game, wordLength: number): GameResult => {
  const firstGuess = getWordWithAllUniqueCommonLetters(wordLength);
  const firstResult = game(firstGuess);

  const { guesses, colors } = recursivelyCheatAtWordle(
    game,
    [[firstGuess, firstResult]],
    wordLength
  );
  return {
    guesses,
    won: guesses.length <= 6,
    colors,
  };
};
