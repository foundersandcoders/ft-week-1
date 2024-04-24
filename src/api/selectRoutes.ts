import express, { Request, Response } from "express";
import readJsonFile from "../utils/readJsonFIle";
import { DataType, QuestionType } from "./types/apiTypes";

const router = express.Router();

const shuffleArray = (arr: QuestionType[]) => {
  return arr.sort(() => Math.random() - 0.5);
};

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Returns 5 random question or number specified in the count value of query string
// i.e. /api/random?count=10

router.get("/random", async (req: Request, res: Response) => {
  try {
    const data: DataType = await readJsonFile();
    const shuffledQs: QuestionType[] = shuffleArray(data.questions);

    const count: number =
      typeof req.query.count === "string" ? parseInt(req.query.count, 10) : 5;
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({
        error:
          "Invalid count query parameter. Please provide a positive integer.",
      });
    }

    res.json(shuffledQs.slice(0, count));
  } catch (error: unknown) {
    console.error("Error with route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Returns questions based on catergory and count
// /api/category?category='music'&count=3

router.get("/category", async (req: Request, res: Response) => {
  const VALID_CATEGORIES: string[] = [
    "Science",
    "Geography",
    "History",
    "Mathematics",
    "Pop Culture",
    "Music",
    "Literature",
  ];

  try {
    const data: DataType = await readJsonFile();
    const shuffledQs: QuestionType[] = shuffleArray(data.questions);

    const count: number =
      typeof req.query.count === "string" ? parseInt(req.query.count, 10) : 5;
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({
        error:
          "Invalid count query parameter. Please provide a positive integer.",
      });
    }

    const catergoryQueryParam: string =
      typeof req.query.category === "string" ? req.query.category : "";

    const category = capitalizeFirstLetter(catergoryQueryParam);

    if (!VALID_CATEGORIES.includes(category)) {
      return res.status(400).json({
        error:
          "Invalid category query parameter. Please provide a valid category.",
      });
    }

    const sortedByCategoryQs = shuffledQs.filter(
      (question: QuestionType) => question.category === category,
    );

    res.json(sortedByCategoryQs.slice(0, count));
  } catch (error: unknown) {
    console.error("Error with route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Returns questions based on difficulty and count
// /api/category?difficulty=easy&count=3

router.get("/difficulty", async (req: Request, res: Response) => {
  const VALID_Difficulty: string[] = ["easy", "medium", "hard"];

  try {
    const data: DataType = await readJsonFile();
    const shuffledQs: QuestionType[] = shuffleArray(data.questions);

    const count: number =
      typeof req.query.count === "string" ? parseInt(req.query.count, 10) : 5;
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({
        error:
          "Invalid count query parameter. Please provide a positive integer.",
      });
    }

    const difficulty: string =
      typeof req.query.difficulty === "string"
        ? req.query.difficulty.toLowerCase()
        : "";

    if (!VALID_Difficulty.includes(difficulty)) {
      return res.status(400).json({
        error:
          "Invalid difficulty query parameter. Please provide a valid difficulty.",
      });
    }

    const sortedByDifficulty = shuffledQs.filter(
      (question: QuestionType) => question.difficulty === difficulty,
    );

    res.json(sortedByDifficulty.slice(0, count));
  } catch (error: unknown) {
    console.error("Error with route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
