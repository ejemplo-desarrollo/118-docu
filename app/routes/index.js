import { Router } from "express";
import rutaProducto from "./routes.producto.js";
import rutaUsuario from "./routes.usuarios.js";
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json' assert { type: "json" };


const ruta = Router();

ruta.use("/api",rutaUsuario);

ruta.use("/api",rutaProducto);
ruta.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


export default ruta;