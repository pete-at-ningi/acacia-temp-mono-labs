import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  gap: ${(props) => props.theme.spacings.small};
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.fonts.primary};
  flex: 1;
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.radius};
  border: none;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(255, 255, 255, 0.9);
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacings.small}
    ${(props) => props.theme.spacings.medium};
  border-radius: ${(props) => props.theme.borders.radius};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const SignupWidget = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to save to Supabase or another backend
    onSubmit();
    setSubmitted(true);
  };

  return !submitted ? (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type='email' placeholder='Enter your email' required />
      <Button type='submit'>Subscribe</Button>
    </FormWrapper>
  ) : (
    <p>Thanks, sign-up confirmed!</p>
  );
};

export default SignupWidget;
