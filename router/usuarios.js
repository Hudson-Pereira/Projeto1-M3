const express = require("express");

const router = express.Router();

module.exports = router;

const users = [
  {
    identificador: 1,
    nome: "Hudson",
    nick: "Rushuop",
    senha: "",
    ultimo: new Date(),
  },
];

router.get("/usuarios", (req, res) => {
  const lista = users;
  if (Object.keys(lista).length == 0) {
    res.status(204).json();
    return;
  }
  res.status(200).json(users);
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];
  if (!user) {
    res.status(204).json();
    return;
  }

  res.status(200).json(user);
});

router.get("/usuarios/:nome", (req, res) => {
  const nome = req.params.nome;
  const index = users.findIndex((item) => item.nome === nome);
  const user = users[index];
  if (index == -1) {
    res.status(204).json();
    return;
  }
  res.status(200).json(user);
});

router.post("/usuarios/inserir", (req, res) => {
  const user = req.body;

  if (!user.nome) {
    res.status(400).json(`Nome não especificado.`);
    return;
  } else if (!user.nick) {
    res.status(400).json(`Nick não especificado.`);
    return;
  } else if (!user.senha) {
    res.status(400).json(`Senha não especificada.`);
    return;
  } else if (!user.identificador) {
    res.status(400).json(`ID não especificado.`);
    return;
  } else if (!user.ultimo) {
    res.status(400).json(`Erro de registro.`);
    return;
  } else if (!user.nick) {
    res.status(400).json(`Nick não especificado.`);
    return;
  }
  const message = `Usuário ${user.nome} adicionado com sucesso.`;
  users.push(user);
  res.status(200).json({ message, users });
});

router.put("/usuarios/editar/:id", (req, res) => {
  const id = req.params.id - 1;
  let user = users[id];
  if (!user) {
    res.status(204).json();
    return;
  }

  user = req.body;
  if (!user.nome) {
    res.status(400).json(`Nome não especificado.`);
    return;
  } else if (!user.nick) {
    res.status(400).json(`Nick não especificado.`);
    return;
  } else if (!user.senha) {
    res.status(400).json(`Senha não especificada.`);
    return;
  } else if (!user.identificador) {
    res.status(400).json(`ID não especificado.`);
    return;
  } else if (!user.ultimo) {
    res.status(400).json(`Erro de registro.`);
    return;
  } else if (!user.nick) {
    res.status(400).json(`Nick não especificado.`);
    return;
  }

  users[id] = user;
  const message = `Usuário ${user.nome} alterado com sucesso.`;
  res.status(200).json({ message, users });
});

router.delete("/usuarios/delete/:id", (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];

  if (!user) {
    res.status(400).json("Cadastro não encontrado.");
    return;
  }
  delete users[id];
  const message = `Usuário ${user.nome} deletado com sucesso.`;
  res.status(200).json({ message, users });
});

router.delete("/usuarios/deletar/:id", (req, res) => {
  const id = req.params.id - 1;
  const user = users[id];

  if (!user) {
    res.status(400).json("Cadastro não encontrado.");
    return;
  }
  users.splice(id, 1);
  const message = `Usuário ${user.nome} deletado com sucesso.`;
  res.status(200).json({ message, users });
});
