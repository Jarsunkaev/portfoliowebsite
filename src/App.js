// src/App.js - Updated for agency site
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <GlobalStyles />
          <AnimatePresence mode="wait">
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedBackground />
              <Navbar />
              <Hero />
              <Services />
              <Projects />
              <About />
              <Contact />
              <Footer />
              <ThemeToggle />
            </motion.div>
          </AnimatePresence>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;