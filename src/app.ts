import express, { Response, Request } from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;

const app = express();
// const selectRoutes = require("./api/selectRoutes");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/", selectRoutes);

//Api endpoints
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
