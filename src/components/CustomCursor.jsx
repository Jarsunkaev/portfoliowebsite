import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CursorWrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  
  &.pointer {
    transform: scale(4);
  }
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    
    const mouseOverHandler = (event) => {
      if (event.target.tagName === 'A' || 
          event.target.tagName === 'BUTTON' ||
          event.target.closest('a') || 
          event.target.closest('button') ||
          event.target.classList.contains('clickable')) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };
    
    window.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseover', mouseOverHandler);
    
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseover', mouseOverHandler);
    };
  }, []);
  
  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'var(--color-accent1)',
    },
    pointer: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'var(--color-accent2)',
      scale: 1.5,
    },
  };
  
  return (
    <CursorWrapper
      variants={variants}
      animate={isPointer ? 'pointer' : 'default'}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      className={isPointer ? 'pointer' : ''}
    />
  );
};

export default CustomCursor;