import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import convertHexToRGBA from '../../utils/convertHexToRGBA';

const OutsideWrapper = styled.div`
  padding: ${(props) => props.theme.spacings.xlarge};
  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;

const HeroSection = styled(motion.section).attrs(() => ({}))`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;

  padding: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.dark};
  overflow: hidden;
  border-radius: calc(5 * ${(props) => props.theme.borders.radius});
  background: ${(props) => props.theme.colors.accent};

  background: linear-gradient(
    176deg,
    ${(props) => convertHexToRGBA(props.theme.colors.accent, 1)} 12%,
    ${(props) => convertHexToRGBA(props.theme.colors.primary, 1)} 100%
  );

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column-reverse;
    border-radius: 0;
    margin-bottom: ${(props) => props.theme.spacings.large};
  }
  color: ${(props) => props.theme.colors.white};
`;

const LeftColumn = styled(motion.div).attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled(motion.h1).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
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

const CTAButton = styled.a`
  display: inline-block;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.large};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.white};
  margin-right: ${(props) => props.theme.spacings.medium};

  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const PreTitle = styled(motion.p).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.6, duration: 0.8 },
}))`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 400;
  max-width: 850px;
  margin-bottom: 0;
  padding: ${(props) => props.theme.spacings.small}
  display: inline-block;
  
`;

const RightColumn = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0 },
  transition: { delay: 0.3, duration: 0.8, ease: 'easeInOut' },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: ${(props) => props.theme.spacings.large} 0;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    justify-content: flex-start;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    max-height: 350px;
    @media ${(props) => props.theme.breakpoints.tablet},
      ${(props) => props.theme.breakpoints.mobile} {
      width: auto;
    }
  }
`;

const DarkPanelWithScreenshot = ({ config }) => {
  return (
    <OutsideWrapper>
      <HeroSection>
        <LeftColumn>
          {config.pretitle && <PreTitle>{config.pretitle}</PreTitle>}
          <Title>{config.title}</Title>
          <Subtitle>{config.subtitle}</Subtitle>
          <CTAButton
            href={config.CTAroute}
            target='_blank'
            reference='noopener noreferrer'
          >
            {config.CTAlabel}
          </CTAButton>
        </LeftColumn>

        <RightColumn>
          <img src={config.imageUrl} alt={config.title} />
        </RightColumn>
      </HeroSection>
    </OutsideWrapper>
  );
};

export default DarkPanelWithScreenshot;
