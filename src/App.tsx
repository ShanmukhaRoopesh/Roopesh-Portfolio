import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import LoadingAnimation from './components/LoadingAnimation';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-primary transition-colors duration-300">
        <CustomCursor />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingAnimation key="loading" />
          ) : (
            <>
              <ScrollProgress />
              <Navbar />
              <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
