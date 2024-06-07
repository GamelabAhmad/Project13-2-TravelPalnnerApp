const bcrypt = require('bcrypt');
const db = require('../model/connection');
require('dotenv').config();

//Verifikasi email dan arakah ke halaman reset password
exports.verifyEmail = async (req,res) => {
    const email = req.body.email;
    
    try {
        //sql
        let sql = await `SELECT * FROM tbl_users WHERE email = ?`;

        //eksekusi query
        db.query(sql, [email], (error,result) => {
            if (error) {
                console.log("Terjadi Error di verifyEmail controller", error);
                return res.status(500).json({ error: error.message });

            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'Email tidak ditemukan' });
            }

            res.status(200).json({
                message: `Email terverifikasi, silakan masukkan password baru Anda.`,
                data: result
            });

        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

//Fungsi untuk ubah password
exports.resetPassword = async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, 11);

        //sql 
        let sql = `UPDATE tbl_users SET password = ? WHERE email = ?`;

        //eksekusi query 
        db.query(sql, [hashPassword, email], (error,result) => {
            if (error) {
                console.log("Terjadi Error di verifyPassword controller", error);
                return res.status(500).json({ error: error.message });

            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Email tidak ditemukan' });
            }

            res.status(200).json({
                message: "Password Berhasil Berubah",
                data: result,
            })
        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}