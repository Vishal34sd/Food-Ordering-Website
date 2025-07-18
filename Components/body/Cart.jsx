import React from 'react';
import Header from '../Header';
import NewMenuEachCard from './NewMenuEachCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <Header />
      <div>
        <h3>Your Cart</h3>
        <div>
          {cartItems.map((item, index) => (
            <NewMenuEachCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
