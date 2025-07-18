// src/components/Services.jsx - Modern, sleek design with wider mobile cards
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';
import {
  FaDesktop,
  FaCalendarAlt,
  FaShoppingCart,
  FaCog,
  FaCheck,
  FaCreditCard,
  FaUserCog
} from 'react-icons/fa';

// Enhanced styling for a more modern and sleek layout
const ServicesSection = styled.section`
  padding: 80px 0;
  background-color: var(--color-neutral);
  position: relative;
  overflow: hidden;
`;

const ServicesContainer = styled.div`
  width: 95%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
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







// Modern grid layout - wider spacing and full-width on mobile
const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0;
  }
`;

// Modern, sleek service card - less card-like, more content-focused
const ServiceCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(135deg, rgba(42, 42, 42, 0.4) 0%, rgba(30, 30, 30, 0.6) 100%)' 
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(248, 250, 252, 0.8) 100%)'};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  backdrop-filter: blur(20px);
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.03)'};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }
  
  @media (max-width: 768px) {
    border-radius: 16px;
    margin: 0 5px;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.8rem;
  min-height: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.8rem;
  }
`;

const ServiceIcon = styled.div`
  font-size: 1.5rem;
  color: var(--color-accent1);
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(135deg, rgba(130, 144, 217, 0.15) 0%, rgba(130, 144, 217, 0.05) 100%)' 
    : 'linear-gradient(135deg, rgba(113, 126, 195, 0.1) 0%, rgba(113, 126, 195, 0.03) 100%)'};
  width: 3rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme === 'dark' ? 'rgba(130, 144, 217, 0.2)' : 'rgba(113, 126, 195, 0.15)'};
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  ${ServiceCard}:hover & {
    transform: scale(1.05);
    background: ${props => props.theme === 'dark' 
      ? 'linear-gradient(135deg, rgba(130, 144, 217, 0.25) 0%, rgba(130, 144, 217, 0.1) 100%)' 
      : 'linear-gradient(135deg, rgba(113, 126, 195, 0.15) 0%, rgba(113, 126, 195, 0.05) 100%)'};
  }
  
  @media (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
    font-size: 1.4rem;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
`;



const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  line-height: 1.3;
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const ServiceDescription = styled.p`
  margin: 0 0 2rem 0;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-size: 1rem;
  opacity: 0.85;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
  font-size: 0.85rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  color: var(--color-text);
  font-size: 0.85rem;
  line-height: 1.4;
  opacity: 0.9;
  
  .feature-icon {
    color: var(--color-accent1);
    font-size: 0.7rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  .button-icon {
    transition: transform 0.3s ease;
    color: var(--color-accent1);
    font-size: 0.8rem;
  }
  
  &:hover {
    background: ${props => props.theme === 'dark' 
      ? 'linear-gradient(135deg, rgba(130, 144, 217, 0.15) 0%, rgba(130, 144, 217, 0.08) 100%)' 
      : 'linear-gradient(135deg, rgba(113, 126, 195, 0.1) 0%, rgba(113, 126, 195, 0.05) 100%)'};
    transform: translateY(-2px);
    border-color: var(--color-accent1);
    
    .button-icon {
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.85rem;
  }
`;


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

// Animation variants
const servicesGridVariants = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  },
};

const cardItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

const ServiceCardComponent = ({ service, theme, language }) => {
  // Skip rendering the multilingual website service
  if (service.titleKey === 'multilingualWebsites.title') {
    return null;
  }
  
  return (
    <ServiceCard 
      theme={theme}
      variants={cardItemVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <CardInner>
        <CardHeader>
          <ServiceIcon theme={theme}>
            {service.icon}
          </ServiceIcon>
          <HeaderContent>
            <CardTitle>{getTranslation(`services.${service.titleKey}`, language, translations)}</CardTitle>
          </HeaderContent>
        </CardHeader>
        <CardContent>
          <ServiceDescription>
            {getTranslation(`services.${service.descriptionKey}`, language, translations)}
          </ServiceDescription>
          {service.features && service.features.length > 0 && (
            <FeaturesList>
              {service.features.map((feature, index) => (
                <Feature key={index} theme={theme}>
                  <FaCheck className="feature-icon" />
                  <span>{getTranslation(`services.${feature}`, language, translations)}</span>
                </Feature>
              ))}
            </FeaturesList>
          )}

        </CardContent>
      </CardInner>
    </ServiceCard>
  );
};

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Remove the multilingual websites service
  const filteredServices = servicesData.filter(service => service.titleKey !== 'multilingualWebsites.title');
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };
  
  return (
    <ServicesSection id="services" ref={sectionRef}>
      <ServicesContainer>
        <motion.div initial="hidden" animate={sectionInView ? "visible" : "hidden"} variants={titleVariants}>
          <SectionTitle>
            {language === 'hu' ? 'Szolgáltatások' : 'Services'}
          </SectionTitle>
        </motion.div>
        
        <ServicesGrid
          variants={servicesGridVariants}
          initial="initial"
          animate={sectionInView ? "animate" : "initial"}
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