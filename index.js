const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Bem vindo a primeira página...
  Temos usuarios, times e carros.
  rotas: 
         /usuarios
         /times
         /dinos`);
});

const usersRouter = require("./router/usuarios");
app.use("/", usersRouter);

const timesRouter = require("./router/times");
app.use("/", timesRouter);

const dinosRouter = require("./router/dinos");
app.use("/", dinosRouter);

app.listen(3000, () => {
  console.log(`App rodando no server: http://localhost:${port}.`);
});
