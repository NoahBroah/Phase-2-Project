import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <nav>
      <iframe className="logo" src="https://embed.lottiefiles.com/animation/117571"></iframe>
        <h1><span>Noah King</span></h1>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" exact>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviewslist" exact>
              Testimonials
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
