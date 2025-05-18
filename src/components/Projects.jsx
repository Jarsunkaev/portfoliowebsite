// src/components/Projects.jsx - Fixed for language support
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaHospital, FaPlane, FaStore, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const ProjectsSection = styled.section`
  padding: 120px 0;
  position: relative;
  z-index: 1;
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    color: var(--color-accent2);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.2rem;
  opacity: 0.8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: ${props => props.active ? 'var(--color-accent1)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border: var(--border-thick);
  border-radius: 8px;
  font-family: var(--font-heading);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--color-accent1)' : 'var(--color-accent3)'};
    transform: translateY(-3px);
  }
`;

// New staggered layout styling
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ProjectRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 4rem;
  position: relative;
  
  &:nth-child(even) {
    direction: rtl;
    text-align: left;
  }
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -3rem;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'},
      transparent
    );
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: left;
    direction: ltr;
    gap: 2rem;
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  direction: ltr;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    right: -15px;
    bottom: 15px;
    left: 15px;
    border: 3px solid var(--color-accent1);
    z-index: -1;
    transition: all 0.3s ease;
    
    ${ProjectRow}:nth-child(even) & {
      top: -15px;
      right: 15px;
      bottom: 15px;
      left: -15px;
    }
    
    @media (max-width: 992px) {
      right: -15px;
      left: 15px;
      
      ${ProjectRow}:nth-child(even) & {
        right: -15px;
        left: 15px;
      }
    }
  }
  
  ${ProjectRow}:hover &::before {
    transform: translate(5px, -5px);
  }
  
  ${ProjectRow}:nth-child(even):hover &::before {
    transform: translate(-5px, -5px);
  }
