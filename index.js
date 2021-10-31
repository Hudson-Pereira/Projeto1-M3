const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo a primeira página...");
});

const usersRouter = require("./router/usuarios");
app.use("/", usersRouter);

app.listen(3000, () => {
  console.log(`App rodando no server: http://localhost:${port}.`);
});
