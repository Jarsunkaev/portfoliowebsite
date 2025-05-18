// src/components/Services.jsx - Enhanced with sequential fade-in animations and text wrapping
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations'; // Make sure this path is correct
import {
  FaDesktop,
  FaCalendarAlt,
  FaGlobe,
  FaShoppingCart,
  FaCog,
  FaCheck,
  FaArrowRight,
  FaCreditCard,
  FaUserCog
} from 'react-icons/fa';

// Enhanced styling for a more interactive and visually appealing layout
const ServicesSection = styled.section`
  padding: 140px 0 120px;
  background-color: var(--color-neutral);
  position: relative;
  overflow: hidden; /* Keep this to contain decorative elements and animations */
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;
  
  span {
    color: var(--color-accent1);
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 5px;
      width: 100%;
      height: 12px;
      background-color: var(--color-accent3);
      z-index: -1;
      opacity: 0.4;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const ServiceCategories = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const CategoryTab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'var(--color-accent1)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border: var(--border-thick);
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  
  &:hover {
    background: ${props => props.active ? 'var(--color-accent1)' : 'var(--color-accent3)'};
    transform: translateY(-3px);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

// Services grid layout - now a motion component for staggering children
const ServicesGrid = styled(motion.div)` // Changed to styled(motion.div)
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

// ServiceCard is already styled(motion.div) from your original code
const ServiceCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  border: var(--border-thick);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-neobrutalist);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0px 0px var(--shadow-color);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: var(--color-accent1);
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%; // Allows content to define height of the card
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardSidebar = styled.div`
  width: 200px;
  background: ${props => props.theme === 'dark' ? 'rgba(79, 109, 122, 0.1)' : 'rgba(79, 109, 122, 0.05)'};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; // Better aligns icon and tag if content is short
  border-right: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    border-right: none;
    border-bottom: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'};
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.5rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-accent2);
  background: ${props => props.theme === 'dark' ? 'rgba(130, 144, 217, 0.15)' : 'rgba(113, 126, 195, 0.1)'};
  width: 80px;
  height: 80px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    margin-bottom: 0;
  }
`;

const CategoryTag = styled.div`
  background: var(--color-accent3);
  color: var(--color-text);
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  margin-top: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
  color: var(--color-text);
  position: relative;
  line-height: 1.3; // Added for better control if title wraps
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 60px;
    height: 3px;
    background: var(--color-accent2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ServiceDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  opacity: 0.9;
  overflow-wrap: break-word; // Added for better text wrapping

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Adjusted gap slightly
  margin-top: auto; // Pushes features to the bottom if card content is sparse
`;

const FeaturesTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  svg {
    color: var(--color-accent1);
    font-size: 0.9rem;
    flex-shrink: 0;
  }
`;

const FeatureText = styled.span`
  font-size: 0.95rem;
  line-height: 1.4;
  overflow-wrap: break-word; // Added for better text wrapping
`;

const LearnMoreButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--color-accent1);
  color: white;
  border: var(--border-thick);
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--font-heading);
  margin-top: 2rem;
  align-self: flex-start;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: var(--color-accent2);
    
    svg {
      transform: translateX(5px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    margin-top: 1.5rem; // Adjusted slightly
  }
`;

const DecorativeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(95, 136, 160, 0.05)' 
    : 'rgba(79, 109, 122, 0.05)'
  };
  width: ${props => props.size || '400px'};
  height: ${props => props.size || '400px'};
  z-index: 1;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

const categories = [
  { id: 'all', nameKey: 'all' },
  { id: 'websites', nameKey: 'websites' },
  { id: 'ecommerce', nameKey: 'ecommerce' },
  { id: 'apps', nameKey: 'apps' }
];

