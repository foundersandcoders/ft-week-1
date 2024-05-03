import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import https from "https";
import fs from "fs";

import selectRoutes from "./api/selectRoutes";
import patchRoutes from "./api/patchRoutes";

const PORT = process.env.PORT || 443;

const app = express();

const currentDirectory = process.cwd();
console.log(
  "Current working directory:",
  "wooooooooooooooooooooooo",
  currentDirectory,
);

const options = {
  key: fs.readFileSync("/etc/ssl/certs/key.pem"),
  cert: fs.readFileSync("/etc/ssl/certs/cert.pem"),
};

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/questions/", selectRoutes);
app.use("/api/questions/", patchRoutes);

const httpServer = https.createServer(options, app);

httpServer.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`),
);
