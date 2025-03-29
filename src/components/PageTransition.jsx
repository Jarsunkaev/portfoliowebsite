import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const PageTransition = () => {
  return (
    <TransitionContainer
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: 'top' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ color: 'white', fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>
          Juszuf.
        </h1>
      </motion.div>
    </TransitionContainer>
  );
};

export default PageTransition;