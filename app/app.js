import express from "express";
import { config } from "dotenv";
import ruta from "./routes/index.js";
import pool from "./config/db.js"

config();

const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/",(req, res)=>{
    res.send("hola");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/", ruta)

export default app;