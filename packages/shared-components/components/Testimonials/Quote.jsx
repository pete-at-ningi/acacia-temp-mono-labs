import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.section`
  @media ${(props) => props.theme.breakpoints.desktop} {
    margin: calc(2 * ${(props) => props.theme.spacings.xlarge}) 0;
  }
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacings.xlarge} 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacings.large};
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin: calc(-2 * ${(props) => props.theme.spacings.xlarge}) auto;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  margin-bottom: ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 250px;
  }
  @media ${(props) => props.theme.breakpoints.tablet} {
    min-width: 400px;
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
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xlarge};
`;

const Quote = styled.blockquote`
  font-size: ${(props) => props.theme.fontSizes.medium};

  line-height: 1.5;
  position: relative;
  margin-bottom: ${(props) => props.theme.spacings.medium};

  @media ${(props) => props.theme.breakpoints.desktop} {
    &::before {
      content: '“';
      font-size: 10rem;
      color: ${(props) => props.theme.colors.white};
      position: absolute;
      top: -5.5rem;
      left: -3rem;
      opacity: 0.2;
    }
  }
`;

const Author = styled.figcaption`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

const Title = styled.div`
  margin-top: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray};
`;

const QuoteItem = ({ config }) => {
  return (
    <OuterWrapper>
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
    </OuterWrapper>
  );
};

export default QuoteItem;
