const express = require("express");
const router = express.Router();
module.exports = router;

const times = [{ nome: "Corinthians", ano: 1910 }];

router.get("/times", (req, res) => {
  if (Object.keys(times).length === 0) {
    res.status(204).json("Nenhum time encontrado.");
    return;
  }
  res.status(200).json(times);
});

router.get("/times/:id", (req, res) => {
  const id = req.params.id - 1;
  const time = times[id];

  if (!time) {
    res.status(204).json();
    return;
  }
  res.status(200).json(time);
});

router.get("/clubes/:nome", (req, res) => {
  const nome = req.params.nome;
  const index = times.findIndex((item) => item.nome === nome);
  const time = times[index];

  if (index === -1) {
    res.status(204).json();
    return;
  }

  res.status(200).json(time);
});

router.post("/times/inserir", (req, res) => {
  const time = req.body;

  if (!time.nome) {
    res.status(400).json(`Nome não especificado.`);
    return;
  } else if (!time.ano) {
    res.status(400).json(`Ano não especificado.`);
    return;
  }

  times.push(time);

  res.status(200).json(`Time ${time.nome} cadastrado com sucesso.`);
});

router.put("/times/editar/:id", (req, res) => {
  const id = req.params.id - 1;
  let time = times[id];
  if (!time) {
    res.status(204).json();
    return;
  }

  time = req.body;
  if (!time.nome) {
    res.status(400).json(`Nome não especificado.`);
    return;
  } else if (!time.ano) {
    res.status(400).json(`Ano não especificado.`);
    return;
  }

  times[id] = time;
  const message = `Usuário ${time.nome} alterado com sucesso.`;
  res.status(200).json({ message, times });
});

router.delete("/times/delete/:id", (req, res) => {
  const id = req.params.id - 1;

  delete times[id];
  const message = "Time deletado com sucesso.";
  res.status(200).json({ message, times });
});

router.delete("/times/deletar/:id", (req, res) => {
  const id = req.params.id - 1;

  times.splice(id, 1);
  const message = "Time deletado com sucesso.";
  res.status(200).json({ message, times });
});
