import React from 'react'

const MenuEachCard = ({data}) => {

    const {name, category , description , price}= data.card.info ;
    
    const cardStyle = {
    backgroundColor: "white",
    border: "1px solid #ffe0cc",
    borderRadius: "15px",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(255, 165, 0, 0.2)",
    transition: "transform 0.2s ease"
  };

  const cardImageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "0.8rem"
  };

  const cardTitleStyle = {
    fontSize: "1.2rem",
    color: "#ff6600"
  };

  const cardTextStyle = {
    fontSize: "0.95rem",
    margin: "0.5rem 0"
  };

  const priceStyle = {
    marginTop: "0.5rem",
    fontWeight: "bold",
    color: "#d35400",
    fontSize: "1rem"
  };
  return (
    <div style={cardStyle}>
           
            <h3 style={cardTitleStyle}>{name}</h3>
            <p >{category}</p>
            <span >₹{price/100}  </span>
          </div>
  )
}

export default MenuEachCard
