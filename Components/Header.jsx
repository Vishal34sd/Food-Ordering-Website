import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useNetworkStatus from '../utils/useNetworkStatus';
import { userInfo } from '../utils/useContext';

const Header = () => {
  const [login, setLogin] = useState("Login");
  const cartItem = useSelector((store) => store.cart.items);
  const networkStatus = useNetworkStatus();
  const { loggedInUser } = useContext(userInfo);

  const changeToLogout = () => {
    setLogin("Logout");
  };

  return (
    <div className="header">
      <div className="logo-div">
        <h1>Foodie-Hut</h1>
      </div>
      <div className="nav-list">
        <ul className="ul-container">
          {/* Other nav items remain the same */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart ({cartItem.length} items)</Link></li>
          <li><button className="login" onClick={changeToLogout}>{login}</button></li>

          {/* User Info and Status Aligned Vertically */}
          <li>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
              <span style={{ fontWeight: 'bold' }}>{loggedInUser}</span>
              <span style={{ fontSize: '0.8em' }}>
                {networkStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;