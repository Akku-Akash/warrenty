import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./news_data.css"
export default function INdividual_data() {
  const {id} = useParams()
  const [news, setNews] = useState("")
  useEffect(()=>{
    call()
    
  },[])

  function call(){
    axios.get(`http://localhost:2345/${id}`).then((res)=>{
      
    
      setNews(res.data)
    })
  }
  console.log(news)
  

  return (
    <div> 
      <img src= {news.image} alt="" className="img" />
      <h2>{news.title}</h2>
      <p>{news.content}</p> 
      <p>{news.description}</p>
      <a href= {news.url}>click here for more</a>
    </div>
  )
}
