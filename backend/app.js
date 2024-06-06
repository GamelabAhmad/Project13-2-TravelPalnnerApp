const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const user = require('./router/userRouter');

//Express
const app = express();
const port = process.env.port || 3000;

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Konfigurasi CORS 
const corsOptions = {
    origin : "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Terapkan middleware CORS dengan opsi yang telah ditentukan
app.use(cors(corsOptions));

app.use('/auth',user);

//insisalisasi server
app.listen(port, () => {
    console.log(`Berjalan di http://localhost:${port}`);
});