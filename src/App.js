import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AnimatedBackground from './components/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <>
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
          <About />
          <Projects />
          <Contact />
          <Footer />
          <ThemeToggle />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;