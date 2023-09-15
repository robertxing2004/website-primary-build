import React from "react";

import "../css/ProjectCard.css";
import FadeIn from 'react-fade-in';

function ProjectCard({title, image}) {
  return(
    <FadeIn>
      <div className="container">
        <img src={image} alt=""/>
        <h2>{title}</h2>
      </div>
    </FadeIn>
  )
}

export default ProjectCard;
