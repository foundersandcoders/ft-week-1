import { readFile, writeFile } from "fs/promises";
import path from "path";
import { DataType, QuestionType } from "../types/apiTypes";
import readJsonFile from "./readJsonFIle";

async function toggleFavourite(questionId: number): Promise<void> {
  const dataFilePath = path.join(__dirname, "..", "..", "data.json");

  try {
    const data: DataType = await readJsonFile();

    const question = data.questions.find((q: QuestionType) => q.id === questionId);
    if (question) {
      question.favourited = !question.favourited;
    } else {
      throw new Error("Question not found");
    }

    const updatedJson = JSON.stringify(data, null, 2);

    await writeFile(dataFilePath, updatedJson, "utf8");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default toggleFavourite
