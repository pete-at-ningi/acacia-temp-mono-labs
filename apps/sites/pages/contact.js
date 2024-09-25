import React, { useState } from 'react';
import styled from 'styled-components';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Misc } from 'shared-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 ${(props) => props.theme.spacings.large}
    ${(props) => props.theme.spacings.xlarge}
    ${(props) => props.theme.spacings.large};
`;

const Container = styled.div`
  max-width: ${(props) => props.theme.breakpoints.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacings.xlarge};

  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Heading = styled(motion.h1).attrs(() => ({
  initial: { opacity: 0, y: 70 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}))`
  max-width: 850px;
  font-size: ${(props) =>
    props.theme.fontSizes.massive}; /* Default to xlarge for mobile */
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacings.large};
  line-height: 1.2;
  @media ${(props) => props.theme.breakpoints.tablet},
    ${(props) => props.theme.breakpoints.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xlarge};
  }
`;

const Description = styled.p`
  margin-top: 0;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray};
`;

const ContactInfo = styled.div`
  margin-top: ${(props) => props.theme.spacings.large};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.large};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.medium};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark};

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.medium};
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.radius};
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark};
  outline: none;
  &:focus {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: ${(props) => props.theme.spacings.small};
  border-radius: ${(props) => props.theme.borders.radius};
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.dark};
  outline: none;
  resize: vertical;

  &:focus {
    border-color: ${(props) => props.theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  padding: ${(props) => props.theme.spacings.medium};
  border-radius: ${(props) => props.theme.borders.radius};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accentDark};
  }
`;

const MapWrapper = styled.div`
  margin-top: ${(props) => props.theme.spacings.xlarge};
  border-radius: ${(props) => props.theme.borders.radius};
  overflow: hidden;
`;

const ContactPage = () => {
  const calendlyConfig = {
    small: true,
    url: 'https://calendly.com/ben-hayward-jhwm/30min',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    // Send data to the API route
    const response = await fetch('/api/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      setLoading(false);
      setError('Complete - message sent! We will be in touch soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      setError('Error sending message - please try again.');
      setLoading(false);
    }
  };

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Section>
      <Misc.CalendlyEmbed config={calendlyConfig} />
      <Heading>Contact Us</Heading>
      <Container>
        <LeftColumn>
          <Description>
            We're here to help. If you have any questions or would like to
            schedule a consultation, please fill out the form or reach out to us
            directly.
          </Description>
          <ContactInfo>
            <Link href='mailto:support@acaciawealth.co.uk'>
              <InfoItem>
                <EnvelopeIcon />
                <span>support@acaciawealth.co.uk</span>
              </InfoItem>
            </Link>
            <InfoItem>
              <MapPinIcon />
              <span>
                Acacia Wealth, 7 Bell Yard, London, WC2A 2JR, London, UK
              </span>
            </InfoItem>
          </ContactInfo>
        </LeftColumn>
        <RightColumn>
          {error && <p>{error}</p>}
          <Form>
            <Input
              type='text'
              placeholder='Your Name'
              required
              value={formData.name}
              name='name'
              onChange={handleChange}
            />
            <Input
              type='email'
              placeholder='Your Email'
              required
              value={formData.email}
              name='email'
              onChange={handleChange}
            />

            <Input
              type='text'
              placeholder='Subject'
              required
              value={formData.phone}
              name='phone'
              onChange={handleChange}
            />
            <TextArea
              placeholder='Your Message'
              rows='6'
              required
              value={formData.message}
              name='message'
              onChange={handleChange}
            ></TextArea>
            <SubmitButton
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default ContactPage;
