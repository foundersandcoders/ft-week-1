import { promises as fs } from "fs";
import path from "path";
import { DataType } from "../types/apiTypes";

const readJsonFile = async (): Promise<DataType> => {
  try {
    const dataFilePath = path.join(__dirname, "..", "..", "data.json");
    const data = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error: any) {
    console.error("Error reading file:", error.message);
    throw error;
  }
};

export default readJsonFile;
