import express from "express";
import cors from "cors";
import connection from "./dbCon.js";
import model from "./model.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  const movies = await model.find();

  res.json({ movies: movies });
});

const port = process.env.PORT || 3000;

connection().then(() => {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Listen on port ${port}`);
  });
});
