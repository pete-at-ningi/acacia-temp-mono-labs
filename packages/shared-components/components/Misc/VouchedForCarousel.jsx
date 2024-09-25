import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CarouselWrapper = styled.div`
  position: relative;

  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.large};
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  iframe {
    border: none;
    width: 900px;
    height: 660px;
  }
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

const VouchedForCarousel = ({ config }) => {
  return (
    <CarouselWrapper imageUrl={config.backgroundImageUrl}>
      <Title>{config.title}</Title>
      <iframe
        src={`https://api.vouchedfor.co.uk/v2/public/firm/${config.vouchedForFirmID}/widget?light_theme=1&version=vf2023`}
      ></iframe>
    </CarouselWrapper>
  );
};

export default VouchedForCarousel;
