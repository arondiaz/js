// common js importacion
// const express = require("express");
import express from "express";

const app = express();

const port = process.env.PORT || 4000;

// request => lo que envio
// response => lo que recibo
app.get("/", (req, res) => {
  res.send("Inicio");
});

app.get("/nosotros", (req, res) => {
  res.send("Nostros");
});

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

app.listen(port, () => {
  console.log(`Servidor funcionando en ${port}`);
});
