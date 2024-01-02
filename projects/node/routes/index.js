import express from "express";

const router = express.Router();

// request => lo que envio
// response => lo que recibo
router.get("/", (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
});

// render muestra una vista
router.get("/nosotros", (req, res) => {
  // const viajes = "Viaje a Alemania";

  //   res.render("nosotros", {
  //     textoViajes : viajes
  //   });

  res.render("nosotros", {
    pagina: "Nosotros",
  });
});

router.get("/viajes", (req, res) => {
  res.render("viajes", {
    pagina: "Viajes",
  });
});

router.get("/testimonios", (req, res) => {
  res.render("testimonios", {
    pagina: "Testimonios",
  });
});

export default router;
