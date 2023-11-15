const mongoose= require ('mongoose')
const UserSchema =new  mongoose.Schema({
       
})

const UserModel = mongoose.model("tables",UserSchema)
module.exports = UserModel