import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";


const CartItemCard = ()=>{

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "16px 0",
    borderBottom: "1px solid #ddd",
    fontFamily: "Arial, sans-serif",
  };

  const textContainerStyle = {
    width: "70%",
    paddingRight: "16px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#333",
  };

  const priceStyle = {
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#444",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const imageWrapperStyle = {
    width: "112px",
    position: "relative",
  };

  const imageContainerStyle = {
    width: "100%",
    height: "96px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const addButtonStyle = {
    position: "absolute",
    bottom: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    color: "#28a745",
    border: "1px solid #ccc",
    padding: "4px 16px",
    fontSize: "13px",
    borderRadius: "4px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      
      <div style={textContainerStyle}>
        <h3 style={titleStyle}>{name}</h3>
        <h4 style={priceStyle}>₹{(price || defaultPrice) / 100}</h4>
        <p style={descriptionStyle}>{description}</p>
      </div>

    
      <div style={imageWrapperStyle}>
        <div style={imageContainerStyle}>
          <img src={CDN_URL + imageId} alt={name} style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
