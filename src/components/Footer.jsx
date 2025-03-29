import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: black;
  color: white;
  padding: 3rem 0;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled(motion.a)`
  background: ${props => props.bg || 'white'};
  color: black;
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
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Logo>Juszuf.</Logo>
        
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
            href="mailto:juszuf_1@icloud.com"
            bg="var(--color-accent2)"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>
          © {new Date().getFullYear()} Juszuf Arsunkaev. All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;