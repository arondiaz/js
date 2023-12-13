import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("Hola");
});

app.listen(4000, () => {
  console.log("servidor funcionando en el puerto 4000");
});
