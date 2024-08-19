import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import Projects from './pages/Projects';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Projects />
      <ColorSchemeToggle />
    </>
  );
}
