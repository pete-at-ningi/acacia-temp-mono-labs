import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${(props) => props.theme.spacings.large};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: ${(props) => props.theme.spacings.large};
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  img {
    height: 500px;
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 25px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const QuoteWrapper = styled.figure`
  flex: 2;
  color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacings.large};
`;

const Quote = styled.blockquote`
  font-size: ${(props) => props.theme.fontSizes.large};

  line-height: 1.5;
  position: relative;
  margin-bottom: ${(props) => props.theme.spacings.medium};
  &::before {
    content: '“';
    font-size: 10rem;
    color: ${(props) => props.theme.colors.dark};
    position: absolute;
    top: -5.5rem;
    left: -3rem;
    opacity: 0.3;
  }
`;

const Author = styled.figcaption`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 600;
  color: ${(props) => props.theme.colors.accent};
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSizes.medium};

  color: ${(props) => props.theme.colors.accent};
`;

const QuoteItem = ({ config }) => {
  return (
    <Section>
      <Container>
        <ImageWrapper>
          <Image src={config.imageUrl} alt={config.authorName} />
        </ImageWrapper>
        <QuoteWrapper>
          <Quote>{config.quote}</Quote>
          <Author>{config.authorName}</Author>
          <Title>{config.authorTitle}</Title>
        </QuoteWrapper>
      </Container>
    </Section>
  );
};

export default QuoteItem;
