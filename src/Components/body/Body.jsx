import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // ← import Link
import Card from './Card';
import Shimmer from '../Shimmer';
import useNetworkStatus from '../../utils/useNetworkStatus';
import OfflineError from '../OfflineError';
import { withTrendyLabel } from './Card';

const API_KEY = import.meta.env.VITE_SWIGGY_API;

 const RestroCardTrendy =  withTrendyLabel(Card);

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
      const response = await fetch(API_KEY);
      const json = await response.json();
      console.log(json);

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
    const filterData = Data.filter((item) => item.info?.avgRating > 4.5);
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
          <input className='search-bar'
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={searchHandler}>Search</button>
        </div>
        <button  className = "top-rated-restro" onClick={topRatingData}>Top Rated Restaurants</button>
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
          filteredData.map((items) => (
            <Link
              key={items.info.id}
              to={`/restaurant/${items.info.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
             {items.info.availability.opened?<RestroCardTrendy data={ items}/>: <Card data={items} />}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
