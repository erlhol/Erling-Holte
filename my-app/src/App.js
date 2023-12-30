import './App.css';
import { useState } from 'react';
import Navigation from './components/common/Navigation';
import AboutMe from './pages/AboutMe';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Work from './pages/Work';
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
