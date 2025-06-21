const Employee = require("../models/Employee")

const getEmployee = async (req, res) => {
    const result = await Employee.find()
    res.json({ messgae: "fetch employee", result })
}
const addEmployee = async (req, res) => {
    // console.log(req.body)
    await Employee.create(req.body)
    res.json({ messgae: "add employee" })
}
const updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({ messgae: "modify employee" })
}
const deleteEmployee = async (req, res) => {
    console.log(req.params.id);
    await Employee.findByIdAndDelete(req.params.id)
    res.json({ messgae: "delete employee" })
}

module.exports = { addEmployee, deleteEmployee, getEmployee, updateEmployee }