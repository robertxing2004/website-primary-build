import React from "react";

import './App.css';
import './css/Global.css';

import Navlinks from './components/Navlinks.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Navlinks />
    </div>
  );
}

export default App;