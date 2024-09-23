import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SignupWidgetEmoji from './SignupWidget';

const OutsideWrapper = styled.div`
  padding: 0;
`;

const NewsletterSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.secondary} 0%,
    ${(props) => props.theme.colors.primary} 100%
  );
  padding: ${(props) => props.theme.spacings.large};
  overflow: hidden;
`;

const ContentWrapper = styled(motion.div)`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  gap: ${(props) => props.theme.spacings.xlarge};
  padding-bottom: ${(props) => props.theme.spacings.large};
`;

const TextWrapper = styled.div`
  max-width: 650px;
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

const SubText = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
`;

const PrivacyText = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  margin-top: ${(props) => props.theme.spacings.medium};
  display: block;
`;

const NewsletterSignup = ({ config }) => {
  const handleSubmit = () => {
    // Add logic to save to Supabase or another backend
  };

  return (
    <OutsideWrapper>
      <NewsletterSection>
        <ContentWrapper
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <TextWrapper>
            <Heading>Subscribe to our newsletter.</Heading>
            <SubText>
              Stay updated with the latest financial planning tips and news from
              Acacia Wealth. We promise no spam, just valuable insights.
            </SubText>
            <SignupWidgetEmoji onSubmit={handleSubmit} />
            <PrivacyText href={config.privacyUrl}>
              We care about your data. Read our{' '}
              <i style={{ color: '#B026FF' }}>privacy policy.</i>
            </PrivacyText>
          </TextWrapper>
        </ContentWrapper>
      </NewsletterSection>
    </OutsideWrapper>
  );
};

export default NewsletterSignup;
