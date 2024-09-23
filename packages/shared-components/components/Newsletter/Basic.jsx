import React from 'react';
import styled from 'styled-components';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import SignupWidget from './SignupWidget';

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

const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.xlarge};

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
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

const BadgeWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacings.large};
  margin-top: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium};
`;

const BadgeIcon = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.radius};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.colors.white};
    width: 40px;
    height: 40px;
  }
`;

const BadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BadgeTitle = styled.dt`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

const BadgeDescription = styled.dd`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.white};
`;

const NewsletterSignup = () => {
  const handleSubmit = () => {
    // Add logic to save to Supabase or another backend
  };

  return (
    <OutsideWrapper>
      <NewsletterSection>
        <ContentWrapper>
          <TextWrapper>
            <Heading>Subscribe to our newsletter.</Heading>
            <SubText>
              Stay updated with the latest financial planning tips and news from
              Acacia Wealth. We promise no spam, just valuable insights.
            </SubText>
            <SignupWidget onSubmit={handleSubmit} />
          </TextWrapper>
          <BadgeWrapper>
            <Badge>
              <BadgeIcon>
                <CalendarDaysIcon aria-hidden='true' />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>Monthly articles</BadgeTitle>
                <BadgeDescription>
                  Get the latest insights and tips on managing your wealth.
                </BadgeDescription>
              </BadgeText>
            </Badge>
            <Badge>
              <BadgeIcon>
                <HandRaisedIcon aria-hidden='true' />
              </BadgeIcon>
              <BadgeText>
                <BadgeTitle>No spam</BadgeTitle>
                <BadgeDescription>
                  Only valuable content. We respect your inbox.
                </BadgeDescription>
              </BadgeText>
            </Badge>
          </BadgeWrapper>
        </ContentWrapper>
      </NewsletterSection>
    </OutsideWrapper>
  );
};

export default NewsletterSignup;
