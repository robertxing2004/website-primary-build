import background from './components/aceb.jpeg';
import me from './components/me.jpg';
import resume from './components/resume2023.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import './App.css';

var ReactRotatingText = require('react-rotating-text');


function App() {

  return (
    <div className="App" id="container">
      <div className="header" id="home">
        <nav className="nav">
          <div className="nav-container">
            <div style={{color: "white", margin: "1%"}}>
              <h4>Robert Xing</h4>
            </div>
            <div className="menu">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link">home</a>
                  <a href="#about" className="nav-link">about me</a>
                  <a href="#projects" className="nav-link">projects</a>
                  <a href="#contact" className="nav-link">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="title">
          <h3>hi! my name is</h3>
          <h1>Robert Xing</h1>
          <p>and i'm a <ReactRotatingText emptyPause={500} items={['student', 'software developer', 'photographer', 'traveler', ]} /></p>
        </div>
        <div className="icons">
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
        <img class="header img" src={ background } alt=""/>
      </div>
      





      {/*===== ABOUT ME =====*/}





      <div className="about" id="about">
        <div className="about-title">
          <h2>about me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm currently a first year engineering student at <a href="https://www.uwo.ca" target="_blank" rel="noreferrer">Western University</a><br/>
              studying software engineering and hoping to pursue the <a href="https://www.ivey.uwo.ca/hba/" target="_blank" rel="noreferrer">Ivey HBA</a><br/>
              dual degree program.
            </p>
            <p>
              Aside from school and work, I enjoy travelling all over the world and<br/>
              taking lots of photos! I also have a huge love for aviation, and I hope<br/>
              to get my Canadian private pilot's license once I have the time and<br/>
              money (lol) to do so!
            </p>
            <p>
              I'm looking to pursue a career in software development, and I'm mainly<br/>
              interested in fullstack development, iOS development, and UI/UX design.<br/>
              At the moment I'm looking for summer co-op and internship opportunities.<br/>
              You can view my current resume <a className="resume" href ={ resume } target="_blank" rel="noreferrer">here</a>.
            </p>
          </div>
          <div>
            <img className="me" src={ me } alt=""/>
          </div>
        </div>
      </div>
      



      
      {/*===== PROJECTS =====*/}





      <div className="projects" id="projects">
        <div className="project-title">
          <h2>projects</h2>
        </div>
        <div className="project-content">
          <div className="project-carousel">
            
          </div>
          <div className="project-cards">

          </div>
        </div>
      </div>





      {/*===== FOOTER =====*/}




      
      <div className="footer">
        <div className="footer-content">
          <p>designed and built by Robert Xing<br/>
          all rights reserved. &copy; {(new Date().getFullYear())}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
