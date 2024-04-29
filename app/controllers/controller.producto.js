export const crearProducto= (req, res)=>{
    //el siguiente codigo es para crear los parametros de swagger
    /* #swagger.parameters['correo'] = {
            in: "body",             
            description: "probando",
            required: true,
            type: "string",
            schema: {
                "dato":"por defecto",
                "id":19800830,
                "nombre":"LUIS ALFONSO",
                "edad":45,
                "estado":false
            }
     } */

    let info = req.body;
    console.log(req.body);
    res.json(req.body.correo);
}
export const mostrarProducto= (req, res)=>{
    res.json({"mensa":"mostrarProducto"});
}
export const modificarProducto= (req, res)=>{
    res.json({"mensa":"modificarProducto"});
}
export const eliminarProducto= (req, res)=>{
    res.json({"mensa":"eliminarProducto"});
}