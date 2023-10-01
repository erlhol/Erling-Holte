import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Work from './components/Work';

function App() {

  const [activePage, setActivePage] = useState("About me");

    function activePageHandler(page) {
        setActivePage(page);
    }

  return (
    <div className="App">

    <Navigation pageHandler={activePageHandler}></Navigation>
    <div>
      {activePage === "About me" && <AboutMe></AboutMe>}
      {activePage === "My projects" && <Projects></Projects>}
      {activePage === "Education" && <Education></Education>}
      {activePage === "Work" && <Work></Work>}
    </div>
    
    <footer>
      <p>Måter du kan kontakte meg på: </p>
      <a href="mailto:erlinhol@uio.no">Mail</a>
    </footer>
    </div>
  );
}

export default App;
