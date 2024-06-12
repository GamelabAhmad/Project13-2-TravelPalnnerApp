const db = require('../model/connection');

// Membuat Destinasi Baru
exports.createDestination = async (req, res) => {
    try {
        const { name, description, location } = req.body;

        const values = { name, description, location };

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
};

// Mengambil Semua Data Destinasi
exports.getAllDestinations = async (req, res) => {
    try {
        const sql = `SELECT * FROM tbl_destinations`;

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
        const sql = `SELECT * FROM tbl_destinations WHERE id = ?`;

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

// Mengupdate Data Destinasi Berdasarkan ID
exports.updateDestination = async (req, res) => {
    const id = req.params.id;
    const { name, description, location } = req.body;

    try {
        const sql = `UPDATE tbl_destinations SET name = ?, description = ?, location = ? WHERE id = ?`;

        db.query(sql, [name, description, location, id], (error, result) => {
            if (error) {
                console.log("Terjadi Error di updateDestination controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: `Berhasil mengupdate destinasi dengan id = ${id}`,
                data: result
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Menghapus Data Destinasi Berdasarkan ID
exports.deleteDestination = async (req, res) => {
    const id = req.params.id;

    try {
        const sql = `DELETE FROM tbl_destinations WHERE id = ?`;

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
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
