import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItemCard from './CartItemCard';
import { clearCart } from '../../utils/cartSlice'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Group items by ID and count their quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { item: item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const itemsToRender = Object.values(groupedItems);
  const totalAmount = itemsToRender.reduce((total, { item, quantity }) => {
    return total + ((item.price || item.defaultPrice) / 100) * quantity;
  }, 0);

  const playSound = ()=>{
    const sound = new Audio("/success.mp3");
    sound.play();
    alert("Confirm order");
    dispatch(clearCart());
  }

  

  // --- STYLES ---
  const cartContainerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #f0f0f5',
    paddingBottom: '15px',
  };

  const clearCartBtnStyle = {
    backgroundColor: '#db4f4f',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const emptyCartStyle = {
    textAlign: 'center',
    padding: '50px 0',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #f0f0f5',
    fontWeight: '600',
  };

  const checkoutBtnStyle = {
    backgroundColor: '#60b246',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  if (itemsToRender.length === 0) {
    return (
      <div style={cartContainerStyle}>
        <div style={emptyCartStyle}>
          <h2>Your cart is empty</h2>
          <p>You can go to the home page to view more restaurants</p>
        </div>
      </div>
    );
  }

  return (
    <div style={cartContainerStyle}>
      <div style={headerStyle}>
        <h2>Cart ({cartItems.length} items)</h2>
        <button style={clearCartBtnStyle} onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>
        {itemsToRender.map(({ item, quantity }) => (
          <CartItemCard key={item.id} item={item} quantity={quantity} />
        ))}
      </div>
      <div style={footerStyle}>
        <span>TO PAY</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
       <div style={{textAlign: "center", marginTop: "20px"}}>
         <Link to ="/order"><button style={checkoutBtnStyle} onClick={playSound}>PROCEED TO CHECKOUT</button></Link>
       </div>
    </div>
  );
};

export default Cart;