const servicesData = [
  {
    id: 1, icon: <FaDesktop />, titleKey: 'customWebDevelopment.title', descriptionKey: 'customWebDevelopment.description', categories: ['websites'],
    features: ['customWebDevelopment.features.responsive', 'customWebDevelopment.features.seo', 'customWebDevelopment.features.performance', 'customWebDevelopment.features.cmsIntegration', 'customWebDevelopment.features.customDesign', 'customWebDevelopment.features.scalability']
  },
  {
    id: 2, icon: <FaShoppingCart />, titleKey: 'ecommerceSolutions.title', descriptionKey: 'ecommerceSolutions.description', categories: ['ecommerce', 'websites'],
    features: ['ecommerceSolutions.features.productManagement', 'ecommerceSolutions.features.secureCheckout', 'ecommerceSolutions.features.inventoryTracking', 'ecommerceSolutions.features.shippingIntegration', 'ecommerceSolutions.features.customerAccounts', 'ecommerceSolutions.features.salesAnalytics']
  },
  {
    id: 3, icon: <FaCreditCard />, titleKey: 'paymentIntegration.title', descriptionKey: 'paymentIntegration.description', categories: ['ecommerce', 'websites', 'apps'],
    features: ['paymentIntegration.features.multipleGateways', 'paymentIntegration.features.subscriptionBilling', 'paymentIntegration.features.pciCompliance', 'paymentIntegration.features.multiCurrency', 'paymentIntegration.features.fraudDetection', 'paymentIntegration.features.seamlessCheckout']
  },
  {
    id: 4, icon: <FaUserCog />, titleKey: 'adminPlatforms.title', descriptionKey: 'adminPlatforms.description', categories: ['apps', 'websites', 'ecommerce'],
    features: ['adminPlatforms.features.userManagement', 'adminPlatforms.features.contentManagement', 'adminPlatforms.features.dataAnalytics', 'adminPlatforms.features.rolePermissions', 'adminPlatforms.features.reportingTools', 'adminPlatforms.features.customDashboards']
  },
  {
    id: 5, icon: <FaCog />, titleKey: 'websiteMaintenance.title', descriptionKey: 'websiteMaintenance.description', categories: ['websites', 'apps', 'ecommerce'],
    features: ['websiteMaintenance.features.regularUpdates', 'websiteMaintenance.features.securityMonitoring', 'websiteMaintenance.features.backupSolutions', 'websiteMaintenance.features.performanceOptimization', 'websiteMaintenance.features.bugFixes', 'websiteMaintenance.features.technicalSupport']
  },
  {
    id: 6, icon: <FaCalendarAlt />, titleKey: 'bookingSystems.title', descriptionKey: 'bookingSystems.description', categories: ['apps', 'websites'],
    features: ['bookingSystems.features.realTimeAvailability', 'bookingSystems.features.onlinePayments', 'bookingSystems.features.automatedReminders', 'bookingSystems.features.calendarSync', 'bookingSystems.features.customizableForms', 'bookingSystems.features.groupBookings']
  },
  {
    id: 7, icon: <FaGlobe />, titleKey: 'multilingualSites.title', descriptionKey: 'multilingualSites.description', categories: ['websites', 'ecommerce'],
    features: ['multilingualSites.features.contentTranslation', 'multilingualSites.features.languageSwitcher', 'multilingualSites.features.localizedSEO', 'multilingualSites.features.rtlSupport', 'multilingualSites.features.regionalFormatting', 'multilingualSites.features.easyManagement']
  }
];

const getTranslation = (path, language, translationsData) => {
  try {
    const keys = path.split('.');
    let result = translationsData;
    for (const key of keys) {
      result = result[key];
      if (result === undefined) { return keys[keys.length -1]; }
    }
    return result[language] || result['en'] || keys[keys.length -1];
  } catch (error) {
    console.error(`Translation error for path ${path}:`, error);
    const keys = path.split('.');
    return keys[keys.length - 1];
  }
};

