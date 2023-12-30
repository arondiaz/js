import express from "express";

const router = express.Router();

// request => lo que envio
// response => lo que recibo
router.get("/", (req, res) => {
  res.send("Inicio");
});

// render muestra una vista
router.get("/nosotros", (req, res) => {
  res.render("nosotros");
});

export default router;
