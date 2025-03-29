import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const ProjectsSection = styled.section`
  padding: 100px 0;
  position: relative; /* Ensure proper stacking context */
  z-index: 1; /* Place above background but below other elements that need to be on top */
  
  /* Remove background color completely to let animated background show through */
  background-color: transparent;
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align everything in container */
  position: relative; /* Create stacking context */
  z-index: 2; /* Place content above section background */
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  border-bottom: var(--border-thick);
  padding-bottom: 1rem;
  
  span {
    color: var(--color-accent2);
  }
`;

// Use flex instead of grid for more control over centering
const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards */
  gap: 3rem;
  width: 100%;
`;

const ProjectCard = styled(motion.div)`
  border: var(--border-thick);
  border-radius: 12px;
  background: ${props => props.theme === 'dark' ? 
    'rgba(42, 42, 42, 0.9)' : /* Slightly more opaque for readability */
    'rgba(255, 255, 255, 0.9)'
  };
  box-shadow: ${props => props.theme === 'dark' ? '5px 5px 10px rgba(100,100,100,0.2)' : '5px 5px 10px rgba(0,0,0,0.1)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 350px; /* Fixed width instead of percentage */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: ${props => props.theme === 'dark' ? '6px 6px 12px rgba(100,100,100,0.3)' : '6px 6px 12px rgba(0,0,0,0.15)'};
  }
`;

const ProjectImage = styled.div`
  height: 200px; /* Slightly reduced fixed height */
  overflow: hidden;
  border-bottom: var(--border-thick);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme === 'dark' ? '#1a1a1a' : '#f5f5f5'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Changed from cover to contain */
    object-position: center; /* Center the image */
    transition: transform 0.5s ease;
    max-height: 200px; /* Ensure image doesn't exceed container */
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1; /* Take up remaining space */
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  color: var(--color-text);
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  color: var(--color-text);
  opacity: 0.8;
  flex-grow: 1; /* This will push the tags and buttons to the bottom */
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${props => `var(--color-${props.color || 'accent1'})`};
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid ${props => props.theme === 'dark' ? 'white' : 'black'};
  border-radius: 6px;
  color: ${props => {
    if (props.color === 'accent1') return 'white';
    return props.theme === 'dark' ? 'black' : 'black';
  }};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.theme === 'dark' ? 'white' : 'black'};
  border-radius: 6px;
  background: ${props => props.primary ? 'var(--color-accent2)' : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.primary ? 'var(--color-accent1)' : 'var(--color-accent3)'};
    transform: translateY(-2px);
    color: ${props => props.primary ? 'white' : 'black'};
  }
`;

const projectsData = [
  {
    id: 1,
    title: "Frigo App",
    description: "A recipe recommender webapp that generates recipes based on uploaded images, with meal planner features.",
    image: "frigo.png",
    tags: ["React", "Node.js", "AI", "Image Recognition"],
    github: "https://github.com/Jarsunkaev/frigo_app",
    demo: "https://frigo-app.com/"
  },
  {
    id: 2,
    title: "CampFinder",
    description: "A platform for discovering and reviewing camping sites across the country.",
    image: "campfinder.png",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Jarsunkaev/Camp-Finder",
    demo: "https://campfinder.fly.dev/"
  },
  {
    id: 3,
    title: "Zima Auto",
    description: "Your One-Stop Solution for All Your Car Needs! ",
    image: "zima.png",
    tags: ["Wix"],
    demo: "https://www.zima-auto.com/"
  }
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <ProjectsSection id="projects" theme={theme}>
      <ProjectsContainer>
        <SectionTitle>My <span>Projects</span></SectionTitle>
        
        <ProjectGrid>
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              theme={theme}
            >
              <ProjectImage theme={theme}>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <Tag 
                      key={index}
                      color={index % 3 === 0 ? 'accent1' : index % 3 === 1 ? 'accent2' : 'accent3'}
                      theme={theme}
                    >
                      {tag}
                    </Tag>
                  ))}
                </ProjectTags>
                
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      theme={theme}
                    >
                      <FaGithub /> GitHub
                    </ProjectLink>
                  )}
                  <ProjectLink 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    primary
                    theme={theme}
                    style={{ 
                      flex: project.github ? '0 0 auto' : '1', 
                      justifyContent: project.github ? 'flex-start' : 'center'
                    }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;