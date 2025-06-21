const { getEmployee, addEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.controller")

const router = require("express").Router()

router
    .get("/", getEmployee)
    .post("/create", addEmployee)
    .put("/modify/:id", updateEmployee)
    .delete("/remove/:id", deleteEmployee)

module.exports = router