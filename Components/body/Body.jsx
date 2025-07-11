import React, { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from '../Shimmer';
const API_KEY = import.meta.env.VITE_SWIGGY_API;


const Body = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        API_KEY
      );
      const json = await response.json();
      console.log(json);

      // Safely access deeply nested property
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (Array.isArray(restaurants)) {
        setData(restaurants);
        setFilteredData(restaurants);
      } else {
        console.warn('Restaurants not found or invalid format');
        setData([]);
        setFilteredData([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setLoading(false);
    }
  };

  const topRatingData = () => {
    const filterData = Data.filter((item) => item.info?.avgRating > 4.0);
    setFilteredData(filterData);
  };

  const searchHandler = () => {
    const filter = Data.filter((res) => {
      return (
        res.info?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        res.info?.cuisines?.join(', ').toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredData(filter);
  };

  return (
    <div className="outer-container">
      <div className="outer-div">
        <div className="inner-div">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button onClick={topRatingData}>Top Rated Restaurants</button>
      </div>
      <div className="inner-container">
        {loading ? (
          <Shimmer />
        ) : filteredData.length === 0 ? (
          <div className="no-data">
            <h1 style={{ marginLeft: '100px', marginTop: '50px', fontFamily: 'serif' }}>
              Sorry! No data found
            </h1>
          </div>
        ) : (
          filteredData.map((items) => <Card key={items.info.id} data={items} />)
        )}
      </div>
    </div>
  );
};

export default Body;
