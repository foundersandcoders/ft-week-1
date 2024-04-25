import { QuestionType } from "../types/apiTypes";

export const shuffleArray = (arr: QuestionType[]) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
