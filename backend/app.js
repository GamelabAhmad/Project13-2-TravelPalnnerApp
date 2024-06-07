const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const auth = require('./router/authRouter');
const user = require('./router/userRouter');
const booking = require('./router/bookingRouter');
const forgotPassword = require('./router/forgotPasswordRouter');
const path = require('path');

//Express
const app = express();
const port = process.env.port || 3000;

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Konfigurasi CORS 
const corsOptions = {
    origin : "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Terapkan middleware CORS dengan opsi yang telah ditentukan
app.use(cors(corsOptions));

//middleware cookie-parser
app.use(cookieParser());

//middleware rute
app.use('/auth',auth);
app.use('/user', user);
app.use('/booking', booking);
app.use('/forgotPassword', forgotPassword);


//insisalisasi server
app.listen(port, () => {
    console.log(`Berjalan di http://localhost:${port}`);
});