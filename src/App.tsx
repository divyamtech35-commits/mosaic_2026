import { useState, useEffect } from 'react';
import { useCurrentHash } from './hooks/useCurrentHash';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  const currentPath = useCurrentHash();

  if (currentPath.startsWith('#/about')) {
    return <About />;
  }

  return <Home />;
}

export default App;
