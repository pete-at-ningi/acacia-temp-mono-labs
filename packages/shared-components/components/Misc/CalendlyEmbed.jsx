import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CalendlyWrapper = styled.div`
  position: relative;
  width: 100vw;
  padding: ${(props) => props.theme.spacings.large};
  padding-bottom: ${(props) => props.$small && 0};
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
  margin: 0;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }
`;

const CalendlyEmbed = ({ config }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <CalendlyWrapper $small={config.small}>
      {!config.small && <Title>Book a meeting</Title>}
      <div
        className='calendly-inline-widget'
        data-url={config.url}
        style={{ height: '750px' }}
      ></div>
    </CalendlyWrapper>
  );
};

export default CalendlyEmbed;
