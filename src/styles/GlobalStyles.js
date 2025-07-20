// src/styles/GlobalStyles.js - Refined professional color palette
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme variables - sophisticated palette */
    --color-bg-light: #ffffff;
    --color-text-light: #2D3142; /* Deep blue-gray for text */
    --color-accent1-light: #4F6D7A; /* Muted teal blue */
    --color-accent2-light: #717EC3; /* Soft purple blue */
    --color-accent3-light: #EFC88B; /* Warm gold */
    --color-neutral-light: #F7F7F9; /* Very light gray for subtle distinction */
    
    /* Dark theme variables - refined for better contrast */
    --color-bg-dark: #1A1E2A;
    --color-text-dark: #F7F7F9;
    --color-accent1-dark: #5F88A0; /* Lighter teal in dark mode */
    --color-accent2-dark: #8290D9; /* Lighter purple blue in dark mode */
    --color-accent3-dark: #F0D4A2; /* Softer gold in dark mode */
    --color-neutral-dark: #262A39;
    
    /* Shared properties */
    --border-thick: 2px solid;
    --shadow-neobrutalist: 4px 4px 0px 0px;
    
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    /* Set default theme (light) */
    --color-bg: var(--color-bg-light);
    --color-text: var(--color-text-light);
    --color-accent1: var(--color-accent1-light);
    --color-accent2: var(--color-accent2-light);
    --color-accent3: var(--color-accent3-light);
    --color-neutral: var(--color-neutral-light);
    --border-color: var(--color-text-light);
    --shadow-color: rgba(45, 49, 66, 0.2);
  }
  
  /* Apply dark theme variables when body has data-theme="dark" */
  body[data-theme='dark'] {
    --color-bg: var(--color-bg-dark);
    --color-text: var(--color-text-dark);
    --color-accent1: var(--color-accent1-dark);
    --color-accent2: var(--color-accent2-dark);
    --color-accent3: var(--color-accent3-dark);
    --color-neutral: var(--color-neutral-dark);
    --border-color: var(--color-text-dark);
    --shadow-color: rgba(247, 247, 249, 0.2);
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
  
  /* Refined box styling with more subtle shadows */
  .neobrutalist-box {
    border: var(--border-thick) var(--border-color);
    background-color: var(--color-neutral);
    box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease, 
                background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease;
    
    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 6px 6px 0px 0px var(--shadow-color);
    }
  }
  
  /* More polished button styling */
  .btn {
    display: inline-block;
    padding: 12px 28px;
    background: var(--color-accent1);
    color: ${props => props.theme === 'dark' ? '#F7F7F9' : '#FFFFFF'};
    font-weight: bold;
    border: var(--border-thick) var(--border-color);
    box-shadow: var(--shadow-neobrutalist) var(--shadow-color);
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    border-radius: 4px;
    transition: transform 0.2s ease, box-shadow 0.2s ease, 
                background-color 0.3s ease, color 0.3s ease,
                border-color 0.3s ease;
    
    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 6px 6px 0px 0px var(--shadow-color);
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