const { default: mongoose } = require("mongoose")


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Akku:Akash12@cluster0.i3rqhgf.mongodb.net/?retryWrites=true&w=majority")
}