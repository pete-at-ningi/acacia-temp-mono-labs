import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import convertHexToRGBA from '../../utils/convertHexToRGBA';

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
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
  font-weight: bold;
  max-width: 850px;
  margin-bottom: 0;
  display: inline-block;
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
  margin-top: 0;
  margin-bottom: ${(props) => props.theme.spacings.large};

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

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacings.large};
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${(props) => props.theme.spacings.medium};
  border-radius: ${(props) => props.theme.borders.radius};
  border: 1px solid
    ${(props) => convertHexToRGBA(props.theme.colors.white, 0.1)};
  background-color: ${(props) =>
    convertHexToRGBA(props.theme.colors.white, 0.1)};
  grid-gap: ${(props) => props.theme.spacings.medium};
`;

const ItemInner = styled.div`
  margin: 0;
  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const ItemHeader = styled.h3`
  margin: 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.small};
`;

const ItemContent = styled.p`
  margin: 0;
  opacity: 0.8;
`;

const Hero = ({ config }) => {
  return (
    <HeroSection $imageUrl={config.imageUrl}>
      <Overlay />
      <Content>
        {config.pretitle && <PreTitle>{config.pretitle}</PreTitle>}
        <Title>{config.title}</Title>
        <SubTitle>{config.subtitle}</SubTitle>
        {config.items && (
          <ItemWrapper>
            {config.items.map((item) => (
              <Item key={item.id}>
                <ItemInner>
                  <item.icon />
                </ItemInner>
                <ItemInner>
                  <ItemHeader>{item.title}</ItemHeader>
                  <ItemContent>{item.content}</ItemContent>
                </ItemInner>
              </Item>
            ))}
          </ItemWrapper>
        )}
      </Content>
    </HeroSection>
  );
};

export default Hero;
