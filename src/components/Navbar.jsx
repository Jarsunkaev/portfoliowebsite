// src/components/Navbar.jsx - Fixed order of styled components
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import translations from '../translations';

// Floating nav container with dynamic properties based on scroll
// Debounce function to optimize scroll performance
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const NavContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.$isScrolled ? '16px' : '24px'} ${props => props.$isScrolled ? '2.5%' : '5%'};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, padding, background, backdrop-filter;
  pointer-events: none;
  
  @media (max-width: 768px) {
    padding: ${props => props.$isScrolled ? '10px' : '16px'} 3%;
  }
  
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.$isScrolled ? '0.8rem 1.5rem' : '1rem 2rem'};
  border-radius: ${props => props.$isScrolled ? '16px' : '0 0 24px 24px'};
  background: ${props => 
    props.$isScrolled 
      ? 'rgba(255, 255, 255, 0.85)' 
      : 'rgba(255, 255, 255, 0)'
  };
  backdrop-filter: ${props => props.$isScrolled ? 'blur(12px) saturate(180%)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$isScrolled ? 'blur(12px) saturate(180%)' : 'none'};
  border: ${props => props.$isScrolled ? '2px solid rgba(255, 255, 255, 0.6)' : 'none'};
  border-top: none;
  box-shadow: ${props => 
    props.$isScrolled 
      ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
      : 'none'
  };
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              background 0.3s ease-out,
              backdrop-filter 0.3s ease-out,
              -webkit-backdrop-filter 0.3s ease-out,
              box-shadow 0.3s ease-out;
  height: ${props => props.$isScrolled ? '64px' : '80px'};
  will-change: transform, height, padding, border-radius, background, backdrop-filter, box-shadow;
  pointer-events: auto;
  
  @media (max-width: 768px) {
    padding: ${props => props.$isScrolled ? '0.6rem 1.2rem' : '0.8rem 1.5rem'};
    height: ${props => props.$isScrolled ? '60px' : '70px'};
  }
  
  @media (max-width: 480px) {
    border-radius: 0 0 16px 16px;
    padding: 0.8rem 1.2rem;
    height: 60px;
  }
`;

const Logo = styled(motion.div)`
  font-family: var(--font-heading);
  font-size: ${props => props.$isScrolled ? '1.5rem' : '1.8rem'};
  font-weight: 800;
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: ${props => {
      // Start with 10% width at top of page, 100% at bottom
      const minWidth = 0.1; // 10% of text width
      const maxWidth = 1;   // 100% of text width
      const width = minWidth + (maxWidth - minWidth) * (props.$scrollProgress || 0);
      return `${width * 100}%`;
    }};
    height: 3px;
    background: var(--color-accent1);
    border-radius: 2px;
    /* Smoother transition with cubic-bezier timing function */
    transition: width 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    will-change: width; /* Optimize for animation */
  }
  
  // Keep hover effect when not scrolling
  &:not(:hover)::after {
    /* Slightly faster transition when scrolling */
    transition: width 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  // Hover effect overrides the scroll-based width
  &:hover::after {
    width: 100% !important;
    /* Slightly slower, more deliberate hover transition */
    transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @media (max-width: 768px) {
    font-size: ${props => props.$isScrolled ? '1.3rem' : '1.5rem'};
  }
`;

// Desktop menu
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.div)`
  margin: 0 0.6rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--color-text);
  font-size: ${props => props.$isScrolled ? '0.9rem' : '1rem'};
  
  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0.5rem 0.8rem;
    position: relative;
    border-radius: 12px;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--color-neutral);
    }
    
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 2px;
      background: var(--color-accent1);
      transition: width 0.3s ease, left 0.3s ease;
    }
    
    &:hover::after {
      width: 80%;
      left: 10%;
    }
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
  border-radius: 14px;
  font-size: ${props => props.$isScrolled ? '0.9rem' : '1rem'};
  transition: all 0.3s ease;
  margin-left: 0.5rem;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px 0px var(--shadow-color);
    background: var(--color-accent2);
    color: white;
  }
