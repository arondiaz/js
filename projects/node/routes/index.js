import express from "express";

const router = express.Router();

// request => lo que envio
// response => lo que recibo
router.get("/", (req, res) => {
  res.render("inicio");
});

// render muestra una vista
router.get("/nosotros", (req, res) => {
  // const viajes = "Viaje a Alemania";

  //   res.render("nosotros", {
  //     textoViajes : viajes
  //   });

  res.render("nosotros");
});

export default router;
