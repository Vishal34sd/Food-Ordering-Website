import React from 'react'

const Header = () => {
  return (
    <div className = "header">
      <div className = "logo-div">
        <h1>Foodie-Hut</h1>
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
