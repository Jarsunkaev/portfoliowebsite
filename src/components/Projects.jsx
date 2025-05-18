// src/components/Projects.jsx - Updated with real projects and Hungarian support
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaUtensils, FaCar, FaPlane, FaCodeBranch, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const ProjectsSection = styled.section`
  padding: 120px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const BackgroundAccent = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${props => props.theme === 'dark' ? 'rgba(95, 136, 160, 0.05)' : 'rgba(79, 109, 122, 0.05)'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  z-index: -1;
`;

const ProjectsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    color: var(--color-accent2);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      height: 8px;
      background-color: var(--color-accent3);
      z-index: -1;
      opacity: 0.5;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  font-size: 1.2rem;
  opacity: 0.8;
  line-height: 1.6;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 1rem;
  }
  
  &:hover {
    background: ${props => props.active ? 'var(--color-accent1)' : 'var(--color-accent3)'};
    transform: translateY(-3px);
  }
`;

// Improved staggered layout styling
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const ProjectRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
  padding: 2rem 0;
  
  &:nth-child(even) {
    direction: rtl;
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
    gap: 3rem;
    padding: 1.5rem 0;
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  direction: ltr;
  z-index: 1;
  padding: 0;
  transition: all 0.4s ease;
`;

const ProjectImage = styled.div`
  overflow: hidden;
  position: relative;
  height: 420px;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
    border-radius: 16px;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }
  
  ${ProjectRow}:hover & {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
    
    img {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const CategoryTag = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  padding: 0.7rem 1.4rem;
  font-weight: 600;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  border-radius: 100px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transform: translateY(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(5px);
  
  svg {
    font-size: 1.2rem;
    color: var(--color-accent1);
  }
  
  ${ProjectRow}:hover & {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  direction: ltr;
  align-self: center;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 80px;
    height: 4px;
    background: var(--color-accent2);
  }
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.8rem;
  color: var(--color-text);
  opacity: 0.9;
  line-height: 1.7;
  font-size: 1.1rem;
`;

const ProjectChallenge = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding: 1.5rem;
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  border-radius: 16px;
  border-left: 4px solid var(--color-accent1);
  transition: all 0.3s ease;
  
  ${ProjectRow}:hover & {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }
  
  h4 {
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: var(--color-accent1);
    }
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
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
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const ViewButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: var(--color-text);
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  width: fit-content;
  border: var(--border-thick);
  border-radius: 8px;
  background: transparent;
  font-family: var(--font-heading);
  
  &:hover {
    background: var(--color-accent3);
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-neobrutalist);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

