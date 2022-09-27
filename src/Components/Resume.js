import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <div>
      <div>
        <h3>My first project</h3>
        <video width="640" height="480" controls>
          <source src="giphy.mp4" type="video/mp4" />
        </video>
        <p>created using Vanilla JavaScript and HTML</p>
      </div>

      <div>
        <h4>Follow me on my Socials!</h4>
        <a className="social-media-icons" href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="social-media-icons" href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="social-media-icons" href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-media-icons" href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a className="social-media-icons" href="https://github.com/NoahBroah">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Resume;
