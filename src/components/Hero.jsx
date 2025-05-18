// src/components/Hero.jsx - Updated for agency focus
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 120px; /* Increased padding to account for navbar */
  
  @media (max-width: 768px) {
    padding-top: 100px; /* Adjusted for mobile */
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
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 1rem;
    order: 2;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 800;
  color: var(--color-text); 
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

// Removed unused Subtitle component

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
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    margin: 2rem auto 0;
    max-width: 400px;
    order: 1;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    margin-bottom: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  cursor: pointer;
`;

const ClientList = styled(motion.div)`
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
  
  span {
    font-weight: 700;
    color: var(--color-accent2);
  }
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(motion.button)`
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
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: var(--color-text);
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
    background: var(--color-accent3);
  }
  
  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 540px;
  margin-bottom: 2rem;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
    font-size: 1.1rem;
  }
`;

const Hero = () => {
  const titleRef = useRef(null);
  const { language } = useLanguage();
  
  useEffect(() => {
    gsap.from(titleRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      onComplete: () => {
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
              <div>{translations.hero.title[language]}</div>
              <div style={{ color: 'var(--color-accent2)' }}>{translations.hero.subtitle[language]}</div>
            </Title>
          </div>
          
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {translations.hero.description[language]}
          </Description>
          
          <ClientList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            dangerouslySetInnerHTML={{ __html: translations.hero.clients[language] }}
          />
          
          <ButtonContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <PrimaryButton 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.hero.primaryButton[language]}
              </PrimaryButton>
            </StyledLink>
            
            <StyledLink to="projects" spy={true} smooth={true} duration={500}>
              <SecondaryButton 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {translations.hero.secondaryButton[language]}
              </SecondaryButton>
            </StyledLink>
          </ButtonContainer>
        </TextContainer>
        
        <HeroImage
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img 
            src="/img/hero-devices.png" 
            alt="Responsive websites on multiple devices" 
            loading="lazy"
          />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;