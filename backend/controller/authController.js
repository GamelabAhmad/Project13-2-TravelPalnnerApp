const bcrypt = require('bcrypt');
const db = require('../model/connection');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

exports.register = async (req,res) => {
    try {
        //request body
        const name = req.body.name;
        const phone = req.body.phone;
        const address = req.body.address;
        const email = req.body.email;
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, 11);
        const values = {
            name: name,
            phone: phone,
            address: address,
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
                        id_user: user.id_user, 
                        name: user.name, 
                        phone: user.phone, 
                        address: user.address, 
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

exports.loginWithGoogle = (req, res) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};

exports.googleCallback = (req, res) => {
    passport.authenticate('google', { failureRedirect: '/' }, (err, user) => {
        if (err || !user) {
            return res.status(401).json({ message: 'Auth Failed' });
        }

        const email = user.emails[0].value;
        const name = user.displayName;

        // Cek apakah pengguna sudah terdaftar
        db.query('SELECT * FROM tbl_users WHERE email = ?', [email], (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            if (results.length > 0) {
                // Pengguna sudah terdaftar, buat token JWT
                const token = jwt.sign({ userID: results[0].id_user, email: results[0].email }, process.env.secret, { expiresIn: '2h' });
                res.cookie('accessToken', token, { httpOnly: true });
                res.status(200).json({ message: 'Authentication successful', token: token });
            } else {
                // Pengguna belum terdaftar, registrasikan pengguna baru
                const newUser = { name: name, email: email, role: 0 }; // Default role sebagai user
                db.query('INSERT INTO tbl_users SET ?', newUser, (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: 'Database error', error: err });
                    }
                    const token = jwt.sign({ userID: result.insertId, email: email }, process.env.secret, { expiresIn: '2h' });
                    res.cookie('accessToken', token, { httpOnly: true });
                    res.status(200).json({ message: 'Registration and authentication successful', token: token });
                });
            }
        });
    })(req, res);
};

exports.protectedRoute = (req, res) => {
    res.status(200).json({
        message: `Hello, ${req.user.email}`,
        user: req.user
    });
};