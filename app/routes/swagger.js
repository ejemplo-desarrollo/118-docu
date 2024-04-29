import swaggerAutogen from 'swagger-autogen';
import { config } from "dotenv";
config();

const doc = {
  info: {
    title: 'prueba',
    description: 'Nos gusta mucho esto ahora'
  },
  host: 'localhost:'+ process.env.PORT || 3000
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