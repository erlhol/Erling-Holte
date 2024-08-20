import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import React from 'react';
import Education from './pages/Education/Education';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Experience />
      <Projects />
      <Education />
      <ColorSchemeToggle />
    </>
  );
}
