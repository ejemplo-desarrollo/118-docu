import swaggerAutogen from 'swagger-autogen';
import { config } from "dotenv";
config();

let port = process.env.PORT || 3000;

const doc = {
  info: {
    title: 'Ensayo para la ficha de la mañana 118',
    description: 'Nos gusta mucho esto ahora'
  },
  host: 'localhost:'+ port + "/api"
};

const outputFile = './swagger-output.json';
const routes = [
    './app/routes/routes.producto.js',
    './app/routes/routes.usuarios.js'
];


/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
    import('../../index.js')           // Your project's root file
})