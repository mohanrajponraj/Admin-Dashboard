const mongoose = require('mongoose')
const Employeeschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String 

})
const EmployeeModel = mongoose.model("employee",Employeeschema)
module.exports= EmployeeModel