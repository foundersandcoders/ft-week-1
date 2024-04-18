import fs from "fs";
import express from "express";

const router = express.Router();

router.get("/", (req: any, res: { end: (arg0: any) => void }) => {
  try {
    fs.readFile(
      __dirname + "/" + "data.json",
      "utf8",
      (err: any, data: any) => {
        res.end(data);
      },
    );
  } catch (error: any) {
    console.error("Error with route:", error.message);
    throw error;
  }
});

module.exports = router;
