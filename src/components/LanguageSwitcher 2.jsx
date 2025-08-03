// src/components/LanguageSwitcher.jsx - Improved spacing and sizing
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ThemeContext } from './ThemeContext';

const SwitcherContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    justify-content: center;
  }
`;

const SwitcherWrapper = styled(motion.div)`
  position: relative;
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  padding: 5px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 8px; /* Increased space between flags */
`;

const FlagIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  transition: all 0.2s ease;
  padding: 4px; /* Added padding inside circle */
  
  &.active {
    background: var(--color-accent3);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: ${props => props.$active ? 'none' : 'grayscale(60%)'};
    opacity: ${props => props.$active ? 1 : 0.6};
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    filter: none;
    opacity: 1;
  }
`;

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme } = useContext(ThemeContext);
  
  return (
    <SwitcherContainer
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      <SwitcherWrapper theme={theme}>
        {/* Hungarian Flag */}
        <FlagIcon 
          $active={language === 'hu'}
          className={language === 'hu' ? 'active' : ''}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="#fff" d="M1 11H31V21H1z"></path>
            <path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" fill="#be373c"></path>
            <path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#4f6f52"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
          </svg>
        </FlagIcon>
        
        {/* English Flag */}
        <FlagIcon 
          $active={language === 'en'}
          className={language === 'en' ? 'active' : ''}  
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect>
            <path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path>
            <path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path>
            <path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path>
            <path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path>
            <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
            <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
            <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
            <rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect>
            <path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path>
            <path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path>
            <path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path>
            <path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path>
          </svg>
        </FlagIcon>
      </SwitcherWrapper>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;