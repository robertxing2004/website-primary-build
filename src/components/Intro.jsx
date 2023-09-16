import React from "react";

import "../css/Intro.css";
import FadeIn from 'react-fade-in';

class Intro extends React.Component {
  render() {
    var ReactRotatingText = require('react-rotating-text');
    return (
      <FadeIn>
        <div className="intro" id="home">
          <div className="intro-text">
            <div className="intro-title">
              <h1>hi! i'm <span>robert</span></h1>
              <p>and i'm a <ReactRotatingText color={"#00E0FF"} emptyPause={500} items={['student', 'software developer', 'designer', 'photographer', 'traveler', ]} /></p>
            </div>
            <div className="intro-body">
              I'm a software engineering student and photographer based<br/>in Waterloo, Ontario.
              My current interests are in fullstack development,<br/> machine learning, project management, and UI/UX design.
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Intro;