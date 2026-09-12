const dns = require("node:dns");

const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser')

const authRoute = require('./routes/auth.routes');


dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);



module.exports = app;