import { Viaje } from "../models/viaje.js";

const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  // const viajes = "Viaje a Alemania";

  //   res.render("nosotros", {
  //     textoViajes : viajes
  //   });

  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  //consultar DB
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Próximos viajes",
    resultados: viajes
  });
};

const paginaTestimonios = (req, res) => {
  res.render("testimonios", {
    pagina: "Testimonios",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios };
