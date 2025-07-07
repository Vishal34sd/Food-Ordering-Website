import React from 'react'

const Card = ({data}) => {
  
  return (
    <div className = "card-container">
        <div className = "res-img">
      <img src = {data.dishImage}></img>
      </div>
      <h3>{data.dishName}</h3>
      <h3>{data.origin}</h3>
      <h3>{data.rating}</h3>
      <h3>{data.timeToReach}</h3>
    </div>
  )
}

export default Card
