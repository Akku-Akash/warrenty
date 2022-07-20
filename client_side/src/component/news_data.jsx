import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "./news_data.css"
import { Link, useNavigate } from 'react-router-dom'
export default function News_data() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
     axios.get("http://localhost:2345").then((res)=>{
        setData(res.data)
     })
    },[])
    const handleclick =()=>{
        navigate()
        console.log("clicked")
    }
    console.log(data)
  return (
    <div>
        <h1>Click on image to Read full article</h1>
    {data.map((e)=>{
        return(
            <div className='main' key={e._id}>
                <div id='dete'>
                <img id='images' src={e.image} alt=""  onClick={handleclick} />
                <h2>{e.title}</h2>
                
                </div>
                
                
                 <p>{e.content}</p> 

            </div>
        )
    })}
    </div>
    
  )
}
