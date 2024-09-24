import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { VouchedForRating } from '../Misc';

const OutsideWrapper = styled.div``;

const HeroSection = styled(motion.section).attrs(() => ({}))`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 2fr;
  width: 100vw;
  color: ${(props) => props.theme.colors.dark};
  overflow: hidden;
  grid-gap: ${(props) => props.theme.spacings.large};
  border-radius: ${(props) => props.theme.borders.radius};
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const LeftColumn = styled(motion.div).attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacings.large};
`;

const Title = styled(motion.h1).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-top: 0;
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
  background-color: ${(props) =>
    props.primary ? props.theme.colors.accent : 'transparent'};
  border: 2px solid transparent;
  margin-right: ${(props) =>
    props.primary ? props.theme.spacings.medium : '0'};

  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
  }
`;

const RightColumn = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0 },
  transition: { delay: 0.3, duration: 0.8, ease: 'easeInOut' },
}))`
  background-image: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary} 0%,
      ${(props) => props.theme.colors.dark} 100%
    ),
    url(${(props) => props.imageUrl});
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    height: 550px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 370px;
  }
`;

const PreTitle = styled.p`
  color: ${(props) => props.theme.colors.accent};
  font-weight: bold;
  margin-bottom: 0;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacings.medium};
  margin: ${(props) => props.theme.spacings.xlarge} 0;
  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.accent};
  margin-bottom: ${(props) => props.theme.spacings.medium};
  padding: 0 ${(props) => props.theme.spacings.medium};
`;

const ItemHead = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  margin: 0;
`;

const ItemBody = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.dark};
  opacity: 0.8;
  margin: 0;
`;

const Hero = ({ config }) => {
  return (
    <OutsideWrapper>
      <HeroSection>
        <LeftColumn>
          <PreTitle>{config.pretitle}</PreTitle>
          <Title>{config.title}</Title>
          <Subtitle>{config.subtitle}</Subtitle>
          <VouchedForRating firmID={config.vouchedForFirmID} />
          <ItemWrapper>
            {config.items.map((item, index) => (
              <Item key={index}>
                <ItemHead>{item.title}</ItemHead>
                <ItemBody>{item.content}</ItemBody>
              </Item>
            ))}
          </ItemWrapper>
          <CTAButtons>
            <CTAButton href={config.CTA.route} primary>
              {config.CTA.label}
            </CTAButton>
          </CTAButtons>
        </LeftColumn>
        <RightColumn imageUrl={config.imageUrl} />
      </HeroSection>
    </OutsideWrapper>
  );
};

export default Hero;
