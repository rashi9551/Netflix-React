import React, { useEffect, useState } from "react";
import { API_KEY,imageUrl } from "../../Constants/Constatnt";
import axios from './../axios'
import './Banner.css'

function Banner() {
  const [movie,setMovie]=useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      console.log(response.data.results[0]);
      setMovie(response.data.results[randomIndex])
    })
  },[])
  return (
    <div className="banner" style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}>
      <div className="content">
        <h1 className="title">{movie?movie.title?movie.title:'Movie':''}</h1>
        <div className="bannerButtons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie?movie.overview:''}</h1>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;