import React from 'react';
import styled from 'styled-components';

const OutsideWrapper = styled.div``;

const HeroSection = styled.section`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 2fr;
  height: 70vh;
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
  padding: ${(props) => props.theme.spacings.large};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.dark};
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.large};
  color: ${(props) => props.theme.colors.gray};
`;

const CTAButtons = styled.div`
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

const RightColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacings.medium};
  padding: ${(props) => props.theme.spacings.large};
`;

const ImageTile = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borders.radius};
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogTag = styled.a`
  border: 1px solid ${(props) => props.theme.colors.accent};
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.medium};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.gray};
  small {
    margin-left: ${(props) => props.theme.spacings.small};
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
  }
  &:hover {
    opacity: ${(props) => props.theme.hover.opacity};
    cursor: pointer;
  }
`;

const Hero = ({ config }) => {
const imageUrls = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
    'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
    'https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
    ];
  return (
    <OutsideWrapper>
      <HeroSection>
        <LeftColumn>
          <BlogTag href={config.bloglinkroute}>
            {config.bloglinktitle}
            <small>
              Read Our Latest Blog <span aria-hidden='true'>→</span>
            </small>
          </BlogTag>
          <Title>{config.title}</Title>
          <Subtitle>{config.subtitle}</Subtitle>
          <CTAButtons>
            <CTAButton href={config.primaryCTA.route} primary>
              {config.primaryCTA.label}
            </CTAButton>
            {config.secondaryCTA && 
        <CTAButton href={config.secondaryCTA.route}>
          {config.secondaryCTA.label}
        </CTAButton>}
          </CTAButtons>
        </LeftColumn>
        <RightColumn>
          {imageUrls.map((imageUrl, index) => (
            <ImageTile key={index} $imageUrl={imageUrl} />
          ))}
        </RightColumn>
      </HeroSection>
    </OutsideWrapper>
  );
};

export default Hero;
