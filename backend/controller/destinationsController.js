const multer = require('multer');
const path = require('path');
const db = require('../model/connection');
require('dotenv').config();
const fs = require('fs');

//inisialisasi multer
const storage = multer.diskStorage({
    destination: './destinations',
    filename: (req,file,callback) => {
        callback(null, file.originalname);
    }
});

//inisialisasi multer 2
const upload = multer({
    storage: storage,
}).single('image');

//create data
exports.createDestinations = async (req,res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

    try {
        const location = req.body.location;

        const values = { 
            location: location,
            image : req.file.path,
            };

        const sql = `INSERT INTO tbl_destinations SET ?`;

        db.query(sql, values, (error, result) => {
            if (error) {
                console.log("Terjadi Error di createDestination controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil menambahkan destinasi",
                data: values
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
}

// Mengambil Semua Data Destinasi
exports.getAllDestination = async (req, res) => {
    try {
        const sql = `SELECT * FROM tbl_destinations`;

        db.query(sql, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getAllDestination controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Menampilkan semua data destinasi",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengambil Data Destinasi Berdasarkan ID
exports.getDestinationById = async (req, res) => {
    const id = req.params.id;

    try {
        const sql = `SELECT * FROM tbl_destinations WHERE id = ?`;

        db.query(sql, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getDestinationById controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Menampilkan data trips berdasarkan id",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengupdate Data Destinasi Berdasarkan ID
exports.updateDestination = async (req, res) => {
    const id = req.params.id;
    
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const location = req.body.location;

        try {
            // Ambil jalur file gambar lama dari database
            const sqlGetFilePath = `SELECT image FROM tbl_destinations WHERE id = ?`;
            db.query(sqlGetFilePath, [id], (error, result) => {
                if (error) {
                    console.log("Terjadi Error di updateDestination controller saat mengambil jalur file lama", error);
                    return res.status(500).json({ error: error.message });
                }

                if (result.length === 0) {
                    return res.status(404).json({ message: 'Destinasi tidak ditemukan' });
                }

                const oldFilePath = result[0].image;
                
                // Check if oldFilePath is valid
                if (oldFilePath) {
                    console.log("Old file path:", oldFilePath);

                    // Hapus file lama jika ada file baru yang diunggah
                    if (req.file) {
                        fs.unlink(oldFilePath, (err) => {
                            if (err) {
                                console.log("Terjadi Error saat menghapus file lama", err);
                                return res.status(500).json({ error: err.message });
                            }
                        });
                    }
                } else {
                    console.log("Old file path is undefined or null");
                }

                const imageUrl = req.file ? req.file.path : oldFilePath;

                const values = { 
                    location: location,
                    image: req.file.path
                };

                const sql = `UPDATE tbl_destinations SET ? WHERE id = ?`;

                db.query(sql, [values, id], (error, result) => {
                    if (error) {
                        console.log("Terjadi Error di updateDestination controller", error);
                        return res.status(500).json({ error: error.message });
                    }

                    res.status(200).json({
                        message: `Berhasil mengupdate destinasi dengan id = ${id}`,
                        data: values
                    });
                });
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

// Menghapus Data Destinasi Berdasarkan ID
exports.deleteDestination = async (req, res) => {
    const id = req.params.id;

    try {
        // Ambil jalur file dari database
        const sqlGetFilePath = `SELECT image FROM tbl_trips WHERE id = ?`;
        db.query(sqlGetFilePath, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di deleteTrip controller saat mengambil jalur file", error);
                return res.status(500).json({ error: error.message });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'Destinasi tidak ditemukan' });
            }

            const filePath = result[0].image_url;

            // Hapus file dari sistem file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log("Terjadi Error saat menghapus file", err);
                    return res.status(500).json({ error: err.message });
                }

                // sql untuk menghapus data destinasi
                const sql = `DELETE FROM tbl_destinations WHERE id = ?`;

                // eksekusi query untuk menghapus data destinasi
                db.query(sql, id, (error, result) => {
                    if (error) {
                        console.log("Terjadi Error di deleteDestination controller", error);
                        return res.status(500).json({ error: error.message });
                    }

                    res.status(200).json({
                        message: `Berhasil menghapus destinasi dengan id = ${id}`,
                        data: result
                    });
                });
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};