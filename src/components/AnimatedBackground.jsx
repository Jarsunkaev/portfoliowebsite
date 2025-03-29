import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './ThemeContext';

const BackgroundCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: ${props => props.theme === 'light' ? 0.1 : 0.2}; /* Slightly more visible in dark mode */
  pointer-events: none;
`;

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to window size with proper aspect ratio
    const handleResize = () => {
      // Use clientWidth/clientHeight to respect CSS styling
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regenerate grid when resized to maintain proper spacing
      generateGrid();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Create grid of points
    let pointsGrid = [];
    
    const generateGrid = () => {
      pointsGrid = []; // Clear existing grid
      const gridSize = 50;
      const cols = Math.floor(canvas.width / gridSize) + 2;
      const rows = Math.floor(canvas.height / gridSize) + 2;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          pointsGrid.push({
            x: i * gridSize,
            y: j * gridSize,
            originX: i * gridSize,
            originY: j * gridSize,
            speed: 0.01,
            amplitude: Math.random() * 15 + 5,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };
    
    // Initial setup
    handleResize();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set color based on theme
      const pointColor = theme === 'light' ? '#000' : '#fff';
      const lineColor = theme === 'light' ? 'rgba(0, 0, 0, ' : 'rgba(255, 255, 255, ';
      
      // Draw grid points
      for (let i = 0; i < pointsGrid.length; i++) {
        const point = pointsGrid[i];
        
        // Update point position with sine wave movement
        point.phase += point.speed;
        point.x = point.originX + Math.sin(point.phase) * point.amplitude;
        point.y = point.originY + Math.cos(point.phase) * point.amplitude;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();
      }
      
      // Draw lines between points
      for (let i = 0; i < pointsGrid.length; i++) {
        const pointA = pointsGrid[i];
        
        for (let j = i + 1; j < pointsGrid.length; j++) {
          const pointB = pointsGrid[j];
          const distance = Math.sqrt(
            Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(pointA.x, pointA.y);
            ctx.lineTo(pointB.x, pointB.y);
            ctx.strokeStyle = `${lineColor}${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]); // Added theme as dependency to redraw with correct colors on theme change
  
  return <BackgroundCanvas ref={canvasRef} theme={theme} />;
};

export default AnimatedBackground;