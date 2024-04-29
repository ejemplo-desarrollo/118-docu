import { Router } from "express";
import { crearUsuario, eliminarUsuario, modificarUsuario, mostrarUsuario } from "../controllers/controller.usuario.js";

const rutaUsuario = Router();

rutaUsuario.post("/usuario", crearUsuario);
rutaUsuario.get("/usuario", mostrarUsuario);
rutaUsuario.put("/usuario", modificarUsuario);
rutaUsuario.delete("/usuario", eliminarUsuario);

export default rutaUsuario;