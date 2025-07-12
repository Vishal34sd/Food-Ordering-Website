import React from 'react' 
const CDN_URL = import.meta.env.VITE_CDN_URL;

const Card = ({data}) => {
  const { name, cuisines , avgRating  ,cloudinaryImageId,  sla , locality}  = data.info ;
  return (
    <div className="card-container">
      <div className="res-img">
        <img src={CDN_URL + cloudinaryImageId} alt={name} />
      </div>
      <h3>{name}</h3>
      <h5>{cuisines.join(', ')}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{sla.slaString}</h5>
      <h5>{locality}</h5>
    </div>
  )
}

export default Card
