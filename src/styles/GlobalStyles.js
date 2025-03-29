// src/styles/GlobalStyles.js - Super bright light mode
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme variables - balanced brightness */
    --color-bg-light: #ffffff;
    --color-text-light: #121212; /* Dark gray for good readability without harshness */
    --color-accent1-light: #FF3366;
    --color-accent2-light: #00B8D4;
    --color-accent3-light: #FFD600;
    --color-neutral-light: #FAFAFA; /* Very light gray for subtle distinction */
    
    /* Dark theme variables - enhanced for better contrast */
    --color-bg-dark: #121212;
    --color-text-dark: #FFFFFF;
    --color-accent1-dark: #FF5C8A; /* Brighter in dark mode */
    --color-accent2-dark: #25E6FF; /* Brighter in dark mode */
    --color-accent3-dark: #FFEA80; /* Brighter in dark mode */
    --color-neutral-dark: #1E1E1E;
    
    /* Shared properties */
    --border-thick: 3px solid;
    --shadow-neobrutalist: 6px 6px 0px 0px;
    
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    /* Set default theme (light) */
    --color-bg: var(--color-bg-light);
    --color-text: var(--color-text-light);
    --color-accent1: var(--color-accent1-light);
    --color-accent2: var(--color-accent2-light);
    --color-accent3: var(--color-accent3-light);
    --color-neutral: var(--color-neutral-light);
    --border-color: #000000;
    --shadow-color: rgba(0,0,0,0.7);
  }
  
  /* Apply dark theme variables when body has data-theme="dark" */
  body[data-theme='dark'] {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
    --color-accent1: var(--color-accent1-dark);
    --color-accent2: var(--color-accent2-dark);
    --color-accent3: var(--color-accent3-dark);
    --color-neutral: var(--color-neutral-dark);
    --border-color: #FFFFFF;
    --shadow-color: rgba(255,255,255,0.8);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    /* Removed brightness filter */
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
  
  .neobrutalist-box {
    border: var(--border-thick) var(--border-color);
    background-color: var(--color-neutral);
    box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease, 
                background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease;
    
    &:hover {
      transform: translate(-4px, -4px);
      box-shadow: 9px 9px 0px 0px var(--shadow-color);
    }
  }
  
  .btn {
    display: inline-block;
    padding: 12px 28px;
    background: var(--color-accent1);
    color: ${props => props.theme === 'dark' ? '#121212' : 'white'};
    font-weight: bold;
    border: var(--border-thick) var(--border-color);
    box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, 
                background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease;
    
    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 8px 8px 0px 0px var(--shadow-color);
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
    outline: 3px solid var(--color-accent1);
    outline-offset: 2px;
  }
  
  /* Enhance text selection styles */
  ::selection {
    background-color: var(--color-accent1);
    color: var(--color-bg);
  }
  
  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--color-accent1);
    border: 2px solid var(--color-bg);
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-accent2);
  }
`;

export default GlobalStyles;