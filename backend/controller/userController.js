const bcrypt = require('bcrypt');
const db = require('../model/connection');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req,res) => {
    try {
        //request body
        const email = req.body.email;
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, 11);
        const values = {
            email: email,
            password: hashPassword,
        }

        //sql
        let sql = `INSERT INTO tbl_users SET  ?`;

        //eksekusi query
        db.query(sql, values, (error, result) => {
            if (error) {
                console.log("Terjadi Error di register controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil Menambahkan Data",
                data: values,
            })

        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

exports.login = async (req,res) => {
    try {
        //request body
        const email = req.body.email;
        const password = req.body.password;

        //sql
        let sql = 'SELECT * FROM tbl_users WHERE email = ?';

        //eksekusi query
        db.query(sql, [email], async (error, results) => {
            //pengecekan jika terjadi error
            if (error) {
                console.log("Terjadi Error di login controller", error);
                return res.status(500).json({ error: error.message });
            }

            //pencarian jika email tidak ditemukan
            if (results.length === 0) {
                return res.status(401).json({
                    message: "Email tidak ditemukan"
                });
            }


            const user = results[0];

            //pengecekan password 
            const ifPasswordValid = await bcrypt.compare(password, user.password);
            if (!ifPasswordValid) {
                return res.status(401).json({
                    message: "Password salah"
                });
            }

            //pembuatan token
            const token = jwt.sign({ userID: user.id_user, email: user.email , role: user.role}, process.env.secret, {expiresIn: "2h"});

            //pembagian role
            const role = user.role; 
            let message;

            if (role === 1) {
                message = "Berhasil Login ke halaman Admin";
            } else if (role === 0) {
                message = "Berhasil Login ke halaman Landing Page";
            } else {
                message = "Role tidak dikenali";
            }

            //set token di browser
            res.cookie('accessToken', token ,{
                httpOnly: true,
                expires: token.expiresIn
                }).status(200).json({
                    message: message,
                    data: {
                        userID: user.id_user, 
                        email: user.email , 
                        role: user.role
                    },
                    token: token,
                });
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}