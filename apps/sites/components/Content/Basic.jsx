import React from 'react';
import styled from 'styled-components';
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xlarge};
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  color: ${(props) => props.theme.colors.gray};
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;

const Title = styled.h1`
  margin-top: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
`;

const Description = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.dark};
`;

const ContentSection = styled.div`
  margin-top: ${(props) => props.theme.spacings.large};
`;

const ContentParagraph = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
  color: ${(props) => props.theme.colors.gray};
`;

const ContentTitle = styled.h2`
  margin-top: ${(props) => props.theme.spacings.xlarge};
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
`;

const ContentQuote = styled.blockquote`
  margin-top: ${(props) => props.theme.spacings.large};
  padding-left: ${(props) => props.theme.spacings.medium};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
  img {
    height: 300px;
    border-radius: ${(props) => props.theme.borders.radius};
  }
`;

const List = styled.ul`
  margin-top: ${(props) => props.theme.spacings.medium};
  padding-left: 0;
  list-style: none;
  color: ${(props) => props.theme.colors.dark};

  li {
    display: flex;
    gap: ${(props) => props.theme.spacings.small};
    align-items: flex-start;
    margin-top: ${(props) => props.theme.spacings.medium};

    svg {
      color: ${(props) => props.theme.colors.primary};
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      font-size: ${(props) => props.theme.fontSizes.medium};
      color: ${(props) => props.theme.colors.gray};

      strong {
        font-weight: 600;
        color: ${(props) => props.theme.colors.dark};
      }
    }
  }
`;

const Figure = styled.figure`
  margin-top: ${(props) => props.theme.spacings.xlarge};
  img {
    width: 100%;
    border-radius: ${(props) => props.theme.borders.radius};
  }
  figcaption {
    margin-top: ${(props) => props.theme.spacings.medium};
    display: flex;
    gap: ${(props) => props.theme.spacings.small};
    color: ${(props) => props.theme.colors.gray};

    svg {
      color: ${(props) => props.theme.colors.lightGray};
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const ContentPage = ({ config }) => {
  return (
    <Section>
      <Container>
        <Subtitle>{config.subtitle}</Subtitle>
        <Title>{config.title}</Title>
        <Description>{config.description}</Description>

        <ContentSection>
          {config.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <ContentParagraph key={index}>{item.text}</ContentParagraph>
              );
            }
            if (item.type === 'title') {
              return <ContentTitle key={index}>{item.text}</ContentTitle>;
            }
            if (item.type === 'quote') {
              return (
                <ContentQuote key={index}>
                  <p>{item.text}</p>
                  {item.author && (
                    <figcaption>
                      <img src={item.author.image} alt={item.author.name} />
                      <div>
                        <strong>{item.author.name}</strong> – {item.author.role}
                      </div>
                    </figcaption>
                  )}
                </ContentQuote>
              );
            }
            if (item.type === 'list') {
              return (
                <List key={index}>
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>
                      <CheckCircleIcon aria-hidden='true' />
                      <span>
                        <strong>{listItem.title}</strong> {listItem.description}
                      </span>
                    </li>
                  ))}
                </List>
              );
            }
            if (item.type === 'image') {
              return (
                <Figure key={index}>
                  <img src={item.src} alt={item.caption} />
                  <figcaption>
                    <InformationCircleIcon aria-hidden='true' />
                    {item.caption}
                  </figcaption>
                </Figure>
              );
            }
            return null;
          })}
        </ContentSection>
      </Container>
    </Section>
  );
};

export default ContentPage;
