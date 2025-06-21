const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())//body parser
app.use(cors({ origin: "http://localhost:5173" }))
app.use("/api/employee", require("./routes/employee.routes"))
mongoose.connect("mongodb://localhost:27017/employee")//database la connect karaychi command
mongoose.connection.once("open", () => {
    console.log("db connected");
    app.listen(5000, console.log("server running"));// server open caraychi command nodemon takych
})
