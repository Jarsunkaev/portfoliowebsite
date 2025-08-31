// src/components/Pricing.jsx - Fixed currency position for Hungarian format
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';
import { FaCheck, FaCheckCircle, FaPlus } from 'react-icons/fa';

const PricingSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-bg);
  position: relative;
  overflow: hidden;
`;

const PricingContainer = styled.div`
  width: 90%;
  max-width: 1200px;
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
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    gap: 2rem;
  }
`;

const PricingCard = styled(motion.div)`
  background: ${props => props.highlighted ? 'var(--color-accent3)' : 'var(--color-neutral)'};
  border: ${props => props.highlighted ? 'var(--border-medium) var(--color-accent1)' : 'var(--border-subtle) var(--color-accent3)'};
  border-radius: var(--border-radius-lg);
  padding: 1.8rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-medium) var(--shadow-color);
    border-color: var(--color-accent1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }
`;

const PlanName = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
  color: var(--color-text);
`;

const PlanPrice = styled.div`
  margin-bottom: 1rem;
  
  .price {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--color-accent1);
    line-height: 1.2;
  }
  
  .currency {
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }
`;

const MaintenanceFee = styled.div`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
  background: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 4px;
  
  .maintenance-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
  
  .maintenance-price {
    font-weight: 700;
    color: var(--color-accent2);
  }
`;

const PlanDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  flex-grow: 1; /* Make the features list grow to fill space */
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.8rem;
    margin-top: 0.3rem;
    font-size: 0.9rem;
    color: ${props => props.highlighted ? 'var(--color-accent1)' : 'var(--color-accent2)'};
  }
`;

const FeatureText = styled.span`
  line-height: 1.5;
`;

const CTAButton = styled(motion.div)`
  width: 100%;
  padding: 1.2rem 1rem;
  background: ${props => props.primary ? 'var(--color-accent1)' : 'transparent'};
  color: ${props => props.primary ? 'var(--color-bg)' : 'var(--color-text)'};
  border: ${props => props.primary ? 'var(--border-subtle) transparent' : 'var(--border-medium) var(--color-accent1)'};
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-family: var(--font-heading);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.primary ? 'var(--color-accent2)' : 'var(--color-accent3)'};
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium) var(--shadow-color);
    border-color: var(--color-accent1);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 1.4rem 1rem;
    min-height: 56px;
    font-size: 1.05rem;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  cursor: pointer;
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: ${props => props.theme === 'dark' ? 'rgba(95, 136, 160, 0.03)' : 'rgba(79, 109, 122, 0.03)'};
  border-radius: 50%;
  top: -300px;
  left: -200px;
  z-index: 1;
`;

const BackgroundShape2 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: ${props => props.theme === 'dark' ? 'rgba(130, 144, 217, 0.03)' : 'rgba(113, 126, 195, 0.03)'};
  border-radius: 50%;
  bottom: -150px;
  right: -50px;
  z-index: 1;
`;

const CustomPricing = styled.div`
  margin-top: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CustomTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const CustomText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const CustomButton = styled(motion.div)`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--color-accent2);
  color: white;
  border: var(--border-thick) var(--border-color);
  border-radius: 4px;
  font-weight: 600;
  font-family: var(--font-heading);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-accent1);
    color: white; /* Ensures text stays visible on hover */
    transform: translateY(-3px);
  }
`;

const Pricing = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <PricingSection id="pricing" ref={ref}>
      <BackgroundShape theme={theme} />
      <BackgroundShape2 theme={theme} />
      
      <PricingContainer>
        <SectionTitle>
          {translations.pricing.title[language]} <span>{translations.pricing.titleHighlight[language]}</span>
        </SectionTitle>
        
        <SectionSubtitle>
          {translations.pricing.subtitle[language]}
        </SectionSubtitle>
        
        <PricingGrid>
          {/* Basic Plan */}
          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PlanName>{translations.pricing.basicPlan[language]}</PlanName>
            <PlanPrice>
              <span className="price">200.000</span>
              <span className="currency">Ft</span>
            </PlanPrice>
            
            <MaintenanceFee theme={theme}>
              <div className="maintenance-label">
                <FaPlus size={12} />
                <span>{translations.pricing.maintenance[language]}</span>
              </div>
              <div className="maintenance-price">15.000 Ft / {translations.pricing.month[language]}</div>
            </MaintenanceFee>
            
            <PlanDescription>
              {translations.pricing.basicDesc[language]}
            </PlanDescription>
            
            <FeaturesList>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.responsive[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.contentManagement[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.seo[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.contact[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.designRevisions[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.googleBusiness[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.gdprCompliance[language]}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing.hostingSetup[language]}</FeatureText>
              </Feature>
            </FeaturesList>
            
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <CTAButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.pricing.getStarted[language]}
              </CTAButton>
            </StyledLink>
          </PricingCard>
          
          {/* Business Plan */}
          <PricingCard
            highlighted={true}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PlanName>{translations.pricing.businessPlan[language]}</PlanName>
            <PlanPrice>
              <span className="price">{translations.pricing.customPrice[language]}</span>
            </PlanPrice>
            
            <MaintenanceFee theme={theme}>
              <div className="maintenance-label">
                <FaPlus size={12} />
                <span>{translations.pricing.maintenance[language]}</span>
              </div>
              <div className="maintenance-price">{translations.pricing.customPrice[language]}</div>
            </MaintenanceFee>
            
            <PlanDescription>
              {translations.pricing.businessDesc[language]}
            </PlanDescription>
            
            <FeaturesList>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.responsiveBusiness[language]}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.multilingualBasic[language]}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.bookingBasic[language]}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.seoAdvanced[language]}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.analytics[language]}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing.designRevisionsPlus[language]}</FeatureText>
              </Feature>
            </FeaturesList>
            
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <CTAButton 
                primary={true}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.pricing.getStarted[language]}
              </CTAButton>
            </StyledLink>
          </PricingCard>
        </PricingGrid>
        
        <CustomPricing>
          <CustomTitle>
            {translations.pricing.customTitle[language]}
          </CustomTitle>
          <CustomText>
            {translations.pricing.customText[language]}
          </CustomText>
          <StyledLink to="contact" spy={true} smooth={true} duration={500}>
            <CustomButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {translations.pricing.contactUs[language]}
            </CustomButton>
          </StyledLink>
        </CustomPricing>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;