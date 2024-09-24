import React from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  iframe {
    border: none;
    width: 900px;
    height: 560px;
  }
`;

const VouchedForCarousel = () => {
  return (
    <CarouselWrapper>
      <iframe
        id='vf_widget'
        src='https://api.vouchedfor.co.uk/v2/public/firm/2418/widget?light_theme=1&version=vf2023'
        width='900'
        height='560'
        scrolling='no'
        frameBorder='0'
        title='VouchedFor Carousel'
      ></iframe>
    </CarouselWrapper>
  );
};

export default VouchedForCarousel;
