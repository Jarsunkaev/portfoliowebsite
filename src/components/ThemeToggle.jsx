// src/components/ThemeToggle.jsx - Simple button toggle
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
`;

const ThemeButton = styled(motion.button)`
  background: ${props => props.theme === 'light' ? 'var(--color-accent3)' : 'var(--color-accent2)'};
  color: ${props => props.theme === 'light' ? 'black' : 'white'};
  border: var(--border-thick);
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  &:focus {
    outline: none;
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <ThemeButton
        onClick={toggleTheme}
        theme={theme}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;