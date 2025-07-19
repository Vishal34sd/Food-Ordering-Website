import React from "react";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "20px",
  };

  const cardStyle = {
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    border: "1px solid #ffcc99",
    borderRadius: "16px",
    padding: "40px 20px",
    boxShadow: "0 4px 12px rgba(255, 165, 0, 0.2)",
  };

  const iconStyle = {
    fontSize: "60px",
    color: "#ff6600",
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px",
  };

  const buttonStyle = {
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#e65c00";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#ff6600";
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={iconStyle}>✅</div>
        <h1 style={headingStyle}>Order Placed!</h1>
        <p style={textStyle}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <button
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
