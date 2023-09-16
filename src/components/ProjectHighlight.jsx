import React from "react";

import "../css/ProjectHighlight.css";
import FadeIn from 'react-fade-in';

function ProjectHighlight({title, desc, link, image}) {
  return(
    <FadeIn>
      <div className="container">
        <div className="card-text">
          <p>{title}</p>
          <h3>{desc}</h3>
          <a href={link} target="_blank" rel="noreferrer">VIEW PROJECT</a>
        </div>
        <div className="card-thumbnail">
          <img src={image} alt=""/>
        </div>
      </div>
    </FadeIn>
  );
}

export default ProjectHighlight;
