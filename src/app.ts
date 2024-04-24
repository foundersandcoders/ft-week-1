import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import selectRoutes from "./api/selectRoutes";


const PORT = process.env.PORT || 3000;

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", selectRoutes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
