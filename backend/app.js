const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
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

app.use('/transfer_proof', express.static(path.join(__dirname, 'transfer_proof')));


// Konfigurasi CORS 
const corsOptions = {
    origin : "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// Terapkan middleware CORS dengan opsi yang telah ditentukan
app.use(cors(corsOptions));

//middleware cookie-parser
app.use(cookieParser());

//inisialisasi passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

//middleware rute
app.use('/auth',auth);
app.use('/user', user);
app.use('/booking', booking);
app.use('/forgotPassword', forgotPassword);


//insisalisasi server
app.listen(port, () => {
    console.log(`Berjalan di http://localhost:${port}`);
});