import React from "react";

import "../css/ProjectHighlight.css";

function ProjectHighlight({title, desc, link, image}) {
  return(
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
  );
}

export default ProjectHighlight;
