// src/components/FAQ.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from './LanguageContext';
import translations from '../translations';
import { FaChevronDown } from 'react-icons/fa';

const FAQSection = styled.section`
  padding: 120px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    filter: blur(60px);
    opacity: 0.25;
    pointer-events: none;
    border-radius: 50%;
  }

  &::before {
    width: 280px;
    height: 280px;
    top: -60px;
    left: -80px;
    background: radial-gradient(circle at 30% 30%, var(--color-accent3), transparent 60%);
  }

  &::after {
    width: 320px;
    height: 320px;
    bottom: -80px;
    right: -100px;
    background: radial-gradient(circle at 70% 70%, var(--color-accent2), transparent 60%);
  }
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
    font-size: clamp(2rem, 8vw, 2.8rem);
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
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
  gap: 1.2rem;
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
  position: relative;

  &:hover {
    border-color: var(--color-accent1);
    box-shadow: var(--shadow-medium) var(--shadow-color);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(120deg, transparent 0%, transparent 60%, rgba(0,0,0,0.06) 100%);
    opacity: 0.2;
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

const QuestionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
`;

const Chevron = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
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
  background: linear-gradient(180deg, rgba(0,0,0,0.03), transparent 40%);
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
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
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
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })}
        </script>
      </Helmet>
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <QuestionButton
                onClick={() => toggleItem(index)}
                aria-expanded={!!openItems[index]}
                aria-controls={`faq-panel-${index}`}
              >
                <QuestionLabel>
                  {item.question}
                </QuestionLabel>
                <Chevron
                  initial={false}
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <FaChevronDown />
                </Chevron>
              </QuestionButton>

              <QuestionBorder $isOpen={openItems[index]} />

              <AnimatePresence>
                {openItems[index] && (
                  <AnswerContainer
                    id={`faq-panel-${index}`}
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
