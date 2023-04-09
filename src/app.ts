import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import db from "./config/mongo";
import router from "./routes";

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("db connection ready"));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TSC");
});

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
