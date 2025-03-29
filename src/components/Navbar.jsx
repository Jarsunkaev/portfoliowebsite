// Updated Navbar.jsx with rounded borders
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Update the import path to match your file structure
import resumePDF from '../assets/resume/CV2025.pdf';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 
    'var(--color-bg)' : 
    props.theme === 'dark' ? 
      'rgba(18, 18, 18, 0.95)' : 
      'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(10px);
  border-bottom: var(--border-thick) var(--border-color);
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
`;

const Logo = styled(motion.div)`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-text);
  text-shadow: ${props => props.theme === 'dark' ? '0 0 5px rgba(255,255,255,0.5)' : 'none'};
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: var(--color-bg);
    padding-top: 5rem;
    transition: right 0.3s ease;
    z-index: 999;
  }
`;

const MenuItem = styled(motion.div)`
  margin: 0 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text);
  
  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0.5rem 0;
    position: relative;
    text-shadow: ${props => props.theme === 'dark' ? '0 0 4px rgba(255,255,255,0.3)' : 'none'};
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 3px;
      background: var(--color-accent1);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const ResumeButton = styled(motion.a)`
  background: var(--color-accent3);
  color: #000000;
  padding: 10px 20px;
  border: var(--border-thick) var(--border-color);
  font-weight: 700;
  box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px; /* Added rounded corners */
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px 0px var(--shadow-color);
    background: ${props => props.theme === 'dark' ? '#FFEA80' : '#FFD600'};
  }
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
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
  const { theme } = useContext(ThemeContext);
  
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
      isScrolled={isScrolled}
      theme={theme}
      style={{ 
        boxShadow: isScrolled ? '0 4px 6px var(--shadow-color)' : 'none' 
      }}
    >
      <Logo
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        theme={theme}
      >
        Juszuf.
      </Logo>
      
      <MenuToggle onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
      
      <MenuItems isOpen={isMenuOpen}>
        <MenuItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          theme={theme}
        >
          <Link 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} 
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          theme={theme}
        >
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </MenuItem>
        
        <MenuItem
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          theme={theme}
        >
          <Link 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </MenuItem>
        
        <ResumeButton 
          href={resumePDF} 
          theme={theme}
          download="Juszuf_Arsunkaev_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </ResumeButton>
      </MenuItems>
    </Nav>
  );
};

export default Navbar;