const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel =require('./models/Employee')
const UserModel = require('./models/Table')
const SensorModel = require('./models/Sensors')

const app =express()
app.use(express.json())
app.use(cors())  

mongoose.connect("mongodb://127.0.0.1:27017/employee");
app.post("/login",(req,res)=>{ 
    const {email, password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if (user) {
            if (user.password === password){
                res.json("success")
            } else{
                res.json("the passoword is incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
     .catch(err => res.json(err))
console.log("")
})

app.get('/getTable', async (req, res) => {
 //
 UserModel.find()
 .then(users => res.json(users))
 .catch(err => res.json(err))
});

app.get('/getSensors', async (req,res)=>{
    SensorModel.find().sort({_id:-1})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.listen(3001,()=> {
    console.log("server is Run")
})