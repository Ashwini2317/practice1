const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("path")

const app = express()
app.use(express.static("dist"))
app.use(express.json())//body parser
app.use(cors({ origin: "https://practice1-vgd4.onrender.com" }))
app.use("/api/employee", require("./routes/employee.routes"))
mongoose.connect(import.meta.env.VITE_URL)//database la connect karaychi command
mongoose.connection.once("open", () => {
    console.log("db connected");
    app.listen(5000, console.log("server running"));// server open caraychi command nodemon takych
})
