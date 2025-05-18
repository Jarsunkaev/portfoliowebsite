// src/components/Services.jsx - New component for agency services
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ThemeContext } from './ThemeContext';
import { FaDesktop, FaCalendarAlt, FaChartLine, FaGlobe, FaMobileAlt, FaSearch } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 120px 0;
  background-color: var(--color-neutral);
`;

const ServicesContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    color: var(--color-accent1);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  opacity: 0.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  border: var(--border-thick);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: var(--shadow-neobrutalist);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0px 0px var(--shadow-color);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--color-accent2);
  margin-bottom: 1.5rem;
  
  svg {
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
  color: var(--color-text);
`;

const ServiceDescription = styled.p`
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--color-accent1);
    font-weight: bold;
  }
`;

const services = [
  {
    id: 1,
    icon: <FaDesktop />,
    title: "Custom Website Design & Development",
    description: "Tailored websites that perfectly represent your brand and meet your specific needs.",
    features: [
      "Unique, branded designs",
      "Responsive for all devices",
      "Fast loading & optimized code",
      "Content management systems"
    ]
  },
  {
    id: 2,
    icon: <FaCalendarAlt />,
    title: "Booking Systems & Email Logic",
    description: "Streamlined booking solutions for appointments, reservations, and automated communication.",
    features: [
      "User-friendly calendar interfaces",
      "Automated confirmation emails",
      "Reminder notifications",
      "Integration with calendars"
    ]
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Admin Dashboards & Portals",
    description: "Custom control panels that give you full oversight and management of your online business.",
    features: [
      "User management systems",
      "Business analytics",
      "Custom reports & filters",
      "Secure access controls"
    ]
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Multilingual & International Sites",
    description: "Websites that reach your audience in multiple languages with localized content.",
    features: [
      "Full translation support",
      "Currency conversion",
      "Region-specific content",
      "International SEO"
    ]
  },
  {
    id: 5,
    icon: <FaMobileAlt />,
    title: "Mobile Optimization & Speed",
    description: "Fast, responsive websites that perform flawlessly on all devices.",
    features: [
      "Mobile-first development",
      "Performance optimization",
      "Page speed improvements",
      "Compressed media assets"
    ]
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: "SEO & Analytics Setup",
    description: "Get found online with proper search engine optimization and tracking.",
    features: [
      "Technical SEO implementation",
      "Google Analytics setup",
      "Search console integration",
      "Performance monitoring"
    ]
  }
];

const Services = () => {
  const { theme } = useContext(ThemeContext);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <ServicesSection id="services" ref={ref}>
      <ServicesContainer>
        <SectionTitle>My <span>Services</span></SectionTitle>
        <SectionSubtitle>
          I offer comprehensive web development solutions tailored to your specific business needs
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              theme={theme}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>{feature}</ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;