const bcrypt = require('bcrypt');
const db = require('../model/connection');
require('dotenv').config();
const jwt = require('jsonwebtoken');

//Verifikasi email dan arakah ke halaman reset password
exports.verifyEmail = async (req,res) => {
    try {
        let email = req.body.email; 

        let sql = `SELECT * FROM tbl_users WHERE email = ?`;

        db.query(sql, [email], (error,result) => {
            if (error) {
                return res.status(500).json({message: "Terjadi Error di verifyEmail controller", error})
            }

            if (result.length === 0) {
                return  res.status(404).json({message: "Email tidak ditemukan", error})
            }

            const token = jwt.sign({email}, process.env.secret, {expiresIn: "2h"});

            //set token di browser
            res.cookie('accessToken', token ,{
                httpOnly: true,
                expires: token.expiresIn
                }).status(200).status(200).json({
                    message: "Email Terverifikasi",
                    token: token,
                });
            
        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//Fungsi untuk ubah password
exports.resetPassword = async (req,res) => {
    try {
        let email = req.user.email; 
        let password = req.body.password;
        let hashPassword = await bcrypt.hash(password, 11);

        let sql = `UPDATE tbl_users SET password = ? WHERE email = ?`;

        db.query(sql, [hashPassword, email], (error,result) => {
            if (error) {
                return res.status(500).json({message: "Terjadi Error di resetPassword controller", error})
            }

            res.status(200).json({
                message: "Berhasil mengubah password silahkan coba untuk login dan jangan sampai lupa",
                data: result
            });
        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}