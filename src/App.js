import background from './background.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header" id="home">
        <nav class="nav">
          <div class="nav-container">
            <div class="logo">
              <h3>Robert Xing</h3>
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
        <img class="header img" src={ background } alt=""/>
        <div class="home">
          <h3>Hi! My name is</h3>
          <h1>Robert Xing</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
