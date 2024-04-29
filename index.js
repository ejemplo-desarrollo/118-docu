import app from "./app/app.js";

app.listen(app.get("port"), ()=>{
    console.log("Conectado en el puerto:", app.get("port"));
})