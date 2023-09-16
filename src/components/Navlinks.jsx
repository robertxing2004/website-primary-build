import React from "react";

import "../css/Navlinks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import FadeIn from 'react-fade-in';

class Navlinks extends React.Component {
  render() {
    return (
      <FadeIn>
        <div className="menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">| home</a>
              <a href="#about" className="nav-link">| about</a>
              <a href="#projects" className="nav-link">| projects</a>
              <a href="#contact" className="nav-link">| contact</a>
            </li>
          </ul>
          <div className="intro-icons">
            <a href="https://github.com/robertxing2004" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faGithub } />
            </a>
            <a href="https://www.linkedin.com/in/robertxing2004/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={ faLinkedin } />
            </a>
            <a href="mailto:robertxing2004@gmail.com">
              <FontAwesomeIcon icon={ faSquareEnvelope } />
            </a>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Navlinks;