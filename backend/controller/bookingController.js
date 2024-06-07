const multer = require('multer');
const path = require('path');
const db = require('../model/connection');
require('dotenv').config();

//inisialisasi multer
const storage = multer.diskStorage({
    destination: './transfer_proof',
    filename: (req,file,callback) => {
        callback(null, "transfer_proof" + '_' + Date.now() +path.extname(file.originalname));
    }
});

//inisialisasi multer 2
const upload = multer({
    storage: storage,
}).single('transfer_proof');

//Membuat Booking Baru
exports.createBooking = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'Bukti transfer tidak diunggah' });
        }

        try {
            const id_destinations = req.body.id_destinations;
            const name = req.body.name;
            const phone = req.body.phone;
            const email = req.body.email;
            const booking_date = req.body.booking_date;
            const payment = req.body.payment;
            const id_user = req.user.userID; // Ambil id_user dari token

            const values = {
                id_destinations: id_destinations,
                id_user: id_user,
                name: name,
                phone: phone,
                email: email,
                booking_date: booking_date,
                payment: payment,
                transfer_proof: req.file.path
            };

            const sql = `INSERT INTO tbl_bookings SET ?`;

            db.query(sql, values, (error, result) => {
                if (error) {
                    console.log("Terjadi Error di createBooking controller", error);
                    return res.status(500).json({ error: error.message });
                }

                res.status(200).json({
                    message: "Berhasil Booking",
                    data: values
                });
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

//Mengambil semua data booking untuk halaman dashboard
exports.getAllBookings = async (req,res) => {
    try {
        //sql
        let sql = await  `SELECT tbl_trip.nama_destinasi, tbl_users.name, tbl_bookings.status, tbl_bookings.booking_date 
                    FROM tbl_bookings, tbl_trip, tbl_users 
                    WHERE tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_destinations = tbl_trip.id`

        //eksekusi query 
        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllBookings controller", error);
                return res.status(500).json({ error: error.message });
            }

            // Transform results
            const data = result.map(dashboard => {
                let status;
                if (dashboard.status === 0) {
                    status = "Processing";
                } else if (dashboard.status === 1) {
                    status = "Delivered";
                }else if (dashboard.status === 2) {
                    status = " Cancelled ";
                }
                return {
                    id_booking: dashboard.id_booking,
                    id_destinations: dashboard.id,
                    id_user: dashboard.id_user,
                    destination_name: dashboard.nama_destinasi,
                    name: dashboard.name,
                    status: status,
                    booking_date: dashboard.booking_date,
                    
                };
            });

            res.status(200).json({
                message: "Menampilkan data booking untuk halaman dashboard",
                data:data
            });


        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//Mengambil semua data booking untuk halaman order-paket-trip
exports.getAllBookings2 = async (req,res) => {
    try {
        //sql
        let sql = await  `SELECT tbl_trip.nama_destinasi, tbl_users.name, tbl_bookings.payment, tbl_trip.harga ,tbl_bookings.status, tbl_bookings.booking_date, tbl_bookings.transfer_proof 
                    FROM tbl_bookings, tbl_trip, tbl_users 
                    WHERE tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_destinations = tbl_trip.id`

        //eksekusi query 
        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllBookings2 controller", error);
                return res.status(500).json({ error: error.message });
            }

            // Transform results
            const data = result.map(dashboard => {
                let status;
                if (dashboard.status === 0) {
                    status = "Processing";
                } else if (dashboard.status === 1) {
                    status = "Delivered";
                }else if (dashboard.status === 2) {
                    status = " Cancelled ";
                }
                return {
                    destination_name: dashboard.nama_destinasi,
                    name: dashboard.name,
                    payment: dashboard.payment,
                    price: dashboard.price,
                    status: status,
                    booking_date: dashboard.booking_date,
                    transfer_proof: dashboard.transfer_proof,
                    
                };
            });

            res.status(200).json({
                message: "Menampilkan data booking untuk halaman Order Paket Trip",
                data:data
            });


        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//mengambil data booking berdasarkan id booking untuk halaman order paket trip
exports.getIdBooking = async (req,res) => {
    id = req.params.id;

    try {
        //sql
        let sql = await  `SELECT tbl_trip.nama_destinasi, tbl_users.name, tbl_users.phone, tbl_users.address, tbl_users.email, tbl_bookings.payment, tbl_trip.harga ,tbl_bookings.status, tbl_bookings.booking_date, tbl_bookings.transfer_proof 
                    FROM tbl_bookings, tbl_trip, tbl_users 
                    WHERE tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_destinations = tbl_trip.id AND id_booking = ?`

        //eksekusi query 
        db.query(sql, id ,(error,result) => {
            if (error) {
                console.log("Terjadi Error di getIdBookings controller", error);
                return res.status(500).json({ error: error.message });
            }

            // Transform results
            const data = result.map(dashboard => {
                let status;
                if (dashboard.status === 0) {
                    status = "Processing";
                } else if (dashboard.status === 1) {
                    status = "Delivered";
                }else if (dashboard.status === 2) {
                    status = " Cancelled ";
                }
                return {
                    destination_name: dashboard.nama_Destinasi,
                    name: dashboard.name,
                    phone: dashboard.phone,
                    address: dashboard.address,
                    email: dashboard.email,
                    payment: dashboard.payment,
                    price: dashboard.harga,
                    status: status,
                    booking_date: dashboard.booking_date,
                    transfer_proof: dashboard.transfer_proof,
                    
                };
            });

            res.status(200).json({
                message: "Menampilkan data booking berdasarkan id",
                data:data
            });


        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//mengambil data booking berdasarkan id user untuk ditampilkan di halaman user
exports.getIdBookingsUser = async (req,res) => {
    id = req.params.id;

    try {
        //sql
        let sql = await  `SELECT tbl_trip.nama_destinasi, tbl_users.name, tbl_users.phone, tbl_users.address, tbl_users.email, tbl_bookings.payment, tbl_trip.harga ,tbl_bookings.status, tbl_bookings.booking_date, tbl_bookings.transfer_proof 
                    FROM tbl_bookings, tbl_trip, tbl_users 
                    WHERE tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_destinations = tbl_trip.id AND tbl_bookings.id_user = ?`

        //eksekusi query 
        db.query(sql, id ,(error,result) => {
            if (error) {
                console.log("Terjadi Error di getIdBookingUser controller", error);
                return res.status(500).json({ error: error.message });
            }

            // Transform results
            const data = result.map(dashboard => {
                let status;
                if (dashboard.status === 0) {
                    status = "Processing";
                } else if (dashboard.status === 1) {
                    status = "Delivered";
                }else if (dashboard.status === 2) {
                    status = " Cancelled ";
                }
                return {
                    destination_name: dashboard.nama_Destinasi,
                    name: dashboard.name,
                    phone: dashboard.phone,
                    address: dashboard.address,
                    email: dashboard.email,
                    payment: dashboard.payment,
                    price: dashboard.harga,
                    status: status,
                    booking_date: dashboard.booking_date,
                    transfer_proof: dashboard.transfer_proof,
                    
                };
            });

            res.status(200).json({
                message: "Menampilkan data booking berdasarkan id",
                data:data
            });


        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//update booking
exports.updateBooking = async (req,res) => {
    let id = req.params.id;
    let status = req.body.status;

    try {
        //sql
        let sql = await `UPDATE tbl_bookings SET status = ? WHERE id_booking = ?`;

        //eksekusi query
        db.query(sql, [status, id], (error, result) => {
            if (error) {
                console.log("Terjadi Error di updateBooking controller", error);
                return res.status(500).json({ error: error.message });
            }

            res.status(200).json({
                message: `Berhasil Melakukan update pada id_booking = ${id} menjadi ${status}`,
                data: result
            });


        })

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

//delete booking
exports.deleteBooking = async (req,res) => {
    let id = req.params.id;

    try {
        //sql
        let sql = `DELETE FROM tbl_bookings WHERE id_booking = ?`;

        //eksekusi query
        db.query(sql, id, (error,result) => {
            if (error) {
                console.log("Terjadi Error di deleteBooking controller", error);
                return res.status(500).json({ error: error.message });

            }

            res.status(200).json({
                message: `Berhasil menghapus booking pada id_booking = ${id}`,
                data: result
            });
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}