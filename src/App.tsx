import { useEffect } from 'react';
import { useCurrentHash } from './hooks/useCurrentHash';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  const currentPath = useCurrentHash();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  if (currentPath.startsWith('#/about')) {
    return <About />;
  }

  if (currentPath.startsWith('#/contact')) {
    return <Contact />;
  }

  return <Home />;
}

export default App;
