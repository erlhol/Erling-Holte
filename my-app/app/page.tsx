import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Experience />
      <Projects />
      <ColorSchemeToggle />
    </>
  );
}
