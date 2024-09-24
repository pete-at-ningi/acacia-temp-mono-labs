import React, { useEffect } from 'react';
import styled from 'styled-components';

const CalendlyWrapper = styled.div`
  min-width: 320px;
  height: 700px;
  margin: 0 auto;
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
    <CalendlyWrapper>
      <div
        className='calendly-inline-widget'
        data-url={config.url}
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </CalendlyWrapper>
  );
};

export default CalendlyEmbed;
