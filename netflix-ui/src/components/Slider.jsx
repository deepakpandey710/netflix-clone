import React from "react"
import CardSlider from "./CardSlider"

export default function Slider({ movies }) {
  const getMovieRange =(from, to)=>{
    return movies.slice(from,to);
  }
  return (
    <div>
      <CardSlider title="Trending Now" data={getMovieRange(0,10)}/>
      <CardSlider title="New Releases" data={getMovieRange(10,20)}/>
      <CardSlider title="Blockbuster" data={getMovieRange(20,30)}/>
      <CardSlider title="Popular On Netflix" data={getMovieRange(30,40)}/>
      <CardSlider title="Action" data={getMovieRange(40,50)}/>
      <CardSlider title="Epics" data={getMovieRange(50,60)}/>
    </div>
  )
};

