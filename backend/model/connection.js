const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: 3307 
});

db.connect((error) => {
    if (error) {
        console.log("Terjadi Error Di Koneksi Database", error)
    }else {
        console.log("Berhasil Terkoneksi Ke Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }
});



module.exports = db;