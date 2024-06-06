const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

db.connect((error) => {
    if (error) {
        console.log("Terjadi Error Di Koneksi Database", error)
    }

    console.log("Berhasil Terkoneksi Ke Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
});



module.exports = db;