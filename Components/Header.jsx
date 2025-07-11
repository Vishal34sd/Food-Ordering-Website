import React from 'react'
import {useState} from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [login , setLogin] = useState("Login");

  const changeToLogout = ()=>{
    setLogin("Logout");
  }
  return (
    <div className = "header">
      <div className = "logo-div">
        <h1>Foodie-Hut</h1>
      </div>
        <div className = "nav-list">
            <ul className = "ul-container">
                <li><Link to ="/" style={{ textDecoration: 'none', color: 'yellow' }}>Home</Link> </li>
                <li><Link to ="/contact" style={{ textDecoration: 'none', color: 'yellow' }}>Contact Us</Link> </li>
                <li><Link to ="/about" style={{ textDecoration: 'none', color: 'yellow' }}>About Us</Link> </li>
                
                <li>Cart </li>
                <li><button className = "login" onClick = {changeToLogout}>{login}</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
