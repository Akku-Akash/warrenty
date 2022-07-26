const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema (
{
    title: {type : String, require : true} ,
    description: {type : String, require : true}  ,
    content: {type : String, require : true} ,
    url: {type : String, require : true} ,
    image: {type : String, require : true} ,
    publishedAt: {type : String, require : true} ,
    source: {
        "name": {type : String, require : true} ,
        "url": {type : String, require : true} ,
    }
},
{
  versionKey : false,
  timestamps : true
  }
    
);

module.exports = mongoose.model("News", newsSchema)