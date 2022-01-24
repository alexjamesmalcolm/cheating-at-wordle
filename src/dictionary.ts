import dictionaryData from "./dictionary.json";
import { memoize } from "lodash";

const notWords = ["MARLY", "DOWVE"];
export const dictionary: string[] = Object.keys(dictionaryData)
  .filter((word) => !notWords.includes(word))
  .filter((word) => !word.includes("-"));

export const getWordsOfNLength: (length: number) => string[] = memoize(
  (length) => dictionary.filter((word) => word.length === length)
);
