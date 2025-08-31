// src/styles/GlobalStyles.js - Refined professional color palette
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme variables - earthy, natural palette */
    --color-bg-light: #FEFEFE;
    --color-text-light: #2C3E2D; /* Deep forest green for text */
    --color-accent1-light: #4A5D23; /* Deep olive green */
    --color-accent2-light: #7A6A53; /* Warm brown */
    --color-accent3-light: #E8DCC0; /* Warm beige */
    --color-neutral-light: #F5F2ED; /* Soft off-white */
    --color-text-secondary-light: #5A6B5D; /* Muted green-gray */
    
    /* Dark theme variables - earthy dark tones */
    --color-bg-dark: #1C1F1A;
    --color-text-dark: #F5F2ED;
    --color-accent1-dark: #6B7C3A; /* Lighter olive in dark mode */
    --color-accent2-dark: #9A8A77; /* Lighter warm brown in dark mode */
    --color-accent3-dark: #D4C7A8; /* Muted beige in dark mode */
    --color-neutral-dark: #2A2D26;
    --color-text-secondary-dark: #A8B5AA; /* Light green-gray */
    
    /* Shared properties - softer, more timeless approach */
    --border-subtle: 1px solid;
    --border-medium: 2px solid;
    --shadow-soft: 0 4px 12px;
    --shadow-medium: 0 8px 24px;
    --border-radius-sm: 8px;
    --border-radius-md: 12px;
    --border-radius-lg: 16px;
    
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    /* Set default theme (light) */
    --color-bg: var(--color-bg-light);
    --color-text: var(--color-text-light);
    --color-text-secondary: var(--color-text-secondary-light);
    --color-accent1: var(--color-accent1-light);
    --color-accent2: var(--color-accent2-light);
    --color-accent3: var(--color-accent3-light);
    --color-neutral: var(--color-neutral-light);
    --border-color: var(--color-text-light);
    --shadow-color: rgba(44, 62, 45, 0.15);
  }
  
  /* Apply dark theme variables when body has data-theme="dark" */
  body[data-theme='dark'] {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
    --color-text-secondary: var(--color-text-secondary-dark);
    --color-accent1: var(--color-accent1-dark);
    --color-accent2: var(--color-accent2-dark);
    --color-accent3: var(--color-accent3-dark);
    --color-neutral: var(--color-neutral-dark);
    --border-color: var(--color-text-dark);
    --shadow-color: rgba(245, 242, 237, 0.15);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* Only add transitions after initial load to prevent FOUC */
  .loaded * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text);
    overflow-x: hidden;
    font-weight: 400;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap; /* Improve font loading performance */
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    color: var(--color-text);
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  /* Refined box styling with soft, natural shadows */
  .soft-box {
    border: var(--border-subtle) var(--border-color);
    background-color: var(--color-neutral);
    box-shadow: var(--shadow-soft) var(--shadow-color);
    border-radius: var(--border-radius-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease, 
                background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-medium) var(--shadow-color);
    }
  }
  
  /* Modern, accessible button styling */
  .btn {
    display: inline-block;
    padding: 14px 32px;
    background: var(--color-accent1);
    color: var(--color-bg);
    font-weight: 600;
    border: var(--border-subtle) transparent;
    box-shadow: var(--shadow-soft) var(--shadow-color);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    letter-spacing: 0.3px;
    border-radius: var(--border-radius-md);
    min-height: 48px; /* Better touch target */
    min-width: 120px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-medium) var(--shadow-color);
      background: var(--color-accent2);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  a {
    color: var(--color-accent2);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-accent1);
    }
  }

  /* Better focus styles for accessibility */
  a:focus, button:focus, input:focus, textarea:focus {
    outline: 2px solid var(--color-accent2);
    outline-offset: 2px;
  }
  
  /* Enhance text selection styles */
  ::selection {
    background-color: var(--color-accent2);
    color: var(--color-bg);
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--color-accent1);
    border: 2px solid var(--color-bg);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent2);
  }
`;

export default GlobalStyles;