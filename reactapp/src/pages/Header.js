import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Header.css";



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/Read" className="nav-logo">
            eReadX
            
          </NavLink>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                exact
                to="/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

           
            <li className="nav-item">
              <NavLink
                exact
                to="/Library"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Library
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Favourites"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Favourites
              </NavLink>
            </li>
           
            
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;