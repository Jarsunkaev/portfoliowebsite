// src/components/About.jsx - Simple with just a faint electrical circuit background
import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "./ThemeContext";
import { useLanguage } from "./LanguageContext";
import translations from "../translations";
import { FaCheck, FaClock, FaCode, FaComments } from "react-icons/fa";

const AboutSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-neutral);
  position: relative;
  background-image: ${(props) => 
    `url("${process.env.PUBLIC_URL}/img/circuit-pattern-${props.theme === "dark" ? "dark" : "light"}.svg")`};
  background-size: 1200px;
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-neutral);
    opacity: ${(props) => (props.theme === "dark" ? 0.94 : 0.97)};
  }
`;

const AboutContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 2.5rem;
  text-align: center;

  span {
    color: var(--color-accent1);
  }

  @media (max-width: 768px) {
    grid-area: title;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title"
      "image"
      "content";
  }
`;

const AboutText = styled(motion.div)`
  p {
    margin-bottom: 1.8rem;
    line-height: 1.8;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--color-text);
    letter-spacing: 0.02em;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-area: content;
  }
`;

const AboutImage = styled(motion.div)`
  border: var(--border-thick);
  border-radius: 16px;
  overflow: hidden;
  height: 450px;
  max-width: 400px;
  margin: 0 auto 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-neobrutalist);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    grid-area: image;
    margin: 0 auto 2.5rem;
    height: 350px;
    max-width: 300px;
  }

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0px 0px var(--shadow-color);
  }

  img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 340px;
    margin-top: 1rem;
  }
`;

const ValueProposition = styled(motion.div)`
  margin-top: 3.5rem;
  background: ${(props) => (props.theme === "dark" ? "#2A2A2A" : "white")};
  border: var(--border-thick);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: var(--shadow-neobrutalist);
  width: calc(100% + 3.5rem + 100%); /* Makes it full width of the container */
  max-width: 1200px; /* Same as container max-width */
  margin-left: 0;
  margin-right: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0px 0px var(--shadow-color);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ValueTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 60px;
    height: 3px;
    background: var(--color-accent2);
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  color: white;
  font-size: 1.2rem;
  background: var(--color-accent2);
  padding: 0.8rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const ValueContent = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--color-text);
    font-family: var(--font-heading);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 0 !important;
  }
`;

const WorkProcess = styled(motion.div)`
  margin-top: 5rem;
  width: 100%;
`;

const ProcessTitle = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 3rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    width: 80px;
    height: 3px;
    background: var(--color-accent1);
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ProcessStep = styled(motion.div)`
  background: ${(props) => (props.theme === "dark" ? "#2A2A2A" : "white")};
  border: var(--border-subtle) var(--color-accent3);
  border-radius: var(--border-radius-md);
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-medium) var(--shadow-color);
    border-color: var(--color-accent1);
  }
`;

const StepNumber = styled.div`
  background: var(--color-accent1);
  color: var(--color-bg);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0 auto 1.5rem;
  border: 3px solid var(--color-accent3);
  position: relative;
  z-index: 3;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  transition: all 0.3s ease;

  ${ProcessStep}:hover & {
    background: var(--color-accent2);
    border-color: var(--color-accent1);
    transform: scale(1.1);
  }
`;

const StepTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  font-family: var(--font-heading);
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();

  // Define values and process steps
  const values = [
    {
      icon: <FaCode />,
      title:
        translations.about.values.quality.title[language] || "Quality Code",
      description:
        translations.about.values.quality.description[language] ||
        "Clean, well-documented code that's built to last and easy to maintain.",
    },
    {
      icon: <FaClock />,
      title:
        translations.about.values.timely.title[language] || "Timely Delivery",
      description:
        translations.about.values.timely.description[language] ||
        "Projects delivered on schedule with regular updates throughout development.",
    },
    {
      icon: <FaComments />,
      title:
        translations.about.values.communication.title[language] ||
        "Clear Communication",
      description:
        translations.about.values.communication.description[language] ||
        "Regular updates in plain language, with quick response times.",
    },
    {
      icon: <FaCheck />,
      title:
        translations.about.values.attention.title[language] ||
        "Attention to Detail",
      description:
        translations.about.values.attention.description[language] ||
        "Careful testing and polishing to ensure every aspect is perfect.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title:
        translations.about.process.discovery.title[language] || "Discovery",
      description:
        translations.about.process.discovery.description[language] ||
        "Understanding your business, goals, and specific project requirements.",
    },
    {
      number: 2,
      title: translations.about.process.planning.title[language] || "Planning",
      description:
        translations.about.process.planning.description[language] ||
        "Creating a detailed roadmap with timeline, features, and technical specifications.",
    },
    {
      number: 3,
      title:
        translations.about.process.development.title[language] || "Development",
      description:
        translations.about.process.development.description[language] ||
        "Building your website or application with regular progress updates.",
    },
    {
      number: 4,
      title:
        translations.about.process.launch.title[language] || "Launch & Support",
      description:
        translations.about.process.launch.description[language] ||
        "Going live with your project and providing ongoing maintenance as needed.",
    },
  ];

  // Determine the appropriate title based on language
  const sectionTitle = language === "en" ? "About Me" : "Rólam";

  return (
    <AboutSection id="about" ref={ref} theme={theme}>
      <AboutContainer>
        <SectionTitle>
          <span>{sectionTitle}</span>
        </SectionTitle>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {translations.about.description[language]
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

            <ValueProposition
              theme={theme}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ValueTitle>
                {translations.about.valuesTitle[language] ||
                  "Mitől vagyok különleges"}
              </ValueTitle>
              <ValueGrid>
                {values.map((value, index) => (
                  <ValueItem key={index} theme={theme}>
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
            <img
              src={`${process.env.PUBLIC_URL}/me.jpeg`}
              alt="Web developer working"
            />
          </AboutImage>
        </AboutContent>

        <WorkProcess
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ProcessTitle>
            {translations.about.processTitle[language] || "Munkafolyamatom"}
          </ProcessTitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                theme={theme}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
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
