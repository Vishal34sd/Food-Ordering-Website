import React from 'react';
import NewMenuEachCard from './NewMenuEachCard';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div>
        <h3>Your Cart</h3>
        <div>
          {cartItems.map((item) => (
            <CartItemCart key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;