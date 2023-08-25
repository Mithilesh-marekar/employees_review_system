const mongoose = require("mongoose");

// Connection to mongodb.
// mongoose.connect("mongodb+srv://kunaldeepers:ManCc4IC9t1a5bNO@cluster2.ozsiaoz.mongodb.net/?retryWrites=true&w=majority"); 
mongoose.connect("mongodb+srv://mithileshmarekar01:Xr6CzO4X5oTt2r6M@cluster0.g0vsrq5.mongodb.net/"); 
// mongoose.connect("mongodb://0.0.0.0:27017/employee_review_system"); //local


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to Database");
});

// exporting the connection.
module.exports = db;
