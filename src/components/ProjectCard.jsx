import React from "react";

import "../css/ProjectCard.css";

function ProjectCard({title, image}) {
  return(
    <div className="container">
      <img src={image} alt=""/>
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectCard;
