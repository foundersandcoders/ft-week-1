import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import selectRoutes from "./api/selectRoutes";
import patchRoutes from "./api/patchRoutes";

const PORT = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/questions/", selectRoutes);
app.use("/api/questions/", patchRoutes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
