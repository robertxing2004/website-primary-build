import React from "react";

import "../css/About.css";
import resume from '../assets/resume.pdf';
import FadeIn from 'react-fade-in';

class About extends React.Component {
  render() {
    return(
      <FadeIn>
        <div className="about" id="about">
          <div className="about-title">
            <h2>| about me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm currently in third year at Western University studying<br/>
                software engineering and business, pursuing the Ivey HBA<br/>
                dual degree program.
              </p>
              <p>
                Aside from school and work, I enjoy travelling all over the world and<br/>
                taking lots of photos! I also have a huge love for aviation, and I hope<br/>
                to get my Canadian private pilot's license in the (hopefully) near future.
              </p>
              <p>
                I'm looking to pursue a career in tech, and I'm mainly<br/>
                interested in fullstack development, project management, autonomous vehicles.<br/>
                At the moment I'm looking for summer (May-August) co-op and internship <br/>opportunities.
                You can view my current resume <a href ={ resume } target="_blank" rel="noreferrer">here</a>.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default About;