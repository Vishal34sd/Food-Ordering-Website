import React from 'react'
import {useState} from "react";

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
                <li onClick={()=>{ return setFilteredData(data)}}>Home </li>
                <li>Services </li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart </li>
                <li><button className = "login" onClick = {changeToLogout}>{login}</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
