import express, { Request, Response } from "express";
import readJsonFile from "../utils/readJsonFIle";
import { DataType, QuestionType } from "./types/apiTypes";

const router = express.Router();

// Returns 5 random question or number specified in the count value of query string
// i.e. /api/random?count=10

router.get("/random", async (req: Request, res: Response) => {
  try {
    const data: DataType = await readJsonFile();
    const shuffledQs: QuestionType[] = data.questions.sort(
      () => Math.random() - 0.5,
    );

    const count: number =
      typeof req.query.count === "string" ? parseInt(req.query.count, 10) : 5;
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({
        error:
          "Invalid count query parameter. Please provide a positive integer.",
      });
    }

    const slicedQs: QuestionType[] = shuffledQs.slice(0, count);
    res.json(slicedQs);
  } catch (error: unknown) {
    console.error("Error with route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
