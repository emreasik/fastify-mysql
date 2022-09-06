const mysql = require('mysql');
const config = require('../config/constant.json');

const pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
    database: config.DB_DATABASE,
});

pool.getConnection((err) => {
    if (err) { 
        console.log('Error connecting to DB', err.stack);
        process.exit(1);
    } 
    console.log("connected to db");
})