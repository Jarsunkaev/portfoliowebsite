// src/App.js - Importing our enhanced Services component
import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import { LanguageProvider } from './components/LanguageContext';
import { ThemeProvider } from './components/ThemeContext';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import AnimatedBackground from './components/AnimatedBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import GoogleAnalytics from './components/GoogleAnalytics';

function App() {
  useEffect(() => {
    // Ensure fonts are loaded and remove any loading states
    document.fonts.ready.then(() => {
      const root = document.getElementById('root');
      if (root) {
        root.classList.add('loaded');
      }
      
      // Remove any loading spinner that might still be visible
      const spinner = document.querySelector('.loading-spinner');
      if (spinner) {
        spinner.style.display = 'none';
      }
    });
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <GoogleAnalytics />
      <ThemeProvider>
        <LanguageProvider>
          <GlobalStyles />
          <AnimatePresence mode="wait">
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <AnimatedBackground />
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
              <Footer />
              <BackToTopButton />
            </motion.div>
          </AnimatePresence>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;