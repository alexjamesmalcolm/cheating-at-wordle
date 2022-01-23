export const getRandomElementFromList = <T extends unknown>(list: T[]): T => {
  return list[Math.floor(Math.random() * list.length)] as T;
};
