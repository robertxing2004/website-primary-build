import React from "react";

import "../css/Intro.css";
import FadeIn from 'react-fade-in';

class Intro extends React.Component {
  render() {
    var ReactRotatingText = require('react-rotating-text');
    return (
      <div className="intro" id="home">
        <div className="intro-title">
          <h1>hi! i'm robert</h1>
          <p>and i'm a <ReactRotatingText color={"#00E0FF"} emptyPause={500} items={['student', 'software developer', 'designer', 'photographer', 'traveler', ]} /></p>
        </div>
        <FadeIn>
          <div className="intro-desc">
            I'm a software engineering student and photographer based in Waterloo, Ontario.<br/>
            My current interests are in fullstack development, machine learning, project management, and UI/UX design.
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Intro;