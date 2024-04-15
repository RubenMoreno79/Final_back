const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}).promise();

global.db = pool

//Prueba para ver que funciona la db
// pool.query('select * from usuarios')
//     .then(result => {
//         //result es el resultado de la query
//         //siempre es un array con dos posiciones
//         console.log(result[0])
//     })