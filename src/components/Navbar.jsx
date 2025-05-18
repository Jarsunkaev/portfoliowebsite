// src/components/Navbar.jsx - Updated to include pricing link
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import translations from '../translations';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$isScrolled ? '0.8rem 2rem' : '1.5rem 2rem'};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled ? 
    'var(--color-bg)' : 
    'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(10px);
  border-bottom: var(--border-thick) var(--border-color);
  transition: all 0.3s ease;
  height: ${props => props.$isScrolled ? '70px' : '90px'};
`;

const Logo = styled(motion.div)`
  font-family: var(--font-heading);
  font-size: ${props => props.$isScrolled ? '1.5rem' : '1.8rem'};
  font-weight: 800;
  color: var(--color-text);
  transition: font-size 0.3s ease;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: var(--color-bg);
    padding-top: 5rem;
    transition: right 0.3s ease;
    z-index: 999;
  }
`;

const MenuItem = styled(motion.div)`
  margin: 0 1.2rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text);
  font-size: ${props => props.$isScrolled ? '0.9rem' : '1rem'};
  transition: font-size 0.3s ease;
  
  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0.5rem 0;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: var(--color-accent1);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1rem;
  }
`;

const ConsultButton = styled(motion.a)`
  background: var(--color-accent3);
  color: var(--color-text);
  padding: ${props => props.$isScrolled ? '8px 16px' : '10px 20px'};
  border: var(--border-thick) var(--border-color);
  font-weight: 700;
  box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  font-size: ${props => props.$isScrolled ? '0.9rem' : '1rem'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px var(--shadow-color);
    background: var(--color-accent3);
  }
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

const MenuToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      $isScrolled={isScrolled}
      style={{ 
        boxShadow: isScrolled ? '0 4px 6px var(--shadow-color)' : 'none' 
      }}
    >
      <Logo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        $isScrolled={isScrolled}
      >
        DevWorks.
      </Logo>
      
      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
      
      <MenuItems $isOpen={isMenuOpen}>
        <MenuItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isScrolled={isScrolled}
        >
          <Link 
            to="services" 
            spy={true} 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.navbar.services[language]}
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isScrolled={isScrolled}
        >
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.navbar.portfolio[language]}
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isScrolled={isScrolled}
        >
          <Link 
            to="pricing" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.navbar.pricing[language]}
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isScrolled={isScrolled}
        >
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.navbar.about[language]}
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          $isScrolled={isScrolled}
        >
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            {translations.navbar.contact[language]}
          </Link>
        </MenuItem>
        
        <ConsultButton 
          href="#contact" 
          $isScrolled={isScrolled}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {translations.navbar.consultation[language]}
        </ConsultButton>
        
        <LanguageSwitcher />
      </MenuItems>
    </Nav>
  );
};

export default Navbar;