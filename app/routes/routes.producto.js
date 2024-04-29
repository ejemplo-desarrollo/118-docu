import { Router } from "express";
import { crearProducto, eliminarProducto, modificarProducto, mostrarProducto } from "../controllers/controller.Producto.js";

const rutaProducto = Router();

rutaProducto.post("/Producto", crearProducto);
rutaProducto.get("/Producto", mostrarProducto);
rutaProducto.put("/Producto", modificarProducto);
rutaProducto.delete("/Producto", eliminarProducto);

export default rutaProducto;