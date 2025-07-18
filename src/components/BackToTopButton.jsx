// src/components/BackToTopButton.jsx - Button to scroll back to the top of the page
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const ButtonContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
`;

const ScrollButton = styled(motion.button)`
  background: var(--color-accent1);
  color: white;
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
    background: var(--color-accent2);
  }
  
  &:focus {
    outline: none;
  }
`;

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ButtonContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <ScrollButton
        onClick={scrollToTop}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </ScrollButton>
    </ButtonContainer>
  );
};

export default BackToTopButton;
