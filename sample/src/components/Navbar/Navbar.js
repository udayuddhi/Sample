import React from 'react'
import { NavLink }  from 'react-router-dom'
import "./Nav.css"



function Navbar() {
  return (
    <div>
        <nav className="nav">
            <NavLink to="/" exact="true" className="site-title">
            Sample
            </NavLink>
            <ul>
            <NavLink to="/" exact="true">Home</NavLink>

                <NavLink to="/ContactUs" exact="true">ContactUs</NavLink>
                <NavLink to="/about" exact="true">About</NavLink>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar;





