// server.js file code::


require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/database/db');
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// cors({
//     origin: "http://localhost:5173",
//     credentials: true
// });
// app.use(cookieParser());

connectDB();

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000 🏃🏃`);
})