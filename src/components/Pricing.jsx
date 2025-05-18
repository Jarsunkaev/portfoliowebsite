// src/components/Pricing.jsx - Removed "Most Popular" banner
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  background: ${props => props.highlighted ? 'var(--color-accent3)' : 'var(--color-neutral)'};
  border: ${props => props.highlighted ? '2px solid var(--color-accent1)' : 'var(--border-thick) var(--border-color)'};
  border-radius: 8px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const PlanPrice = styled.div`
  margin-bottom: 1rem;
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-accent1);
  }
  
  .currency {
    font-size: 1.2rem;
    vertical-align: super;
    margin-right: 0.2rem;
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
  padding: 1rem;
  background: ${props => props.primary ? 'var(--color-accent1)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--color-text)'};
  border: var(--border-thick) var(--border-color);
  border-radius: 4px;
  font-weight: 600;
  font-family: var(--font-heading);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: ${props => props.primary ? 'var(--color-accent1)' : 'var(--color-accent3)'};
    transform: translateY(-3px);
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
          {translations.pricing?.title?.[language] || "Our"} <span>{translations.pricing?.titleHighlight?.[language] || "Pricing"}</span>
        </SectionTitle>
        
        <SectionSubtitle>
          {translations.pricing?.subtitle?.[language] || 
            "Choose a plan with one-time payment and maintenance that works best for your business."}
        </SectionSubtitle>
        
        <PricingGrid>
          {/* Basic Plan */}
          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PlanName>{translations.pricing?.basicPlan?.[language] || "Starter"}</PlanName>
            <PlanPrice>
              <span className="currency">Ft</span>
              <span className="price">189.000</span>
            </PlanPrice>
            
            <MaintenanceFee theme={theme}>
              <div className="maintenance-label">
                <FaPlus size={12} />
                <span>{translations.pricing?.maintenance?.[language] || "Maintenance"}</span>
              </div>
              <div className="maintenance-price">Ft 15.000 / {translations.pricing?.month?.[language] || "month"}</div>
            </MaintenanceFee>
            
            <PlanDescription>
              {translations.pricing?.basicDesc?.[language] || 
                "Perfect for small businesses just starting their online presence."}
            </PlanDescription>
            
            <FeaturesList>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.responsive?.[language] || "Responsive Website (up to 5 pages)"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.contentManagement?.[language] || "Basic CMS Integration"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.seo?.[language] || "Basic SEO Setup"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.contact?.[language] || "Contact Form"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.designRevisions?.[language] || "2 Design Revisions"}</FeatureText>
              </Feature>
            </FeaturesList>
            
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <CTAButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.pricing?.getStarted?.[language] || "Get Started"}
              </CTAButton>
            </StyledLink>
          </PricingCard>
          
          {/* Business Plan - No more "most popular" banner */}
          <PricingCard
            highlighted={true} // Still keep highlighted styling but no banner
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PlanName>{translations.pricing?.businessPlan?.[language] || "Professional"}</PlanName>
            <PlanPrice>
              <span className="currency">Ft</span>
              <span className="price">349.000</span>
            </PlanPrice>
            
            <MaintenanceFee theme={theme}>
              <div className="maintenance-label">
                <FaPlus size={12} />
                <span>{translations.pricing?.maintenance?.[language] || "Maintenance"}</span>
              </div>
              <div className="maintenance-price">Ft 29.000 / {translations.pricing?.month?.[language] || "month"}</div>
            </MaintenanceFee>
            
            <PlanDescription>
              {translations.pricing?.businessDesc?.[language] || 
                "Ideal for growing businesses that need more advanced features."}
            </PlanDescription>
            
            <FeaturesList>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.responsiveBusiness?.[language] || "Premium Website (up to 10 pages)"}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.multilingualBasic?.[language] || "Bilingual Support (HU/EN)"}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.bookingBasic?.[language] || "Basic Booking System"}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.seoAdvanced?.[language] || "Advanced SEO Optimization"}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.analytics?.[language] || "Google Analytics Integration"}</FeatureText>
              </Feature>
              <Feature highlighted={true}>
                <FaCheckCircle />
                <FeatureText>{translations.pricing?.designRevisionsPlus?.[language] || "Unlimited Design Revisions"}</FeatureText>
              </Feature>
            </FeaturesList>
            
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <CTAButton 
                primary={true}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.pricing?.getStarted?.[language] || "Get Started"}
              </CTAButton>
            </StyledLink>
          </PricingCard>
          
          {/* Enterprise Plan */}
          <PricingCard
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PlanName>{translations.pricing?.enterprisePlan?.[language] || "Enterprise"}</PlanName>
            <PlanPrice>
              <span className="currency">Ft</span>
              <span className="price">649.000</span>
            </PlanPrice>
            
            <MaintenanceFee theme={theme}>
              <div className="maintenance-label">
                <FaPlus size={12} />
                <span>{translations.pricing?.maintenance?.[language] || "Maintenance"}</span>
              </div>
              <div className="maintenance-price">Ft 49.000 / {translations.pricing?.month?.[language] || "month"}</div>
            </MaintenanceFee>
            
            <PlanDescription>
              {translations.pricing?.enterpriseDesc?.[language] || 
                "For businesses that need comprehensive digital solutions."}
            </PlanDescription>
            
            <FeaturesList>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.responsiveEnterprise?.[language] || "Custom Web Application"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.multilingualFull?.[language] || "Multilingual Support (Up to 5 languages)"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.bookingFull?.[language] || "Advanced Booking System"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.adminDashboard?.[language] || "Custom Admin Dashboard"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.integration?.[language] || "Third-party Integrations"}</FeatureText>
              </Feature>
              <Feature>
                <FaCheck />
                <FeatureText>{translations.pricing?.training?.[language] || "Staff Training & Documentation"}</FeatureText>
              </Feature>
            </FeaturesList>
            
            <StyledLink to="contact" spy={true} smooth={true} duration={500}>
              <CTAButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {translations.pricing?.getStarted?.[language] || "Get Started"}
              </CTAButton>
            </StyledLink>
          </PricingCard>
        </PricingGrid>
        
        <CustomPricing>
          <CustomTitle>
            {translations.pricing?.customTitle?.[language] || "Need a Custom Solution?"}
          </CustomTitle>
          <CustomText>
            {translations.pricing?.customText?.[language] || 
              "We understand that every business has unique needs. Contact us for a personalized quote tailored to your specific requirements."}
          </CustomText>
          <StyledLink to="contact" spy={true} smooth={true} duration={500}>
            <CustomButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {translations.pricing?.contactUs?.[language] || "Contact Us"}
            </CustomButton>
          </StyledLink>
        </CustomPricing>
      </PricingContainer>
    </PricingSection>
  );
};

export default Pricing;