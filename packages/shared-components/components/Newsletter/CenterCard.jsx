import React from 'react';
import styled from 'styled-components';
import SignupWidget from './SignupWidget';

const OutsideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 30px;
  background-color: ${(props) => props.theme.colors.background};
`;

const NewsletterSection = styled.section`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.secondary} 0%,
    ${(props) => props.theme.colors.primary} 100%
  );
  padding: 60px;
  margin: 20px;
  max-width: 1000px;
  min-height: 300px;
  width: 100%;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
  margin-top: ${(props) => props.theme.spacings.small};
  max-width: 850px;
  margin-bottom: ${(props) => props.theme.spacings.small};
  letter-spacing: 1px;
  display: inline-block;
  color: white;
`;

const CenterCard = ({ config }) => {
  const handleSubmit = () => {
    // Add logic to save to Supabase or another backend
  };

  return (
    <OutsideWrapper>
      <NewsletterSection>
        <TextWrapper>
          <Heading>Subscribe to our newsletter.</Heading>
          <SubText>
            Stay updated with the latest financial planning tips and news from
            Acacia Wealth. We promise no spam, just valuable insights.
          </SubText>
          <SignupWidget onSubmit={handleSubmit} />
        </TextWrapper>
        <PrivacyText href={config.privacyUrl}>
          We care about your data. Read our{' '}
          <i style={{ color: '#B026FF' }}>privacy policy.</i>
        </PrivacyText>
      </NewsletterSection>
    </OutsideWrapper>
  );
};

export default CenterCard;
