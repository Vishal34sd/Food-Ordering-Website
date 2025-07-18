import React, { useContext } from 'react'
import {useState} from "react";
import { Link } from 'react-router-dom';
import useNetworkStatus from '../utils/useNetworkStatus';
import { userInfo } from '../utils/useContext';
import { useSelector } from 'react-redux';



const Header = () => {
  const [login , setLogin] = useState("Login");

  const cartItem = useSelector((store)=> store.cart.items);

  const changeToLogout = ()=>{
    setLogin("Logout");
  }
  const data = useContext(userInfo);
  const {loggedInUser} = data ;

  const networkStatus = useNetworkStatus();
  return (
    <div className = "header">
      <div className = "logo-div">
        <h1>Foodie-Hut</h1>
      </div>
        <div className = "nav-list">
            <ul className = "ul-container">
               <p> Online Status:{networkStatus ? "🟢":"🔴"}</p>
                <li><Link to ="/" style={{ textDecoration: 'none', color: 'yellow' }}>Home</Link> </li>
                <li><Link to ="/contact" style={{ textDecoration: 'none', color: 'yellow' }}>Contact Us</Link> </li>
                <li><Link to ="/about" style={{ textDecoration: 'none', color: 'yellow' }}>About Us</Link> </li>
                
                <Link to ="/cart"><li>Cart ({cartItem.length   } items)</li></Link>
                <li><button className = "login" onClick = {changeToLogout}>{login}</button></li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
