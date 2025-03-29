import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

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
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  
  span {
    color: var(--color-accent2);
  }
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

const ContactText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.1rem;
  padding: 1rem;
  border: var(--border-thick);
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  transition: all 0.2s ease;
  border-radius: 8px;
  
  svg {
    font-size: 1.5rem;
    color: var(--color-accent1);
  }
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: ${props => props.theme === 'dark' ? '5px 5px 0px 0px rgba(100,100,100,0.8)' : '5px 5px 0px 0px rgba(0,0,0,1)'};
    background: var(--color-accent3);
  }
`;

const ContactForm = styled(motion.form)`
  background: ${props => props.theme === 'dark' ? '#2A2A2A' : 'white'};
  padding: 2rem;
  border: var(--border-thick);
  box-shadow: ${props => props.theme === 'dark' ? '6px 6px 0px 0px rgba(100,100,100,0.8)' : '6px 6px 0px 0px rgba(0,0,0,1)'};
  border-radius: 12px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-text); /* Fixed label visibility in dark mode */
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${props => props.theme === 'dark' ? 'white' : 'black'};
  font-size: 1rem;
  background: var(--color-neutral);
  color: var(--color-text);
  transition: border-color 0.3s;
  border-radius: 6px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${props => props.theme === 'dark' ? 'white' : 'black'};
  font-size: 1rem;
  background: var(--color-neutral);
  color: var(--color-text);
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s;
  border-radius: 6px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--color-accent1);
  color: white;
  border: var(--border-thick);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: ${props => props.theme === 'dark' ? '5px 5px 0px 0px rgba(100,100,100,0.8)' : '5px 5px 0px 0px rgba(0,0,0,1)'};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { theme } = useContext(ThemeContext);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would usually send the form data to your backend
    // For now, we'll simulate a submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Get in <span>Touch</span></SectionTitle>
        
        <ContactContent>
          <ContactInfo>
            <ContactText>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out through the form or via my social links!
            </ContactText>
            
            <ContactLinks>
              <ContactLink 
                href="mailto:juszuf_1@icloud.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                theme={theme}
              >
                <FaEnvelope /> juszuf_1@icloud.com
              </ContactLink>
              
              <ContactLink 
                href="https://www.linkedin.com/in/juszuf-arsunkaev/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                theme={theme}
              >
                <FaLinkedin /> LinkedIn
              </ContactLink>
              
              <ContactLink 
                href="https://github.com/Jarsunkaev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                theme={theme}
              >
                <FaGithub /> GitHub
              </ContactLink>
            </ContactLinks>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            theme={theme}
          >
            {submitSuccess ? (
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
                <h3 style={{ marginBottom: '1rem' }}>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </motion.div>
            ) : (
              <>
                <FormGroup>
                  <FormLabel htmlFor="name">Name</FormLabel>
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
                  <FormLabel htmlFor="email">Email</FormLabel>
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
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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