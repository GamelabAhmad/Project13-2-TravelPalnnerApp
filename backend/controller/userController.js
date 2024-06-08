const db = require('../model/connection');
const bcrypt = require('bcrypt');

//Membuat admin baru
exports.createAdmin = async (req,res) => {
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
            role: 1,
        }

        //sql
        let sql = `INSERT INTO tbl_users set ?`;

        //eksekusi query
        db.query(sql, values, (error,result) => {
            if (error) {
                console.log("Terjadi Error di createAdmin controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil Menambahkan Admin Baru",
                data: values,
            });
        });

      } catch (error) {
        res.status(500).json({error: error.message});
      }
}

//Membuat user baru
exports.createUser = async (req,res) => {
    try {
        //request body
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const address = req.body.address;
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
                console.log("Terjadi Error di createUser controller", error);
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
}

//Menampilkan semua user
exports.getAlluser = async (req,res) => {
    try {
        //sql
        let sql = await `SELECT * FROM tbl_users`;

        //eksekusi query
        db.query(sql, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getAllUser controller", error);
                return res.status(500).json({ error: error.message });
            }

            if (result.length === 0) {
                return res.status(404).json({
                    message: "User Tidak Ditemukan"
                });
            }

             // Transform results
             const users = result.map(user => {
                let roleName;
                if (user.role === 1) {
                    roleName = "Admin";
                } else if (user.role === 0) {
                    roleName = "User";
                }
                return {
                    id_user: user.id_user,
                    name: user.name,
                    phone: user.phone,
                    address: user.address,
                    email: user.email,
                    password: user.password,
                    role: roleName
                };
            });


            res.status(200).json({
                message: "Menampilkan semua user",
                data:users
            });

        });

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//Menampilkan user berdasarkan id
exports.getIdUser = async (req,res) => {
    try {
        //Mengambil id dari params
        const id = req.params.id_user;

        //sql
        let sql = await `SELECT * FROM tbl_users WHERE id_user = ?`;

        //eksekusi query
        db.query(sql, [id], (error,result) => {
            if (error) {
                console.log("Terjadi Error di getIdUser controller", error);
                return res.status(500).json({ error: error.message });
            }

            if (result.lenght === 0) {
                return res.status(404).json({
                    message: "User Tidak Ditemukan"
                });
            }

            const user = result[0];

            const name = user.name;
            const id_user = user.id_user;
            const phone = user.phone;
            const address = user.address;
            const email = user.email;
            const password = user.password;

            //pembagian role
            const role = user.role; 
            let roleName;

            if (role === 1) {
                roleName = "Admin";
            } else if (role === 0) {
                roleName = "User";
            } 

            res.status(200).json({
                message: "Menampilkan user berdasarkan id",
                data: {
                    id_user: id_user,
                    name: name,
                    phone: phone,
                    address: address,
                    email: email,
                    password: password,
                    role: roleName
                }
            });

        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//update user
exports.updateUser = async (req,res) => {
    try {
        const id = req.params.id_user;
        const name = req.body.name;
        const phone = req.body.phone;
        const address = req.body.address;
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;
        const hashPassword = await bcrypt.hash(password, 11);
        const values = {
            name: name,
            phone: phone,
            address: address,
            email: email,
            password: hashPassword,
            role: role
        }
        //sql
        let sql = await `UPDATE tbl_users set ? WHERE id_user = ?`;

        //eksekusi query
        db.query(sql, [values , id], (error,result) => {
            if (error) {
                console.log("Terjadi Error di updateUser controller", error);
                return res.status(500).json({ error: error.message });
            }

            
            res.status(200).json({
                message: `Berhasil Melakukan update pada id_user = ${id}`,
                data: values
            });

        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.deleteUser = (req,res) => {
    try {
        const id = req.params.id_user;

        //sql
        let sql = `DELETE FROM tbl_users WHERE id_user = ?`;

        //eksekusi query
        db.query(sql, [id], (error, result) => {
            if (error) {
                console.log("Terjadi Error di deleteUser controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: `Berhasil menghapus id_user = ${id}`,
                data: result
            });

        })

    } catch (error) {
        res.status(500).json({error: error.message});
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