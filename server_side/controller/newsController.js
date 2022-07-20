const express = require("express")
const News = require("../models/news.schema")

const router = express.Router()

router.get("/", async(req,res)=>{
    try{
  const news = await News.find().lean().exec()
  return res.status(200).send(news) 
    }catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.post("/add", async(req,res)=>{
    try{
      const news = await News.create(req.body)
      return res.status(200).send(news)
    }catch(err){
        return res.status(500).send({meassage : err.message})
    }
})
module.exports = router