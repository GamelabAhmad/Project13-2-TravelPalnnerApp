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
}).single('image_url');

// Membuat Destinasi Baru
exports.createDestination = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

    try {
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const location = req.body.location;
        const included_services = req.body.included_services;
        const suggested_items = req.body.suggested_items;
        const contact_info = req.body.contact_info;

        const values = { 
            name: name,
            description: description,
            price: price,
            location : location,
            included_services: included_services, 
            suggested_items: suggested_items,
            image_url : req.file.path,
            contact_info: contact_info,
            };

        const sql = `INSERT INTO tbl_destination SET ?`;

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
};

// Mengambil Semua Data Destinasi
exports.getAllDestinations = async (req, res) => {
    try {
        const sql = `SELECT * FROM tbl_destination`;

        db.query(sql, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getAllDestinations controller", error);
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
        const sql = `SELECT * FROM tbl_destination WHERE id = ?`;

        db.query(sql, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getDestinationById controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Menampilkan data destinasi berdasarkan id",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Menampilkan data berdasarkan lokasi
exports.getDestinationByLocation = async (req,res) => {
    try {
        let lokasi = req.query.lokasi;

        let sql = `SELECT * FROM tbl_destination WHERE location LIKE ?`

        db.query(sql, [`%${lokasi}%`], (error,result) => {
            if (error) {
                console.log("Terjadi Error di getDestinationByLocation", error);
                return res.status(500).json({ error: error.message });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
            }

            res.status(200).json({
                message: "Berhasil Menemukan Lokasi",
                data: result,
            })

        })


    } catch (error) {
        
    }
}

// Mengupdate Data Destinasi Berdasarkan ID
exports.updateDestination = async (req, res) => {
    const id = req.params.id;
    
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const location = req.body.location;
        const included_services = req.body.included_services;
        const suggested_items = req.body.suggested_items;
        const contact_info = req.body.contact_info;

        try {
            // Ambil jalur file gambar lama dari database
            const sqlGetFilePath = `SELECT image_url FROM tbl_destination WHERE id = ?`;
            db.query(sqlGetFilePath, id, (error, result) => {
                if (error) {
                    console.log("Terjadi Error di updateDestination controller saat mengambil jalur file lama", error);
                    return res.status(500).json({ error: error.message });
                }

                if (result.length === 0) {
                    return res.status(404).json({ message: 'Destinasi tidak ditemukan' });
                }

                const oldFilePath = result[0].image_url;

                // Hapus file lama jika ada
                if (req.file) {
                    fs.unlink(oldFilePath, (err) => {
                        if (err) {
                            console.log("Terjadi Error saat menghapus file lama", err);
                            return res.status(500).json({ error: err.message });
                        }
                    });
                }

                const imageUrl = req.file ? req.file.path : oldFilePath;

                const values = { 
                    name: name,
                    description: description,
                    price: price,
                    location : location,
                    included_services: included_services, 
                    suggested_items: suggested_items,
                    image_url : req.file.path,
                    contact_info: contact_info,
                    };

                const sql = `UPDATE tbl_destination SET ? WHERE id = ?`;

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
        const sqlGetFilePath = `SELECT image_url FROM tbl_destination WHERE id = ?`;
        db.query(sqlGetFilePath, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di deleteDestination controller saat mengambil jalur file", error);
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
                const sql = `DELETE FROM tbl_destination WHERE id = ?`;

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
