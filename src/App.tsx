import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import routes from './routes/Routes';
import { ThemeProviderWrapper } from './Wrappers/ThemeProvider/ThemeProviderWrapper';
import Cursortrail from './components/CursorTrail/CursorTrail';
import PreLoader from './components/PreLoader';

const router = createBrowserRouter(routes);

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProviderWrapper>
      <Cursortrail />

      <AnimatePresence mode="wait">
        {showLoader && <PreLoader key="preloader" />}
      </AnimatePresence>
      {!showLoader && <RouterProvider router={router} />}
    </ThemeProviderWrapper>
  );
}

export default App;
