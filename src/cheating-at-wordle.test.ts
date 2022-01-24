import { describe, it, expect } from "@jest/globals";
import {
  cheatAtWordle,
  Constraint,
  doesWordFulfilConstraint,
  getAllWordsUsingConstraints,
  getGoodSplittingWords,
} from "./cheating-at-wordle";
import { getWordsOfNLength } from "./dictionary";
import { playFixedWordle } from "./wordle";

describe("cheatAtWordle", () => {
  it("should guess WANGO", () => {
    const word = "WANGO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
  });
  it("should guess TAPIR", () => {
    const word = "TAPIR";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
  });
  it("should guess BIRCH", () => {
    const word = "BIRCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
  });
  it("should guess LURCH", () => {
    const word = "LURCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
  });
  it("should guess PORCH", () => {
    const word = "PORCH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
  });
  it("should guess POETRY", () => {
    const word = "POETRY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    console.log(result);
    expect(result).toMatchSnapshot();
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
  // const inRange = fiveLetterWords.slice(0, 400);
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
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve EAGER", () => {
    const word = "EAGER";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MAMMA", () => {
    const word = "MAMMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TATTA", () => {
    const word = "TATTA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve UNNUN", () => {
    const word = "UNNUN";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ARARA", () => {
    const word = "ARARA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve YAMMA", () => {
    const word = "YAMMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve METTE", () => {
    const word = "METTE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve HENEN", () => {
    const word = "HENEN";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve KEEVE", () => {
    const word = "KEEVE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MADAM", () => {
    const word = "MADAM";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ECCLE", () => {
    const word = "ECCLE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SPISS", () => {
    const word = "SPISS";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BESEE", () => {
    const word = "BESEE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SETEE", () => {
    const word = "SETEE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ALGAL", () => {
    const word = "ALGAL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SARSA", () => {
    const word = "SARSA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve LEERE", () => {
    const word = "LEERE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SASSE", () => {
    const word = "SASSE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ARRHA", () => {
    const word = "ARRHA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve DERRE", () => {
    const word = "DERRE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ILIAL", () => {
    const word = "ILIAL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve INION", () => {
    const word = "INION";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve COCOA", () => {
    const word = "COCOA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve PAPPY", () => {
    const word = "PAPPY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve PALLA", () => {
    const word = "PALLA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve FEMME", () => {
    const word = "FEMME";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve REEVE", () => {
    const word = "REEVE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SWISS", () => {
    const word = "SWISS";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TUTTI", () => {
    const word = "TUTTI";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve POTTO", () => {
    const word = "POTTO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve GESSE", () => {
    const word = "GESSE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve DEESS", () => {
    const word = "DEESS";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve NANNY", () => {
    const word = "NANNY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve FLUFF", () => {
    const word = "FLUFF";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SLYLY", () => {
    const word = "SLYLY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BUBBY", () => {
    const word = "BUBBY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve REDDE", () => {
    const word = "REDDE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve KAYAK", () => {
    const word = "KAYAK";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TOOTH", () => {
    const word = "TOOTH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ROTOR", () => {
    const word = "ROTOR";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve DEEDY", () => {
    const word = "DEEDY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve URUBU", () => {
    const word = "URUBU";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TETEL", () => {
    const word = "TETEL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MAMMY", () => {
    const word = "MAMMY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BELLE", () => {
    const word = "BELLE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve NINNY", () => {
    const word = "NINNY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TOSTO", () => {
    const word = "TOSTO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BATTA", () => {
    const word = "BATTA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MIMIC", () => {
    const word = "MIMIC";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ONION", () => {
    const word = "ONION";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MORMO", () => {
    const word = "MORMO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TEETH", () => {
    const word = "TEETH";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BENNE", () => {
    const word = "BENNE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve FEESE", () => {
    const word = "FEESE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve HOCCO", () => {
    const word = "HOCCO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CACAO", () => {
    const word = "CACAO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TEPEE", () => {
    const word = "TEPEE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve EDDER", () => {
    const word = "EDDER";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve LOTTO", () => {
    const word = "LOTTO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve AGAMA", () => {
    const word = "AGAMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ELEVE", () => {
    const word = "ELEVE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve DADDY", () => {
    const word = "DADDY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CAECA", () => {
    const word = "CAECA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MOMOT", () => {
    const word = "MOMOT";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve NASSA", () => {
    const word = "NASSA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MALMA", () => {
    const word = "MALMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve SENSE", () => {
    const word = "SENSE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve DETTE", () => {
    const word = "DETTE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve PUPPY", () => {
    const word = "PUPPY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve POTOO", () => {
    const word = "POTOO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TATTY", () => {
    const word = "TATTY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve EFFET", () => {
    const word = "EFFET";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve NEVEN", () => {
    const word = "NEVEN";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ALLYL", () => {
    const word = "ALLYL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CAADA", () => {
    const word = "CAADA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve LLAMA", () => {
    const word = "LLAMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MANNA", () => {
    const word = "MANNA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CARAC", () => {
    const word = "CARAC";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve XYLYL", () => {
    const word = "XYLYL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve GAMMA", () => {
    const word = "GAMMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MINIM", () => {
    const word = "MINIM";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve LEEME", () => {
    const word = "LEEME";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TERET", () => {
    const word = "TERET";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TENNE", () => {
    const word = "TENNE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve UPUPA", () => {
    const word = "UPUPA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ALLOO", () => {
    const word = "ALLOO";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ASSAY", () => {
    const word = "ASSAY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve TUTTY", () => {
    const word = "TUTTY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ETTLE", () => {
    const word = "ETTLE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve NONNE", () => {
    const word = "NONNE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve RETTE", () => {
    const word = "RETTE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CALLA", () => {
    const word = "CALLA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BELEE", () => {
    const word = "BELEE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve LEVEL", () => {
    const word = "LEVEL";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve ETWEE", () => {
    const word = "ETWEE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve CIRRI", () => {
    const word = "CIRRI";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve BEEVE", () => {
    const word = "BEEVE";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MUMMY", () => {
    const word = "MUMMY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve MAGMA", () => {
    const word = "MAGMA";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
  it("should solve APPAY", () => {
    const word = "APPAY";
    const game = playFixedWordle(word);
    const result = cheatAtWordle(game, word.length);
    expect(result.won).toBeTruthy();
    expect(result).toMatchSnapshot();
  });
});

describe("getAllWordsUsingConstraints", () => {
  it("should find good word", () => {
    const wordLength = 5;
    ("EAGER");
    const constraints: Constraint[] = [
      ["AROSE", ["Yellow", "Yellow", "Gray", "Gray", "Yellow"]],
      ["CETYL", ["Gray", "Yellow", "Gray", "Gray", "Gray"]],
      ["DWANG", ["Gray", "Gray", "Yellow", "Gray", "Yellow"]],
      ["ZAMIA", ["Gray", "Green", "Gray", "Gray", "Yellow"]],
    ];
    const words = getAllWordsUsingConstraints(wordLength, constraints);
    const goodSplittingWords = getGoodSplittingWords(wordLength, constraints);
    console.log("words", words);
    console.log("good splitting words", goodSplittingWords);
  });
  it("should have BLD in the word", () => {
    const words = getWordsOfNLength(5);
    const goodLetters = [""];
    const wordsWithCorrectLetters = words.filter((word) =>
      goodLetters.every((goodLetter) => word.includes(goodLetter))
    );
    console.log("words with letters", wordsWithCorrectLetters);
  });
});
