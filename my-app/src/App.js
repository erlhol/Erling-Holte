import './App.css';
import { useState } from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import { useTranslation } from 'react-i18next';

function App() {

  const [activePage, setActivePage] = useState("About me");

  function activePageHandler(page) {
      setActivePage(page);
  }

  const { t } = useTranslation();

  return (
    <div className="App">
    
    <Navigation pageHandler={activePageHandler}></Navigation>
    <div>
      {activePage === t('about') && <AboutMe></AboutMe>}
      {activePage === t('my_projects') && <Projects></Projects>}
      {activePage === t('education') && <Education></Education>}
      {activePage === t('work') && <Work></Work>}
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
