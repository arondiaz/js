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

const paginaViajes = (req, res) => {
  res.render("viajes", {
    pagina: "Viajes",
  });
};

const paginaTestimonios = (req, res) => {
  res.render("testimonios", {
    pagina: "Testimonios",
  });
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios };
