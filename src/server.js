const express = require("express");
const connectDB = require('./config/db');
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`server running on port ${PORT}`);
});