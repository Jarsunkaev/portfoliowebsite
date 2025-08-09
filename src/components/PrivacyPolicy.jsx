import React from 'react';
import styled from 'styled-components';
import { useLanguage } from './LanguageContext';
import translations from '../translations';

const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 120px auto 80px; /* leave space for fixed navbar */
  background: var(--color-bg);
  color: var(--color-text);
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.7;
  opacity: 0.9;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  margin: 0.5rem 0 1rem;
`;

const ListItem = styled.li`
  margin: 0.25rem 0;
`;

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = translations.legal;

  return (
    <Section id="privacy">
      <Title>{t.privacyPolicyTitle[language]}</Title>
      <Paragraph>{t.intro[language]}</Paragraph>

      <SubTitle>{t.controllerTitle[language]}</SubTitle>
      <Paragraph>{t.controllerText[language]}</Paragraph>

      <SubTitle>{t.dataWeCollectTitle[language]}</SubTitle>
      <List>
        <ListItem>{t.dataWeCollect.items.nameEmail[language]}</ListItem>
        <ListItem>{t.dataWeCollect.items.messageContent[language]}</ListItem>
        <ListItem>{t.dataWeCollect.items.technical[language]}</ListItem>
      </List>

      <SubTitle>{t.purposesTitle[language]}</SubTitle>
      <List>
        <ListItem>{t.purposes.items.respond[language]}</ListItem>
        <ListItem>{t.purposes.items.businessComms[language]}</ListItem>
        <ListItem>{t.purposes.items.security[language]}</ListItem>
      </List>

      <SubTitle>{t.legalBasisTitle[language]}</SubTitle>
      <Paragraph>{t.legalBasisText[language]}</Paragraph>

      <SubTitle>{t.retentionTitle[language]}</SubTitle>
      <Paragraph>{t.retentionText[language]}</Paragraph>

      <SubTitle>{t.sharingTitle[language]}</SubTitle>
      <Paragraph>{t.sharingText[language]}</Paragraph>

      <SubTitle>{t.rightsTitle[language]}</SubTitle>
      <List>
        <ListItem>{t.rights.items.access[language]}</ListItem>
        <ListItem>{t.rights.items.rectification[language]}</ListItem>
        <ListItem>{t.rights.items.erasure[language]}</ListItem>
        <ListItem>{t.rights.items.restrict[language]}</ListItem>
        <ListItem>{t.rights.items.object[language]}</ListItem>
        <ListItem>{t.rights.items.complaint[language]}</ListItem>
      </List>

      <SubTitle>{t.cookiesTitle[language]}</SubTitle>
      <Paragraph>{t.cookiesText[language]}</Paragraph>

      <SubTitle>{t.contactTitle[language]}</SubTitle>
      <Paragraph>{t.contactText[language]}</Paragraph>
    </Section>
  );
};

export default PrivacyPolicy;


