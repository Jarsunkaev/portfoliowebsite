import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, tag = 'div', className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const Tag = motion[tag];
  
  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.5rem', whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export default AnimatedText;