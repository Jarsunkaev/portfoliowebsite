// src/components/About.jsx - Updated for agency focus
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';
import { FaCheck, FaClock, FaCode, FaComments } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-neutral);
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
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

const AboutImage = styled(motion.div)`
  border: var(--border-thick);
  border-radius: 12px;
  box-shadow: var(--shadow-neobrutalist);
  overflow: hidden;
  height: 450px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    margin-top: 2rem;
  }
`;

const ValueProposition = styled(motion.div)`
  margin-top: 3rem;
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  border: var(--border-thick);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-neobrutalist);
`;

const ValueTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  color: var(--color-text);
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ValueItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ValueIcon = styled.div`
  color: var(--color-accent2);
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

const ValueContent = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.9;
  }
`;

const WorkProcess = styled(motion.div)`
  margin-top: 4rem;
`;

const ProcessTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  text-align: center;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled(motion.div)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  border: var(--border-thick);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-neobrutalist);
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  background: var(--color-accent1);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 1rem;
  border: 2px solid black;
`;

const StepTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: var(--color-text);
`;

const StepDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { theme } = useContext(ThemeContext);
  
  // Define values and process steps
  const values = [
    {
      icon: <FaCode />,
      title: "Quality Code",
      description: "Clean, well-documented code that's built to last and easy to maintain."
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description: "Projects delivered on schedule with regular updates throughout development."
    },
    {
      icon: <FaComments />,
      title: "Clear Communication",
      description: "Regular updates in plain language, with quick response times."
    },
    {
      icon: <FaCheck />,
      title: "Attention to Detail",
      description: "Careful testing and polishing to ensure every aspect is perfect."
    }
  ];
  
  const processSteps = [
    {
      number: 1,
      title: "Discovery",
      description: "Understanding your business, goals, and specific project requirements."
    },
    {
      number: 2,
      title: "Planning",
      description: "Creating a detailed roadmap with timeline, features, and technical specifications."
    },
    {
      number: 3,
      title: "Development",
      description: "Building your website or application with regular progress updates."
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "Going live with your project and providing ongoing maintenance as needed."
    }
  ];
  
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
              I'm a web developer specializing in creating custom websites and web applications for businesses across Hungary and Europe. With expertise in both front-end and back-end development, I deliver complete digital solutions that help businesses stand out.
            </p>
            <p>
              My background in electrical engineering gives me a unique perspective on problem-solving and building efficient, well-structured applications. This technical foundation allows me to create solutions that not only look good but also perform exceptionally well.
            </p>
            <p>
              I take pride in developing tailored solutions for various industries, with particular expertise in healthcare, tourism, and small business sectors. Whether you need a multilingual website, a custom booking system, or an administrative dashboard, I can bring your vision to life.
            </p>
            
            <ValueProposition
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ValueTitle>What Sets Me Apart</ValueTitle>
              <ValueGrid>
                {values.map((value, index) => (
                  <ValueItem key={index}>
                    <ValueIcon>{value.icon}</ValueIcon>
                    <ValueContent>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </ValueContent>
                  </ValueItem>
                ))}
              </ValueGrid>
            </ValueProposition>
          </AboutText>
          
          <AboutImage
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src="/img/about-agency.jpg" alt="Web developer working" />
          </AboutImage>
        </AboutContent>
        
        <WorkProcess
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ProcessTitle>My Work Process</ProcessTitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index}
                theme={theme}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </WorkProcess>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;