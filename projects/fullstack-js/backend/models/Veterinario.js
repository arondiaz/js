import mongoose from "mongoose";

const veterinarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    requerided: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  telefono: {
    type: String,
    default: null,
    trim: true,
  },
  web: {
    type: String,
    default: null,
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
});

const Veterinario = mongoose.model("Veterinario", veterinarioSchema);

export default Veterinario;
