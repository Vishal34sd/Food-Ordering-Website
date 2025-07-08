import React from 'react'
import Card from './Card'
import {foodData} from "../../utils/foodData"
import {useState , useEffect} from "react";
import Shimmer from '../Shimmer';

const Body = () => {
 const [Data , setData] = useState([]);
 const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setData(foodData);
      setLoading(false);
    },1000)
  },[]);

 const topRatingData = ()=>{
  const filterData = Data.filter((item)=>(item.rating>4.5));
  setData(filterData);

 
 }
  return (
    <div className ="outer-container">
       <div className = "search">
      <button onClick = {topRatingData}>Top Rated Restaurants</button>
    </div>
     <div className = "inner-container">
      {loading?(
        <Shimmer/>
      ):
      Data.map((items)=>(
        <Card key = {items.id} data = {items}/>
      ))}

    </div>
    </div>
  )
}

export default Body
