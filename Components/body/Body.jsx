import React from 'react'
import Card from './Card'
import { foodData } from "../../utils/foodData"
import { useState, useEffect } from "react";
import Shimmer from '../Shimmer';

const Body = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText , setSearchText] = useState("");
  const [filteredData , setFilteredData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(foodData);  // we keep the copy of all data in data and use filtered data to display search result
      setFilteredData(foodData);
      setLoading(false);
    }, 1000)
  }, []);

  const topRatingData = () => {
    const filterData = Data.filter((item) => (item.rating > 4.5));
    setFilteredData(filterData);
  }

  const searchHandler = ()=>{
    const filter = Data.filter((res)=>{
       return res.resName.toLowerCase().includes(searchText.toLowerCase());
    });
     setFilteredData(filter);
  }
  return (
    <div className="outer-container">
      <div className="outer-div">
        <div className="inner-div">
          <div><input type="text" placeholder="Search for restaurants" value = {searchText} onChange = {(e)=>{
            setSearchText(e.target.value);
          }}>
          </input></div>
          <button onClick={searchHandler}>Search</button>
        </div>
        <button onClick={topRatingData}>Top Rated Restaurants</button>
      </div>
      <div className="inner-container">
        {loading ? (
          <Shimmer />
        ) : (filteredData.length=== 0)?(
          <div className = "no-data">
          <h1 style={{marginLeft:"100px", marginTop :"50px", fontFamily:"serif"}}>Sorry! No data found</h1></div>
        ):
          filteredData.map((items) => (
            <Card key={items.id} data={items} />
          ))}

      </div>
    </div>
  )
}

export default Body
