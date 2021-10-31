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
