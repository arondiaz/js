import express from "express";
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaDetalleViaje} from "../controllers/paginasController.js";

const router = express.Router();

// request => lo que envio
// response => lo que recibo
router.get("/", paginaInicio);

// render muestra una vista
router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);
router.get("/viajes/:slug", paginaDetalleViaje);


router.get("/testimonios", paginaTestimonios);

export default router;
