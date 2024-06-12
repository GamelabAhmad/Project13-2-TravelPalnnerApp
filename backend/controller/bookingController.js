const multer = require('multer');
const path = require('path');
const db = require('../model/connection');
require('dotenv').config();
const fs = require('fs');

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
            const address = req.body.address;
            const booking_date = req.body.booking_date;
            const id_user = req.user.userID; // Ambil id_user dari token

            const values = {
                id_destinations: id_destinations,
                id_user: id_user,
                name: name,
                address: address,
                phone: phone,
                booking_date: booking_date,
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
        let sql = await  `SELECT tbl_destination.image_url, tbl_destination.name, tbl_destination.price, 
         tbl_bookings.id_booking, tbl_bookings.id_user, tbl_bookings.id_destinations, tbl_users.name, tbl_bookings.phone,
         tbl_bookings.address, tbl_bookings.booking_date, tbl_bookings.status, tbl_bookings.transfer_proof  
         FROM tbl_destination, tbl_bookings, tbl_users
         WHERE tbl_destination.id = tbl_bookings.id_destinations AND tbl_bookings.id_user = tbl_users.id_user`

        //eksekusi query 
        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllBookings controller", error);
                return res.status(500).json({ error: error.message });
            }

            const data = result.map(booking => {
                let status;
                if (booking.status === 0) {
                    status = "Processing";
                } else if (booking.status === 1) {
                    status = "Delivered";
                } else if (booking.status === 2) {
                    status = "Cancelled";
                }
                return {
                    id_booking: booking.id_booking,
                    id_user: booking.id_user,
                    id_destination: booking.id_destinations,
                    destination_name: booking.name, 
                    destination_image: booking.image, 
                    destination_price: booking.price, 
                    name: booking.name,
                    phone: booking.phone,
                    address: booking.address,
                    booking_date: booking.booking_date,
                    status: status,
                    transfer_proof: booking.transfer_proof
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
        let sql = await  `SELECT tbl_destination.image_url, tbl_destination.name, tbl_destination.price, 
         tbl_bookings.id_booking, tbl_bookings.id_user, tbl_bookings.id_destinations, tbl_users.name, tbl_bookings.phone,
         tbl_bookings.address, tbl_bookings.booking_date, tbl_bookings.status, tbl_bookings.transfer_proof  
         FROM tbl_destination, tbl_bookings, tbl_users
         WHERE tbl_destination.id = tbl_bookings.id_destinations AND tbl_bookings.id_user = tbl_users.id_user`

        //eksekusi query 
        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllBookings controller", error);
                return res.status(500).json({ error: error.message });
            }

            const data = result.map(booking => {
                let status;
                if (booking.status === 0) {
                    status = "Processing";
                } else if (booking.status === 1) {
                    status = "Delivered";
                } else if (booking.status === 2) {
                    status = "Cancelled";
                }
                return {
                    id_booking: booking.id_booking,
                    id_user: booking.id_user,
                    id_destination: booking.id_destinations,
                    destination_name: booking.name, 
                    destination_image: booking.image, 
                    destination_price: booking.price, 
                    name: booking.name,
                    phone: booking.phone,
                    address: booking.address,
                    booking_date: booking.booking_date,
                    status: status,
                    transfer_proof: booking.transfer_proof
                };
            });

            res.status(200).json({
                message: "Menampilkan data booking untuk halaman order-paket-trip",
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
        let sql = await  `SELECT tbl_destination.image_url, tbl_destination.name, tbl_destination.price, 
         tbl_bookings.id_booking, tbl_bookings.id_user, tbl_bookings.id_destinations, tbl_users.name, tbl_bookings.phone,
         tbl_bookings.address, tbl_bookings.booking_date, tbl_bookings.status, tbl_bookings.transfer_proof  
         FROM tbl_destination, tbl_bookings, tbl_users
         WHERE tbl_destination.id = tbl_bookings.id_destinations AND tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_booking = ${id}`

        //eksekusi query 
        db.query(sql, (error,result) => {
            if (error) {
                console.log("Terjadi Error di getAllBookings controller", error);
                return res.status(500).json({ error: error.message });
            }

            const data = result.map(booking => {
                let status;
                if (booking.status === 0) {
                    status = "Processing";
                } else if (booking.status === 1) {
                    status = "Delivered";
                } else if (booking.status === 2) {
                    status = "Cancelled";
                }
                return {
                    id_booking: booking.id_booking,
                    id_user: booking.id_user,
                    id_destination: booking.id_destinations,
                    destination_name: booking.name, 
                    destination_image: booking.image, 
                    destination_price: booking.price, 
                    name: booking.name,
                    phone: booking.phone,
                    address: booking.address,
                    booking_date: booking.booking_date,
                    status: status,
                    transfer_proof: booking.transfer_proof
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
         let sql = await  `SELECT tbl_destination.image_url, tbl_destination.name, tbl_destination.price, 
         tbl_bookings.id_booking, tbl_bookings.id_user, tbl_bookings.id_destinations, tbl_users.name, tbl_bookings.phone,
         tbl_bookings.address, tbl_bookings.booking_date, tbl_bookings.status, tbl_bookings.transfer_proof  
         FROM tbl_destination, tbl_bookings, tbl_users
         WHERE tbl_destination.id = tbl_bookings.id_destinations AND tbl_bookings.id_user = tbl_users.id_user AND tbl_bookings.id_user = ${id}`
 
         //eksekusi query 
         db.query(sql, (error,result) => {
             if (error) {
                 console.log("Terjadi Error di getAllBookings controller", error);
                 return res.status(500).json({ error: error.message });
             }
 
             const data = result.map(booking => {
                 let status;
                 if (booking.status === 0) {
                     status = "Processing";
                 } else if (booking.status === 1) {
                     status = "Delivered";
                 } else if (booking.status === 2) {
                     status = "Cancelled";
                 }
                 return {
                     id_booking: booking.id_booking,
                     id_user: booking.id_user,
                     id_destination: booking.id_destinations,
                     destination_name: booking.name, 
                     destination_image: booking.image, 
                     destination_price: booking.price, 
                     name: booking.name,
                     phone: booking.phone,
                     address: booking.address,
                     booking_date: booking.booking_date,
                     status: status,
                     transfer_proof: booking.transfer_proof
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
exports.deleteBooking = async (req, res) => {
    let id = req.params.id;

    try {
        // Ambil jalur file dari database
        let sqlGetFilePath = `SELECT transfer_proof FROM tbl_bookings WHERE id_booking = ?`;
        db.query(sqlGetFilePath, id, (error, result) => {
            if (error) {
                console.log("Terjadi Error di deleteBooking controller saat mengambil jalur file", error);
                return res.status(500).json({ error: error.message });
            }

            if (result.length === 0) {
                return res.status(404).json({ message: 'Booking tidak ditemukan' });
            }

            const filePath = result[0].transfer_proof;

            // Hapus file dari sistem file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.log("Terjadi Error saat menghapus file", err);
                    return res.status(500).json({ error: err.message });
                }

                //sql untuk menghapus data booking
                let sqlDeleteBooking = `DELETE FROM tbl_bookings WHERE id_booking = ?`;

                //eksekusi query untuk menghapus data booking
                db.query(sqlDeleteBooking, id, (error, result) => {
                    if (error) {
                        console.log("Terjadi Error di deleteBooking controller", error);
                        return res.status(500).json({ error: error.message });
                    }

                    res.status(200).json({
                        message: `Berhasil menghapus booking pada id_booking = ${id}`,
                        data: result
                    });
                });
            });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

