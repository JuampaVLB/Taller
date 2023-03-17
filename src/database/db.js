import mongoose from "mongoose";

const URI = "mongodb://0.0.0.0:27017/escuela";

mongoose
  .connect(URI)
  .then(() => console.log("BASE DE DATOS CONECTADA!"))
  .catch((e) => console.log(e));
