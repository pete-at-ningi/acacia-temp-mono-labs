import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  gap: ${(props) => props.theme.spacings.small};

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const Input = styled.input`
  font-family: ${(props) => props.theme.fonts.primary};
  flex: 1;
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.radius};
  border: none;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(255, 255, 255, 0.3);
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.medium};

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.white};
    opacity: 0.7;
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
    opacity: ${(props) => props.theme.hover.opacity};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const SubmittedText = styled.p`
  color: white;
  font-weight: bold;
`;

const SignupWidget = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Send data to the API route
    const response = await fetch('/api/sendsubscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await response.json();
    if (data.success) {
      setLoading(false);
      setError('Message Received! We will be in touch soon.');

      setEmail('');
      setSubmitted(true);
      setLoading(false);
    } else {
      setError('Error sending message - please try again.');
      setLoading(false);
    }
  };
  return !submitted ? (
    <FormWrapper onSubmit={handleSubmit}>
      <Input
        type='email'
        placeholder='Please enter your email...'
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Button type='submit'>Subscribe</Button>
    </FormWrapper>
  ) : (
    <div>
      <SubmittedText>Thanks, sign-up confirmed!</SubmittedText>
    </div>
  );
};

export default SignupWidget;