`;

const ProjectImage = styled.div`
  overflow: hidden;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  position: relative;
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
  }
  
  ${ProjectRow}:hover & img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CategoryTag = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  background: var(--color-accent3);
  color: black;
  padding: 0.4rem 1rem;
  border: 2px solid black;
  font-weight: 600;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    font-size: 1.1rem;
  }
  
  ${ProjectRow}:nth-child(even) & {
    left: auto;
    right: 20px;
  }
  
  @media (max-width: 992px) {
    left: 20px;
    right: auto;
    
    ${ProjectRow}:nth-child(even) & {
      left: 20px;
      right: auto;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  direction: ltr;
  align-self: center;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 60px;
    height: 3px;
    background: var(--color-accent2);
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.7;
  font-size: 1.1rem;
`;

const ProjectChallenge = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--color-accent1);
  }
  
  h4 {
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Technology = styled.span`
  display: inline-block;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  padding: 0.4rem 0.8rem;
  background: ${props => {
    if (props.color === 'accent1') return 'var(--color-accent1)';
    if (props.color === 'accent2') return 'var(--color-accent2)';
    return 'var(--color-accent3)';
  }};
  font-weight: 600;
  border: 2px solid black;
  border-radius: 6px;
  color: ${props => props.color === 'accent1' ? 'white' : 'black'};
`;

const ViewButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  width: fit-content;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--color-accent1);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--color-accent1);
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const projectsData = [
  {
    id: 1,
    title: "MediBook Hungary",
    description: "A comprehensive booking system for a chain of private clinics across Hungary that streamlines patient appointments and minimizes administrative work.",
    image: "medibook.jpg",
    category: "healthcare",
    icon: <FaHospital />,
    categoryName: "Healthcare",
    problem: "Managing appointments across multiple locations with doctors' varying schedules and reducing no-shows.",
    solution: "Centralized booking system with automated reminders and waitlist functionality.",
    technologies: ["React", "Node.js", "MongoDB", "SendGrid API"],
    features: ["Multi-location booking", "SMS reminders", "Staff dashboard", "GDPR compliant"],
    demoUrl: "https://medibook-example.com"
  },
  {
    id: 2,
    title: "Budapest Tours",
    description: "Tourism website with booking capabilities for a tour company offering unique experiences in Budapest, with multilingual support for international visitors.",
    image: "budapest-tours.jpg",
    category: "tourism",
    icon: <FaPlane />,
    categoryName: "Tourism",
    problem: "Managing tour bookings and guide availability during peak tourist seasons while supporting multiple languages.",
    solution: "Interactive calendar with real-time availability and automatic capacity management.",
    technologies: ["Next.js", "Stripe", "MongoDB", "i18n"],
    features: ["Multilingual (5 languages)", "Payment processing", "Dynamic pricing", "Mobile optimized"],
    demoUrl: "https://budapest-tours-example.com"
  },
  {
    id: 3,
    title: "CaféConnect",
    description: "E-commerce and loyalty program platform for a local chain of coffee shops that helps build customer retention and increase average order value.",
    image: "cafe-connect.jpg",
    category: "small-business",
    icon: <FaStore />,
    categoryName: "Small Business",
    problem: "Increasing customer retention and streamlining online ordering process in a competitive market.",
    solution: "Digital loyalty cards, subscription management, and order-ahead functionality with personalized recommendations.",
    technologies: ["React", "Firebase", "Stripe", "Progressive Web App"],
    features: ["Order tracking", "Loyalty points", "Coffee subscriptions", "Push notifications"],
    demoUrl: "https://cafe-connect-example.com"
  },
  {
    id: 4,
    title: "DentConnect Dashboard",
    description: "Administrative dashboard for dental practices to manage patients, appointments, treatments, and financial records in one centralized system.",
    image: "dentconnect.jpg",
    category: "healthcare",
    icon: <FaHospital />,
    categoryName: "Healthcare",
    problem: "Inefficient paper-based patient management and treatment planning leading to administrative errors.",
    solution: "Custom dashboard with patient records, treatment plans, and payment tracking with analytics.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
    features: ["Patient records", "Treatment planning", "Financial analytics", "Supply management"],
    demoUrl: "https://dentconnect-example.com"
  },
  {
    id: 5,
    title: "EventsHungary",
    description: "Multilingual event management platform for corporate and cultural events with ticketing and attendee management features.",
    image: "events-hungary.jpg",
    category: "custom-features",
    icon: <FaCalendarAlt />,
    categoryName: "Custom Features",
    problem: "Complex event registration with multiple ticket types and scheduling conflicts for international events.",
    solution: "Custom event registration system with capacity management and ticket generation.",
    technologies: ["Next.js", "MongoDB", "QR code API", "Mailchimp"],
    features: ["Event scheduling", "Ticket generation", "Email marketing", "Attendee management"],
    demoUrl: "https://events-hungary-example.com"
  },
  {
    id: 6,
    title: "RetailInsights",
    description: "Data visualization dashboard for retail stores to analyze sales performance, track inventory, and forecast future trends.",
    image: "retail-insights.jpg",
    category: "custom-features",
    icon: <FaChartLine />,
    categoryName: "Custom Features",
    problem: "Difficulty understanding sales patterns and inventory needs across multiple locations leading to overstocking.",
    solution: "Interactive dashboard with customizable reports and predictive inventory suggestions based on historical data.",
    technologies: ["React", "D3.js", "Node.js", "MySQL"],
    features: ["Sales analytics", "Inventory forecasting", "Custom reports", "Data export"],
    demoUrl: "https://retail-insights-example.com"
  }
];

// Define category display names and their respective icons
const categories = [
  { id: "all", name: "All Projects" },
  { id: "healthcare", name: "Healthcare" },
  { id: "tourism", name: "Tourism" },
  { id: "small-business", name: "Small Business" },
  { id: "custom-features", name: "Custom Features" }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  return (
    <ProjectsSection id="projects" ref={ref}>
      <ProjectsContainer>
        <SectionTitle>My <span>Portfolio</span></SectionTitle>
        <SectionSubtitle>
          Explore my recent work across different industries, showcasing custom solutions for real business challenges
        </SectionSubtitle>
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsWrapper>
          {filteredProjects.map((project, index) => (
            <ProjectRow
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              theme={theme}
            >
              <ProjectImageContainer>
                <CategoryTag>
                  {project.icon} {project.categoryName}
                </CategoryTag>
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
              </ProjectImageContainer>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <ProjectChallenge>
                  <h4>Challenge & Solution</h4>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                </ProjectChallenge>
                
                <TechnologiesList>
                  {project.technologies.map((tech, index) => (
                    <Technology 
                      key={index}
                      color={index % 3 === 0 ? 'accent1' : index % 3 === 1 ? 'accent2' : 'accent3'}
                    >
                      {tech}
                    </Technology>
                  ))}
                </TechnologiesList>
                
                <ViewButton 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Case Study <FaExternalLinkAlt />
                </ViewButton>
              </ProjectContent>
            </ProjectRow>
          ))}
        </ProjectsWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;