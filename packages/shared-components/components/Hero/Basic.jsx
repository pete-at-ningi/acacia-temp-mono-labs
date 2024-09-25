import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.large};
  background-image: ${(props) => `url(${props.$imageUrl})`};
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

const PreTitle = styled(motion.p).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.6, duration: 0.8 },
}))`
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

const Title = styled(motion.h1).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  max-width: 850px;
  font-size: ${(props) =>
    props.theme.fontSizes.massive}; /* Default to xlarge for mobile */
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
  line-height: 1.2;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }
`;

const SubTitle = styled(motion.p).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  max-width: 850px;

  margin-bottom: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.medium};
  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const CTAButton = styled(motion.a).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.8 },
}))`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.large};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.$primary ? props.theme.colors.accent : 'transparent'}; 
  border: none;
  margin-right: ${(props) => props.$primary ? props.theme.spacings.medium : '0'};

  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    border: 2px solid ${(props) => props.theme.colors.accent};
  }
`;


const Hero = ({ config }) => {
  return (
    <HeroSection $imageUrl={config.imageUrl}>
      <Overlay />
      <Content>
        {config.pretitle && <PreTitle>{config.subtitle}</PreTitle>}
        <Title>{config.title}</Title>
        <SubTitle>{config.subtitle}</SubTitle>
        <ButtonWrap>
          <CTAButton href={config.primaryCTA.route} $primary>
            {config.primaryCTA.label}
          </CTAButton>
          {config.secondaryCTA && (
            <CTAButton href={config.secondaryCTA.route}>
              {config.secondaryCTA.label}
            </CTAButton>
          )}
        </ButtonWrap>
      </Content>
    </HeroSection>
  );
};

export default Hero;
