import React from "react";

import './App.css';
import './css/Global.css';

import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Navlinks from './components/Navlinks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
      <Navlinks />
    </div>
  );
}

export default App;