// New Projects Data with more realistic images
const projectsData = [
  {
    id: 1,
    title: {
      en: "BuvipTur Tourism Website",
      hu: "BuvipTur Turisztikai Weboldal"
    },
    description: {
      en: "Modern tourism website featuring custom design and an interactive contact form for a travel agency specializing in unique Hungarian experiences.",
      hu: "Modern turisztikai weboldal egyedi dizájnnal és interaktív kapcsolatfelvételi űrlappal egy utazási iroda számára, amely egyedi magyar élményekre specializálódott."
    },
    image: "/img/projects/buviptur.jpg",
    category: "tourism",
    icon: <FaPlane />,
    categoryName: {
      en: "Tourism",
      hu: "Turizmus"
    },
    problem: {
      en: "Creating an attractive digital presence that effectively showcases tour packages while making it easy for international tourists to inquire about services.",
      hu: "Vonzó digitális jelenlét létrehozása, amely hatékonyan mutatja be az utazási csomagokat, miközben megkönnyíti a nemzetközi turisták számára a szolgáltatások iránti érdeklődést."
    },
    solution: {
      en: "Developed a sleek, responsive website with visually appealing tour presentations and a streamlined, multilingual contact system.",
      hu: "Elegáns, reszponzív weboldal fejlesztése vizuálisan vonzó túrabemutatókkal és egyszerűsített, többnyelvű kapcsolattartási rendszerrel."
    },
    technologies: ["Svelte", "Node.js", "Express", "i18n", "GSAP"],
    features: ["Custom Design", "Responsive Interface", "Contact Form", "SEO Optimization"],
    demoUrl: "https://buviptur.com"
  },
  {
    id: 2,
    title: {
      en: "Zima Auto Services",
      hu: "Zima Autó Szolgáltatások"
    },
    description: {
      en: "Comprehensive website for a business offering airport parking, car wash, tire service, and car maintenance with a fully interactive real-time booking system.",
      hu: "Átfogó weboldal egy vállalkozás számára, amely reptéri parkolást, autómosást, gumiszervízt és autókarbantartást kínál teljes mértékben interaktív, valós idejű foglalási rendszerrel."
    },
    image: "/img/projects/zima-auto.jpg",
    category: "automotive",
    icon: <FaCar />,
    categoryName: {
      en: "Automotive",
      hu: "Autós Szolgáltatások"
    },
    problem: {
      en: "Managing complex service scheduling across multiple service types while preventing double-bookings and optimizing staff resource allocation.",
      hu: "Komplex szolgáltatásütemezés kezelése több szolgáltatástípuson keresztül, a dupla foglalások megelőzése és a személyzeti erőforrások optimalizálása mellett."
    },
    solution: {
      en: "Designed a sophisticated booking system with real-time availability, service time calculations, and automated confirmations.",
      hu: "Kifinomult foglalási rendszer tervezése valós idejű elérhetőséggel, szolgáltatási időszámításokkal és automatizált visszaigazolásokkal."
    },
    technologies: ["Svelte", "Node.js", "MongoDB", "WebSockets", "JWT"],
    features: ["Real-time Booking", "Service Management", "Customer Dashboard", "Admin Panel"],
    demoUrl: "https://zimaauto.hu"
  },
  {
    id: 3,
    title: {
      en: "Frigo Recipe Generator",
      hu: "Frigo Receptgenerátor"
    },
    description: {
      en: "Innovative web application that generates personalized recipes based on available ingredients, helping users reduce food waste and discover new dishes.",
      hu: "Innovatív webalkalmazás, amely személyre szabott recepteket generál a rendelkezésre álló hozzávalók alapján, segítve a felhasználókat az élelmiszer-pazarlás csökkentésében és új ételek felfedezésében."
    },
    image: "/img/projects/frigo.jpg",
    category: "webapp",
    icon: <FaUtensils />,
    categoryName: {
      en: "Web Application",
      hu: "Webalkalmazás"
    },
    problem: {
      en: "Helping users decide what to cook with ingredients they already have at home, reducing food waste and inspiring culinary creativity.",
      hu: "Segítség a felhasználóknak abban, hogy mit főzzenek az otthon már meglévő hozzávalókból, csökkentve az élelmiszer-pazarlást és inspirálva a konyhai kreativitást."
    },
    solution: {
      en: "Created an intelligent recipe suggestion system that matches available ingredients with possible recipes and offers premium subscription options.",
      hu: "Intelligens receptajánló rendszer létrehozása, amely összehangolja a rendelkezésre álló hozzávalókat a lehetséges receptekkel, és prémium előfizetési lehetőségeket kínál."
    },
    technologies: ["Next.js", "Firebase", "Stripe", "Recipe API", "Auth0"],
    features: ["Ingredient Scanning", "Recipe Filtering", "Favorites Collection", "Premium Subscription"],
    demoUrl: "https://frigo-recipes.com"
  }
];

// Define category display names and their respective icons
const categories = [
  { id: "all", icon: <FaGlobe />, name: { en: "All Projects", hu: "Összes Projekt" } },
  { id: "tourism", icon: <FaPlane />, name: { en: "Tourism", hu: "Turizmus" } },
  { id: "automotive", icon: <FaCar />, name: { en: "Automotive", hu: "Autós" } },
  { id: "webapp", icon: <FaCodeBranch />, name: { en: "Web Applications", hu: "Webalkalmazások" } }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
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
      {/* Background accents */}
      <BackgroundAccent theme={theme} top="-250px" left="5%" />
      <BackgroundAccent theme={theme} bottom="100px" right="5%" />
      
      <ProjectsContainer>
        <SectionTitle>
          {language === 'hu' ? 'Munkáink' : 'My'} <span>{language === 'hu' ? '' : 'Portfolio'}</span>
        </SectionTitle>
        <SectionSubtitle>
          {translations.projects.subtitle[language]}
        </SectionSubtitle>
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.icon} <span style={{ marginLeft: '8px' }}>{category.name[language]}</span>
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
                  {project.icon} {project.categoryName[language]}
                </CategoryTag>
                <ProjectImage>
                  <img src={project.image} alt={project.title[language]} />
                </ProjectImage>
              </ProjectImageContainer>
              
              <ProjectContent>
                <ProjectTitle>{project.title[language]}</ProjectTitle>
                <ProjectDescription>{project.description[language]}</ProjectDescription>
                
                <ProjectChallenge theme={theme}>
                  <h4><FaCalendarAlt /> {translations.projects.challengeSolutionTitle[language]}</h4>
                  <p><strong>{translations.projects.problemLabel[language]}:</strong> {project.problem[language]}</p>
                  <p><strong>{translations.projects.solutionLabel[language]}:</strong> {project.solution[language]}</p>
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {translations.projects.viewCaseStudy[language]} <FaExternalLinkAlt />
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