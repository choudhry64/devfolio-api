const connectDB = require('./config/db');
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
    console.log(`server running on port ${PORT}`);
});