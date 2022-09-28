import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
        <a className="social-media-icons" href="https://www.linkedin.com/in/noah-king-780410166/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="social-media-icons" href="https://www.instagram.com/noah_broah/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-media-icons" href="https://medium.com/@noahking123">
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a className="social-media-icons" href="https://twitter.com/Noah_Broah">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default Resume;
