// src/components/Contact.jsx - Updated for agency focus
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const ContactSection = styled.section`
  padding: 100px 0;
  background-color: var(--color-neutral);
`;

const ContactContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
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
  margin: 0 auto 3rem;
  font-size: 1.2rem;
  opacity: 0.8;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  border: var(--border-thick);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-neobrutalist);
`;

const ContactCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: var(--font-heading);
  color: var(--color-text);
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const ConsultationText = styled.div`
  padding: 1rem;
  background: var(--color-accent3);
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 2px solid black;
  
  h4 {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text);
  font-size: 1.1rem;
  
  svg {
    font-size: 1.3rem;
    color: var(--color-accent1);
  }
  
  a {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--color-accent1);
    }
  }
`;

const AvailabilityInfo = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-left: 4px solid var(--color-accent2);
  
  h4 {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  padding: 2rem;
  border: var(--border-thick);
  box-shadow: var(--shadow-neobrutalist);
  border-radius: 12px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: var(--border-medium) var(--color-accent3);
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  transition: all 0.3s ease;
  border-radius: var(--border-radius-md);
  min-height: 48px; /* Better touch target */
  
  &:focus {
    outline: none;
    border-color: var(--color-accent1);
    box-shadow: 0 0 0 3px rgba(74, 93, 35, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem; /* More generous padding on mobile */
    font-size: 1.05rem; /* Slightly larger text on mobile */
    min-height: 52px;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: var(--border-medium) var(--color-accent3);
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  border-radius: var(--border-radius-md);
  font-family: var(--font-body);
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent1);
    box-shadow: 0 0 0 3px rgba(74, 93, 35, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    font-size: 1.05rem;
    min-height: 120px; /* Slightly smaller on mobile to save space */
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid var(--color-accent1);
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  &:hover::after {
    border-top-color: var(--color-accent2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1rem 3rem 1rem 1rem; /* Extra right padding for arrow */
  border: var(--border-medium) var(--color-accent3);
  font-size: 1rem;
  background: var(--color-bg);
  color: var(--color-text);
  transition: all 0.3s ease;
  border-radius: var(--border-radius-md);
  min-height: 48px;
  cursor: pointer;
  appearance: none; /* Remove default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent1);
    box-shadow: 0 0 0 3px rgba(74, 93, 35, 0.1);
  }
  
  &:focus + &::after {
    border-top-color: var(--color-accent1);
  }
  
  /* Ensure options are styled properly */
  option {
    background: var(--color-bg);
    color: var(--color-text);
    padding: 0.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 3.5rem 1.2rem 1.2rem;
    font-size: 1.05rem;
    min-height: 52px;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  background: var(--color-accent1);
  color: var(--color-bg);
  border: var(--border-subtle) transparent;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: var(--border-radius-md);
  font-family: var(--font-heading);
  min-height: 52px;
  box-shadow: var(--shadow-soft) var(--shadow-color);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-medium) var(--shadow-color);
    background: var(--color-accent2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  
  @media (max-width: 768px) {
    padding: 1.4rem 2rem;
    font-size: 1.05rem;
    min-height: 56px;
    width: 100%; /* Full width on mobile */
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { language } = useLanguage();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>
          {translations.contact.title[language]} 
        </SectionTitle>
        <SectionSubtitle>
          {translations.contact.subtitle[language]}
        </SectionSubtitle>
        
        <ContactContent>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              theme={theme}
            >
              <ContactCardTitle>{translations.contact.infoTitle[language]}</ContactCardTitle>
              <ContactText>
                {translations.contact.infoText[language]}
              </ContactText>
              
              <ConsultationText>
                <h4>{translations.contact.consultationTitle[language]}</h4>
                <p>{translations.contact.consultationText[language]}</p>
              </ConsultationText>
              
              <ContactLinks>
                <ContactLink>
                  <FaEnvelope />
                  <a href="mailto:juszuf_1@icloud.com">juszuf_1@icloud.com</a>
                </ContactLink>
                
                <ContactLink>
                  <FaPhone />
                  <a href="tel:+36308749724">+36 30 874 9724</a>
                </ContactLink>
                
                <ContactLink>
                  <FaLinkedin />
                  <a href="https://www.linkedin.com/in/juszuf-arsunkaev/" target="_blank" rel="noopener noreferrer">
                    LinkedIn Profile
                  </a>
                </ContactLink>
                
                <ContactLink>
                  <FaMapMarkerAlt />
                  <span>Budapest, Hungary (Available for remote work)</span>
                </ContactLink>
              </ContactLinks>
              
              <AvailabilityInfo>
                <h4>{translations.contact.availabilityTitle[language]}</h4>
                <p>{translations.contact.availabilityText[language]}</p>
              </AvailabilityInfo>
            </ContactCard>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            theme={theme}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  padding: '2rem',
                  backgroundColor: theme === 'dark' ? '#1E3A29' : '#defff1',
                  border: '2px solid black',
                  textAlign: 'center',
                  borderRadius: '8px',
                  color: theme === 'dark' ? 'white' : 'black'
                }}
              >
                <h3 style={{ marginBottom: '1rem' }}>{translations.contact.successTitle[language]}</h3>
                <p>{translations.contact.successText[language]}</p>
              </motion.div>
            ) : (
              <>
                <FormGroup>
                  <FormLabel htmlFor="name">{translations.contact.name[language]}</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    theme={theme}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">{translations.contact.email[language]}</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    theme={theme}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="phone">{translations.contact.phone[language]}</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    theme={theme}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="projectType">{translations.contact.projectType[language]}</FormLabel>
                  <SelectWrapper>
                    <FormSelect
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      theme={theme}
                    >
                      <option value="">{translations.contact.projectTypeOptions.select[language]}</option>
                      <option value="website">{translations.contact.projectTypeOptions.website[language]}</option>
                      <option value="booking">{translations.contact.projectTypeOptions.booking[language]}</option>
                      <option value="dashboard">{translations.contact.projectTypeOptions.dashboard[language]}</option>
                      <option value="multilingual">{translations.contact.projectTypeOptions.multilingual[language]}</option>
                      <option value="maintenance">{translations.contact.projectTypeOptions.maintenance[language]}</option>
                      <option value="other">{translations.contact.projectTypeOptions.other[language]}</option>
                    </FormSelect>
                  </SelectWrapper>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="message">{translations.contact.message[language]}</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={translations.contact.messagePlaceholder[language]}
                    required
                    theme={theme}
                  />
                </FormGroup>
                
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  theme={theme}
                >
                  {isSubmitting ? translations.contact.sending[language] : translations.contact.submit[language]}
                </SubmitButton>
              </>
            )}
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;