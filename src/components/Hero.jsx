// Updated Hero.jsx with proper positioning

import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { ThemeContext } from './ThemeContext';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 60px;
  
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 60px;
  }
`;

const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 1rem 1rem 0.5rem 1rem;
    order: 2;
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 800; /* Extra bold for better visibility */
  /* Very important: ensure full opacity and strong color */
  color: var(--color-text); 
  opacity: 1 !important;
  
  /* Add text shadow for better contrast */
  text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const StrongTitle = styled.div`
  color: var(--color-accent2);
  opacity: 1 !important;
  position: relative;
  display: inline-block;
`;

const Subtitle = styled(motion.div)`
  background: var(--color-accent1);
  color: white;
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.5rem 0 2rem;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  letter-spacing: 1px;
  position: relative;
  left: 0;
  border-radius: 10px; /* Added rounded corners */
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0 1.5rem;
    padding: 0.5rem 1.2rem;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 500px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: var(--border-thick);
    box-shadow: var(--shadow-neobrutalist);
    border-radius: 15px; /* Added rounded corners */
    filter: brightness(0.75); /* Further reduce image brightness */
    transition: opacity 0.3s;
    opacity: 0.5;
  }
  
  img.loaded {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    margin: 0 auto;
    max-width: 400px;
    order: 1;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

// Added minimal scroll indicator
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid var(--color-text);
  border-radius: 15px;
  opacity: 0.6;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: var(--color-text);
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollAnim 2s infinite;
  }
  
  @keyframes scrollAnim {
    0% { top: 8px; opacity: 1; }
    100% { top: 32px; opacity: 0; }
  }
  
  @media (max-width: 768px) {
    bottom: 1rem;
    width: 24px;
    height: 40px;
    
    &::before {
      width: 4px;
      height: 4px;
    }
    
    @keyframes scrollAnim {
      0% { top: 6px; opacity: 1; }
      100% { top: 26px; opacity: 0; }
    }
  }
`;

const ViewWorkButton = styled(motion.button)`
  background: var(--color-accent1);
  color: white;
  padding: 12px 28px;
  font-weight: bold;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  border-radius: 10px; /* Added rounded corners */
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0px 0px;
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 1rem;
  }
`;

const Hero = () => {
  const titleRef = useRef(null);
  useContext(ThemeContext);
  
  useEffect(() => {
    // Animate the title with GSAP - ensure it's fully visible
    gsap.from(titleRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      onComplete: () => {
        // Force full opacity after animation completes
        gsap.to(titleRef.current.children, {
          opacity: 1,
          duration: 0.1
        });
      }
    });
  }, []);
  
  return (
    <HeroSection id="home">
      <HeroContent>
        <TextContainer>
          <div ref={titleRef}>
            <Title>
              <div>Hi, I am</div>
              <StrongTitle>Juszuf Arsunkaev</StrongTitle>
            </Title>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ 
              paddingTop: '2.5rem',
              marginBottom: '2rem', 
              fontSize: '1.1rem', 
              lineHeight: 1.6,
              fontWeight: 500,
              color: 'var(--color-text)'
            }}
          >
            I create eye-catching, functional websites with modern technologies and a focus on user experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <ViewWorkButton 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </ViewWorkButton>
            </Link>
          </motion.div>
        </TextContainer>
        
        <HeroImage
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img 
            src="me.jpeg" 
            alt="Juszuf Arsunkaev" 
            loading="lazy"
            width="600"
            height="800"
            onLoad={(e) => e.target.classList.add('loaded')}
          />
        </HeroImage>
      </HeroContent>
      
      {/* Removed scroll down button */}
      <Link to="about" spy={true} smooth={true} duration={500}>
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2 }}
          whileHover={{ opacity: 0.9 }}
        />
      </Link>
    </HeroSection>
  );
};

export default Hero;