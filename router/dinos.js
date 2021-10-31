const express = require("express");
const router = express.Router();

module.exports = router;

const dinos = [];

router.get("/dinos", (req, res) => {
  if (Object.keys(dinos).length === 0) {
    res.status(204).json("Nenhum dinossauro encontrado.");
  }
  res.status(200).json(dinos);
});

router.get("/dinos/:id", (req, res) => {
  const id = req.params.id - 1;
  const dino = dinos[id];

  if (!dino) {
    res.status(204).json();
    return;
  }
  res.status(200).json(dino);
});

router.get("/dinos/:especie", (req, res) => {
  const especie = req.params.especie;
  const index = dinos.findIndex((item) => item.especie === especie);
  const dino = dinos[index];

  if (index === -1) {
    res.status(204).json();
    return;
  }

  res.status(200).json(dino);
});

router.post("/dinos/inserir", (req, res) => {
  const dino = req.body;

  if (!dino.especie) {
    res.status(400).json(`Especie não especificado.`);
    return;
  } else if (!dino.alimentacao) {
    res.status(400).json(`Alimentacao não especificado.`);
    return;
  }

  dinos.push(dino);
  const message = `Dino ${dino.especie} cadastrado com sucesso.`;
  res.status(200).json({ message, dinos });
});

router.put("/dinos/editar/:id", (req, res) => {
  const id = req.params.id - 1;
  let dino = dinos[id];
  if (!dino) {
    res.status(204).json();
    return;
  }

  dino = req.body;
  if (!dino.especie) {
    res.status(400).json(`Especie não especificado.`);
    return;
  } else if (!dino.alimentacao) {
    res.status(400).json(`Alimentacao não especificado.`);
    return;
  }

  dinos[id] = dino;
  const message = `Dino ${dino.especie} alterado com sucesso.`;
  res.status(200).json({ message, dinos });
});

router.delete("/dinos/delete/:id", (req, res) => {
  const id = req.params.id - 1;
  const dino = dinos[id];
  if (!dino) {
    res.status(400).json("Cadastro não encontrado.");
    return;
  }
  delete dinos[id];
  const message = "Dino deletado com sucesso.";
  res.status(200).json({ message, dinos });
});

router.delete("/dinos/deletar/:id", (req, res) => {
  const id = req.params.id - 1;
  const dino = dinos[id];
  if (!dino) {
    res.status(400).json("Cadastro não encontrado.");
    return;
  }

  dinos.splice(id, 1);
  const message = "Dino deletado com sucesso.";
  res.status(200).json({ message, dinos });
});
