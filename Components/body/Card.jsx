import React from 'react'

const Card = ({data}) => {
  
  return (
    <div className = "card-container">
        <div className = "res-img">
      <img src = {data.dishImage}></img>
      </div>
      <h3>{data.dishName}</h3>
      <h3>{data.origin}</h3>
      <h5>{data.rating } ⭐</h5>
      <h5>{data.timeToReach}</h5>
    </div>
  )
}

export default Card
