import { useEffect } from 'react';
import { useCurrentHash } from './hooks/useCurrentHash';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { ComingSoon } from './pages/ComingSoon';

function App() {
  const currentPath = useCurrentHash();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Strip query parameters to get the base hash path
  const normalizedPath = currentPath.split('?')[0];

  if (normalizedPath === '' || normalizedPath === '#/') {
    return <Home />;
  }

  if (normalizedPath === '#/about') {
    return <About />;
  }

  if (normalizedPath === '#/events') {
    return <ComingSoon title="Events" />;
  }

  if (normalizedPath === '#/schedule') {
    return <ComingSoon title="Schedule" />;
  }

  if (normalizedPath === '#/sponsors') {
    return <ComingSoon title="Sponsors" />;
  }

  if (normalizedPath === '#/contact') {
    return <Contact />;
  }

  // Fallback for any unmatched route
  return <NotFound />;
}

export default App;
