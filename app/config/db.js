import { createPool } from "mysql2/promise";

    const pool = createPool({
        host:"localhost",
        user:"root",
        password:"",
        database:"prueba"
    });
    console.log("Se ha conectado a mysql prueba");    

export default pool;