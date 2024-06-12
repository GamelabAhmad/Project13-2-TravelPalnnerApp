const db = require('../model/connection');

// Membuat Paket Trip Baru
exports.createTrip = async (req, res) => {
    try {
        const { destination_id, trip_name, description, price } = req.body;

        const values = { destination_id, trip_name, description, price };

        const sql = `INSERT INTO tbl_trip SET ?`;

        db.query(sql, values, (error, result) => {
            if (error) {
                console.log("Terjadi Error di createTrip controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Berhasil menambahkan paket trip",
                data: values
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengambil Semua Data Trip
exports.getAlltrip = async (req, res) => {
    try {
        const sql = `SELECT * FROM tbl_trip`;

        db.query(sql, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getAlltrip controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Menampilkan semua data trip",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengambil Data Trip Berdasarkan ID
exports.getTripById = async (req, res) => {
    const id = req.params.id;

    try {
        const sql = `SELECT * FROM tbl_trip WHERE id = ?`;

        db.query(sql, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di getTripById controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: "Menampilkan data trip berdasarkan id",
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mengupdate Data Trip Berdasarkan ID
exports.updateTrip = async (req, res) => {
    const id = req.params.id;
    const { destination_id, trip_name, description, price } = req.body;

    try {
        const sql = `UPDATE tbl_trip SET destination_id = ?, trip_name = ?, description = ?, price = ? WHERE id = ?`;

        db.query(sql, [destination_id, trip_name, description, price, id], (error, result) => {
            if (error) {
                console.log("Terjadi Error di updateTrip controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: `Berhasil mengupdate trip dengan id = ${id}`,
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Menghapus Data Trip Berdasarkan ID
exports.deleteTrip = async (req, res) => {
    const id = req.params.id;

    try {
        const sql = `DELETE FROM tbl_trip WHERE id = ?`;

        db.query(sql, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di deleteTrip controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: `Berhasil menghapus trip dengan id = ${id}`,
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
