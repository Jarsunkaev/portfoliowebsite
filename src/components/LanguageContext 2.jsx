// src/components/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create language context
export const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Default to Hungarian (hu) as priority language
  const [language, setLanguage] = useState('hu');

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Toggle language between Hungarian and English
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'hu' ? 'en' : 'hu'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
