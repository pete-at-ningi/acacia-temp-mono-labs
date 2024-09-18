import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: ${(props) => props.theme.spacings.large};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacings.medium};
`;

const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacings.large};
`;

const HomeButton = styled.a`
  display: inline-block;
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.large};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Subtitle>Sorry, the page you are looking for does not exist.</Subtitle>
      <HomeButton href='/'>Return Home</HomeButton>
    </Container>
  );
};

export default NotFoundPage;
