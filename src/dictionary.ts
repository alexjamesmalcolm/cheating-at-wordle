import dictionaryData from "./dictionary.json";

const notWords = ["MARLY", "DOWVE"];
export const dictionary: string[] = Object.keys(dictionaryData).filter(
  (word) => !notWords.includes(word)
);

export const getWordsOfNLength = (length: number): string[] =>
  dictionary.filter((word) => word.length === length);
