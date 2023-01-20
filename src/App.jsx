import background from './components/background.jpeg';
import me from './components/me.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header" id="home">
        <nav class="nav">
          <div class="nav-container">
            <div style={{color: "white", margin: "2%"}}>
              <h4>Robert Xing</h4>
            </div>
            <div class="menu">
              <ul class="nav-list">
                <li class="nav-item">
                  <a href="#home" class="nav-link">Home</a>
                  <a href="#about" class="nav-link">About Me</a>
                  <a href="#projects" class="nav-link">Projects</a>
                  <a href="#contact" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="title">
          <h3>Hi! My name is</h3>
          <h1>Robert Xing</h1>
        </div>
        <img class="header img" src={ background } alt=""/>
      </div>





      {/*===== ABOUT ME =====*/}





      <div class="about" id="about">
        <div class="about-title">
          <h2>About Me</h2>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>
              I'm currently a first year engineering student at Western University<br/>
              studying software engineering and hoping to pursue the Ivey HBA<br/>
              dual degree program
            </p>
            <p>
            Aside from school and work, I enjoy travelling all over the world and<br/>
            taking lots of photos! I also have a huge love for aviation, and I hope<br/>
            to get my Canadian private pilot's license once I have the time and<br/>
            money(lol) to do so!
            </p>
          </div>
          <div>
            <img class="me" src={ me } alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