// Variants for the grid container to stagger children
const servicesGridVariants = {
  initial: {}, // Can be empty or { opacity: 0 } if grid itself fades
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Time between each card animation start
    }
  },
};

// Variants for individual cards, used by stagger and AnimatePresence
const cardItemVariants = {
  initial: { opacity: 0, y: -20 }, // Animate from top
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" } // Faster animation for each card
  },
  exit: {
    opacity: 0,
    y: 20, // Example exit: to bottom
    transition: { duration: 0.25, ease: "easeIn" }
  }
};

const ServiceCardComponent = ({ service, theme, language }) => {
  const primaryCategoryKey = service.categories.length > 0 ? service.categories[0] : 'general';

  return (
    <ServiceCard // This is already styled(motion.div)
      theme={theme}
      variants={cardItemVariants}
      // AnimatePresence and parent stagger will manage initial/animate/exit
    >
      <CardInner>
        <CardSidebar theme={theme}>
          <ServiceIcon theme={theme}>
            {service.icon}
          </ServiceIcon>
          <CategoryTag theme={theme}>
            {getTranslation(`services.categories.${primaryCategoryKey}`, language, translations)}
          </CategoryTag>
        </CardSidebar>
        
        <CardContent>
          <ServiceTitle>
            {getTranslation(`services.${service.titleKey}`, language, translations)}
          </ServiceTitle>
          
          <ServiceDescription>
            {getTranslation(`services.${service.descriptionKey}`, language, translations)}
          </ServiceDescription>
          
          <FeaturesContainer>
            <FeaturesTitle>
              {getTranslation('services.keyFeatures', language, translations)}
            </FeaturesTitle>
            
            <FeaturesList>
              {service.features.map((featureKey, idx) => (
                <Feature key={idx}>
                  <FaCheck />
                  <FeatureText>{getTranslation(`services.${featureKey}`, language, translations)}</FeatureText>
                </Feature>
              ))}
            </FeaturesList>
          </FeaturesContainer>
          
          <LearnMoreButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {getTranslation('services.learnMore', language, translations)}
            <FaArrowRight />
          </LearnMoreButton>
        </CardContent>
      </CardInner>
    </ServiceCard>
  );
};

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Section considered in view when 10% is visible
  });
  
  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(service => service.categories.includes(activeCategory));
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }, // Slight delay adjustment
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }, // Slight delay adjustment
  };
  
  return (
    <ServicesSection id="services" ref={sectionRef}> {/* Ref for section-level inView */}
      <DecorativeCircle size="600px" top="-300px" left="-200px" theme={theme} />
      <DecorativeCircle size="400px" bottom="-150px" right="-100px" theme={theme} />
      
      <ServicesContainer>
        <motion.div initial="hidden" animate={sectionInView ? "visible" : "hidden"} variants={titleVariants}>
          <SectionTitle>
            {getTranslation('services.mainTitle', language, translations)}{' '} 
            <span>{getTranslation('services.mainSubtitleAccent', language, translations)}</span>
          </SectionTitle>
        </motion.div>
        
        <motion.div initial="hidden" animate={sectionInView ? "visible" : "hidden"} variants={subtitleVariants}>
          <SectionSubtitle>
            {getTranslation('services.overallDescription', language, translations)}
          </SectionSubtitle>
        </motion.div>
        
        <ServiceCategories>
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {getTranslation(`services.categories.${category.nameKey}`, language, translations)}
            </CategoryTab>
          ))}
        </ServiceCategories>
        
        <ServicesGrid // This is styled(motion.div)
          variants={servicesGridVariants}
          initial="initial" // Can be "hidden" if grid itself has opacity variant
          animate={sectionInView ? "animate" : "initial"} // Trigger stagger when section is in view
        >
          <AnimatePresence mode="wait">
            {filteredServices.map(service => (
              <ServiceCardComponent 
                key={service.id}
                service={service}
                theme={theme}
                language={language}
              />
            ))}
          </AnimatePresence>
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;