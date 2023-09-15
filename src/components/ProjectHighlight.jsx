import React from "react";

import "../css/ProjectHighlight.css";
import FadeIn from 'react-fade-in';

function ProjectHighlight({title, desc, image}) {
  return(
    <FadeIn>
      <div className="container">
        <div className="card-text">
          <h2>{title}</h2>
          <h3>{desc}</h3>
        </div>
        <div className="card-thumbnail">
          <img src={image} alt=""/>
        </div>
      </div>
    </FadeIn>
  );
}

export default ProjectHighlight;
