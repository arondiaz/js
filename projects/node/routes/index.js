import express from "express";

const router = express.Router();

// request => lo que envio
// response => lo que recibo
router.get("/", (req, res) => {
  res.send("Inicio");
});

router.get("/nosotros", (req, res) => {
  res.send("Nostros");
});

router.get("/contacto", (req, res) => {
  res.send("Contacto");
});


export default router