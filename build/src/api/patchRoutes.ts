import express, { Request, Response } from "express";
import toggleFavourite from "../utils/toggleFavourtie";

const router = express.Router();

// Toggles favourite value for question based on id
// i.e /api/questions/1/favourite 

router.patch(
  "/questions/:id/favourite",
  async (req: Request, res: Response) => {
    try {
      const questionId = parseInt(req.params.id, 10);
      await toggleFavourite(questionId);
      res.status(200).json({ message: "Question favourite status toggled" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
);

export default router;
