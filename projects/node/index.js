// common js importacion
// const express = require("express");
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//conectar base de datos
db.authenticate()
.then(() => console.log("base de datos conectada"))
.catch(error => console.log(error)) 

const port = process.env.PORT || 4000;

// Habilitar PUG template engine
app.set("view engine", "pug");


//Obtener el año actual
app.use((req, res, next) => {

  const year = new Date()
  res.locals.actualYear = year.getFullYear()
  res.locals.nameView = "Agencia de Viajes"

  next()
})


//Definir carpata publica
app.use(express.static("public")) 


//Agregar router
app.use(router);

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
