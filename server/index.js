import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("salam");
});
let messages = "";
app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  messages = req.body.message;
  const isHack =  messages.includes("hack");
  isHack ? res.sendStatus(400) : res.send({message: messages});
});

app.listen(3000, () => {
  console.log("server is up");
});
