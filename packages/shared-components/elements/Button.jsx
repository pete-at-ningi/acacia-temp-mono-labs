import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const getColorStyles = (props) => {
  const { theme, color, type } = props;

  const colorMapping = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    dark: theme.colors.dark,
    white: theme.colors.white,
  };

  const selectedColor = colorMapping[color] || theme.colors.primary;

  if (type === 'link') {
    return {
      textColor: selectedColor,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    };
  }

  if (type === 'outline') {
    return {
      backgroundColor: 'transparent',
      borderColor: selectedColor,
      textColor: selectedColor,
    };
  }

  return {
    backgroundColor: selectedColor,
    borderColor: selectedColor,
    textColor: theme.colors.white,
  };
};
const StyledButton = styled(motion.a)`
  display: flex;
  align-items: center;
  svg {
    margin-bottom: 3px;
    width: ${(props) => props.theme.fontSizes.medium};
  }
  grid-gap: ${(props) => props.theme.spacings.small};
  font-size: ${(props) => props.theme.fontSizes.medium};

  padding: ${(props) =>
    props.type === 'link'
      ? '0'
      : `${props.theme.spacings.small} ${props.theme.spacings.medium}`};

  border-radius: ${(props) => props.theme.borders.radius};
  text-decoration: none;
  font-weight: 600;
  text-transform: capitalize;
  color: ${(props) => getColorStyles(props).textColor};
  background-color: ${(props) => getColorStyles(props).backgroundColor};
  border: 2px solid ${(props) => getColorStyles(props).borderColor};
  cursor: pointer;
  white-space: nowrap;
`;

const Button = ({ route, label, color = 'primary', type = 'solid', icon }) => {
  return (
    <StyledButton
      color={color}
      type={type}
      href={route}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {icon} {label}
    </StyledButton>
  );
};

export default Button;
