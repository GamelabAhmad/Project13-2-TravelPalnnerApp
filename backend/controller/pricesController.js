const db = require('../model/connection');
require('dotenv').config();

//insert data
exports.createPrices = async (req,res) => {
    try {
        const id_trip = req.body.id_trip;
        const price = req.body.price;
        const type = req.body.type;

        const values = { 
            id_trip: id_trip,
            price: price,
            type: type,
            };

        const sql = `INSERT INTO tbl_prices SET ?`;

        db.query(sql, values, (error, result) => {
            if (error) {
                console.log("Terjadi Error di createPrices controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil menambahkan prices",
                data: values
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//get all
exports.getAllPrices = async (req,res) => {
    try {
        let sql = `SELECT * FROM tbl_prices`

        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllPrices controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "menampilkan semua data price",
                data: result,
            })

        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//get by id
exports.getByIdPrices = async (req,res) => {
    let id = req.params.id;
    try {
        let sql = `SELECT * FROM tbl_prices WHERE id = ?`

        db.query(sql, id , (error,result) => {
            if (error) {
                console.log("Terjadi Error di getByIdPrices controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "menampilkan data price berdasarkan id",
                data: result,
            })

        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//update prices
exports.updatePrices = async (req,res) => {
    let id = req.params.id;
    try {
        const id_trip = req.body.id_trip;
        const price = req.body.price;
        const type = req.body.type;

        const values = { 
            id_trip: id_trip,
            price: price,
            type: type,
            };

        const sql = `UPDATE tbl_prices SET ? WHERE id ? `;

        db.query(sql, [values, id], (error, result) => {
            if (error) {
                console.log("Terjadi Error di updatePrices controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil mengupadte prices",
                data: values
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete prices
exports.deletePrices = async (req,res) => {
    let id = req.params.id;
    try {
        const sql = `DELETE FORM tbl_prices WHERE id ? `;

        db.query(sql, id ,(error, result) => {
            if (error) {
                console.log("Terjadi Error di deletePrices controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil menghapus prices",
                data: values
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}