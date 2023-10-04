import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {

  function activePageHandler(page) {
      setActivePage(page);
  }

  const [activePage, setActivePage] = useState('about');

  return (
    <div className="App">
    
    <Navigation pageHandler={activePageHandler}></Navigation>
    <div>
      {activePage === 'about' && <AboutMe></AboutMe>}
      {activePage === 'my_projects' && <Projects></Projects>}
      {activePage === 'education' && <Education></Education>}
      {activePage === 'work' && <Work></Work>}
    </div>
    
    <footer>
      <Contact></Contact>
    </footer>
    </div>
  );
}

export default App;

// TODO: make a quiz about myself
// The answers must be stored on the server
