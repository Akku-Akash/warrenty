const express = require("express")
const app = express()
const connect = require("./configs/db")
const controller = require("./controller/newsController")
const cors = require(("cors"))
app.use(express.json())
app.use(cors())
app.use("", controller)

app.listen(2345, async function(){
    try{
        await connect()
       console.log("Listening on port 2345")
    }catch(err){
          console.log(err.message)
    }
})