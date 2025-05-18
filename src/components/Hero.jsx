// src/components/Hero.jsx - Fully mobile responsive with proper element order
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { useLanguage } from './LanguageContext';
import translations from '../translations';
import { FaLaptopCode, FaServer, FaMobileAlt, FaArrowRight } from 'react-icons/fa';

// Enhanced styling for a more modern look
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 160px 0 120px;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 100px 0 60px;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;
  z-index: 2;
  align-items: center;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0;
  }
`;

const TextContainer = styled.div`
  padding: 2rem 2rem 0; /* Removed bottom padding */
  z-index: 1;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1rem 0.5rem 0; /* Removed bottom padding */
    grid-area: text;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 7vw, 4.2rem);
  line-height: 1.1;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 0.75rem; /* Reduced from 1.25rem */
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  .highlight {
    color: var(--color-accent2);
    position: relative;
    display: inline-block;
  }
  
  .highlight::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    width: 100%;
    height: 12px;
    background-color: var(--color-accent3);
    z-index: -1;
    opacity: 0.5;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 2.8rem);
    margin-bottom: 0.5rem; /* Reduced from 1rem */
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
  width: 100%;
  box-sizing: border-box;
  
  .main-image {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: contain;
    border-radius: 20px;
    position: relative;
    z-index: 1;
    padding: 1rem;
    
    /* Add some hover effect */
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  .floating-element {
    position: absolute;
    border-radius: 12px;
    background: var(--color-accent3);
    padding: 8px 14px;
    box-shadow: var(--shadow-neobrutalist);
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    color: var(--color-text);
    border: var(--border-thick);
    z-index: 2;
    font-size: 0.95rem;
    white-space: nowrap;
    max-width: 90%;
    will-change: transform, opacity;
    transition: transform 0.5s ease-in-out, box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    
    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 0.85rem;
    }
  }
  
  .element-1 {
    top: 20px;
    left: 20px;
  }
  
  .element-2 {
    bottom: 60px;
    right: 20px;
  }
  
  .element-3 {
    bottom: 20px;
    left: 20px;
  }
  
  @media (max-width: 768px) {
    height: 250px;
    margin: 1rem auto;
    max-width: 100%;
    grid-area: image;
    padding: 0 1rem;
    
    .element-1 {
      top: 5px;
      left: 20px;
    }
    
    .element-2 {
      bottom: 40px;
      right: 20px;
    }
    
    .element-3 {
      bottom: 10px;
      left: 20px;
    }
  }
  
  @media (max-width: 480px) {
    height: 250px; /* Slightly smaller for very small screens */
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    max-width: 200px;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  margin: -0.5rem 0 0; /* Negative margin to pull buttons upward */
  padding: 0 2rem;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  gap: 1rem;
  position: relative; /* Added for z-index to work */
  z-index: 2; /* Ensure buttons stay above other elements */
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    justify-content: center;
    margin: -0.25rem 0 0; /* Slight negative margin on mobile too */
    grid-area: button;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: var(--color-accent1);
  color: white;
  padding: 14px 28px;
  font-weight: bold;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  
  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0px 0px var(--shadow-color);
    
    svg {
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: var(--color-text);
  padding: 14px 28px;
  font-weight: bold;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  cursor: pointer;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  
  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 8px 8px 0px 0px var(--shadow-color);
    background: var(--color-accent3);
    
    svg {
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 540px;
  margin: 0; /* Removed bottom margin completely */
  color: var(--color-text);
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 768px) {
    margin: 0; /* Removed all margins */
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }
`;

// No decorative elements

// Mobile content wrapper to handle reordering
const MobileContentWrapper = styled.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-areas:
      "text"
      "image"
      "button";
    width: 100%;
    gap: 1rem; /* Reduced from 1.5rem to bring components closer together */
  }
`;

// Updated hero with floating elements, better animations
const Hero = () => {
  const titleRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const { language } = useLanguage();
  
  // GSAP animations for title and floating elements
  useEffect(() => {
    const titleElements = titleRef.current.children;
    
    // Animate title elements
    gsap.fromTo(
      titleElements, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    );
    
    // Title elements animation remains with GSAP
    // Floating elements will be animated using Framer Motion's built-in animations
  }, [language]); // Re-run when language changes
  
  return (
    <HeroSection id="home">      
      <HeroContent>
        <MobileContentWrapper>
          <TextContainer>
            <motion.div 
              className="floating-element element-badge"
              style={{
                background: 'var(--color-accent3)',
                borderRadius: '20px',
                padding: '8px 16px',
                display: 'inline-block',
                marginBottom: '1rem',
                border: 'var(--border-thick)',
                boxShadow: 'var(--shadow-neobrutalist)',
                fontWeight: 'bold'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              transition={{ 
                delay: 0.4,
                duration: 0.8,
                ease: "easeInOut"
              }}
              whileHover={{ 
                y: -3,
                transition: { 
                  duration: 0.4,
                  yoyo: Infinity,
                  ease: "easeInOut"
                } 
              }}
            >
              {translations.hero.badge[language]}
            </motion.div>
            
            <div ref={titleRef}>
              <Title>
                <div>{translations.hero.title[language]}</div>
                <div className="highlight">{translations.hero.titleHighlight[language]}</div>
              </Title>
            </div>
            
            <Description
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {translations.hero.description[language]}
            </Description>
          </TextContainer>
          
          <HeroImage
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            ref={floatingElementsRef}
          >
            <img 
              className="main-image"
              src={`${process.env.PUBLIC_URL}/construction2.png`} 
              alt="Under Construction" 
              loading="eager"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                height: 'auto',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                position: 'relative',
                zIndex: 1
              }}
              onError={(e) => {
                console.error('Failed to load image:', e);
                console.log('Image path:', `${process.env.PUBLIC_URL}/aliens.svg`);
              }}
            />
            
            <div 
              className="floating-element element-1"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards, float 3s ease-in-out infinite',
                animationDelay: '0.2s'
              }}
            >
              <FaLaptopCode style={{ fontSize: '1.1em' }} /> {translations.hero.element1[language]}
            </div>
            
            <div 
              className="floating-element element-2"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out 0.3s forwards, float 3.5s ease-in-out 0.3s infinite',
              }}
            >
              <FaServer style={{ fontSize: '1.1em' }} /> {translations.hero.element2[language]}
            </div>
            
            <div 
              className="floating-element element-3"
              style={{
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out 0.5s forwards, float 4s ease-in-out 0.5s infinite',
              }}
            >
              <FaMobileAlt style={{ fontSize: '1.1em' }} /> {translations.hero.element3[language]}
            </div>
            
            <style jsx global>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
              }
              @keyframes fadeIn {
                to { opacity: 1; }
              }
              .floating-element {
                transition: transform 0.3s ease;
                font-size: 0.85rem;
                padding: 5px 10px;
                line-height: 1.2;
              }
              .floating-element:hover {
                transform: translateY(-3px) scale(1.03);
              }
              @media (max-width: 768px) {
                .floating-element {
                  font-size: 0.7rem;
                  padding: 3px 8px;
                  line-height: 1.1;
                }
                .floating-element svg {
                  font-size: 0.8em !important;
                  margin-right: 2px;
                }
            `}</style>
          </HeroImage>
          
          <ButtonContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <PrimaryButton 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.hero.primaryButton[language]}
                <FaArrowRight />
              </PrimaryButton>
            </StyledLink>
            
            <StyledLink to="projects" spy={true} smooth={true} duration={500}>
              <SecondaryButton 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.hero.secondaryButton[language]}
                <FaArrowRight />
              </SecondaryButton>
            </StyledLink>
          </ButtonContainer>
        </MobileContentWrapper>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;