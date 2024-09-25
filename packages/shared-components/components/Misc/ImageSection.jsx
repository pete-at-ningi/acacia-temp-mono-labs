import React from 'react';
import styled from 'styled-components';

const ImageSectionSection = styled.section`
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
const ImageSection = ({ config }) => {
  return (
    <ImageSectionSection $imageUrl={config.imageUrl}>
      <Overlay />
    </ImageSectionSection>
  );
};

export default ImageSection;
