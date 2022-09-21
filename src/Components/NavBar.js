import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faMedium, faTwitter } from "@fortawesome/free-brands-svg-icons"

function NavBar() {
  return (
    <div>
      <nav className="logo">
        <a href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
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
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
