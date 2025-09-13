// src/components/FAQ.jsx
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = styled.section`
  padding: 120px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;


const FAQContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    color: var(--color-accent2);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: var(--color-neutral);
  border: var(--border-subtle) var(--color-accent3);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: var(--color-accent1);
    box-shadow: var(--shadow-medium) var(--shadow-color);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent1);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    font-size: 1rem;
  }
`;

const QuestionBorder = styled.div`
  height: 1px;
  background: var(--color-accent3);
  margin: 0 2rem;
  opacity: ${props => props.$isOpen ? 0 : 1};
  transition: opacity 0.3s ease;
  
  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
`;

const Answer = styled.div`
  padding: 1.5rem 2rem 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem 1.2rem;
    font-size: 0.95rem;
  }
`;

const QuickWinSection = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const QuickWinTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent2);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const QuickWinSubtitle = styled.p`
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--color-neutral);
  border: var(--border-subtle) var(--color-accent3);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  text-align: left;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-soft) var(--shadow-color);
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-accent1);
    box-shadow: var(--shadow-medium) var(--shadow-color);
  }
`;

const ServiceTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--color-text);
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
`;


const FAQ = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => {
      // If the clicked item is already open, close it
      if (prev[index]) {
        return { [index]: false };
      }
      // Otherwise, close all items and open only the clicked one
      return { [index]: true };
    });
  };

  const faqData = translations.faq.questions[language];
  const quickWinData = translations.faq.quickWinServices[language];

  return (
    <FAQSection id="faq" ref={ref}>
      <FAQContainer>
        <SectionTitle>
          {translations.faq.title[language]} <span>{translations.faq.titleHighlight[language]}</span>
        </SectionTitle>
        
        <SectionSubtitle>
          {translations.faq.subtitle[language]}
        </SectionSubtitle>
        
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuestionButton onClick={() => toggleItem(index)}>
                <span>{item.question}</span>
                {openItems[index] ? <FaChevronUp /> : <FaChevronDown />}
              </QuestionButton>
              
              <QuestionBorder $isOpen={openItems[index]} />
              
              <AnimatePresence>
                {openItems[index] && (
                  <AnswerContainer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <Answer>{item.answer}</Answer>
                  </AnswerContainer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
        
        <QuickWinSection>
          <QuickWinTitle>
            {translations.faq.quickWinTitle[language]} <span>{translations.faq.quickWinTitleHighlight[language]}</span>
          </QuickWinTitle>
          
          <QuickWinSubtitle>
            {translations.faq.quickWinSubtitle[language]}
          </QuickWinSubtitle>
          
          <ServicesGrid>
            {quickWinData.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </QuickWinSection>
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
