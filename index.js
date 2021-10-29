const express = require("express");
const app = express();

const port = 3000;
app.use(express.json());

const users = [
  {
    identificador: 1,
    nome: "Hudson",
    nick: "Rushuop",
    senha: "",
    ultimo: new Date(),
  },
];

app.get("/", (req, res) => {
  res.send("Bem vindo a primeira página...");
});

app.get("/usuarios", (req, res) => {
  const lista = users;
  if (Object.keys(lista).length == 0) {
    res.send("Nenhum usuário encontrado.");
  }
  res.json(users);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];
  if (!user) {
    res.send("Usuário não encontrado.");
  }
  res.json(user);
});

app.post("/inserir", (req, res) => {
  const user = req.body;

  const id = users.length;
  const message = `Usuário ${user.nome} adicionado com sucesso.`;
  users.push(user);
  res.send({ message, users });
});

app.put("/editar/:id", (req, res) => {
  const id = req.params.id - 1;
  let user = users[id];

  user = req.body;
  users[id] = user;
  const message = `Usuário ${user.nome} alterado com sucesso.`;
  res.send({ message, users });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];
  delete users[id];
  const message = `Usuário ${user.nome} deletado com sucesso.`;
  res.send({ message, users });
});

app.listen(3000, () => {
  console.log(`App rodando no server: http://localhost:${port}.`);
});
