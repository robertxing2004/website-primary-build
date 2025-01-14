import React from "react";

import "../css/Projects.css";
import A32NX from '../assets/a32nx.png';
import FadeIn from 'react-fade-in';
import ProjectHighlight from "./ProjectHighlight";

class Projects extends React.Component {
  render() {
    return(
      <FadeIn>
        <div className="projects" id="projects">
          <div className="project-title">
            <h2>| projects & contributions</h2>
          </div>
          <div className="project-content">
            <div className="project-highlights">
              <ProjectHighlight title={"FLYBYWIRE SIMULATIONS"} desc={"the most popular open-source airliners for microsoft flight simulator"} link={"https://github.com/flybywiresim/aircraft"} image={A32NX}>
              </ProjectHighlight>
            </div>
            <div className="project-cards">
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Projects;