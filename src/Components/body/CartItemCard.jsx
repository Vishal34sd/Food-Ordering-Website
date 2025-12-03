import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../utils/cartSlice'; 


const CDN_URL = import.meta.env.VITE_CDN_URL;

const CartItemCard = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  if (!item) return null;

  const { name, price, defaultPrice, imageId } = item;

  // --- STYLES ---
  const itemContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    fontSize: '14px',
    color: '#282c3f',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginRight: '20px',
  };

  const itemDetailsStyle = {
    flexGrow: 1,
  };

  const itemNameStyle = {
    fontWeight: 600,
    marginBottom: '8px',
  };

  const itemPriceStyle = {
    fontSize: '13px',
  };

  const quantityControlStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90px',
    height: '34px',
    border: '1px solid #d4d5d9',
    color: '#60b246',
    fontWeight: '600',
  };

  const buttonStyle = {
    width: '30px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#bebfc5',
  };

  const plusButtonStyle = { ...buttonStyle, color: '#60b246' };

  return (
    <div style={itemContainerStyle}>
      <img
        style={imageStyle}
        src={CDN_URL + imageId}
        alt={name}
      />
      <div style={itemDetailsStyle}>
        <div style={itemNameStyle}>{name}</div>
        <div style={itemPriceStyle}>₹{((price || defaultPrice) / 100).toFixed(2)}</div>
      </div>
      <div style={quantityControlStyle}>
        <button style={buttonStyle} onClick={() => handleRemoveItem(item)}>-</button>
        <span>{quantity}</span>
        <button style={plusButtonStyle} onClick={() => handleAddItem(item)}>+</button>
      </div>
    </div>
  );
};

export default CartItemCard;