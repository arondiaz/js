const guardarTestimonio = (req, res) => {
  //Validar formulario
  const { nombre, email, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
    errores.push({ mensaje: "Campos vacíos" });
  }

  console.log(req.body);

  if (errores.length > 0) {
    //Mostrar errores
    res.render("testimonios", {
      pagina: "Testimonios",
      errores,
      nombre,
      email,
      mensaje,
    });
  } else {
    //
  }
};

export default guardarTestimonio;
