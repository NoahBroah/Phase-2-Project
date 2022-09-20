import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <img src="NK-Logo.jpg" className="logo" />
        <h2>Noah King</h2>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" exact>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviewslist" exact>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
