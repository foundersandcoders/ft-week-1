export type QuestionType = {
  id: 1;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: string[];
  answer: string;
  favourited: boolean;
  timestamp: string;
};

export type DataType = {
  questions: QuestionType[];
};
