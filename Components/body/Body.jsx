import React from 'react'
import Card from './Card'
import {foodData} from "../../utils/foodData"
import {useState} from "react";

const Body = () => {
 const [Data , setData] = useState(foodData);
 const topRatingData = ()=>{
  const filterData = Data.filter((item)=>(item.rating>4.5));
  setData(filterData);
 }
  return (
    <div outer-container>
       <div className = "search">
      <button onClick = {topRatingData}>Top Rated Restaurants</button>
    </div>
     <div className = "inner-container">
      {Data.map((items)=>(
        <Card key = {items.id} data = {items}/>
      ))}

    </div>
    </div>
  )
}

export default Body
