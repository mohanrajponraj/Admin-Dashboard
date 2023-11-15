const mongoose = require('mongoose')
const Sensorschema = new mongoose.Schema({
       sensor1 : Number,
       sensor2: Number,
       sensor3: Number,
       sensor4: Number
})
const SensorModel = mongoose.model("sensors",Sensorschema)
module.exports = SensorModel


