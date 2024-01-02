// common js importacion
// const express = require("express");
import express from "express";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 4000;

// Habilitar PUG template engine
app.set("view engine", "pug");


//Obtener el año actual
app.use((req, res, next) => {

  const year = new Date()
  res.locals.actualYear = year.getFullYear()

  next()
})


//Definir carpata publica
app.use(express.static("public")) 


//Agregar router
app.use(router);

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
