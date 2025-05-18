// src/components/Hero.jsx - Improved mobile layout
import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { useLanguage } from './LanguageContext';
import { ThemeContext } from './ThemeContext';
import translations from '../translations';
import { FaArrowRight, FaRocket, FaCode, FaLaptopCode } from 'react-icons/fa';

// Enhanced styling for a more modern look
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 160px;
  
  @media (max-width: 768px) {
    padding-top: 100px; /* Reduced from 130px for better spacing with navbar */
    min-height: auto;
    padding-bottom: 80px;
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
  align-items: flex-start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0; /* Removed gap for mobile - we'll control spacing with margins instead */
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 1rem;
    order: 1; /* Text comes first on mobile */
  }
`;

const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 1.1;
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 1.25rem;
  
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
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
  
  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: var(--shadow-neobrutalist);
    position: relative;
    z-index: 1;
    border: var(--border-thick);
  }
  
  .floating-element {
    position: absolute;
    border-radius: 12px;
    background: var(--color-accent3);
    padding: 12px;
    box-shadow: var(--shadow-neobrutalist);
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    color: var(--color-text);
    border: var(--border-thick);
    z-index: 2;
  }
  
  .element-1 {
    top: -20px;
    left: -20px;
  }
  
  .element-2 {
    bottom: 40px;
    right: -30px;
  }
  
  .element-3 {
    bottom: -30px;
    left: 80px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
    margin: 2rem auto;  /* Equal margin top and bottom for spacing */
    max-width: 400px;
    order: 2; /* Image comes second on mobile */
    
    .floating-element {
      padding: 8px;
      font-size: 0.8rem;
    }
    
    .element-1 {
      top: -10px;
      left: -10px;
    }
    
    .element-2 {
      bottom: 20px;
      right: -15px;
    }
    
    .element-3 {
      bottom: -15px;
      left: 50px;
    }
  }
  
  @media (max-width: 480px) {
    height: 250px; /* Slightly smaller for very small screens */
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    order: 3; /* Buttons come last on mobile */
    margin-top: 1.5rem; /* Reduced space after image */
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
  margin-bottom: 2.5rem;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    margin: 0 auto 1rem; /* Reduced bottom margin since image comes next */
    font-size: 1.1rem;
  }
`;

const Badge = styled(motion.div)`
  display: inline-block;
  background: var(--color-accent3);
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 20px;
  margin-bottom: 1rem;
  border: 2px solid var(--color-text);
  
  @media (max-width: 768px) {
    margin: 0 auto 1rem;
  }
`;

// Shape decorations
const DecorativeDot = styled(motion.div)`
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--color-accent1)'};
  position: absolute;
  z-index: 0;
  opacity: 0.5;
`;

const DecorativeCircle = styled(motion.div)`
  width: ${props => props.size || '60px'};
  height: ${props => props.size || '60px'};
  border-radius: 50%;
  border: 3px solid ${props => props.color || 'var(--color-accent2)'};
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

// Mobile content wrapper to handle reordering
const MobileContentWrapper = styled.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

// Updated hero with floating elements, better animations
const Hero = () => {
  const titleRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const { language } = useLanguage();
  const { theme } = useContext(ThemeContext);
  
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
    
    // Animate floating elements around the image
    if (floatingElementsRef.current) {
      const floatingElements = floatingElementsRef.current.querySelectorAll('.floating-element');
      
      floatingElements.forEach((el, index) => {
        // Create slight floating animation for each element
        gsap.to(el, {
          y: index % 2 === 0 ? "10" : "-10",
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      });
    }
  }, [language]); // Re-run when language changes
  
  return (
    <HeroSection id="home">
      {/* Decorative elements */}
      <DecorativeDot 
        size="40px" 
        color="var(--color-accent3)" 
        style={{ top: '180px', left: '10%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
      />
      <DecorativeCircle 
        size="80px" 
        color="var(--color-accent1)" 
        style={{ bottom: '100px', right: '10%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.2, duration: 1 }}
      />
      <DecorativeDot 
        size="25px" 
        color="var(--color-accent2)" 
        style={{ top: '30%', right: '20%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.4, duration: 1 }}
      />
      
      <HeroContent>
        <MobileContentWrapper>
          <TextContainer>
            <Badge
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translations.hero.badge[language]}
            </Badge>
            
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
              src="/img/hero-devices.png" 
              alt="Responsive websites on multiple devices" 
              loading="lazy"
            />
            
            {/* Floating elements around the image */}
            <motion.div 
              className="floating-element element-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <FaLaptopCode /> {translations.hero.element1[language]}
            </motion.div>
            
            <motion.div 
              className="floating-element element-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 }}
            >
              <FaCode /> {translations.hero.element2[language]}
            </motion.div>
            
            <motion.div 
              className="floating-element element-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9 }}
            >
              <FaRocket /> {translations.hero.element3[language]}
            </motion.div>
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