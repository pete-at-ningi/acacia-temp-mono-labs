import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
const OutsideWrapper = styled.div``;

const HeroSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 60vh;
  width: 100vw;
  color: ${(props) => props.theme.colors.dark};
  overflow: hidden;
  border-radius: ${(props) => props.theme.borders.radius};
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    height: 100vh;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 800px;
  padding: 0 ${(props) => props.theme.spacings.large}
    ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
`;

const Title = styled(motion.h1).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.dark};
`;

const Subtitle = styled(motion.p).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.3, duration: 0.8 },
}))`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.gray};
`;

const CTAButtons = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.4, duration: 0.8 },
}))`
  display: flex;
  gap: ${(props) => props.theme.spacings.medium};
  margin-bottom: 0;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: ${(props) => props.theme.spacings.xlarge};
  }
`;

const CTAButton = styled(motion.a).attrs(() => ({
  whileHover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  }
}))`
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
`;

const RightColumn = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0 },
  transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" },
}))`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: ${(props) => props.theme.spacings.large};
`;

const ImageItem = styled.img`
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.borders.radius};
`;

const Hero = ({ config }) => {
  return (
    <OutsideWrapper>
      <HeroSection>
        <LeftColumn>
          <Title>{config.title}</Title>
          <Subtitle>{config.subtitle}</Subtitle>
          <CTAButtons>
            <CTAButton href={config.primaryCTA.route} primary>
              {config.primaryCTA.label}
            </CTAButton>
          </CTAButtons>
        </LeftColumn>
        <RightColumn>
          <ImageItem src={config.imageUrl} />
        </RightColumn>
      </HeroSection>
    </OutsideWrapper>
  );
};

export default Hero;
