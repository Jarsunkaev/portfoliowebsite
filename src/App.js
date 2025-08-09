// src/App.js - Importing our enhanced Services component
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedBackground from './components/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

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
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
              <Footer />
              <BackToTopButton />
            </motion.div>
          </AnimatePresence>
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;