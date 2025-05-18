// src/components/Footer.jsx - Updated to include pricing link
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const FooterSection = styled.footer`
  background: ${props => props.theme === 'dark' ? 'var(--color-bg-dark)' : '#1a1e2a'};
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div``;

const Logo = styled.div`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 300px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  background: ${props => props.bg || 'white'};
  color: #1a1e2a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: 2px solid white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  color: white;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 3px;
    background: var(--color-accent3);
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    
    &:hover {
      opacity: 1;
      color: var(--color-accent3);
      padding-left: 5px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  color: var(--color-accent3);
  font-size: 1rem;
  margin-top: 0.3rem;
`;

const ContactText = styled.div`
  a {
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      opacity: 1;
      color: var(--color-accent3);
    }
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
  width: 90%;
  max-width: 1200px;
  margin: 3rem auto 0;
`;

const ScrollToTop = styled(motion.div)`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  width: 45px;
  height: 45px;
  background: var(--color-accent1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid white;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: var(--color-accent2);
  }
`;

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  
  return (
    <FooterSection theme={theme}>
      <FooterContainer>
        <FooterColumn>
          <Logo>CyberNōde</Logo>
          <FooterText>
            {translations.footer.aboutText[language]}
          </FooterText>
          
          <SocialLinks>
            <SocialLink 
              href="https://github.com/Jarsunkaev"
              target="_blank"
              rel="noopener noreferrer"
              bg="var(--color-accent3)"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            
            <SocialLink 
              href="https://www.linkedin.com/in/juszuf-arsunkaev/"
              target="_blank"
              rel="noopener noreferrer"
              bg="var(--color-accent1)"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            
            <SocialLink 
              href="mailto:contact@yourdevworks.com"
              bg="var(--color-accent2)"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{translations.footer.quickLinks[language]}</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="home" spy={true} smooth={true} duration={500}>
                {translations.footer.home[language]}
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="services" spy={true} smooth={true} duration={500}>
                {translations.footer.services[language]}
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="projects" spy={true} smooth={true} duration={500}>
                {translations.footer.portfolio[language]}
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="pricing" spy={true} smooth={true} duration={500}>
                {translations.footer.pricing[language]}
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="about" spy={true} smooth={true} duration={500}>
                {translations.footer.about[language]}
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="contact" spy={true} smooth={true} duration={500}>
                {translations.footer.contact[language]}
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>{translations.footer.contactInfo[language]}</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <ContactText>
                <a href="mailto:contact@cybernode.dev">contact@cybernode.dev</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaPhone className="fas fa-phone-alt" />
              </ContactIcon>
              <ContactText>
                <a href="tel:+36201234567">+36 20 123 4567</a>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt className="fas fa-map-marker-alt" />
              </ContactIcon>
              <ContactText>
                <p>{translations.footer.location[language]}</p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
        </FooterColumn>
      </FooterContainer>
      
      <Copyright>
        © {new Date().getFullYear()} CyberNōde. {translations.footer.copyright[language]}
      </Copyright>
      
      <Link to="home" spy={true} smooth={true} duration={500}>
        <ScrollToTop
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </ScrollToTop>
      </Link>
    </FooterSection>
  );
};

export default Footer;