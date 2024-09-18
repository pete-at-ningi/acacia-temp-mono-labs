import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.theme.spacings.xlarge} 0;
  }
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${(props) => props.theme.spacings.xlarge};
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const Heading = styled.div`
  margin: 0 auto;

  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
  }

  h1 {
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};

    @media ${(props) => props.theme.breakpoints.sm} {
      font-size: ${(props) => props.theme.fontSizes.xxlarge};
    }
  }

  p.description {
    margin-top: 1.5rem;
    font-size: ${(props) => props.theme.fontSizes.large};
    color: ${(props) => props.theme.colors.gray};
  }
`;

const QuoteSection = styled.figure`
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  blockquote {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: 600;
    color: ${(props) => props.theme.colors.dark};
  }

  figcaption {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    div {
      .name {
        font-size: ${(props) => props.theme.fontSizes.small};
        font-weight: 600;
        color: ${(props) => props.theme.colors.dark};
      }

      .handle {
        font-size: ${(props) => props.theme.fontSizes.small};
        color: ${(props) => props.theme.colors.gray};
      }
    }
  }
`;

const ContentSection = styled.div`
  grid-column: span 7;
  color: ${(props) => props.theme.colors.gray};

  ul {
    margin-top: 2rem;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      margin-top: 1.5rem;

      svg {
        width: 1.25rem;
        height: 1.25rem;
        color: ${(props) => props.theme.colors.primary};
      }

      span {
        color: ${(props) => props.theme.colors.dark};

        strong {
          font-weight: 600;
        }
      }
    }
  }

  h2 {
    margin-top: 4rem;
    font-size: ${(props) => props.theme.fontSizes.xlarge};
    font-weight: 700;
    color: ${(props) => props.theme.colors.dark};
  }
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WithTestimonial = ({ config }) => {
  return (
    <Section>
      <Container>
        <div>
          <Heading>
            <p>{config.subheading}</p>
            <h1>{config.heading}</h1>
            <p className='description'>{config.description}</p>
          </Heading>

          <ContentSection>
            {config.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            <ul>
              {config.bullets.map((bullet, idx) => {
                const Icon = bullet.icon;
                return (
                  <li key={idx}>
                    <Icon aria-hidden='true' />
                    <span>
                      <strong>{bullet.title}</strong> {bullet.description}
                    </span>
                  </li>
                );
              })}
            </ul>
            {config.subsections.map((section, idx) => (
              <div key={idx}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </ContentSection>
        </div>
        <Middle>
          <QuoteSection>
            <blockquote>{config.quote.text}</blockquote>
            <figcaption>
              <img src={config.quote.image} alt='' />
              <div>
                <div className='name'>{config.quote.name}</div>
                <div className='handle'>{config.quote.handle}</div>
              </div>
            </figcaption>
          </QuoteSection>
        </Middle>
      </Container>
    </Section>
  );
};

export default WithTestimonial;
