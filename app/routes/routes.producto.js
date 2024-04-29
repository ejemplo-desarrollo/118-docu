import { Router } from "express";
import { crearProducto, eliminarProducto, modificarProducto, mostrarProducto } from "../controllers/controller.Producto.js";

const rutaProducto = Router();

rutaProducto.post("/producto", crearProducto);
rutaProducto.get("/producto", mostrarProducto);
rutaProducto.put("/producto", modificarProducto);
rutaProducto.delete("/producto", eliminarProducto);

export default rutaProducto;