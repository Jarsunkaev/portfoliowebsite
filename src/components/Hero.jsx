// Updated Hero.jsx with better mobile positioning

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
  padding-top: 80px; /* Increased padding for navbar */
  
  @media (max-width: 768px) {
    padding-top: 80px; /* Maintain consistent padding on mobile */
    min-height: auto; /* Allow content to determine height */
    padding-bottom: 80px; /* Add padding at the bottom */
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
    gap: 2rem; /* Increased gap between elements */
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 1rem;
    order: 2; /* Text comes after image on mobile */
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 800;
  color: var(--color-text); 
  opacity: 1 !important;
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
  border-radius: 10px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem auto 1.5rem; /* Center on mobile */
    padding: 0.5rem 1.2rem;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: var(--border-thick);
    box-shadow: var(--shadow-neobrutalist);
    border-radius: 15px;
    filter: brightness(0.85);
    transition: opacity 0.3s;
    opacity: 0.5;
  }
  
  img.loaded {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    height: 350px; /* Increased height */
    margin: 2rem auto 0; /* Added top margin to push image down */
    max-width: 400px;
    order: 1; /* Image comes first on mobile */
  }
  
  @media (max-width: 480px) {
    height: 300px; /* Increased height from original */
    margin-bottom: 1rem;
  }
`;

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
  border-radius: 10px;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0px 0px var(--shadow-color);
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 1rem;
    margin: 0 auto; /* Center on mobile */
  }
`;

const Description = styled(motion.p)`
  padding-top: 2.5rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    padding-top: 2rem; /* Increased padding on mobile */
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding-top: 2.5rem; /* Even more padding on smaller screens */
  }
`;

const Hero = () => {
  const titleRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    // Animate the title with GSAP
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
          
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            I create eye-catching, functional websites with modern technologies and a focus on user experience.
          </Description>
          
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