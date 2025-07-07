import React from 'react'

const Header = () => {
  return (
    <div className = "header">
      <div className = "img-div">
        <img src= "website-logo.jpeg"></img>
      </div>
        <div className = "nav-list">
            <ul className = "ul-container">
                <li>Home </li>
                <li>Services </li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart </li>
            </ul>
        </div>
    </div>
  )
}

export default Header
