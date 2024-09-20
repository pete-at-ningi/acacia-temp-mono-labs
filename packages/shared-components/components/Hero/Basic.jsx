import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.large};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: ${(props) =>
    `linear-gradient(135deg, ${props.theme.colors.primary} 0%, ${props.theme.colors.dark} 100%)`};
  opacity: 0.85;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  text-align: left;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  max-width: 850px;
  margin-bottom: ${(props) => props.theme.spacings.small};
  padding: 5px 8px;
  letter-spacing: 1px;
  display: inline-block;
  border: 1px solid white;
  border-radius: 10px;
`;

const Title = styled.h1`
  max-width: 850px;
  font-size: ${(props) =>
    props.theme.fontSizes.massive}; /* Default to xlarge for mobile */
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
  letter-spacing: 1px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }
`;

const CTAButton = styled.a`
  color: red;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.large};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: 600;
  color: ${(props) =>
    props.primary ? props.theme.colors.dark : props.theme.colors.white};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.accent : 'transparent'};
  border: 2px solid transparent;
  margin-right: ${(props) =>
    props.primary ? props.theme.spacings.medium : '0'};

  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const Hero = ({ config }) => {
  return (
    <HeroSection imageUrl={config.imageUrl}>
      <Overlay />
      <Content>
        <Subtitle>{config.subtitle}</Subtitle>
        <Title>{config.title}</Title>

        <CTAButton href={config.primaryCTA.route} primary>
          {config.primaryCTA.label}
        </CTAButton>
        <CTAButton href={config.secondaryCTA.route}>
          {config.secondaryCTA.label}
        </CTAButton>
      </Content>
    </HeroSection>
  );
};

export default Hero;
