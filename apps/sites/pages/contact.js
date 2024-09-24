import React from 'react';
import styled from 'styled-components';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Misc } from 'shared-components';

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacings.xlarge}
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
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
`;

const Description = styled.p`
  margin-top: ${(props) => props.theme.spacings.medium};
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
    url: 'https://calendly.com/ben-hayward-jhwm/30min',
  };
  return (
    <Section>
      <Container>
        <LeftColumn>
          <Heading>Contact Us</Heading>
          <Description>
            We're here to help. If you have any questions or would like to
            schedule a consultation, please fill out the form below or reach out
            to us directly.
          </Description>
          <ContactInfo>
            <InfoItem>
              <EnvelopeIcon />
              <span>info@acaciawealth.co.uk</span>
            </InfoItem>
            <InfoItem>
              <PhoneIcon />
              <span>+44 1234 567890</span>
            </InfoItem>
            <InfoItem>
              <MapPinIcon />
              <span>
                Acacia Wealth, 7 Bell Yard, London, WC2A 2JR, London, UK
              </span>
            </InfoItem>
          </ContactInfo>
        </LeftColumn>
        <RightColumn>
          <Form>
            <Input type='text' placeholder='Your Name' required />
            <Input type='email' placeholder='Your Email' required />
            <Input type='text' placeholder='Subject' required />
            <TextArea placeholder='Your Message' rows='6' required></TextArea>
            <SubmitButton type='submit'>Send Message</SubmitButton>
          </Form>
        </RightColumn>
      </Container>
      <Misc.CalendlyEmbed config={calendlyConfig} />
      <MapWrapper>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.6087390102826!2d-0.12764748402421216!3d51.507350479635455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6b7f5e2a2b%3A0x4667dc94e1ab1a1a!2s123%20Finance%20St%2C%20London%20WC2N%205DU%2C%20UK!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus'
          width='100%'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </MapWrapper>
    </Section>
  );
};

export default ContactPage;