`;

// Modified version for mobile
const MobileConsultButton = styled(ConsultButton)`
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  padding: 12px 24px;
  
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const MenuToggle = styled(motion.div)`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  color: var(--color-text);
  padding: 0.5rem;
  border-radius: 50%;
  margin-left: 0.5rem;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Mobile menu panel with improved styling
const MobileMenuPanel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-bg);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto; /* Allow scrolling on small devices */
  
  /* Safe area for notched phones */
  padding-top: calc(2rem + env(safe-area-inset-top));
  padding-bottom: calc(2rem + env(safe-area-inset-bottom));
`;

// Mobile menu item styling
const MobileMenuItem = styled(motion.div)`
  margin: 1.2rem 0;
  font-weight: 600;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  
  a {
    color: var(--color-text);
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    position: relative;
    border-radius: 12px;
    transition: all 0.3s ease;
    display: block;
    
    &:hover {
      background: var(--color-neutral);
    }
  }
`;

// Mobile overlay to handle clicks outside menu
const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998; // Below the panel but above everything else
  backdrop-filter: blur(3px);
`;

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20,
      mass: 1
    }
  }
};

const mobileMenuVariants = {
  closed: { 
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  open: { 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const menuItemVariants = {
  closed: { y: 20, opacity: 0 },
  open: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language } = useLanguage();
  const animationFrameRef = useRef(null);
  const isScrolledState = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== isScrolledState.current) {
        setIsScrolled(isScrolled);
        isScrolledState.current = isScrolled;
      }
    };

    // Add passive: true for better scroll performance
    const options = { passive: true };
    const debouncedScroll = debounce(handleScroll, 10);
    
    window.addEventListener('scroll', debouncedScroll, options);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', debouncedScroll, options);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollY / documentHeight, 1);
      
      setScrollProgress(progress);
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Initial call to set initial state
    handleScroll();
    
    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Store the current ref value in a variable for the cleanup
    const animationId = animationFrameRef.current;
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationId) {
        window.cancelAnimationFrame(animationId);
      }
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigation items
  const navItems = [
    { name: translations.navbar.services[language], target: "services" },
    { name: translations.navbar.portfolio[language], target: "projects" },
    { name: translations.navbar.pricing[language], target: "pricing" },
    { name: translations.navbar.about[language], target: "about" },
    { name: translations.navbar.contact[language], target: "contact" }
  ];
  
  return (
    <NavContainer $isScrolled={isScrolled}>
      <Nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        $isScrolled={isScrolled}
      >
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          $isScrolled={isScrolled}
          $scrollProgress={scrollProgress}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            // Reset scroll progress when clicking the logo to go to top
            setScrollProgress(0);
          }}
          style={{ cursor: 'pointer' }}
        >
          CyberNōde
        </Logo>
        
        <MenuItems>
          {navItems.map((item, index) => (
            <MenuItem
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              $isScrolled={isScrolled}
              // Staggered animation for menu items
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link 
                to={item.target} 
                spy={true} 
                smooth={true} 
                duration={500}
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
          
          <ConsultButton 
            href="#contact" 
            $isScrolled={isScrolled}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {translations.navbar.consultation[language]}
          </ConsultButton>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <LanguageSwitcher />
          </motion.div>
        </MenuItems>
        
        <MenuToggle 
          onClick={toggleMenu}
          whileHover={{ backgroundColor: 'var(--color-neutral)' }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </Nav>
      
      {/* Mobile Menu with overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MobileOverlay
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileMenuPanel
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                variants={menuItemVariants}
                style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '20px', 
                  zIndex: 1002 
                }}
              >
                <MenuToggle 
                  onClick={toggleMenu}
                  whileHover={{ backgroundColor: 'var(--color-neutral)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                </MenuToggle>
              </motion.div>
        
              {navItems.map((item, index) => (
                <MobileMenuItem
                  key={index}
                  variants={menuItemVariants}
                >
                  <Link 
                    to={item.target} 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </MobileMenuItem>
              ))}
              
              <MobileMenuItem variants={menuItemVariants}>
                <MobileConsultButton 
                  href="#contact" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                  $isScrolled={false}
                >
                  {translations.navbar.consultation[language]}
                </MobileConsultButton>
              </MobileMenuItem>
              
              <MobileMenuItem variants={menuItemVariants}>
                <LanguageSwitcher />
              </MobileMenuItem>
            </MobileMenuPanel>
          </>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;