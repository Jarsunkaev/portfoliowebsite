// src/components/About.jsx - Removed image and improved desktop layout
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';

const AboutSection = styled.section`
  padding: 120px 0;
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  
  span {
    color: var(--color-accent1);
  }
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const AboutText = styled(motion.div)`
  margin-bottom: 3rem;
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-text);
    letter-spacing: 0.02em;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const SkillsContainer = styled(motion.div)`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  text-align: center;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  padding: 0.5rem;
`;

const Skill = styled(motion.div)`
  padding: 0.7rem 1.2rem;
  background: ${props => props.index % 3 === 0 ? 'var(--color-accent1)' : 
                          props.index % 3 === 1 ? 'var(--color-accent2)' : 
                          'var(--color-accent3)'};
  color: ${props => props.index % 3 === 0 ? 'white' : 'black'};
  border: var(--border-thick);
  font-weight: 600;
  border-radius: 8px;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
`;

// Updated skills list with Next.js and SQL
const skills = [
  "HTML", "CSS", "JavaScript","Typescript", "React", "Next.js", "Node.js", 
  "Express", "MongoDB", "SQL", "Bootstrap", "Tailwind CSS", 
  "Responsive Design", "Git", "Test Automation"
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { theme } = useContext(ThemeContext);
  
  return (
    <AboutSection id="about" ref={ref}>
      <AboutContainer>
        <SectionTitle>About <span>Me</span></SectionTitle>
        
        <AboutContent>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I am an Electrical Engineering student who discovered a passion for web development and design. The creative process of building functional and beautiful websites is what drives me.
            </p>
            <p>
              My background in electrical engineering gives me a unique perspective on problem-solving and building efficient, well-structured applications. I enjoy creating digital solutions that not only look good but also perform exceptionally well.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, experimenting with creative designs, or applying engineering principles to improve user experiences.
            </p>
          </AboutText>
          
          <SkillsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillsTitle>Skills & Technologies</SkillsTitle>
            <SkillsList>
              {skills.map((skill, index) => (
                <Skill 
                  key={index}
                  index={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  theme={theme}
                >
                  {skill}
                </Skill>
              ))}
            </SkillsList>
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;